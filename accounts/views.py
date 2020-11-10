from django.shortcuts import render, redirect
from rest_framework import generics, status, views, permissions
from .serializers import UserSerializer,RegisterGuideSerializer,RegisterTouristSerializer,LogoutSerializer,LoginSerializer,ResetPasswordEmailRequestSerializer,SetNewPasswordSerializer
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from .models import User
from .utils import Util
from django.core.mail import send_mail
from rest_framework.authtoken.models import Token
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from django.conf import settings
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework import mixins
from rest_framework.parsers import MultiPartParser, FormParser

FRONTEND_URL = settings.CORS_ORIGIN_WHITELIST[0]

class RegisterGuideView(APIView):

    def post(self,request):
        serializer = RegisterGuideSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            guide,user = serializer.create(validated_data=request.data)
            user.is_guide = True
            user.save()
            
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = Token.objects.get(user=user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'confirm-email', kwargs={'uidb64': uidb64,'token':token}
                )
            absurl = 'http://localhost:8000' + relativeLink
            
            send_mail('GuideMe: Confirm you email','Hi'+user.username+',\nUse this link to activate your account:\n\n'+absurl,'projectguy.temp@gmail.com',[user.email,])
    
            serializer.data['token'] = token
    
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)




class RegisterTouristView(generics.GenericAPIView):

    
    def post(self,request):
        serializer = RegisterTouristSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True):
            tourist,user = serializer.create(validated_data = request.data)
            user.is_tourst = True
            user.save()

            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = Token.objects.get(user=user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'confirm-email', kwargs={'uidb64': uidb64,'token':token}
                )
            absurl = 'http://localhost:8000' + relativeLink
            
            send_mail('GuideMe: Confirm you email','Hi'+user.username+',\nUse this link to activate your account:\n\n'+absurl,'projectguy.temp@gmail.com',[user.email,])

            serializer.data['token'] = token

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)


def VerifyEmail(request,uidb64,token):
    u_id = smart_str(urlsafe_base64_decode(uidb64))
    user = User.objects.get(id=u_id)
    if user:
        if not user.email_confirm:
            user.email_confirm = True
            user.save()
            email_body = 'Hi'+user.username+',\nYour email was successfully verified. Thanks for registering.'
            send_mail('Welcome to GuidMe',email_body,'projectguy.temp@gmail.com',[user.email,])
            return redirect(FRONTEND_URL+'/login/')
    else:
        return HttpResponse('Token authentication failed')
    return redirect(FRONTEND_URL+'/')


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer
    template_name = 'emailConfirmed.html'

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if not User.objects.filter(email=email).exists():
             return Response({'email': 'please give registered email'}, status=status.HTTP_400_BAD_)


        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token}
                )
            absurl = FRONTEND_URL + relativeLink
            
            send_mail('GuideMe: Reset you password','Hi'+user.username+',\nUse this link to reset password:\n\n'+absurl,'projectguy.temp@gmail.com',[user.email,])
        
            return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(generics.GenericAPIView):

    def get(self,request,uidb64,token):
        try:
            id=smart_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user,token):
                return Response({'error':'Token is not valid , please request a new one'},status=status.HTTP_401_UNAUTHORISED)
            return Response({'success':True,'message':'Credentials Valid','uidb64':uidb64,'token':token},status=status.HTTP_200_OK)

            

        except DjangoUnicodeDecodeError as identifier:
            if not PasswordResetTokenGenerator().check_token(user,token):
                return Response({'error':'Token is not valid , please request a new one'},status=status.HTTP_401_UNAUTHORISED)



class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)




class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)

class CurrentUserView(views.APIView):
    def get(self,request,username):
        try:
            data = User.objects.get(username=username)
            if data.is_guide:
                if request.method=='GET':
                    serializer = UserSerializer(data)
                    return Response(serializer.data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)


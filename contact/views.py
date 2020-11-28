from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .serializers import ContactSerializer
from django.core.mail import EmailMessage


class ContactView(GenericAPIView):
    serializer_class = ContactSerializer

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = serializer.data
        return Response(data)

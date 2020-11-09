from django.urls import path
from .views import CurrentUserView, RegisterGuideView, VerifyEmail, RegisterTouristView, LogoutAPIView,SetNewPasswordAPIView,LoginAPIView,PasswordTokenCheckAPI,RequestPasswordResetEmail

urlpatterns = [
    path('registerGuide/', RegisterGuideView.as_view(), name="registerGuide"),
    path('registerTourist/', RegisterTouristView.as_view(), name="registerTourist"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('user/<str:username>/',CurrentUserView.as_view(),name="user"),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(), name="request-reset-email"),
    path('confirm-email/<uidb64>/<token>/',VerifyEmail,name="confirm-email"),
    path('password-reset/<uidb64>/<token>/',PasswordTokenCheckAPI.as_view(),name="password-reset-confirm"),
    path('password-reset-complete/', SetNewPasswordAPIView.as_view(),name='password-reset-complete')
]
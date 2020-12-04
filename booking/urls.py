from .views import BookingsList,BookingsDone, save_stripe_info
from django.urls import path

urlpatterns = [
    path('getbooking/',BookingsDone.as_view(),name="BookingsMaking"),
    path('<str:place>/<slug:date>/', BookingsList.as_view(), name="BookingDetail"),
    path('save-stripe-info/', save_stripe_info),
]


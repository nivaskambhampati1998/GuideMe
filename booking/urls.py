from .views import BookingsList,BookingsDone
from django.urls import path

urlpatterns = [
    path('getbooking/',BookingsDone.as_view(),name="MakeBooking"),
    path('<str:place>/<slug:date>/', BookingsList.as_view(), name="BookingDetail"),
]


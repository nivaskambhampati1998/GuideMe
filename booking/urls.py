from .views import BookingsList
from django.urls import path

urlpatterns = [
    
    path('<str:place>/<slug:date>/', BookingsList.as_view(), name="BookingDetail"),
]


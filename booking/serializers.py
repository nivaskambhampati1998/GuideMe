from rest_framework import serializers
from booking.models import Bookings
from accounts.models import Guide 

class BookingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookings
        fields = ('guidename','username','booking_date','booking_status')
    

class BookingsSerializerGuide(serializers.ModelSerializer):
    class Meta:
        model = Guide
        fields = ('user','guidename','rating','amount')

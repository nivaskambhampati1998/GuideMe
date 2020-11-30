from rest_framework import serializers
from booking.models import Bookings
from accounts.models import Guide 

class BookingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookings
        fields = ('guidename','username','booking_date','booking_status')
    def to_representation(self, instance):
        rep = super(BookingsSerializer, self).to_representation(instance)
        rep['guidename'] = instance.guidename.guidename
        return rep

class BookingsSerializerGuide(serializers.ModelSerializer):
    class Meta:
        model = Guide
        fields = ('user','guidename','rating')

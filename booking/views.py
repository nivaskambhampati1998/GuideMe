from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from booking.models import Bookings
from accounts.models import Guide
from .serializers import BookingsSerializerGuide,BookingsSerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from accounts.models import Guide
from rest_framework.generics import ListCreateAPIView

class BookingsList(APIView):
    def get(self, request,**kwargs):
        try:
            data1 = Guide.objects.filter()
            data = []
            placename=self.kwargs.get('place')
            for i in data1:
                if placename in i.places_known:
                    data.append(i)
            tempdata= Bookings.objects.filter(booking_date=self.kwargs.get('date'))
            newdata= []
            for i in data:
                count=0
                for j in tempdata:
                    if j.guidename==i.guidename:
                        count+=1
                if count==0:
                    newdata.append(i)
            serializer = BookingsSerializerGuide(newdata, many=True)
            return Response(data=serializer.data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    # def post(self, request, *args, **kwargs):
    #     serializer = BookingsSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         print('error', serializer.errors)
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BookingsDone(ListCreateAPIView):
    queryset=Bookings.objects.all()
    serializer_class=BookingsSerializer

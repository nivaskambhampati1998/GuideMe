from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from monuments.models import Monument, City
from .serializers import MonumentSerializer, CitySerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView


# Create your views here.
class MonumentList(APIView):
    def get(self, request):
        try:
            data = Monument.objects.all()
            serializer = MonumentSerializer(data, many=True)
            return Response(data=serializer.data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        Monument_data = JSONParser().parse(request)
        serializer = MonumentSerializer(data=Monument_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MonumentDetail(APIView):
    def get(self, request, slug):
        try:
            hdata = Monument.objects.get(monument_id=slug)
            serializer = MonumentSerializer(hdata)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, slug):
        hdata = Monument.objects.get(monument_id=slug)
        serializer = MonumentSerializer(hdata, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, slug):
        hdata = Monument.objects.get(monument_id=slug)
        delresult = hdata.delete()
        data = {'message': 'error during deletion'}
        if delresult[0] == 1:
            data = {'message': 'successfully deleted'}
        return Response(data)


class CityList(APIView):
    def get(self, request):
        try:
            data = City.objects.all()
            serializer = CitySerializer(data, many=True)
            data = serializer.data
            for x in range(len(data)):
                data[x]['city_id'] = City.objects.get(city_name=data[x]['city_name']).city_id
            return Response(data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        city_data = JSONParser().parse(request)
        serializer = CitySerializer(data=city_data)
        if serializer.is_valid():
            serializer.save()
            data = serializer.data
            data['city_id'] = City.objects.get(city_name=data['city_name']).city_id
            return Response(data)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class CityDetail(APIView):
    def get(self, request, slug):
        try:
            hdata = City.objects.get(city_id=slug)
            serializer = CitySerializer(hdata)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, slug):
        hdata = City.objects.get(city_id=slug)
        serializer = CitySerializer(hdata, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, slug):
        hdata = City.objects.get(city_id=slug)
        delresult = hdata.delete()
        data = {'message': 'Error during deletion'}
        if delresult[0] == 1:
            data = {'message': 'Successfully deleted'}
        return Response(data)
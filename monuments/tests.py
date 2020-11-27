from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from accounts.models import User, Guide, Tourist
from monuments.models import City, Monument
from rest_framework.reverse import reverse as api_reverse
from rest_framework import status
from rest_framework_jwt.settings import api_settings
from rest_framework.permissions import IsAuthenticated

class CityModelsTest(APITestCase):
    def setUp(self):
        self.city_id=1
        self.city_name="SriCity"
        self.state="AP"
        self.country="India"  
        self.pincode="5200111"  
        
        self.user = User.objects.create_user(
            city_id=self.city_id,
            city_name=self.city_name,
            state=self.state,
            country=self.country,
            pincode=self.pincode,
        )
        self.city.save()
class MonumentsModelsTest(APITestCase):
    def setUp(self):
        self.monument_id=1
        self.monument_name="XYZ"
        self.city="sricity"
        self.basicinfo="abchd"
        self.description="abcdh"
        self.image="img.png"
        
        self.user = User.objects.create_user(
            monument_id=self.monument_id,
            monument_name=self.monument_name,
            city=self.city,
            basicinfo=self.basicinfo,
            description=self.description,
            image=self.image,
        )
        self.monument.save()

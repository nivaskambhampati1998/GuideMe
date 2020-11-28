from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from accounts.models import User, Guide, Tourist
from monuments.models import City, Monument
from blog.models import Post, Review
from posting.models import BlogPost
from rest_framework.reverse import reverse as api_reverse
from rest_framework import status
from rest_framework_jwt.settings import api_settings
from rest_framework.permissions import IsAuthenticated

class PostModelsTest(APITestCase):
    def setUp(self):
        self.place="US"
        self.details="XYZ"
        self.review="Good"
        self.id=1  
        self.author="Ranga" 
        self.objects="ItemA"
        self.postobjects="XYZ" 
        
        self.post = Post.objects.create_user(
            place=self.place,
            details=self.details,
            review=self.review,
            id=self.id,
            author=self.author,
            objects=self.objects,
            postobjects=self.postobjects
        )
        self.post.save()

class ReviewModelsTest(APITestCase):
    def setUp(self):
        self.guide="guideme"
        self.rating=5
        self.review="Good"
        self.id=1  
        self.author="Ranga" 
        self.objects="ItemA"
        self.reviewobjects="XYZ" 
        
        self.review = Review.objects.create_user(
            guide=self.guide,
            rating=self.rating,
            review=self.review,
            id=self.id,
            author=self.author,
            objects=self.objects,
            reviewobjects=self.reviewobjects
        )
        self.review.save()

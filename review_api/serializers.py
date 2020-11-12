from rest_framework import serializers
from blog.models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'guide_id', 'author', 'review', 'rating')
        model = Review
        
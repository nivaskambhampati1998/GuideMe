from rest_framework import serializers
from blog.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'place', 'author', 'details', 'review')
        model = Post
        
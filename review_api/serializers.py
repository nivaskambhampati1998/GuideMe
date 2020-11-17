from rest_framework import serializers
from blog.models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','guide', 'author', 'review', 'rating')
        model = Review
    def to_representation(self, instance):
        rep = super(ReviewSerializer, self).to_representation(instance)
        rep['guide'] = instance.guide.guidename
        rep['author'] = instance.author.user.username
        return rep    
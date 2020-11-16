from django.db import models
from accounts.models import User, Guide, Tourist
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


# reviews by users on places
class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    place = models.CharField(max_length=250)
    details = models.TextField(null=True)
    review = models.TextField()
    id = models.IntegerField(unique=True, primary_key=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_posts')

    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    def __str__(self):
        return self.place


# review by users on guides
class Review(models.Model):
    class ReviewObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    guide = models.ForeignKey(Guide, on_delete=models.CASCADE)
    rating = models.IntegerField(
        default=3,
        validators=[MaxValueValidator(5), MinValueValidator(1)]
    )
    review = models.TextField()
    id = models.IntegerField(unique=True, primary_key=True)
    author = models.ForeignKey(Tourist, on_delete=models.CASCADE, related_name='blog_reviews')

    objects = models.Manager()  # default manager
    reviewobjects = ReviewObjects()  # custom manager

from django.db import models

# Create your models here.
class City(models.Model):
    city_id = models.AutoField(primary_key = True)
    city_name = models.CharField(max_length = 50)
    state = models.CharField(max_length = 50)
    country = models.CharField(max_length = 50)
    pincode = models.CharField(max_length = 50)
    
    def __str__(self):
        return self.city_name

class Monument(models.Model):
    monument_id = models.AutoField(primary_key = True)
    monument_name = models.CharField(max_length = 50)
    city = models.ForeignKey(City,on_delete = models.CASCADE)
    basicinfo = models.CharField(max_length = 100)
    description = models.TextField()

    def __str__(self):
        return self.monument_name


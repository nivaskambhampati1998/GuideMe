from django.db import models
from accounts.models import Guide
from accounts.models import Tourist

Status_Choices =( 
    ("1", "Payment Pending"),
    ("2", "Payment Done"),
) 
class Bookings(models.Model):
    booking_id = models.AutoField(primary_key = True)
    guidename = models.ForeignKey(Guide,on_delete=models.CASCADE)
    username = models.ForeignKey(Tourist,on_delete=models.CASCADE)
    booking_date = models.DateField()
    booking_status = models.CharField(max_length=1,choices=Status_Choices)

    def __str__(self):
        return self.guidename.guidename+'_'+self.username.touristname
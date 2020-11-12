from django.urls import path
from .views import ReviewList, ReviewDetail

app_name = 'review_api'

urlpatterns = [
    path('<int:pk>/', ReviewDetail.as_view(), name='detailcreate'),
    path('', ReviewList.as_view(), name='listcreate'),
]
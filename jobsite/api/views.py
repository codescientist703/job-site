from django.shortcuts import render
from rest_framework import generics
from .models import Category
from .serializers import CategorySerializer
# Create your views here.


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer

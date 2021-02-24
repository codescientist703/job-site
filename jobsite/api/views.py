from django.shortcuts import render
from rest_framework import generics, filters
from .models import Category, Location, JobTitle, Job, Interview
from .serializers import (
    CategorySerializer, JobTitleSerializer,
    LocationSerializer, JobListSerializer, JobSerializer, InterviewListSerializer, InterviewSerializer)
from django_filters.rest_framework import DjangoFilterBackend
from .filters import JobListFilter


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer
    pagination_class = None


class JobTitleView(generics.ListAPIView):
    queryset = JobTitle.objects.all().order_by('name')
    serializer_class = JobTitleSerializer
    pagination_class = None


class LocationView(generics.ListAPIView):
    queryset = Location.objects.all().order_by('name')
    serializer_class = LocationSerializer
    pagination_class = None


class JobListView(generics.ListAPIView):
    serializer_class = JobListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['location__name',
                     'company', 'jobtitle__name']
    filterset_class = JobListFilter

    def get_queryset(self):
        category = self.kwargs.get('category')
        jobs = Job.objects.filter(category__name=category)
        return jobs


class JobView(generics.RetrieveAPIView):
    serializer_class = JobSerializer
    pagination_class = None
    queryset = Job.objects.all()
    lookup_field = 'slug'


class InterviewListView(generics.ListAPIView):
    serializer_class = InterviewListSerializer
    queryset = Interview.objects.filter(draft=False)


class InterviewView(generics.RetrieveAPIView):
    serializer_class = InterviewSerializer
    pagination_class = None
    queryset = Interview.objects.all()
    lookup_field = 'slug'

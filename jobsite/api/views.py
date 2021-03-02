from django.shortcuts import render
from rest_framework import generics, filters
from .models import Category, Location, JobTitle, Job, Interview, Company
from .serializers import (
    CategorySerializer, JobTitleSerializer,
    LocationSerializer, JobListSerializer, JobSerializer, InterviewListSerializer, InterviewSerializer,
    CompanySerializer)
from django_filters.rest_framework import DjangoFilterBackend
from .filters import JobListFilter
from django.shortcuts import get_object_or_404
from jobsite import settings


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer
    pagination_class = None


class JobTitleView(generics.ListAPIView):
    queryset = JobTitle.objects.all().order_by('name')
    serializer_class = JobTitleSerializer
    pagination_class = None
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class LocationView(generics.ListAPIView):
    queryset = Location.objects.all().order_by('name')
    serializer_class = LocationSerializer
    pagination_class = None
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class CompanyView(generics.ListAPIView):
    queryset = Company.objects.all().order_by('name')
    serializer_class = CompanySerializer
    pagination_class = None
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class JobListView(generics.ListAPIView):
    serializer_class = JobListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['location__name',
                     'company__name', 'jobtitle__name']
    filterset_class = JobListFilter

    def get_queryset(self):
        category = self.kwargs.get('category')
        categoryObj = get_object_or_404(Category, name=category)
        jobs = Job.objects.filter(category=categoryObj)
        return jobs

    def list(self, request, *args, **kwargs):
        response = super().list(request, args, kwargs)
        # Add data to response.data Example for your object:
        response.data['page_size'] = settings.REST_FRAMEWORK['PAGE_SIZE']
        return response


class JobView(generics.RetrieveAPIView):
    serializer_class = JobSerializer
    pagination_class = None
    queryset = Job.objects.all()
    lookup_field = 'slug'


class InterviewListView(generics.ListAPIView):
    serializer_class = InterviewListSerializer
    queryset = Interview.objects.filter(draft=False)

    def list(self, request, *args, **kwargs):
        response = super().list(request, args, kwargs)
        # Add data to response.data Example for your object:
        response.data['page_size'] = settings.REST_FRAMEWORK['PAGE_SIZE']
        return response


class InterviewView(generics.RetrieveAPIView):
    serializer_class = InterviewSerializer
    pagination_class = None
    queryset = Interview.objects.all()
    lookup_field = 'slug'

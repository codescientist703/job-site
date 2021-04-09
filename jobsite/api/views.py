from django.shortcuts import render
from rest_framework import generics, filters
from .models import Category, Location, JobTitle, Job, Interview, Company
from .serializers import (
    CategorySerializer, JobTitleSerializer,
    LocationSerializer, JobListSerializer, JobSerializer, InterviewListSerializer, InterviewSerializer,
    CompanySerializer, InterviewFormSerializer)
from django_filters.rest_framework import DjangoFilterBackend
from .filters import JobListFilter
from django.shortcuts import get_object_or_404
from jobsite import settings
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer
    pagination_class = None


class JobTitleView(generics.ListAPIView):
    queryset = JobTitle.objects.all()
    serializer_class = JobTitleSerializer
    pagination_class = None
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class LocationView(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    pagination_class = None
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class CompanyView(generics.ListAPIView):
    queryset = Company.objects.all()
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
        self.categoryObj = get_object_or_404(Category, name=category)
        if category == 'all-jobs':
            jobs = Job.objects.exclude(category__name='internships')
        elif category == 'private-jobs':
            li = ['internships', 'government-jobs']
            jobs = Job.objects.exclude(category__name__in=li)
        else:
            jobs = Job.objects.filter(category=self.categoryObj)
        return jobs

    def list(self, request, *args, **kwargs):
        response = super().list(request, args, kwargs)
        # Add data to response.data Example for your object:
        response.data['page_size'] = settings.REST_FRAMEWORK['PAGE_SIZE']
        response.data['description'] = self.categoryObj.description
        response.data['title'] = self.categoryObj.title
        response.data['display'] = self.categoryObj.display

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
        categoryObj = get_object_or_404(Category, name='interview-experiences')
        response.data['page_size'] = settings.REST_FRAMEWORK['PAGE_SIZE']
        response.data['title'] = categoryObj.title
        response.data['description'] = categoryObj.description
        response.data['display'] = categoryObj.display
        return response


class InterviewView(generics.RetrieveAPIView):
    serializer_class = InterviewSerializer
    pagination_class = None
    queryset = Interview.objects.all()
    lookup_field = 'slug'


class InterviewFormView(generics.CreateAPIView):
    serializer_class = InterviewFormSerializer
    queryset = Interview.objects.all()
    permission_classes = [permissions.AllowAny]


class MyJobsView(APIView):
    def post(self, request, format=None):
        print(request.data.get("myjobs"))
        data = Job.objects.filter(slug__in=request.data.get("myjobs"))
        serializer = JobListSerializer(data, many=True)
        return Response(data=serializer.data)

from rest_framework import serializers

from .models import Category, JobTitle, Job, Interview, Location


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'description']


class JobTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobTitle
        fields = ['name']


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['name']


class JobListSerializer(serializers.ModelSerializer):
    jobtitle = serializers.StringRelatedField()
    location = serializers.StringRelatedField()

    class Meta:
        model = Job
        fields = ['jobtitle', 'location', 'date',
                  'salary', 'experience', 'company', 'description', 'slug']


class JobSerializer(serializers.ModelSerializer):
    jobtitle = serializers.StringRelatedField()
    location = serializers.StringRelatedField()
    category = serializers.StringRelatedField()

    class Meta:
        model = Job
        fields = ['jobtitle', 'location', 'date',
                  'salary', 'experience', 'company', 'content', 'category']


class InterviewListSerializer(serializers.ModelSerializer):
    jobtitle = serializers.StringRelatedField()

    class Meta:
        model = Interview
        fields = ['name', 'company', 'jobtitle', 'description', 'slug']


class InterviewSerializer(serializers.ModelSerializer):
    jobtitle = serializers.StringRelatedField()

    class Meta:
        model = Interview
        fields = ['name', 'company', 'jobtitle', 'content']

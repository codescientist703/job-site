import django_filters
from .models import Job


class JobListFilter(django_filters.FilterSet):
    location = django_filters.CharFilter(field_name='location__name',
                                         lookup_expr='iexact')
    jobtitle = django_filters.CharFilter(field_name='jobtitle__name',
                                         lookup_expr='icontains')
    company = django_filters.CharFilter(
        field_name='company__name', lookup_expr='icontains')
    experience = django_filters.CharFilter(
        field_name='experience', lookup_expr='gte')
    salary = django_filters.CharFilter(
        field_name='salary', lookup_expr='gte')

    class Meta:
        model = Job
        exclude = ['content', 'id']

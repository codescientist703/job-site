import django_filters
from .models import Job


class JobListFilter(django_filters.FilterSet):
    location = django_filters.CharFilter(field_name='location__name',
                                         lookup_expr='iexact')
    jobtitle = django_filters.CharFilter(field_name='jobtitle__name',
                                         lookup_expr='icontains')

    class Meta:
        model = Job
        fields = ['salary', 'experience', 'company']

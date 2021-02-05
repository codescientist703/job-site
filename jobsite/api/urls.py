from django.urls import include, path
from rest_framework.urlpatterns import format_suffix_patterns

from api import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/category/', views.CategoryView.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)

from django.urls import include, path

from api import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('category/', views.CategoryView.as_view()),
    path('jobtitle/', views.JobTitleView.as_view()),
    path('location/', views.LocationView.as_view()),
    path('company/', views.CompanyView.as_view()),
    path('joblist/<str:category>/', views.JobListView.as_view()),
    path('job/<str:slug>/', views.JobView.as_view()),
    path('interviewlist/', views.InterviewListView.as_view()),
    path('interview/create/', views.InterviewFormView.as_view()),
    path('interview/<str:slug>/', views.InterviewView.as_view()),
    path('myjobs/', views.MyJobsView.as_view()),

]

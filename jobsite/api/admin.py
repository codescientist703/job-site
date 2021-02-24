from django.contrib import admin
from .models import Category, JobTitle, Job, Location, Interview
# Register your models here.


class CategoryAdmin(admin.ModelAdmin):
    search_fields = ['name']


class JobAdmin(admin.ModelAdmin):
    list_display = ('jobtitle', 'company', 'location')
    list_filter = (
        ('date', admin.DateFieldListFilter),
        ('category__name', admin.AllValuesFieldListFilter),
    )


class InterviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'jobtitle', 'company')
    list_filter = (
        ('draft', admin.BooleanFieldListFilter),
    )


admin.site.register(Category, CategoryAdmin)
admin.site.register(JobTitle, CategoryAdmin)
admin.site.register(Location, CategoryAdmin)
admin.site.register(Job, JobAdmin)
admin.site.register(Interview, InterviewAdmin)

from django.db import models

from ckeditor.fields import RichTextField
# Create your models here.


class Category(models.Model):
    name = models.TextField(max_length=300)
    description = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class JobTitle(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Job(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, blank=True, null=True)
    jobtitle = models.ForeignKey(
        JobTitle, on_delete=models.SET_NULL, blank=True, null=True)
    location = models.ForeignKey(
        Location, on_delete=models.SET_NULL, blank=True, null=True)
    date = models.DateField()
    salary = models.IntegerField(default=-1)
    experience = models.IntegerField()
    company = models.CharField(max_length=200)
    content = RichTextField(blank=True, null=True)
    description = models.TextField(max_length=200, blank=True, null=True)

    class Meta:
        ordering = ['-date']


class Interview(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    company = models.CharField(max_length=200)
    jobtitle = models.ForeignKey(
        JobTitle, on_delete=models.SET_NULL, blank=True, null=True)
    content = RichTextField(blank=True, null=True)
    draft = models.BooleanField(default=True)
    description = models.TextField(max_length=200, blank=True, null=True)

    class Meta:
        ordering = ['draft']

from django.db import models

from ckeditor.fields import RichTextField
# Create your models here.
from autoslug import AutoSlugField


class Category(models.Model):
    name = models.TextField(max_length=300)
    title = models.TextField(max_length=300, null=True, blank=True)
    content = RichTextField(null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class JobTitle(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Company(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Companies'


class Job(models.Model):
    title = models.TextField(max_length=255, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, blank=True, null=True)
    jobtitle = models.ForeignKey(
        JobTitle, on_delete=models.SET_NULL, blank=True, null=True)
    location = models.ForeignKey(
        Location, on_delete=models.SET_NULL, blank=True, null=True)
    date = models.DateField()
    salary = models.IntegerField(default=0)
    experience = models.IntegerField(default=0)
    company = models.ForeignKey(
        Company, on_delete=models.SET_NULL, blank=True, null=True)
    content = RichTextField(blank=True, null=True)
    description = models.TextField(max_length=200, blank=True, null=True)
    slug = AutoSlugField(unique=True, populate_from='title')
    apply_link = models.URLField(max_length=255)
    part_time = models.BooleanField(default=False)

    class Meta:
        ordering = ['-date', '-salary', 'experience']

    def __str__(self):
        return self.title

    def save(self):
        jobType = 'job'
        if self.category.name == 'internships':
            jobType = 'internship'

        self.title = f'{self.jobtitle.name} {jobType} at {self.company.name}'
        super().save(self)


class Interview(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    company = models.CharField(max_length=200)
    jobtitle = models.CharField(max_length=254)
    title = models.CharField(max_length=255, null=True, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, blank=True, null=True, related_name='interviews')
    content = RichTextField()
    draft = models.BooleanField(default=True)
    description = models.TextField(max_length=200, blank=True, null=True)
    slug = models.SlugField(unique=True, max_length=300,
                            null=True, blank=True)

    class Meta:
        ordering = ['draft']

    def __str__(self):
        return f'{self.jobtitle} at {self.company}'

from .settings import *

DEBUG = False
ALLOWED_HOSTS = ['159.89.167.226']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'jobsitedb',
        'USER': 'admin1',
        'PASSWORD': 'Allthebest@18',
        'HOST': 'localhost',
        'PORT': '',
    }
}

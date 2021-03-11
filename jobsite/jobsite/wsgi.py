"""
WSGI config for jobsite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

from django.core.wsgi import get_wsgi_application
import os
from dotenv import load_dotenv

load_dotenv()
settings_module = "jobsite.production" if os.getenv(
    "DJANGO_DEBUG") == 'False' else 'jobsite.settings'


os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_wsgi_application()

# Generated by Django 3.1.7 on 2021-03-02 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_auto_20210228_0721'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='apply_link',
            field=models.URLField(max_length=255, null=True),
        ),
    ]
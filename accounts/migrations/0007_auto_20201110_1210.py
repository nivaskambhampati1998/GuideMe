# Generated by Django 2.2.10 on 2020-11-10 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20201107_0308'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_guide',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='is_tourst',
            field=models.BooleanField(default=False),
        ),
    ]
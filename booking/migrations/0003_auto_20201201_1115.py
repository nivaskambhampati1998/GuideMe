# Generated by Django 2.2.10 on 2020-12-01 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0002_auto_20201130_1149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookings',
            name='guidename',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='bookings',
            name='username',
            field=models.CharField(max_length=50),
        ),
    ]

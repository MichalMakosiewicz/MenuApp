from django.db import models
import os
from uuid import uuid4
from django.utils.deconstruct import deconstructible


@deconstructible
class PathAndRename(object):

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        filename = '{}.{}'.format(uuid4().hex, ext)
        return os.path.join(self.path, filename)


class Dish(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    price = models.IntegerField()
    preparation_time = models.IntegerField()
    add_date = models.DateField()
    update_date = models.DateField()
    photo = models.ImageField(upload_to=PathAndRename("static"), default="Empty")
    is_vegan = models.BooleanField()

    def __str__(self):
        return self.name


class MenuCard(models.Model):
    title = models.CharField(max_length=50)
    create_date = models.DateField()
    update_date = models.DateField()
    dish = models.ManyToManyField(Dish)

    def __str__(self):
        return self.title

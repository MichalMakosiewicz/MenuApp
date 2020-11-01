from menu.models import Dish, MenuCard
from rest_framework import serializers


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = [
            "id",
            "name",
            "description",
            "price",
            "preparation_time",
            "add_date",
            "update_date",
            "photo",
            "is_vegan"
        ]


class MenuCardSerialzer(serializers.ModelSerializer):
    class Meta:
        model=MenuCard
        fields=[
            "id",
            "title",
            "create_date",
            "update_date",
            "dish"
        ]

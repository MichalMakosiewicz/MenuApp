from .models import Dish, MenuCard
from menu.serializers import DishSerializer, MenuCardSerialzer
from rest_framework import viewsets


class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer


class MenuCardViewSet(viewsets.ModelViewSet):
    queryset = MenuCard.objects.all()
    serializer_class = MenuCardSerialzer

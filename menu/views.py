from django.shortcuts import render
from .models import Dish, MenuCard
from menu.serializers import DishSerializer, MenuCardSerialzer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from django.views.generic.edit import UpdateView
from annoying.functions import get_object_or_None


class DishViewSet(GenericAPIView):
    def get(self, request, dish_id=None):
        if dish_id is None:
            model = Dish.objects.all()
            serializer_class = DishSerializer(
                model, many=True, context={'request': request})
            return Response(serializer_class.data, status=status.HTTP_200_OK)
        else:
            model = get_object_or_None(Dish, pk=int(dish_id))
            if model is None:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer_class = DishSerializer(
                model, many=False, context={'request': request})
            return Response(serializer_class.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = DishSerializer(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, dish_id):
        serializer = DishSerializer(data=request.data)
        dish = get_object_or_None(Dish, pk=int(dish_id))
        if serializer.is_valid() and dish is not None:
            validated_data = serializer.validated_data
            dish.name = validated_data.get('name')
            dish.description = validated_data.get('description')
            dish.price = validated_data.get('price')
            dish.preparation_time = validated_data.get('preparation_time')
            dish.add_date = validated_data.get('add_date')
            dish.update_date = validated_data.get('update_date')
            dish.is_vegan = validated_data.get('is_vegan')
            dish.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, dish_id):
        dish = get_object_or_None(Dish, pk=int(dish_id))
        if dish is not None:
            dish.delete()
            return Response(status=status.HTTP_200_OK)
        else :
            return Response(status=status.HTTP_404_NOT_FOUND)


class MenuCardViewSet(GenericAPIView):
    def get(self, request, card_id=None):
        if card_id is None:
            model = MenuCard.objects.all()
            serializer = MenuCardSerialzer(
                model, many=True, context={'request': request})
            return Response(serializer.data)
        else:
            model = get_object_or_None(MenuCard, pk=int(card_id))
            serializer = MenuCardSerialzer(
                model, many=False, context={'request': request})
            return Response(serializer.data)

    def post(self, request):
        serializer = MenuCardSerialzer(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, card_id):
        serializer = MenuCardSerialzer(data=request.data, context={'request': request})
        menu_card = get_object_or_None(MenuCard, pk=int(card_id))
        if serializer.is_valid() and menu_card is not None:
            validated_data = serializer.validated_data
            menu_card.title = validated_data.get('title')
            menu_card.create_date = validated_data.get('create_date')
            menu_card.update_date = validated_data.get('update_date')
            dish = validated_data.get('dish')
            dishes = Dish.objects.filter(name__in=dish)
            menu_card.dish.set(dishes)
            menu_card.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, card_id=None):
        menu = get_object_or_None(MenuCard, pk=int(card_id))
        if menu is not None:
            menu.delete()
            return Response(status=status.HTTP_200_OK)
        else :
            return Response(status=status.HTTP_404_NOT_FOUND)

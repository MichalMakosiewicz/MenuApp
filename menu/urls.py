from django.urls import path
from . import views

urlpatterns = [
    path('cards/', views.MenuCardViewSet.as_view(), name='cards'),
    path('cards/<int:card_id>', views.MenuCardViewSet.as_view(), name='cards'),
    path('dishes/', views.DishViewSet.as_view(), name='dish'),
    path('dishes/<int:dish_id>', views.DishViewSet.as_view(), name='dish')
]
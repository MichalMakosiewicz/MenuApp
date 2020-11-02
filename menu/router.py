from menu.views import MenuCardViewSet, DishViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('cards', MenuCardViewSet)
router.register('dishes', DishViewSet)

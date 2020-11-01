from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Dish, MenuCard

admin.site.site_header = "MenuApp Admin Panel"


class DishAdmin(admin.ModelAdmin):
    list_display = ('name', 'update_date', 'add_date', 'is_vegan')
    list_filter = ('add_date', 'update_date')


class MenuAdmin(admin.ModelAdmin):
    list_display = ('title', 'update_date', 'create_date')
    list_filter = ('update_date', 'update_date')

admin.site.unregister(Group)
admin.site.register(Dish, DishAdmin)
admin.site.register(MenuCard, MenuAdmin)
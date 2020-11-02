from rest_framework import status
from rest_framework.test import APITestCase


class MenuCardViewSetTestCase(APITestCase):

    def test_get_menu_cards(self):
        response = self.client.get("/menu/api/cards/", format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class DishViewSetTestCase(APITestCase):

    def test_get_dishes(self):
        response = self.client.get("/menu/api/dishes/", format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


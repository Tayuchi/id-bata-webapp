from django.urls import path
from .views import TemplateView, RoomListCreateAPIView, MessageListCreateAPIView

urlpatterns = [
    path("", TemplateView.as_view(), name="index"),
    path('rooms/', RoomListCreateAPIView.as_view(), name='room-list-create'),
    path('messages/', MessageListCreateAPIView.as_view(), name='message-list-create'),
]
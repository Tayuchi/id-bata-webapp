from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics
from .models import Room, Message
from .serializers import RoomSerializer, MessageSerializer

# Create your views here.

class TemplateView(TemplateView):
    template_name = 'index.html'

class RoomListCreateAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class MessageListCreateAPIView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
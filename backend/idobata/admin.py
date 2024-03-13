from django.contrib import admin
from .models import Room, Message

# Register your models here.

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('id', 'room_name', 'created_at')

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'room', 'user', 'message', 'created_at')
    list_filter = ('room', 'created_at')
    search_fields = ('user', 'message')
    ordering = ('created_at',)

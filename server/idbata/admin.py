from django.contrib import admin
from .models import ChatRoom, Message, CustomUserManager, CustomUser

# Register your models here.
admin.site.register(ChatRoom)
admin.site.register(Message)
admin.site.register(CustomUser)
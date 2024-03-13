from django.urls import path
from .views import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(), name="index")
]
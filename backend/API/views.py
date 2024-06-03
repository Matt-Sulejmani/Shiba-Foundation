# Django imports
from django.shortcuts import render
from django.http import JsonResponse

# Module imports
from .models import Visitor
from .serializers import UserSerializer


def read_posts(request) -> JsonResponse:



    return JsonResponse()
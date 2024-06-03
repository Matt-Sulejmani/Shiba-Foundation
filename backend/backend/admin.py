from django.contrib import admin
from API.models import Visitor, Moderator, Admin

admin.site.register([Visitor, Moderator, Admin])
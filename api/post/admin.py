from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.BlogPost)
admin.site.register(models.BlogPostComment)
admin.site.register(models.BlogCategory)
from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.DefaultRouter()
router.register('categories',views.CategoryListViewSet, basename='categories')
router.register('view',views.PostDetailViewSet, basename='view')
router.register('',views.PostViewSet, basename='posts')

urlpatterns = [
    path('', include(router.urls)),
    path('comment/<int:id>/',views.LoadComment),
    path('create-post/<int:id>/',views.CreatePost),
    path('create-comment/<int:author_id>/<int:blog_id>/',views.CreateComment),
    path('delete-post/<int:post_id>/',views.DeletePost),
    path('update-post/<int:post_id>/',views.UpdatePostTextFields),
    path('update-post-image/<int:post_id>/',views.UpdatePostImage)
]
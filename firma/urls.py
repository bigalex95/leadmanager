from rest_framework import routers
from .api import FirmaViewSet

router = routers.DefaultRouter()
router.register('api/firma', FirmaViewSet, 'firma')

urlpatterns = router.urls

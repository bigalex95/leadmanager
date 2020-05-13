from osgb.models import OSGBapi
from rest_framework import viewsets, permissions
from .serializers import OSGBapiSerializer

# Firma Viewset


class OSGBapiViewSet(viewsets.ModelViewSet):
    queryset = OSGBapi.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OSGBapiSerializer

from firma.models import Firma
from rest_framework import viewsets, permissions
from .serializers import FirmaSerializer

# Firma Viewset


class FirmaViewSet(viewsets.ModelViewSet):
    queryset = Firma.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = FirmaSerializer

from rest_framework import serializers
from firma.models import Firma

# Firma Serializer


class FirmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firma
        fields = '__all__'

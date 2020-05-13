from rest_framework import serializers
from osgb.models import OSGBapi

# OSGBapi Serializer


class OSGBapiSerializer(serializers.ModelSerializer):
    class Meta:
        model = OSGBapi
        fields = '__all__'

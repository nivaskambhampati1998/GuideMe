from rest_framework import serializers
from monuments.models import Monument, City


class MonumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monument
        fields = ('monument_id', 'monument_name', 'city', 'basicinfo', 'description','image')

    def create(self, validated_data):
        try:
            p = Monument.objects.create(**validated_data)
            return p
        except:
            return {'message': 'Error during creation'}

    def update(self, instance, validated_data):
        instance.monument_id = validated_data.get('monument_id', instance.monument_id)
        instance.monument_name = validated_data.get('monument_name ', instance.monument_name)
        instance.city = validated_data.get('city', instance.city)
        instance.basic_info = validated_data.get('basic_info', instance.basic_info)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return super().update(instance, validated_data)


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('city_name', 'state', 'country', 'pincode')

    def create(self, validated_data):
        try:
            p = City.objects.create(**validated_data)
            return p
        except:
            return {'message': 'Error during creation'}

    def update(self, instance, validated_data):
        instance.city_id = validated_data.get('city_id', instance.city_id)
        instance.city_name = validated_data.get('city_name ', instance.city_name)
        instance.state = validated_data.get('state', instance.state)
        instance.country = validated_data.get('country', instance.country)
        instance.pincode = validated_data.get('pincode', instance.pincode)
        instance.save()
        return super().update(instance, validated_data)

import json
from django.http import HttpResponse, Http404
from django.core import serializers
from cities.models import City

# Routing methods per HTTP verb

def router(request, id):
    method = request.method
    
    if method == 'GET' and id is None:
        return get_cities(request)
    
    if method == 'GET' and id is not None:
        return get_city(request, id)
    
    if method == 'POST':
        return create_city(request)
        
    if method == 'PUT' and id is not None:
        return update_city(request, id)
        
    if method == 'DELETE' and id is not None:
        return delete_city(id)
    
    raise Http404

# REST functionality

def get_cities(request):
    cities = City.objects.all()
    
    data = []
    
    for city in cities:
        data.append(city_to_dict(city))
    
    return HttpResponse(json.dumps(data), mimetype='application/json')
    
def create_city(request):
    data = json.load(request)
    city = City(name=data['name'], postal_code=data['postal_code'])
    city.save()
    
    return HttpResponse(json.dumps(city_to_dict(city)), mimetype='application/json')

def get_city(request, id):
    city = City.objects.get(id=id)
    
    return HttpResponse(json.dumps(city_to_dict(city)), mimetype='application/json')

def update_city(request, id):
    data = json.load(request)
    city = City.objects.get(id=id)
    city.name = data['name']
    city.postal_code = data['postal_code']
    city.save()
    
    return HttpResponse(json.dumps(city_to_dict(city)), mimetype='application/json')

def delete_city(id):
    city = City.objects.get(id=id)
    city.delete()
    
    return HttpResponse('success', mimetype='text/plain')

def city_to_dict(city):
    return {'name': city.name, 'postal_code': city.postal_code, 'id': city.id}

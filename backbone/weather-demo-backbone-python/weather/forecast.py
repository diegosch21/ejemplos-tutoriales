import json
import requests
from xml.etree import ElementTree
from django.http import HttpResponse
from django.views.decorators.cache import cache_page

def elt_to_dict(elt):
    data = {}
    
    if elt is None:
        return data
    
    for child in elt:
        data[child.tag] = child.get('data')
        
        if child.tag == 'icon':
            data[child.tag] = 'http://www.google.com' + data[child.tag]
    
    return data

def get_forecast(location):
    resp = requests.get('http://www.google.com/ig/api', params={'weather': location})
    root = ElementTree.fromstring(resp.content)

    data = {}

    data['forecast_information'] = elt_to_dict(root.find('weather/forecast_information'))
    data['current_conditions'] = elt_to_dict(root.find('weather/current_conditions'))

    forecasts = []

    for elt in root.findall('weather/forecast_conditions'):
        forecasts.append(elt_to_dict(elt))

    data['forecasts'] = forecasts

    return data

@cache_page(300)
def index(request):
    location = request.REQUEST.get('location', '')
    resp = json.dumps(get_forecast(location))
    
    return HttpResponse(resp, mimetype='application/json')

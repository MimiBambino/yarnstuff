import requests
import pprint
import json

query_params = {
    'api_key': 'c03r7wuvnxtvxy7z49kqk0jo',
    'includes': 'Images',
    'category': 'supplies/yarn'
}

url = "https://openapi.etsy.com/v2/listings/active"

response = requests.get(url, params = query_params)
data = response.json()
results = data['results']

items = []
for result in results:
    item = {}
    item['listing_id'] = result['listing_id']
    item['price'] = result['price']
    item['currency'] = result['currency_code']
    item['quanitity'] = result['quantity']
    item['fiber'] = result['materials']
    item['images'] = result['Images']

    items.append(item)

pprint.pprint(items)

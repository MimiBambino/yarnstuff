import requests
import pprint
import json

query_params = {
    'api_key': 'c03r7wuvnxtvxy7z49kqk0jo',
    'includes': 'Images',
    'category': 'supplies/yarn'
}

url = "https://openapi.etsy.com/v2/listings/active"

def call_etsy(url, params, offset = 0):
    response = requests.get(url, params = query_params)
    data = response.json()
    count = data['count']
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
        item['description'] = result['description']

        items.append(item)

    pprint.pprint(items)
    print len(items)
    print count
    print offset
    return items, count, offset

call_etsy(url, query_params)

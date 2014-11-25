
var etsyUrl = "https://openapi.etsy.com/v2/listings/active?category=supplies/yarn&includes=Images&api_key=c03r7wuvnxtvxy7z49kqk0jo";

var data = $.getJSON(etsyUrl);
console.log(data);
// Find IDs of yarns.  This is how I call etsy.  https://openapi.etsy.com/v2/listings/:listing_id170883917

// The following pertains to query parameters:
/* This is awesome! I can search by color!
color_triplet   Either an HSV color specified as an array in the range 0;0;0 - 360;100;100, 
or an RGB color specified in hexadecimal notation in the range #000000 - #FFFFFF.  
(RGB colors are converted to HSV internally, which may result in small rounding errors.  
They may omit the leading "#", or use the three-digit form.)
color_wiggle    Specify the degree of tolerance for color matching where 0 is the most 
accurate, and 30 is the least.*/
// image    An image file; see Uploading Images
// category A string ID that uniquely identifies a category path (e.g. Clothing/Men/Pants)
// limit    int Specifies the maximum number of records to return.
// offset  int Skips the first N records before returning results. Combine with limit for pagination.

/*
The default records returned per call is 25, and the maximum number that can be returned is 100. 
We provide limit and offset parameters to allow navigation through larger data sets. 
Responses include a count field, which specifies the total number of records available via pagination. 
For performance reasons, the offset parameter is limited to a maximum value of 50000.

Here's an example of sequential requests to paginate through the most recent 300 listings, 50 at a time:

https://openapi.etsy.com/v2/listings/active?limit=50&offset=0
https://openapi.etsy.com/v2/listings/active?limit=50&offset=50
https://openapi.etsy.com/v2/listings/active?limit=50&offset=100
https://openapi.etsy.com/v2/listings/active?limit=50&offset=150
https://openapi.etsy.com/v2/listings/active?limit=50&offset=200
https://openapi.etsy.com/v2/listings/active?limit=50&offset=250
*/
/*
{
    "listing_id":170883917,
    "state":"active",
    "user_id":33239431,
    "category_id":68910278,
    "title":"Recycled Sari silk ribbon - Multicolour 2",
    "description":"100% recycled Sari Silk Ribbon, Multicolour 2\r\n100 grams\r\nApprox. 36-45 meters or 40-50 yards per 100g\r\nHand-wash\r\n\r\nOur high quality sari silk ribbon comes from left over silk made for sari manufacturing. The silk ribbons are hand picked and then sewed end to end. The production gives employment to many women in rural India.\r\n\r\nSari silk ribbons can be used for both crafting mats, scarves, bags, purses etc.",
    "creation_tsz":1416568559,
    "ending_tsz":1426932959,
    "original_creation_tsz":1385543710,
    "last_modified_tsz":1416568559,
    "price":"7.90",
    "currency_code":"USD",
    "quantity":7,
    "tags":[
        "sari silk ribbon","sari ribbon","sarisilk",
        "recycled ribbon","waste silk","sari lace",
        "torn ribbon","sari silk  yarn","art silk",
        "crafty ribbon","art ribbon","recycled sari","recycled silk"],
    "category_path":[
        "Supplies","Yarn","Silk"],
    "category_path_ids":[
        69150433,69150619,68910278],
    "materials":[
        "silk","ribbon","yarn","hunk","skein","sarisilk","sari silk",
        "sari ribbon","sarisilk ribbon","waste silk lace"],
    "shop_section_id":14602951,
    "featured_rank":null,
    "state_tsz":1403412796,
    "url":"https:\/\/www.etsy.com\/listing\/170883917\/recycled-sari-silk-ribbon-multicolour-2?utm_source=yarnsherpa&utm_medium=api&utm_campaign=api",
    "views":441,
    "num_favorers":33,
    "shipping_template_id":null,
    "processing_min":1,
    "processing_max":2,
    "who_made":"collective",
    "is_supply":"true",
    "when_made":"2010_2014",
    "is_private":false,
    "recipient":"women",
    "occasion":null,
    "style":null,
    "non_taxable":false,
    "is_customizable":false,
    "is_digital":false,
    "file_data":"",
    "language":"en-US",
    "has_variations":false,
    "used_manufacturer":false
},*/
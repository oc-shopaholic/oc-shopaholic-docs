{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [ProductList](#productlist)
  * [getSorting](#getsorting)
  * [make](#makearelementidlist-null)
  * [onAddToCompare](#onaddtocompare)
  * [onAddToWishList](#onaddtowishlist)
  * [onClearCompareList](#onclearcomparelist)
  * [onClearViewedProductList](#onclearviewedproductlist)
  * [onClearWishList](#onclearwishlist)
  * [onRemoveFromCompare](#onremovefromcompare)
  * [onRemoveFromViewedProductList](#onremovefromviewedproductlist)
  * [onRemoveFromWishList](#onremovefromwishlist)
* [ProductPage](#productpage)
  * [get](#get)
  * [onAddToCompare](#onaddtocompare-1)
  * [onAddToWishList](#onaddtowishlist-1)
  * [onClearCompareList](#onclearcomparelist-1)
  * [onClearViewedProductList](#onclearviewedproductlist-1)
  * [onClearWishList](#onclearwishlist-1)
  * [onRemoveFromCompare](#onremovefromcompare-1)
  * [onRemoveFromViewedProductList](#onremovefromviewedproductlist-1)
  * [onRemoveFromWishList](#onremovefromwishlist-1)
* [ProductData](#productdata)
  * [get](#getielementid)
  * [onAddToCompare](#onaddtocompare-2)
  * [onAddToWishList](#onaddtowishlist-2)
  * [onClearCompareList](#onclearcomparelist-2)
  * [onClearViewedProductList](#onclearviewedproductlist-2)
  * [onClearWishList](#onclearwishlist-2)
  * [onGetData](#ongetdata)
  * [onGetJSONData](#ongetjsondata)
  * [onRemoveFromCompare](#onremovefromcompare-2)
  * [onRemoveFromViewedProductList](#onremovefromviewedproductlist-2)
  * [onRemoveFromWishList](#onremovefromwishlist-2)

## ProductList

Component allows you to render blocks with products. For example: popular products, product list with pagination,
random products, etc.

Available values of default "sorting" property:
* 'no' - default value
* 'price|asc'
* 'price|desc'
* 'new'
* 'popularity|desc' ({{ 'popularity'|available_with }}).
* 'rating|desc' ({{ 'reviews'|available_with }}).
* 'rating|asc' ({{ 'reviews'|available_with }}).

### getSorting()
Get active sorting value. Method tries to get sorting value from request (**"sort"** field).

### make(_[$arElementIDList = null]_)

Method returns new object of {{ get_collection('product').link() }} class.

### onAddToCompare()

Method adds product to compare. Method {{ 'compare'|available_with|lcfirst }}
You can send AJAX request with product ID to add product to compare list.
```javascript
$.request('ProductList::onAddToCompare', {
    data: {'product_id': 10}
});
```

### onAddToWishList()

Method adds product to wish list. Method {{ 'wish-list'|available_with|lcfirst }}
You can send AJAX request with product ID to add product to wish list.
```javascript
$.request('ProductList::onAddToWishList', {
    data: {'product_id': 10}
});
```

### onClearCompareList()

Method clears list of products added to compare. Method {{ 'compare'|available_with|lcfirst }}
```javascript
$.request('ProductList::onClearCompareList');
```

### onClearViewedProductList()

Method clears list of viewed products. Method {{ 'viewed-products'|available_with|lcfirst }}
```javascript
$.request('ProductList::onClearViewedProductList');
```

### onClearWishList()

Method clears list of products added to wish list. Method {{ 'wish-list'|available_with|lcfirst }}
```javascript
$.request('ProductList::onClearWishList');
```

### onRemoveFromCompare()

Method removes product from compare. Method {{ 'compare'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form compare list.
```javascript
$.request('ProductList::onRemoveFromCompare', {
    data: {'product_id': 10}
});
```

### onRemoveFromViewedProductList()

Method removes product from viewed products list. Method {{ 'viewed-products'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form viewed product list.
```javascript
$.request('ProductList::onRemoveFromViewedProductList', {
    data: {'product_id': 10}
});
```

### onRemoveFromWishList()

Method removes product from wish list. Method {{ 'wish-list'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form wish list.
```javascript
$.request('ProductList::onRemoveFromWishList', {
    data: {'product_id': 10}
});
```

## ProductPage

Component allows you to render product page.

Available properties:

{% verbatim %}
|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If the value is 1, then component will make additional check for full URL of page|
|skip_error|0 or 1|If value is 1, then component will not return "Not found" error|
{% endverbatim %}

Usage example:
<!-- tabs:start -->
#### ** Variant 1 **

Simple example of product page. Page URL does not contain category slug.

{{ get_module('product').example('pages/product-page-1.htm')|raw }}
#### ** Variant 2 **

Simple example of product page. Page URL contains category slug (two levels).

> CategoryPage components must be attached on page so that child categories are higher than parent categories.

{{ get_module('product').example('pages/product-page-2.htm')|raw }}
#### ** Variant 3 **

Simple example of product page. Page URL contains category (two levels) and brand slug.

> CategoryPage components must be attached on page so that child categories are higher than parent categories.

{{ get_module('product').example('pages/product-page-3.htm')|raw }}

#### ** Wildcard **

Catalog page with wildcard URL parameter.

{{ get_module('product').example('pages/product-page-4.htm')|raw }}
<!-- tabs:end -->

"Smart URL check" adds additional URL validation. For example:
  * Product page URL = "/women/jeans-women/floral-embroidered-skinny-high-waisted-blue-9"
  * Go to URL = "/men/jeans-women/floral-embroidered-skinny-high-waisted-blue-9"
  * With enabled "Smart URL check" component ProductPage returns 404 page, with disabled "Smart URL check" component ProductPage returns product page.
> "Smart URL check" works only when you have components on page correctly connected and [ProductItem::getPageUrl](modules/product/item/item.md#getpageurlspagecode-39product39) method returns correct URL to product page.

### onAddToCompare()

Method adds product to compare. Method {{ 'compare'|available_with|lcfirst }}
You can send AJAX request with product ID to add product to compare list.
```javascript
$.request('ProductPage::onAddToCompare', {
    data: {'product_id': 10}
});
```

### onAddToWishList()

Method adds product to wish list. Method {{ 'wish-list'|available_with|lcfirst }}
You can send AJAX request with product ID to add product to wish list.
```javascript
$.request('ProductPage::onAddToWishList', {
    data: {'product_id': 10}
});
```

### onClearCompareList()

Method clears list of products added to compare. Method {{ 'compare'|available_with|lcfirst }}
```javascript
$.request('ProductPage::onClearCompareList');
```

### onClearViewedProductList()

Method clears list of viewed products. Method {{ 'viewed-products'|available_with|lcfirst }}
```javascript
$.request('ProductPage::onClearViewedProductList');
```

### onClearWishList()

Method clears list of products added to wish list. Method {{ 'wish-list'|available_with|lcfirst }}
```javascript
$.request('ProductPage::onClearWishList');
```

### onRemoveFromCompare()

Method removes product from compare. Method {{ 'compare'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form compare list.
```javascript
$.request('ProductPage::onRemoveFromCompare', {
    data: {'product_id': 10}
});
```

### onRemoveFromViewedProductList()

Method removes product from viewed products list. Method {{ 'viewed-products'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form viewed product list.
```javascript
$.request('ProductPage::onRemoveFromViewedProductList', {
    data: {'product_id': 10}
});
```

### onRemoveFromWishList()

Method removes product from wish list. Method {{ 'wish-list'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form wish list.
```javascript
$.request('ProductPage::onRemoveFromWishList', {
    data: {'product_id': 10}
});
```

## ProductData 

Component allows you to render blocks with product. You can get product object by ID.

Usage example:
{% verbatim %}
```twig
{# Get product item with ID = 10 #}
{% set obProduct = ProductData.get(10) %}
{% if obProduct.isNotEmpty() %}
    <div data-id="{{ obProduct.id }}">
        <h2>{{ obProduct.name }}</h2>
        {% if obProduct.preview_image is not empty %}
            <img src="{{ obProduct.preview_image.path }}" title="{{ obProduct.preview_image.title }}" alt="{{ obProduct.preview_image.description }}">
        {% endif %}
        <span>Category: {{ obProduct.category.name }}</span>
        <span>Brand: {{ obProduct.brand.name }}</span>
        <span>Brand: {{ obProduct.brand.name }}</span>
        {% set obOffer = obProduct.offer.first() %}
        {% if obOffer.isNotEmpty()%}  
            <span>Price: {{ obOffer.price }} {{ obOffer.currency }}</span>
        {% endif %}
        <div>{{ obProduct.description|raw }}</div>
    </div>
{% endif %}
```
{% endverbatim %}

### get($iElementID)

Method returns {{ get_item('product').link() }} class object with ID = $iElementID.

### onAddToCompare()

Method adds product to compare. Method {{ 'compare'|available_with|lcfirst }}
You can send AJAX request with product ID to add product to compare list.
```javascript
$.request('ProductData::onAddToCompare', {
    data: {'product_id': 10}
});
```

### onAddToWishList()

Method adds product to wish list. Method {{ 'wish-list'|available_with|lcfirst }}
You can send AJAX request with product ID to add product to wish list.
```javascript
$.request('ProductData::onAddToWishList', {
    data: {'product_id': 10}
});
```

### onClearCompareList()

Method clears list of products added to compare. Method {{ 'compare'|available_with|lcfirst }}
```javascript
$.request('ProductData::onClearCompareList');
```

### onClearViewedProductList()

Method clears list of viewed products. Method {{ 'viewed-products'|available_with|lcfirst }}
```javascript
$.request('ProductData::onClearViewedProductList');
```

### onClearWishList()

Method clears list of products added to wish list. Method {{ 'wish-list'|available_with|lcfirst }}
```javascript
$.request('ProductData::onClearWishList');
```

### onGetData()

Method returns array with product data. You can send AJAX request with product ID to get product data.
```javascript
$.request('ProductData::onGetData', {
    data: {'element_id': 10}
});
```

### onGetJSONData()

Method returns JSON string with product data. You can send AJAX request with product ID to get product data.
```javascript
$.request('ProductData::onGetJSONData', {
    data: {'element_id': 10}
});
```

### onRemoveFromCompare()

Method removes product from compare. Method {{ 'compare'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form compare list.
```javascript
$.request('ProductData::onRemoveFromCompare', {
    data: {'product_id': 10}
});
```

### onRemoveFromViewedProductList()

Method removes product from viewed products list. Method {{ 'viewed-products'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form viewed product list.
```javascript
$.request('ProductData::onRemoveFromViewedProductList', {
    data: {'product_id': 10}
});
```

### onRemoveFromWishList()

Method removes product from wish list. Method {{ 'wish-list'|available_with|lcfirst }}
You can send AJAX request with product ID to remove product form wish list.
```javascript
$.request('ProductData::onRemoveFromWishList', {
    data: {'product_id': 10}
});
```
{% endblock %}
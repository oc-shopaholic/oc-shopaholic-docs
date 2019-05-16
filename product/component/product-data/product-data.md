# ProductData component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig

{# Get product item with ID = 10 #}
{% set obProduct = ProductData.get(10) %}
{% if obProduct.isNotEmpty() %}
    <div data-id="{{ obProduct.id }}">
        <h1>{{ obProduct.name }}</h1>
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

### get($iElementID)

Method returns [Product Item](product/item/item.md) class object with ID = $iElementID.

### onAddToCompare()

Method adds product to compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductData::onAddToCompare', {
    data: {'product_id': 10}
});
```

### onAddToWishList()

Method adds product to wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductData::onAddToWishList', {
    data: {'product_id': 10}
});
```

### onAjaxRequest()
Empty method for ajax requests.

### onClearCompareList()

Method clears list of products added to compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductData::onClearCompareList');
```

### onClearViewedProductList()

Method clears list of viewed products. Method available with [Viewed products for Shopaholic](plugins/home.md#viewed-products-for-shopaholic) plugin.
```javascript
$.request('ProductData::onClearViewedProductList');
```

### onClearWishList()

Method clears list of products added to wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductData::onClearWishList');
```

### onGetData()

Method returns array with product data.
```javascript
$.request('ProductData::onGetData', {
    data: {'element_id': 10}
});
```

### onGetJSONData()

Method returns JSON string with product data.
```javascript
$.request('ProductData::onGetJSONData', {
    data: {'element_id': 10}
});
```

### onRemoveFromCompare()

Method removes product from compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductData::onRemoveFromCompare', {
    data: {'product_id': 10}
});
```

### onRemoveFromViewedProductList()

Method removes product from viewed products list. Method available with [Viewed products for Shopaholic](plugins/home.md#viewed-products-for-shopaholic) plugin.
```javascript
$.request('ProductData::onRemoveFromViewedProductList', {
    data: {'product_id': 10}
});
```

### onRemoveFromWishList()

Method removes product from wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductData::onRemoveFromWishList', {
    data: {'product_id': 10}
});
```
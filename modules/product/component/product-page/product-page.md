# ProductPage component {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Available properties:

|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If the value is 1, then component will make additional check for full URL of page|

Usage example:
```twig
[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}
<div data-id="{{ obProduct.id }}">
    <h1>{{ obProduct.name }}</h1>
    {% if obProduct.preview_imag    e is not empty %}
        <img src="{{ obProduct.preview_image.path }}" title="{{ obProduct.preview_image.title }}" alt="{{ obProduct.preview_image.description }}">
    {% endif %}
    <span>Category: {{ obProduct.category.name }}</span>
    <span>Brand: {{ obProduct.brand.name }}</span>
    {% set obOffer = obProduct.offer.first() %}
    {% if obOffer.isNotEmpty()%}  
        <span>Price: {{ obOffer.price }} {{ obOffer.currency }}</span>
    {% endif %}
    <div>{{ obProduct.description|raw }}</div>
</div>
```

"Smart URL check" adds additional URL validation. For example:
  * Product page URL = "/women/jeans-women/floral-embroidered-skinny-high-waisted-blue-9"
  * Go to URL = "/men/jeans-women/floral-embroidered-skinny-high-waisted-blue-9"
  * With enabled "Smart URL check" component ProductPage returns 404 page, with disabled "Smart URL check" component ProductPage returns product page.
> "Smart URL check" works only when you have components on page correctly connected and [ProductItem::getPageUrl](modules/product/item/item.md#getpageurlspagecode-39product39) method returns correct URL to product page.

### onAddToCompare()

Method adds product to compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onAddToCompare', {
    data: {'product_id': 10}
});
```

### onAddToWishList()

Method adds product to wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onAddToWishList', {
    data: {'product_id': 10}
});
```

### onClearCompareList()

Method clears list of products added to compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onClearCompareList');
```

### onClearViewedProductList()

Method clears list of viewed products. Method available with [Viewed products for Shopaholic](plugins/home.md#viewed-products-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onClearViewedProductList');
```

### onClearWishList()

Method clears list of products added to wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onClearWishList');
```

### onRemoveFromCompare()

Method removes product from compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onRemoveFromCompare', {
    data: {'product_id': 10}
});
```

### onRemoveFromViewedProductList()

Method removes product from viewed products list. Method available with [Viewed products for Shopaholic](plugins/home.md#viewed-products-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onRemoveFromViewedProductList', {
    data: {'product_id': 10}
});
```

### onRemoveFromWishList()

Method removes product from wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductPage::onRemoveFromWishList', {
    data: {'product_id': 10}
});
```

[Back to modules](modules/home.md)
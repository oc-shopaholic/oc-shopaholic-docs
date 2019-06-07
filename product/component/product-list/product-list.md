# ProductList component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Component allows to work with [ProductCollection](product/collection/collection.md) class objects.

### getSorting()
Get active sorting value. Method tries to get sorting value from request (**"sort"** field).

### make(_[$arElementIDList = null]_)

Method returns new object of [ProductCollection](product/collection/collection.md) class.

**Example 1:** Get collection of product, apply sorting, filter by flag "active" and category ID.
```twig
{% set obCategory = CategoryPage.get() %}

{% set obProductList = ProductList.make().sort(ProductList.getSorting()).active().category(obCategory.id) %}
{% if obProductList.isNotEmpty() %}
    <ul>
        {% for obProduct in obProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

**Example 2:** Get collection of products, apply filter by flag "active" and category ID + [Pagination](https://github.com/lovata/oc-toolbox-plugin/wiki/Components#pagination) component.
```twig
{% set obCategory = CategoryPage.get() %}

{# Get product collection #}
{% set obProductList = ProductList.make().sort(ProductList.getSorting()).active().category(obCategory.id) %}

{# Get array with pagination buttons #}
{% set iPage = Pagination.getPageFromRequest() %}
{% set arPaginationList = Pagination.get(iPage, obProductList.count()) %}

{# Apply pagination to product collection and get array with product items #}
{% set arProductList = obProductList.page(iPage, Pagination.getCountPerPage()) %}

{% if arProductList is not empty %}

    {# Render product list #}
    <ul>
        {% for obProduct in arProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
    
    {# Render pagination buttons #}
    {% if arPaginationList is not empty %}
        {% for arPagination in arPaginationList %}
            <a href="?page={{ arPagination.value }}" class="{{ arPagination.class }}" data-page="{{ arPagination.value }}">{{ arPagination.name }}</a>
        {% endfor %}
    {% endif %}
{% endif %}
```

### onAddToCompare()

Method adds product to compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductList::onAddToCompare', {
    data: {'product_id': 10}
});
```

### onAddToWishList()

Method adds product to wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductList::onAddToWishList', {
    data: {'product_id': 10}
});
```

### onAjaxRequest()
Empty method for ajax requests.

### onClearCompareList()

Method clears list of products added to compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductList::onClearCompareList');
```

### onClearViewedProductList()

Method clears list of viewed products. Method available with [Viewed products for Shopaholic](plugins/home.md#viewed-products-for-shopaholic) plugin.
```javascript
$.request('ProductList::onClearViewedProductList');
```

### onClearWishList()

Method clears list of products added to wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductList::onClearWishList');
```

### onRemoveFromCompare()

Method removes product from compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.
```javascript
$.request('ProductList::onRemoveFromCompare', {
    data: {'product_id': 10}
});
```

### onRemoveFromViewedProductList()

Method removes product from viewed products list. Method available with [Viewed products for Shopaholic](plugins/home.md#viewed-products-for-shopaholic) plugin.
```javascript
$.request('ProductList::onRemoveFromViewedProductList', {
    data: {'product_id': 10}
});
```

### onRemoveFromWishList()

Method removes product from wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```javascript
$.request('ProductList::onRemoveFromWishList', {
    data: {'product_id': 10}
});
```
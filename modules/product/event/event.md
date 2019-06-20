# Event list: Product

## **shopaholic.promo_block.get.product.list**

The event allows you to extend list of products for promo block

For example:
```php
Event::listen(\Lovata\Shopaholic\Models\PromoBlock::EVENT_GET_PRODUCT_LIST, function($obPromoBlock) {
    $arProductIDList = ...
    
    return $arProductIDList;
});
```

## **shopaholic.sorting.get.list**

Event allows you to quickly add custom sorting for list of products ([ProductCollection](modules/product/collection/collection.md) class, sort() method)

For example:
```php
Event::listen('shopaholic.sorting.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with product ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

**You need to add cache clearing for your custom sorting**
```php
\Lovata\Shopaholic\Classes\Store\ProductListStore->sorting->clear('my_custom_sorting');
```
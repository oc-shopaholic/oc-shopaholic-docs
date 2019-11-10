[Back to modules](modules/home.md)

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• [Item](modules/product/item/item.md)
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• Events
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

# Event list: Product {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## **shopaholic.promo_block.get.product.list**

The event allows you to extend list of products for promo block

For example:
```php
Event::listen(\Lovata\Shopaholic\Models\PromoBlock::EVENT_GET_PRODUCT_LIST, function($obPromoBlock) {
    /** @var \Lovata\Shopaholic\Models\PromoBlock $obPromoBlock */
    //to get produt ID list with using $obPromoBlock object
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

!> You need to add cache clearing for your custom sorting

```php
\Lovata\Shopaholic\Classes\Store\ProductListStore->sorting->clear('my_custom_sorting');
```

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• [Item](modules/product/item/item.md)
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• Events
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

[Back to modules](modules/home.md)

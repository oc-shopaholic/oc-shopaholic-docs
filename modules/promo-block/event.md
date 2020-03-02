{% extends 'docs/modules/event-default.md' %}

{% block content %}
* [shopaholic.promo_block.get.promo-block.list](#shopaholicpromo_blockgetpromo-blocklist)
* [shopaholic.promo_block.get.type.list](#shopaholicpromo_blockgettypelist)

## **shopaholic.promo_block.get.promo-block.list**

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

## **shopaholic.promo_block.get.type.list**

The event allow you to extend list with available types of promo blocks.
You can set type of promo block in backend and use it in your templates.

![](./../../../assets/images/backend-promo-block-3.png)

For example:
```php
Event::listen(\Lovata\Shopaholic\Models\PromoBlock::EVENT_GET_TYPE_LIST, function() {
    $arResult = [
        'my_type_1' => 'My custom type 1',
        'my_type_2' => 'My custom type 2',
    ];
    
    return $arResult;
});
```

## **shopaholic.promo_block.sorting.get.list**

Event allows you to quickly add custom sorting for list of promo blocks {{ collection.link() }} class, sort() method)

For example:
```php
Event::listen('shopaholic.promo_block.sorting.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with promo block ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

!> You need to add cache clearing for your custom sorting

```php
\Lovata\Shopaholic\Classes\Store\PromoBlockListStore->sorting->clear('my_custom_sorting');
```
{% endblock %}

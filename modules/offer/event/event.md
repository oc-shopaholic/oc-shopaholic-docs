# Event list: Offer

[Back to modules](modules/home.md)
/ [Home](modules/offer/home.md)
/ [Model](modules/offer/model/model.md)
/ [Item](modules/offer/item/item.md)
/ [Collection](modules/offer/collection/collection.md)
/ Events
/ [Examples](modules/offer/examples/examples.md)
/ [Extending](modules/offer/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## **shopaholic.sorting.offer.get.list**

Event allows you to quickly add custom sorting for list of offers ([OfferCollection](modules/offer/collection/collection.md) class, sort() method)

For example:
```php
Event::listen('shopaholic.sorting.offer.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with offer ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

!> You need to add cache clearing for your custom sorting
```php
\Lovata\Shopaholic\Classes\Store\OfferListStore->sorting->clear('my_custom_sorting');
```

[Back to modules](modules/home.md)
/ [Home](modules/offer/home.md)
/ [Model](modules/offer/model/model.md)
/ [Item](modules/offer/item/item.md)
/ [Collection](modules/offer/collection/collection.md)
/ Events
/ [Examples](modules/offer/examples/examples.md)
/ [Extending](modules/offer/extending/extending.md)
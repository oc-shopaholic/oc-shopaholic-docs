# Event list: Brand

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ [Model](modules/brand/model/model.md)
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ [Components](modules/brand/component/brand-list/brand-list.md)
/ Events
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## **shopaholic.brand.open**

Event is triggered when you open brand page.
```php
Event::listen('shopaholic.brand.open', function($obBrand) {
    /** @var \Lovata\Shopaholic\Models\Brand $obBrand */
    //to do something
});
```

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ [Model](modules/brand/model/model.md)
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ [Components](modules/brand/component/brand-list/brand-list.md)
/ Events
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)
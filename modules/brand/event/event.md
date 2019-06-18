# Event list: Brand

[Back to modules](modules/home.md)

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
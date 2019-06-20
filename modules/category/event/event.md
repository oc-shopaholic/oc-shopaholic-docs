# Event list: Category

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## **shopaholic.category.open**

Event is triggered when you open category page.
```php
Event::listen('shopaholic.category.open', function($obCategory) {
    /** @var \Lovata\Shopaholic\Models\Category $obCategory */
    //to do something
});
```

[Back to modules](modules/home.md)
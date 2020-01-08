[Back to modules](modules/home.md)

[Home](modules/subscription-period/home.md)
• Model
• [Item](modules/subscription-period/item/item.md)
• [Collection](modules/subscription-period/collection/collection.md)
• [Examples](modules/subscription-period/examples/examples.md)
• [Extending](modules/subscription-period/extending/extending.md)

# SubscriptionAccess model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|created_at|\October\Rain\Argon\Argon|
|name|string|
|period|string|
|sort_order|int|Field required for [Sortable](https://octobercms.com/docs/database/traits#sortable) trait|
|updated_at|\October\Rain\Argon\Argon|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
SubscriptionAccess::extend(function ($obSubscriptionAccess) {
    /** @var SubscriptionAccess $obSubscriptionAccess */
    $obSubscriptionAccess->fillable[] = 'my_field';
    
    $obSubscriptionAccess->addCachedField(['my_field']);
});
```

[Home](modules/subscription-period/home.md)
• Model
• [Item](modules/subscription-period/item/item.md)
• [Collection](modules/subscription-period/collection/collection.md)
• [Examples](modules/subscription-period/examples/examples.md)
• [Extending](modules/subscription-period/extending/extending.md)

[Back to modules](modules/home.md)

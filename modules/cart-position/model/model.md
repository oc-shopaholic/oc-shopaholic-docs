[Back to modules](modules/home.md)

[Home](modules/cart-position/home.md)
• Model
• [Item](modules/cart-position/item/item.md)
• [Collection](modules/cart-position/collection/collection.md)
• [Examples](modules/cart-position/examples/examples.md)
• [Extending](modules/cart-position/extending/extending.md)

# CartPosition model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

> Model available with [Orders for Shopaholic](plugins/home#orders-for-shopaholic) plugin.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|cart_id|int|Relation with [Cart](modules/cart/model/model.md) model|
|created_at|\October\Rain\Argon\Argon|
|deleted_at|\October\Rain\Argon\Argon|Field required for [SoftDelete](https://octobercms.com/docs/database/traits#soft-deleting) trait|
|item_id|int|
|item_type|string|
|property|array|
|quantity|int|
|updated_at|\October\Rain\Argon\Argon|

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|cart|BelongsTo|[Cart](modules/cart/model/model.md)|
|item|MorphTo|[Offer](modules/offer/model/model.md)|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
CartPosition::extend(function ($obCartPosition) {
    /** @var CartPosition $obCartPosition */
    $obCartPosition->fillable[] = 'my_field';
});
```

[Home](modules/cart-position/home.md)
• Model
• [Item](modules/cart-position/item/item.md)
• [Collection](modules/cart-position/collection/collection.md)
• [Examples](modules/cart-position/examples/examples.md)
• [Extending](modules/cart-position/extending/extending.md)

[Back to modules](modules/home.md)

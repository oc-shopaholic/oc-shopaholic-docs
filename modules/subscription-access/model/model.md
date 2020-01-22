[Back to modules](modules/home.md)

[Home](modules/subscription-access/home.md)
• Model
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

# SubscriptionAccess model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|created_at|\October\Rain\Argon\Argon|
|element_id|int|Relation with custom model. For example: Article|
|element_type|string|Relation with custom model. For example: Article|
|expire_at|\October\Rain\Argon\Argon|
|product_id|int|Relation with [Product](modules/product/model/model.md) model|
|updated_at|\October\Rain\Argon\Argon|
|user_id|int|Relation with [User](modules/user/model/model.md) model|

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|product|BelongsTo|[Product](modules/product/model/model.md)|
|user|BelongsTo|[User](modules/user/model/model.md)|

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

[Home](modules/subscription-access/home.md)
• Model
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

[Back to modules](modules/home.md)

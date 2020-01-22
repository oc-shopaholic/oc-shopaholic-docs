[Back to modules](modules/home.md)

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• Item
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

# SubscriptionAccessItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|expire_at|\October\Rain\Argon\Argon|
|order_position|[OrderPositionCollection](modules/order-position/collection/collection.md)|
|order_position_id_list|array|
|product|[ProductItem](modules/product/item/item.md)|
|product_id|int|
|user_id|int|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **SubscriptionAccess** model.
```php
SubscriptionAccess::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obSubscriptionAccessItem = SubscriptionAccessItem::make(1);
echo $obSubscriptionAccessItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in SubscriptionAccessItem class and add your method name in **$arExtendResult** array.
```php
SubscriptionAccessItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obSubscriptionAccessItem = SubscriptionAccessItem::make(1);
echo $obSubscriptionAccessItem->my_property;
```

## Method List:

### isActive()

Method returns true if access to subscription has not yet expired.

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• Item
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

[Back to modules](modules/home.md)

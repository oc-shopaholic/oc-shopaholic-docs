[Back to modules](modules/home.md)

[Home](modules/subscription-period/home.md)
• [Model](modules/subscription-period/model/model.md)
• Item
• [Collection](modules/subscription-period/collection/collection.md)
• [Examples](modules/subscription-period/examples/examples.md)
• [Extending](modules/subscription-period/extending/extending.md)

# SubscriptionPeriodItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|name|string|
|period|string|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **SubscriptionPeriod** model.
```php
SubscriptionPeriod::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obSubscriptionPeriodItem = SubscriptionPeriodItem::make(1);
echo $obSubscriptionPeriodItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in SubscriptionPeriodItem class and add your method name in **$arExtendResult** array.
```php
SubscriptionPeriodItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obSubscriptionPeriodItem = SubscriptionPeriodItem::make(1);
echo $obSubscriptionPeriodItem->my_property;
```

[Home](modules/subscription-period/home.md)
• [Model](modules/subscription-period/model/model.md)
• Item
• [Collection](modules/subscription-period/collection/collection.md)
• [Examples](modules/subscription-period/examples/examples.md)
• [Extending](modules/subscription-period/extending/extending.md)

[Back to modules](modules/home.md)

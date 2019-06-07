# CouponItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture) and [ElementItem class](item-class/item-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|
|group|[CouponGroupItem](coupon-group/item/item.md)|
|group_id|int|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Coupon** model.
```php
Coupon::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obCouponItem = CouponItem::make(1);
echo $obCouponItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in CouponItem class and add your method name in **$arExtendResult** array.
```php
CouponItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obCouponItem = CouponItem::make(1);
echo $obCouponItem->my_property;
```

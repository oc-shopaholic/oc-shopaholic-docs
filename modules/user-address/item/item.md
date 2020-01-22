# UserAddressItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|address1|string|
|address2|string|
|building|string|
|city|string|
|country|string|
|flat|string|
|floor|int|
|house|string|
|postcode|string|
|state|string|
|street|string|
|type|string|Available values: shipping, billing|
|user_id|int|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **UserAddress** model.
```php
UserAddress::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obUserAddressItem = UserAddressItem::make(1);
echo $obUserAddressItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in UserAddressItem class and add your method name in **$arExtendResult** array.
```php
UserAddressItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';
TagItem.md
     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obUserAddressItem = UserAddressItem::make(1);
echo $obUserAddressItem->my_property;
```
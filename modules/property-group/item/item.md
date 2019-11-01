# GroupItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|
|name|string|
|description|string|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Group** model.
```php
Group::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obGroupItem = GroupItem::make(1);
echo $obGroupItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in GroupItem class and add your method name in **$arExtendResult** array.
```php
GroupItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obGroupItem = GroupItem::make(1);
echo $obGroupItem->my_property;
```
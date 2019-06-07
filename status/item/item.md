# StatusItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture) and [ElementItem class](item-class/item-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|
|is_user_show|bool|
|name|string|
|name_for_user|string|
|preview_text|string|
|user_status|StatusItem|
|user_status_id|int|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Status** model.
```php
Status::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obStatusItem = StatusItem::make(1);
echo $obStatusItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in StatusItem class and add your method name in **$arExtendResult** array.
```php
StatusItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obStatusItem = StatusItem::make(1);
echo $obStatusItem->my_property;
```
# CurrencyItem {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|
|is_default|bool|
|name|string|
|rate|float|
|symbol|string|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Currency** model.
```php
Currency::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obCurrencyItem = CurrencyItem::make(1);
echo $obCurrencyItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in CurrencyItem class and add your method name in **$arExtendResult** array.
```php
CurrencyItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obCurrencyItem = CurrencyItem::make(1);
echo $obCurrencyItem->my_property;
```

## Method List:

### isActive()

Method returns true, if currency is active

[Back to modules](modules/home.md)
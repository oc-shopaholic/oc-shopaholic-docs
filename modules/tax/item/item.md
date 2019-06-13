# TaxItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture) and [ElementItem class](item-class/item-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|applied_to_shipping_price|bool|
|category_id_list|array|
|country_id_list|array|
|description|string|
|is_global|bool|
|name|string|
|percent|float|
|product_id_list|array|
|state_id_list|array|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Tax** model.
```php
Tax::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obTaxItem = TaxItem::make(1);
echo $obTaxItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in TaxItem class and add your method name in **$arExtendResult** array.
```php
TaxItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';
TagItem.md
     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obTaxItem = TaxItem::make(1);
echo $obTaxItem->my_property;
```
[Back to modules](modules/home.md)

[Home](modules/tax/home.md)
• [Model](modules/tax/model/model.md)
• Item
• [Collection](modules/tax/collection/collection.md)
• [Extending](modules/tax/extending/extending.md)
• [Advanced usage](modules/tax/advanced-usage/home.md)

# TaxItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|applied_to_shipping_price|bool|Available with [Orders for Shopaholic](plugins/home.md#orders-for-shopaholic)|
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

[Home](modules/tax/home.md)
• [Model](modules/tax/model/model.md)
• Item
• [Collection](modules/tax/collection/collection.md)
• [Extending](modules/tax/extending/extending.md)
• [Advanced usage](modules/tax/advanced-usage/home.md)

[Back to modules](modules/home.md)

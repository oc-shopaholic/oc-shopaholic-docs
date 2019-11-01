# CartPositionItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|currency|string|Currency symbol. For example: $|
|currency_code|string|Currency code. For example: USD|
|item|[OfferItem](offer/item/item.md)|
|item_id|int|Related element ID ([morphTo](https://octobercms.com/docs/database/relations#one-to-one-polymorphic-relations) relation)|
|item_type|string|Related element model class ([morphTo](https://octobercms.com/docs/database/relations#one-to-one-polymorphic-relations) relation)|
|offer|[OfferItem](offer/item/item.md)|
|price_data|[ItemPriceContainer](modules/price-container/home.md#ItemPriceContainer)|
|property|array|
|quantity|int|
|type|string|Related element type. Available values: offer|

### Price fields

|  Name | Type | Description |
|-------|------|--------|
|price|string|Formatted price string|
|price_value|float|Float price value|
|price_with_tax|string|Formatted price with tax string|
|price_with_tax_value|float|Float price with tax value|
|price_without_tax|string|Formatted price without tax string|
|price_without_tax_value|float|Float price without tax value|
|tax_price|string|Formatted tax price string|
|tax_price_value|float|Float tax price value|

### Old price fields

|  Name | Type | Description |
|-------|------|--------|
|old_price|string|Formatted old price string|
|old_price_value|float|Float old price value|
|old_price_with_tax|string|Formatted old price with tax string|
|old_price_with_tax_value|float|Float old price with tax value|
|old_price_without_tax|string|Formatted old price without tax string|
|old_price_without_tax_value|float|Float old price without tax value|
|tax_old_price|string|Formatted tax old price string|
|tax_old_price_value|float|Float tax old price value|

### Discount price fields

|  Name | Type | Description |
|-------|------|--------|
|discount_price|string|Formatted discount price string|
|discount_price_value|float|Float discount price value|
|discount_price_with_tax|string|Formatted discount price with tax string|
|discount_price_with_tax_value|float|Float discount price with tax value|
|discount_price_without_tax|string|Formatted discount price without tax string|
|discount_price_without_tax_value|float|Float discount price without tax value|
|tax_discount_price|string|Formatted tax discount price string|
|tax_discount_price_value|float|Float tax discount price value|

### Price per unit fields

|  Name | Type | Description |
|-------|------|--------|
|price_per_unit|string|Formatted price per unit string|
|price_per_unit_value|float|Float price per unit value|
|price_per_unit_with_tax|string|Formatted price per unit with tax string|
|price_per_unit_with_tax_value|float|Float price per unit with tax value|
|price_per_unit_without_tax|string|Formatted price per unit without tax string|
|price_per_unit_without_tax_value|float|Float price per unit without tax value|
|tax_price_per_unit|string|Formatted tax price per unit string|
|tax_price_per_unit_value|float|Float tax price per unit value|

### Old price per unit fields

|  Name | Type | Description |
|-------|------|--------|
|old_price_per_unit|string|Formatted old price per unit string|
|old_price_per_unit_value|float|Float old price per unit value|
|old_price_per_unit_with_tax|string|Formatted old price per unit with tax string|
|old_price_per_unit_with_tax_value|float|Float old price per unit with tax value|
|old_price_per_unit_without_tax|string|Formatted old price per unit without tax string|
|old_price_per_unit_without_tax_value|float|Float old price per unit without tax value|
|tax_old_price_per_unit|string|Formatted tax old price per unit string|
|tax_old_price_per_unit_value|float|Float tax old price per unit value|

### Discount price per unit fields

|  Name | Type | Description |
|-------|------|--------|
|discount_price_per_unit|string|Formatted discount price per unit string|
|discount_price_per_unit_value|float|Float discount price per unit value|
|discount_price_per_unit_with_tax|string|Formatted discount price per unit with tax string|
|discount_price_per_unit_with_tax_value|float|Float discount price per unit with tax value|
|discount_price_per_unit_without_tax|string|Formatted discount price per unit without tax string|
|discount_price_per_unit_without_tax_value|float|Float discount price per unit without tax value|
|tax_discount_price_per_unit|string|Formatted tax discount price per unit string|
|tax_discount_price_per_unit_value|float|Float tax discount price per unit value|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **CartPosition** model.
```php
CartPosition::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obCartPositionItem = CartPositionItem::make(1);
echo $obCartPositionItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in CartPositionItem class and add your method name in **$arExtendResult** array.
```php
CartPositionItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obCartPositionItem = CartPositionItem::make(1);
echo $obCartPositionItem->my_property;
```
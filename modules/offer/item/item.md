# OfferItem {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|code|string|
|currency|string|Active currency symbol. For example: $|
|currency_code|string|Active currency code. For example: USD|
|description|string|
|discount|[DiscountItem](modules/discount/item/item.md)|Available with ["Discounts for Shopaholic"](plugins/home.md#discounts-for-shopaholic) plugin|
|discount_id|int|Available with ["Discounts for Shopaholic"](plugins/home.md#discounts-for-shopaholic) plugin|
|discount_type|string|Available values: fixed, percent. Available with ["Discounts for Shopaholic"](plugins/home.md#discounts-for-shopaholic) plugin|
|discount_value|float|Available with ["Discounts for Shopaholic"](plugins/home.md#discounts-for-shopaholic) plugin|
|images|\October\Rain\Database\Collection, \System\Models\File[]|
|name|string|
|preview_image|\System\Models\File|
|preview_text|string|
|product|[ProductItem](modules/product/item/item.md)|
|product_id|int|
|property|[PropertyCollection](modules/property/collection/collection.md)|Object with sorted active offer properties. Available with ["Properties for Shopaholic"](plugins/home.md#properties-for-shopaholic) plugin|
|quantity|int|
|slug|string|
|tax_list|[TaxCollection](modules/tax/collection/collection.md)|
|tax_percent|float|
|trashed|bool|

### Price fields

|  Name | Type | Description |
|-------|------|--------|
|price|string|Formatted price string (**"1 200,48"**)|
|price_value|float|Float price value (**1200.48**)|
|price_with_tax|string|Formatted price with tax string (**"1 200,48"**)|
|price_with_tax_value|float|Float price with tax value (**1200.48**)|
|price_without_tax|string|Formatted price without tax string (**"1 000,40"**)|
|price_without_tax_value|float|Float price without tax value (**1000.4**)|
|tax_price|string|Formatted tax price string (**"200,08"**)|
|tax_price_value|float|Float tax price value (**200.08**)|

### Old price fields

|  Name | Type | Description |
|-------|------|--------|
|old_price|string|Formatted old price string (**"1 680,48"**)|
|old_price_value|float|Float old price value (**1680.48**)|
|old_price_with_tax|string|Formatted old price with tax string (**"1 680,48"**)|
|old_price_with_tax_value|float|Float old price with tax value (**1680.48**)|
|old_price_without_tax|string|Formatted old price without tax string (**"1 400,40"**)|
|old_price_without_tax_value|float|Float old price without tax value (**1400.4**)|
|tax_old_price|string|Formatted tax old price string (**"280,08"**)|
|tax_old_price_value|float|Float tax old price value (**280.08**)|

### Discount price fields

|  Name | Type | Description |
|-------|------|--------|
|discount_price|string|Formatted discount price string (**"480,00"**)|
|discount_price_value|float|Float discount price value (**480**)|
|discount_price_with_tax|string|Formatted discount price with tax string (**"480,00"**)|
|discount_price_with_tax_value|float|Float discount price with tax value (**480**)|
|discount_price_without_tax|string|Formatted discount price without tax string (**"400,00"**)|
|discount_price_without_tax_value|float|Float discount price without tax value (**400**)|
|tax_discount_price|string|Formatted tax discount price string (**"180,00"**)|
|tax_discount_price_value|float|Float tax discount price value (**180**)|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Offer** model.
```php
Offer::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obOfferItem = OfferItem::make(1);
echo $obOfferItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in OfferItem class and add your method name in **$arExtendResult** array.
```php
OfferItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obOfferItem = OfferItem::make(1);
echo $obOfferItem->my_property;
```

## Method List:

### isActive()

Method returns true, if offer is active and not deleted (not trashed).

### getActiveCurrency()

Method returns active currency code.

### getActivePriceType()

Method returns active price type ID.

### setActiveCurrency($sActiveCurrencyCode)

Method set active currency by code.
```php
echo $obOfferItem->setActiveCurrency('EUR')->price;
```

### setActivePriceType($iPriceTypeID)

Method set active price type by ID
```php
echo $obOfferItem->setActivePriceType(1)->price;
```

[Back to modules](modules/home.md)
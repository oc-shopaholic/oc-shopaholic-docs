# ShippingTypeItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|api|ShippingPriceProcessorInterface|
|api_class|string|
|code|string|
|currency|string|Currency symbol. For example: $|
|currency_code|string|Currency code. For example: USD|
|name|string|
|preview_text|string|
|price_data|[ItemPriceContainer](modules/price-container/home.md#ItemPriceContainer)|
|property|array|
|restriction|array|
|tax_percent|float|

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

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **ShippingType** model.
```php
ShippingType::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obShippingTypeItem = ShippingTypeItem::make(1);
echo $obShippingTypeItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in ShippingTypeItem class and add your method name in **$arExtendResult** array.
```php
ShippingTypeItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obShippingTypeItem = ShippingTypeItem::make(1);
echo $obShippingTypeItem->my_property;
```

## Method List:

### getActiveCurrency()

Method returns active currency code.

### getProperty($sField)

Method returns value from property array.
```php
echo $obShippingTYpeItem->getProperty('api_key');
```

### isAvailable($arData = [])

Method returns true, if shipping types are approved via restrictions.
```php
    $obShippingTypeItem->isAvailable(['state' => 'NY']);
```

### setActiveCurrency($sActiveCurrencyCode)

Method sets active currency by code.
```php
echo $obShippingTYpeItem->setActiveCurrency('EUR')->price;
```
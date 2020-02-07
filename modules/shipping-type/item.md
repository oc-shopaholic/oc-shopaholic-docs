{% extends 'docs/modules/item-default.md' %}

{% block fields %}
{{ parent() }}

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
{% endblock %}
{% block method_list %}
{{ parent() }}

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
{% endblock %}
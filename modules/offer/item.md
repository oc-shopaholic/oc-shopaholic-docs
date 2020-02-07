{% extends 'docs/modules/item-default.md' %}

{% block fields %}
{{ parent() }}

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
{% endblock %}

{% block method_list %}
  {{ parent() }}

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
{% endblock %}
[Back to modules](modules/home.md)

[Home](modules/order-position/home.md)
• Model
• [Item](modules/order-position/item/item.md)
• [Collection](modules/order-position/collection/collection.md)
• [Examples](modules/order-position/examples/examples.md)
• [Extending](modules/order-position/extending/extending.md)

# OrderPosition model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

> Model available with [Orders for Shopaholic](plugins/home#orders-for-shopaholic) plugin.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|created_at|\October\Rain\Argon\Argon|
|code|string|
|currency_code|string|Currency code. For example: USD|
|currency_symbol|string|Currency symbol. For example: $|
|is_subscription|bool|Available with [Subscriptions for Shopaholic](plugins/home.md#subscriptions-for-shopaholic) plugin|
|item_id|int|
|item_type|string|
|offer_id|int|
|order_id|int|Relation with [Order](modules/order/model/model.md) model|
|price_data|[ItemPriceContainer](modules/price-container/home.md#ItemPriceContainer)|
|property|array|
|quantity|int|
|subscription_access_id|int|Available with [Subscriptions for Shopaholic](plugins/home.md#subscriptions-for-shopaholic) plugin|
|subscription_period_id|int|Available with [Subscriptions for Shopaholic](plugins/home.md#subscriptions-for-shopaholic) plugin|
|tax_percent|float|

### Price fields

|  Name | Type | Description |
|-------|------|--------|
|price|string|Formatted price string (**"20,10"**)|
|price_value|float|Float price value (**20.1**)|
|price_with_tax|string|Formatted price with tax string (**"20,10"**)|
|price_with_tax_value|float|Float price with tax value (**20.1**)|
|price_without_tax|string|Formatted price without tax string (**"16,75"**)|
|price_without_tax_value|float|Float price without tax value (**16.75**)|
|tax_price|string|Formatted tax price string (**"3,35"**)|
|tax_price_value|float|Float tax price value (**3.35**)|

### Old price fields

|  Name | Type | Description |
|-------|------|--------|
|old_price|string|Formatted old price string (**"21,00"**)|
|old_price_value|float|Float old price value (**21**)|
|old_price_with_tax|string|Formatted old price with tax string (**"21,00"**)|
|old_price_with_tax_value|float|Float old price with tax value (**21**)|
|old_price_without_tax|string|Formatted old price without tax string (**"17,50"**)|
|old_price_without_tax_value|float|Float old price without tax value (**17.5**)|
|tax_old_price|string|Formatted tax old price string (**"3,50"**)|
|tax_old_price_value|float|Float tax old price value (**3.5**)|

### Total price fields

|  Name | Type | Description |
|-------|------|--------|
|total_price|string|Formatted total price string (**"40,20"**)|
|total_price_value|float|Float total price value (**40.2**)|
|old_total_price|string|Formatted old total price string (**"42,00"**)|
|old_total_price_value|float|Float old total price value (**42**)|
|discount_price|string|Formatted discount price string (**"1,80"**)|
|discount_price_value|float|Float discount price value (**1.8**)|

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|item|MorphTo|[Offer](modules/offer/model/model.md)|
|offer|BelongsTo|[Offer](modules/offer/model/model.md)|
|order|BelongsTo|[Order](modules/order/model/model.md)|
|subscription_access|BelongsTo|[SubscriptionAccess](modules/subscriptionaccess/model/model.md)|Available with [Subscriptions for Shopaholic](plugins/home#subscriptions-for-shopaholic) plugin|
|subscription_period|BelongsTo|[SubscriptionPeriod](modules/subscriptionperiod/model/model.md)|Available with [Subscriptions for Shopaholic](plugins/home#subscriptions-for-shopaholic) plugin|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
OrderPosition::extend(function ($obOrderPosition) {
    /** @var OrderPosition $obOrderPosition */
    $obOrderPosition->fillable[] = 'my_field';
    
    $obOrderPosition->addCachedField(['my_field']);
});
```

[Home](modules/order-position/home.md)
• Model
• [Item](modules/order-position/item/item.md)
• [Collection](modules/order-position/collection/collection.md)
• [Examples](modules/order-position/examples/examples.md)
• [Extending](modules/order-position/extending/extending.md)

[Back to modules](modules/home.md)

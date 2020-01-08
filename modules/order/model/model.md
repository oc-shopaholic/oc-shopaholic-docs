[Back to modules](modules/home.md)

[Home](modules/order/home.md)
• Model
• [Item](modules/order/item/item.md)
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Extending](modules/order/extending/extending.md)
<!--
• [Examples](modules/order/examples/examples.md)
-->

# Order model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|created_at|\October\Rain\Argon\Argon|
|currency_code|string|Currency code. For example: USD|
|currency_id|int|Relation with [Currency](modules/currency/model/model.md) model|
|currency_symbol|string|Currency symbol. For example: $|
|manager_id|int|Relation with BackendUser model|
|order_number|string|The order number is automatically generated|
|payment_data|array|Field can be used for integration with payment gateway|
|payment_method_id|int|Relation with [PaymentMethod](modules/payment-method/model/model.md) model|
|payment_response|array|Field can be used for integration with payment gateway|
|payment_token|string|Field can be used for integration with payment gateway|
|position_total_price|string|Formatted position total price string (**"120,05"**)|
|position_total_price_data|[TotalPriceContainer](modules/price-container/home.md#TotalPriceContainer)|
|position_total_price_value|float|Float position total price value (**120.05**)|
|property|array|
|shipping_price|string|Formatted shipping price string (**"10,50"**)|
|shipping_price_data|[ItemPriceContainer](modules/price-container/home.md#ItemPriceContainer)|
|shipping_price_value|float|Float shipping price value (**10.5**)|
|shipping_type_id|int|Relation with [ShippingType](modules/shipping-type/model/model.md) model|
|shipping_tax_percent|float|
|secret_key|string|Field value is hash that is used as a slug for order page|
|status_id|int|Relation with [Status](modules/status/model/model.md) model|
|total_price|string|Formatted order total price string (**"130,55"**)|
|total_price_data|[ItemPriceContainer](modules/price-container/home.md#ItemPriceContainer)|
|total_price_value|float|Float order total price value (**130.55**)|
|transaction_id|string|Field can be used for integration with payment gateway|
|user_id|int|Relation with [User](modules/user/model/model.md) model|
|updated_at|\October\Rain\Argon\Argon|

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|active_task|HasMany|[Task](modules/task/model/model.md)|
|cdek|HasOne|[CdekDispatch](modules/cdek-dispatch/model/model.md)|Available with [CDEK for Shopaholic](plugins/home.md#cdek-for-shopaholic) plugin|
|completed_task|HasMany|[Task](modules/task/model/model.md)|
|coupon|BelongsToMany|[Coupon](modules/coupon/model/model.md)|Available with [Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic) plugin|
|currency|BelongsTo|[Currency](modules/currency/model/model.md)|
|order_position|HasMany|[OrderPosition](modules/order-position/model/model.md)|
|order_promo_mechanism|HasMany|[OrderPromoMechanism](modules/order-promo-mechanism/model/model.md)|
|payment_method|BelongsTo|[PaymentMethod](modules/payment-method/model/model.md)|
|shipping_type|BelongsTo|[ShippingType](modules/shipping-type/model/model.md)|
|status|BelongsTo|[Status](modules/status/model/model.md)|
|task|HasMany|[Task](modules/task/model/model.md)|
|user|BelongsTo|[User](modules/user/model/model.md)|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Order::extend(function ($obOrder) {
    /** @var Order $obOrder */
    $obOrder->fillable[] = 'my_field';
    
    $obOrder->addCachedField(['my_field']);
});
```

[Home](modules/order/home.md)
• Model
• [Item](modules/order/item/item.md)
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Extending](modules/order/extending/extending.md)
<!--
• [Examples](modules/order/examples/examples.md)
-->

[Back to modules](modules/home.md)

[Back to modules](modules/home.md)

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• Item
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Examples](modules/order/examples/examples.md)
• [Extending](modules/order/extending/extending.md)

# OrderItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|created_at|\October\Rain\Argon\Argon|
|currency_code|string|Currency code. For example: USD|
|currency_symbol|string|Currency symbol. For example: $|
|order_number|string|
|order_position|[OrderPositionCollection](modules/order-position/collection/collection.md)|
|order_position_id|array|
|payment_method|[PaymentMethodItem](modules/payment-method/item/item.md)|
|payment_method_id|int|
|property|array|
|secret_key|string|
|shipping_type|[ShippingTypeItem](modules/shipping-type/item/item.md)|
|shipping_type_id|int|
|status|[StatusItem](modules/status/item/item.md)|
|status_id|int|
|updated_at|\October\Rain\Argon\Argon|
|user_id|int|

### Position total price fields

|  Name | Type | Description |
|-------|------|--------|
|position_total_price|string|Formatted position total price string (**"120,05"**)|
|position_total_price_value|float|Float position total price value (**120.05**)|
|old_position_total_price|string|Formatted position total old price string (**"125,05"**)|
|old_position_total_price_value|float|Float position total old price value (**125.05**)|
|discount_position_total_price|string|Formatted position total discount price string (**"5,00"**)|
|discount_position_total_price_value|float|Float position total discount price value (**5**)|
|position_total_price_data|[TotalPriceContainer](modules/price-container/home.md#TotalPriceContainer)|

### Shipping price fields

|  Name | Type | Description |
|-------|------|--------|
|shipping_price|string|Formatted shipping price string (**"10,50"**)|
|shipping_price_value|float|Float shipping price value (**10.5**)|
|old_shipping_price|string|Formatted old shipping price string (**"12,50"**)|
|old_shipping_price_value|float|Float old shipping price value (**12.5**)|
|discount_shipping_price|string|Formatted shipping discount price string (**"2,00"**)|
|discount_shipping_price_value|float|Float shipping discount price value (**2**)|
|shipping_price_data|[ItemPriceContainer](modules/price-container/home.md#ItemPriceContainer)|

### Total price fields

|  Name | Type | Description |
|-------|------|--------|
|total_price|string|Formatted order total price string (**"130,55"**)|
|total_price_value|float|Float order total price value (**130.55**)|
|old_total_price|string|Formatted order total old price string (**"137,55"**)|
|old_total_price_value|float|Float order total old price value (**137.55**)|
|discount_total_price|string|Formatted order total discount price string (**"7,00"**)|
|discount_total_price_value|float|Float order total discount price value (**7**)|
|total_price_data|[ItemPriceContainer](modules/price-container/home.md#ItemPriceContainer)|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Order** model.
```php
Order::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obOrderItem = OrderItem::make(1);
echo $obOrderItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in OrderItem class and add your method name in **$arExtendResult** array.
```php
OrderItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obOrderItem = OrderItem::make(1);
echo $obOrderItem->my_property;
```

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• Item
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Examples](modules/order/examples/examples.md)
• [Extending](modules/order/extending/extending.md)

[Back to modules](modules/home.md)

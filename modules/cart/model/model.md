[Back to modules](modules/home.md)

[Home](modules/cart/home.md)
• Model
• [Components](modules/cart/component/component.md)

# Cart model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

> Model available with [Orders for Shopaholic](plugins/home#orders-for-shopaholic) plugin.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|billing_address|array|Array with billing address fields|
|created_at|\October\Rain\Argon\Argon|
|email|string|
|payment_method_id|int|Relation with [PaymentMethod](modules/payment-method/model/model.md) model|
|property|array|Array with order properties|
|shipping_address|array|Array with shipping address fields|
|shipping_type_id|int|Relation with [ShippingType](modules/shipping-type/model/model.md) model|
|user_id|int|Relation with [User](modules/user/model/model.md) model|
|user_data|array|Array with user properties|
|updated_at|\October\Rain\Argon\Argon|

## Temporary storage of fields

You can use 
**billing_address**, **email**, **payment_method_id**, **property**
**shipping_address**, **shipping_type_id**, **user_data** fields
 for temporary storage of data that will be transferred to order.
This can be useful if user making an order in a few steps. 

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|position|HasMany|[CartPosition](modules/cart-position/model/model.md)|
|user|BelongsTo|[User](modules/user/model/model.md)|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Cart::extend(function ($obCart) {
    /** @var Cart $obCart */
    $obCart->fillable[] = 'my_field';
});
```

[Home](modules/cart/home.md)
• Model
• [Components](modules/cart/component/component.md)

[Back to modules](modules/home.md)

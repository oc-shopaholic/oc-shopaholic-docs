[Back to modules](modules/home.md)

[Home](modules/offer/home.md)
• Model
• [Item](modules/offer/item/item.md)
• [Collection](modules/offer/collection/collection.md)
• [Events](modules/offer/event/event.md)
• [Examples](modules/offer/examples/examples.md)
• [Extending](modules/offer/extending/extending.md)

# Offer model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|created_at|\October\Rain\Argon\Argon|
|deleted_at|\October\Rain\Argon\Argon|Field required for [SoftDelete](https://octobercms.com/docs/database/traits#soft-deleting) trait|
|description|string|
|subscription_period_id|int|Relation with [SubscriptionPeriod](modules/subscriptionperiod/model/model.md) model. Available with [Subscriptions for Shopaholic](plugins/home.md#subscriptions-for-shopaholic) plugin|
|discount_id|int|Relation with [Discount](modules/discount/model/model.md) model. Available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin|
|discount_price|string|Discount price with applying number format. Discount price = old price - price. For example: "49,00"|
|discount_price_value|string|Float discount price value. Discount price = old price - price. For example: 49|
|discount_type|discount_type|Available values: "fixed", "percent". Available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin|
|discount_value|float|Available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin|
|external_id|string|Unique ID of element in external system. Used to link an element in import scripts|
|name|string|
|old_price|string|Old price (without discounts) with applying number format. For example: "12 499,99"|
|old_price_value|float|Float old price value (without discounts). For example: 12499.99|
|price|string|Price with applying number format. For example: "12 450,99"|
|price_value|float|Float price value. For example: 12450.99|
|preview_text|string|
|product_id|int|Relation with [Product](modules/product/model/model.md) model|
|quantity|int|Available quantity|
|tax_percent|float|
|updated_at|\October\Rain\Argon\Argon|

## Images

> You can be found detailed information about file attachments in OctoberCMS [documentation](https://octobercms.com/docs/database/attachments).

Attach one:
* preview_image
* preview_image_facebook - Available with [Facebook for Shopaholic](plugins/home#facebook-for-shopaholic) plugin
* preview_image_vkontakte - Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin
* preview_image_yandex - Available with [Yandex Market for Shopaholic](plugins/home#yandex-market-for-shopaholic) plugin
 
 Attach many:
* images
* images_facebook - Available with [Facebook for Shopaholic](plugins/home#facebook-for-shopaholic) plugin
* images_vkontakte - Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin
* images_yandex - Available with [Yandex Market for Shopaholic](plugins/home#yandex-market-for-shopaholic) plugin

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|active_discount|BelongsTo|[Discount](modules/discount/model/model.md)|Available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin|
|campaign|BelongsToMany|[Campaign](modules/campaign/model/model.md)|Available with [Campaigns for Shopaholic](plugins/home.md#campaigns-for-shopaholic) plugin|
|coupon_group|BelongsToMany|[CouponGroup](modules/coupongroup/model/model.md)|Available with [Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic) plugin|
|subscription_period|BelongsTo|[SubscriptionPeriod](modules/subscriptionperiod/model/model.md)|Available with [Subscriptions for Shopaholic](plugins/home#subscriptions-for-shopaholic) plugin|
|discount|BelongsToMany|[Discount](modules/discount/model/model.md)|Available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin|
|main_price|MorphOne|[Price](modules/price/model/model.md)|
|price_link|MorphMany|[Price](modules/price/model/model.md)|
|product|BelongsTo|[Product](modules/product/model/model.md)|
|property_value|MorphMany|[PropertyValueLink](modules/propertyvaluelink/model/model.md)|[Properties for Shopaholic](plugins/home.md#properties-for-shopaholic)|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Offer::extend(function ($obOffer) {
    /** @var Offer $obOffer */
    $obOffer->fillable[] = 'my_field';
    
    $obOffer->addCachedField(['my_field']);
});
```

[Home](modules/offer/home.md)
• Model
• [Item](modules/offer/item/item.md)
• [Collection](modules/offer/collection/collection.md)
• [Events](modules/offer/event/event.md)
• [Examples](modules/offer/examples/examples.md)
• [Extending](modules/offer/extending/extending.md)

[Back to modules](modules/home.md)

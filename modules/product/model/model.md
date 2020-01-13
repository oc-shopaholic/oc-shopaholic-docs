[Back to modules](modules/home.md)

[Home](modules/product/home.md)
• Model
• [Item](modules/product/item/item.md)
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

# Product model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|active_vk|bool|Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin|
|brand_id_id|int|Relation with [Brand](modules/brand/model/model.md) model|
|category_id|int|Relation with [Category](modules/category/model/model.md) model|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|created_at|\October\Rain\Argon\Argon|
|deleted_at|\October\Rain\Argon\Argon|Field required for [SoftDelete](https://octobercms.com/docs/database/traits#soft-deleting) trait|
|description|string|
|external_id|string|Unique ID of element in external system. Used to link an element in import scripts|
|external_vk_id|int|Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin|
|is_subscription|bool|Available with [Subscriptions for Shopaholic](plugins/home.md#subscriptions-for-shopaholic) plugin|
|name|string|
|preview_text|string|
|popularity|int|Product popularity counter. Available with [Popularity for Shopaholic](plugins/home.md#popularity-for-shopaholic) plugin|
|rating|float|Available with [Reviews for Shopaholic](plugins/home.md#reviews-for-shopaholic) plugin|
|rating_data|array|Available with [Reviews for Shopaholic](plugins/home.md#reviews-for-shopaholic) plugin|
|search_content|string|Available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins|
|search_synonym|string|Available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins|
|slug|string|
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
|accessory|BelongsToMany|[Product](modules/product/model/model.md)|Available with [Accessories for Shopaholic](plugins/home.md#accessories-for-shopaholic) plugin|
|additional_category|BelongsToMany|[Category](modules/category/model/model.md)|
|brand|BelongsTo|[Brand](modules/brand/model/model.md)|
|campaign|BelongsToMany|[Campaign](modules/campaign/model/model.md)|Available with [Campaigns for Shopaholic](plugins/home.md#campaigns-for-shopaholic) plugin|
|category|BelongsTo|[Category](modules/category/model/model.md)|
|coupon_group|BelongsToMany|[CouponGroup](modules/coupongroup/model/model.md)|Available with [Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic) plugin|
|discount|BelongsToMany|[Discount](modules/discount/model/model.md)|Available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin|
|label|BelongsToMany|[Label](modules/label/model/model.md)|Available with [Labels for Shopaholic](plugins/home.md#labels-for-shopaholic) plugin|
|offer|HasMany|[Offer](modules/offer/model/model.md)|
|property_value|MorphMany|Available with [Properties for Shopaholic](plugins/home.md#properties-for-shopaholic) plugin|
|related|BelongsToMany|[Product](modules/product/model/model.md)|Available with [Related products for Shopaholic](plugins/home.md#related-products-for-shopaholic) plugin|
|review|HasMany|[Review](modules/review/model/model.md)|Available with [Reviews for Shopaholic](plugins/home.md#reviews-for-shopaholic) plugin|

## Search fields

Search fields available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins.

**search_synonym** field is available in backend. **search_content** filed isn't available in backend. **search_content** field should be filled in automatically. 

![](./../../../assets/images/backend-product-3.png)

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Product::extend(function ($obProduct) {
    /** @var Product $obProduct */
    $obProduct->fillable[] = 'my_field';
    
    $obProduct->addCachedField(['my_field']);
});
```

[Home](modules/product/home.md)
• Model
• [Item](modules/product/item/item.md)
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

[Back to modules](modules/home.md)

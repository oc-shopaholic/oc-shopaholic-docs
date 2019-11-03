# PromoBlock model {docsify-ignore-all}

[Back to modules](modules/home.md)
/ [Home](modules/promo-block/home.md)
/ Model
/ [Item](modules/promo-block/item/item.md)
/ [Collection](modules/promo-block/collection/collection.md)
/ [Components](modules/promo-block/component/component.md)
/ [Events](modules/promo-block/event/event.md)
/ [Examples](modules/promo-block/examples/examples.md)
/ [Extending](modules/promo-block/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|created_at|\October\Rain\Argon\Argon|
|date_begin|\October\Rain\Argon\Argon|
|date_end|\October\Rain\Argon\Argon|
|description|string|
|name|string|
|preview_text|string|
|sort_order|int|Field required for [Sortable](https://octobercms.com/docs/database/traits#sortable) trait|
|slug|string|
|type|string|
|updated_at|\October\Rain\Argon\Argon|

## Images

> You can be found detailed information about file attachments in OctoberCMS [documentation](https://octobercms.com/docs/database/attachments).

Attach one: **preview_image**, attach many: **images**.

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|campaign|BelongsToMany|[Campaign](modules/campaign/model/model.md)|Available with [Campaigns for Shopaholic](plugins/home.md#campaigns-for-shopaholic) plugin|
|coupon_group|BelongsToMany|[CouponGroup](modules/coupongroup/model/model.md)|Available with [Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic) plugin|
|discount|BelongsToMany|[Discount](modules/discount/model/model.md)|Available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin|
|product|BelongsToMany|[Product](modules/product/model/model.md)|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
PromoBlock::extend(function ($obPromoBlock) {
    /** @var PromoBlock $obPromoBlock */
    $obPromoBlock->fillable[] = 'my_field';
    
    $obPromoBlock->addCachedField(['my_field']);
});
```

[Back to modules](modules/home.md)
/ [Home](modules/promo-block/home.md)
/ Model
/ [Item](modules/promo-block/item/item.md)
/ [Collection](modules/promo-block/collection/collection.md)
/ [Components](modules/promo-block/component/component.md)
/ [Events](modules/promo-block/event/event.md)
/ [Examples](modules/promo-block/examples/examples.md)
/ [Extending](modules/promo-block/extending/extending.md)
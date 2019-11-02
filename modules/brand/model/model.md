# Brand model {docsify-ignore-all}

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ Model
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ [Components](modules/brand/component/brand-list/brand-list.md)
/ [Events](modules/brand/event/event.md)
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|created_at|\October\Rain\Argon\Argon|
|description|string|
|external_id|string|Unique ID of element in external system. Used to link an element in import scripts|
|name|string|
|preview_text|string|
|search_content|string|Available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins|
|search_synonym|string|Available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins|
|slug|string|
|updated_at|\October\Rain\Argon\Argon|

## Images

> You can be found detailed information about file attachments in OctoberCMS [documentation](https://octobercms.com/docs/database/attachments).

Attach one: **preview_image**, attach many: **images**.

## Relations

|Type|Name|Description|
|-----|-----|-----|
|BelongsToMany|campaign|Available with [Campaigns for Shopaholic](plugins/home.md#campaigns-for-shopaholic) plugin|
||coupon_group|Available with [Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic) plugin|
||discount|Available with ["Discounts for Shopaholic"](plugins/home.md#discounts-for-shopaholic) plugin|
|HasMany|product|


## Search fields

Search fields available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins.

**search_synonym** field is available in backend. **search_content** filed isn't available in backend. **search_content** field should be filled in automatically. 

![](./../../../assets/images/backend-brand-4.png)

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Brand::extend(function ($obBrand) {
    /** @var Brand $obBrand */
    $obBrand->fillable[] = 'my_field';
    
    $obBrand->addCachedField(['my_field']);
});
```

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ Model
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ [Components](modules/brand/component/brand-list/brand-list.md)
/ [Events](modules/brand/event/event.md)
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)
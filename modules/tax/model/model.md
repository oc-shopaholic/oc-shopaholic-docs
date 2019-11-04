[Back to modules](modules/home.md)

[Home](modules/tax/home.md)
• Model
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• [Components](modules/tax/component/component.md)
• [Examples](modules/tax/examples/examples.md)
• [Extending](modules/tax/extending/extending.md)
• [Advanced usage](modules/tax/advanced-usage/home.md)

# Tax model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|applied_to_shipping_price|bool|Available with [Orders for Shopaholic](plugins/home.md#orders-for-shopaholic)|
|created_at|\October\Rain\Argon\Argon|
|deleted_at|\October\Rain\Argon\Argon|Field required for [SoftDelete](https://octobercms.com/docs/database/traits#soft-deleting) trait|
|is_global|bool|
|description|string|
|name|string|
|percent|float|
|sort_order|int|Field required for [Sortable](https://octobercms.com/docs/database/traits#sortable) trait|
|updated_at|\October\Rain\Argon\Argon|

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|category|BelongsToMany|[Category](modules/category/model/model.md)|
|country|BelongsToMany|\RainLab\Location\Models\Country|Available with [RainLab.Location](https://octobercms.com/plugin/rainlab-location) plugin|
|product|BelongsToMany|[Product](modules/product/model/model.md)|
|state|BelongsToMany|\RainLab\Location\Models\State|Available with [RainLab.Location](https://octobercms.com/plugin/rainlab-location) plugin|


## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Tax::extend(function ($obTax) {
    /** @var Tax $obTax */
    $obTax->fillable[] = 'my_field';
    
    $obTax->addCachedField(['my_field']);
});
```

[Home](modules/tax/home.md)
• Model
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• [Components](modules/tax/component/component.md)
• [Examples](modules/tax/examples/examples.md)
• [Extending](modules/tax/extending/extending.md)
• [Advanced usage](modules/tax/advanced-usage/home.md)

[Back to modules](modules/home.md)

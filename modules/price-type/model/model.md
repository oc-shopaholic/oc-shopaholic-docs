[Back to modules](modules/home.md)

[Home](modules/price-type/home.md)
• Model
• [Advanced usage](modules/price-type/advanced-usage/home.md)

# PriceType model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|created_at|\October\Rain\Argon\Argon|
|currency_id|int|Relation with [Currency](modules/currency/model/model.md) model|
|deleted_at|\October\Rain\Argon\Argon|Field required for [SoftDelete](https://octobercms.com/docs/database/traits#soft-deleting) trait|
|external_id|string|Unique ID of element in external system. Used to link an element in import scripts|
|name|string|
|sort_order|int|Field required for [Sortable](https://octobercms.com/docs/database/traits#sortable) trait|
|updated_at|\October\Rain\Argon\Argon|

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|currency|BelongsTo|[Currency](modules/currency/model/model.md)|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
PriceType::extend(function ($obPriceType) {
    /** @var PriceType $obPriceType */
    $obPriceType->fillable[] = 'my_field';
});
```

[Home](modules/price-type/home.md)
• Model
• [Advanced usage](modules/price-type/advanced-usage/home.md)

[Back to modules](modules/home.md)

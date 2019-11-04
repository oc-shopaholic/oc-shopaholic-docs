[Back to modules](modules/home.md)

[Home](modules/currency/home.md)
• Model
• [Item](modules/currency/item/item.md)
• [Collection](modules/currency/collection/collection.md)
• [Components](modules/currency/component/component.md)
• [Examples](modules/currency/examples/examples.md)
• [Extending](modules/currency/extending/extending.md)
• [Advanced usage](modules/currency/advanced-usage/home.md)

# Currency model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|active|bool|
|code|string|For example: USD|
|created_at|\October\Rain\Argon\Argon|
|deleted_at|\October\Rain\Argon\Argon|Field required for [SoftDelete](https://octobercms.com/docs/database/traits#soft-deleting) trait|
|external_id|string|Unique ID of element in external system. Used to link an element in import scripts|
|is_default|bool|You can set one of currencies as default currency|
|name|string|
|rate|float|Currency conversion rate|
|sort_order|int|Field required for [Sortable](https://octobercms.com/docs/database/traits#sortable) trait|
|symbol|string|For example: $|
|updated_at|\October\Rain\Argon\Argon|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Currency::extend(function ($obCurrency) {
    /** @var Currency $obCurrency */
    $obCurrency->fillable[] = 'my_field';
    
    $obCurrency->addCachedField(['my_field']);
});
```

[Home](modules/currency/home.md)
• Model
• [Item](modules/currency/item/item.md)
• [Collection](modules/currency/collection/collection.md)
• [Components](modules/currency/component/component.md)
• [Examples](modules/currency/examples/examples.md)
• [Extending](modules/currency/extending/extending.md)
• [Advanced usage](modules/currency/advanced-usage/home.md)

[Back to modules](modules/home.md)

[Back to modules](modules/home.md)

[Home](modules/price/home.md)
• Model

# Price model {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|created_at|\October\Rain\Argon\Argon|
|discount_price|string|Discount price with applying number format. Discount price = old price - price. For example: "49,00"|
|discount_price_value|string|Float discount price value. Discount price = old price - price. For example: 49|
|item_id|int|
|item_type|string|
|old_price|string|Old price (without discounts) with applying number format. For example: "12 499,99"|
|old_price_value|float|Float old price value (without discounts). For example: 12499.99|
|price_type_id|int|Relation with [PriceType](modules/price-type/model/model.md) model|
|price|string|Price with applying number format. For example: "12 450,99"|
|price_value|float|Float price value. For example: 12450.99|
|updated_at|\October\Rain\Argon\Argon|

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
|price_type|BelongsTo|[PriceType](modules/price-type/model/model.md)|

## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
Price::extend(function ($obPrice) {
    /** @var Price $obPrice */
    $obPrice->fillable[] = 'my_field';
});
```

[Home](modules/price/home.md)
• Model

[Back to modules](modules/home.md)

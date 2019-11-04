[Back to modules](modules/home.md)

[Home](modules/promo-block/home.md)
• [Model](modules/promo-block/model/model.md)
• Item
• [Collection](modules/promo-block/collection/collection.md)
• [Components](modules/promo-block/component/component.md)
• [Events](modules/promo-block/event/event.md)
• [Examples](modules/promo-block/examples/examples.md)
• [Extending](modules/promo-block/extending/extending.md)

# PromoBlockItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|date_begin|\October\Rain\Argon\Argon|
|date_end|\October\Rain\Argon\Argon|
|description|string|
|images|\October\Rain\Database\Collection, \System\Models\File[]|
|name|string|
|preview_image|\System\Models\File|
|preview_text|string|
|product|[ProductCollection](modules/product/collection/collection.md)|
|slug|string|
|type|string|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **PromoBlock** model.
```php
PromoBlock::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obPromoBlockItem = PromoBlockItem::make(1);
echo $obPromoBlockItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in PromoBlockItem class and add your method name in **$arExtendResult** array.
```php
PromoBlockItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obPromoBlockItem = PromoBlockItem::make(1);
echo $obPromoBlockItem->my_property;
```

## Method List:

### getPageUrl(_[$sPageCode = 'promo-block'']_)
  * $sPageCode - page file name

Method returns URL of promo block page.
Method gets PromoBlockPage component attached on page and compiles parameter :slug to generate page URL.

[Home](modules/promo-block/home.md)
• [Model](modules/promo-block/model/model.md)
• Item
• [Collection](modules/promo-block/collection/collection.md)
• [Components](modules/promo-block/component/component.md)
• [Events](modules/promo-block/event/event.md)
• [Examples](modules/promo-block/examples/examples.md)
• [Extending](modules/promo-block/extending/extending.md)

[Back to modules](modules/home.md)

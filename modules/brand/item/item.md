# BrandItem {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture) and [ElementItem class](item-class/item-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|
|description|string|
|images|\October\Rain\Database\Collection, \System\Models\File[]|
|name|string|
|preview_image|\System\Models\File|
|preview_text|string|
|slug|string|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Brand** model.
```php
Brand::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obBrandItem = BrandItem::make(1);
echo $obBrandItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in BrandItem class and add your method name in **$arExtendResult** array.
```php
BrandItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obBrandItem = BrandItem::make(1);
echo $obBrandItem->my_property;
```

## Method List:

### getPageUrl($sPageCode = 'brand')
  * $sPageCode - page file name

Method returns URL of brand page.
Method gets list of [BrandPage](modules/brand/component/brand-page/brand-page.md) component attached on page and compiles parameter :slug to generate page URL.

[Back to modules](modules/home.md)
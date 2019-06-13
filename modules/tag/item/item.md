# TagItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture) and [ElementItem class](item-class/item-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|category|[CategoryItem](category/item/item.md)|
|category_id|int|
|description|string|
|images|\October\Rain\Database\Collection, \System\Models\File[]|
|name|string|
|preview_image|\System\Models\File|
|preview_text|string|
|product|[ProductCollection](modules/product/collection/collection.md)|
|product_id_list|array|
|slug|string|
|static_slug|string| 

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Tag** model.
```php
Tag::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obTagItem = TagItem::make(1);
echo $obTagItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in TagItem class and add your method name in **$arExtendResult** array.
```php
TagItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obTagItem = TagItem::make(1);
echo $obTagItem->my_property;
```
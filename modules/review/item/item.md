# ReviewItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|comment|string|
|created_at|\October\Rain\Argon\Argon|
|email|string|
|name|string|
|phone|string|
|product|[ProductItem](modules/product/item/item.md)|
|product_id|int|
|rating|int|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Review** model.
```php
Review::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obReviewItem = ReviewItem::make(1);
echo $obReviewItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in ReviewItem class and add your method name in **$arExtendResult** array.
```php
ReviewItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obReviewItem = ReviewItem::make(1);
echo $obReviewItem->my_property;
```
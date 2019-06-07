# LabelItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture) and [ElementItem class](item-class/item-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|
|description|string|
|image|\System\Models\File|
|name|string|
|product|[ProductCollection](product/collection/collection.md)|
|slug|string| 

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Label** model.
```php
Label::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obLabelItem = LabelItem::make(1);
echo $obLabelItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in LabelItem class and add your method name in **$arExtendResult** array.
```php
LabelItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obLabelItem = LabelItem::make(1);
echo $obLabelItem->my_property;
```

## Method List:

### getPageUrl($sPageCode = 'label'')
  * $sPageCode - page file name

Method returns URL of label page.
Method gets [LabelPage](label/component/label-page/label-page.md) component attached on page and compiles parameter :slug to generate page URL.
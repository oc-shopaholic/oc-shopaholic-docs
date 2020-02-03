# PropertyItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|description|string|
|filter_name|string|
|filter_type|string|
|name|string|
|measure|[MeasureItem](modules/measure/item/item.md)|
|measure_id|int|
|property_value|[PropertyValueCollection](modules/property-value/collection/collection.md)|
|slug|string|
|type|string|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Property** model.
```php
Property::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obPropertyItem = PropertyItem::make(1);
echo $obPropertyItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in PropertyItem class and add your method name in **$arExtendResult** array.
```php
PropertyItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obPropertyItem = PropertyItem::make(1);
echo $obPropertyItem->my_property;
```

## Method list

### hasValue()

Return true, if property has not empty values.
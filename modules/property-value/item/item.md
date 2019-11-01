# PropertyValueItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|slug|string|
|value|string|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **PropertyValue** model.
```php
PropertyValue::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obPropertyValueItem = PropertyValueItem::make(1);
echo $obPropertyValueItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in PropertyValueItem class and add your method name in **$arExtendResult** array.
```php
PropertyValueItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obPropertyValueItem = PropertyValueItem::make(1);
echo $obPropertyValueItem->my_property;
```

## Method list

### isDisabled($obProductList, $obOfferList = null)
  *  ([ProductCollection](modules/product/collection/collection.md)) $obProductList - filtered product collection
  *  ([OfferCollection](modules/offer/collection/collection.md)) $obOfferList - filtered offer collection

Method returns true, if you apply filter with value == $this->slug, then filtered product collection will not be empty.
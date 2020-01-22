# PropertyCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

### active()

Method applies filter to field "active" = true for elements of collection.

### code($arCodeList)
  * (array|string) $arCodeList - array or string with property code

Method returns new collection with filtered properties by "code" field.
```php
    $obList = PropertyCollection::make([1,2,10,15])->code('test');
```
```php
    $obList = PropertyCollection::make([1,2,10,15])->code(['test', 'main']);
```

### getByCode($sCode)

Method return [PropertyItem](modules/property/item/item.md) class object with code value == $sCode.
```php
    $obItem = PropertyCollection::make([1,2,10,15])->getByCode('main');
```

### getGroupList()

Method returns [GroupCollection](modules/property-group/collection/collection.md) object.
Method used pivot field "groups" of relation between Category model and Product model or Offer model.

### group($iGroupID)

Method returns new collection with filtered properties.
Method used pivot field "groups" of relation between Category model and Product model or Offer model.

### sort()

Method sorts elements of collection by "sort_order" field.

## FilterPropertyCollection

FilterPropertyCollection class is extended from [PropertyCollection](modules/property/collection/collection.md#propertycollection) class.

### getFilterName($iPropertyID)

Method returns filter name for property with ID = $iPropertyID.
Method returns property name, if pivot field "filter_name" is empty.
Method used pivot field "filter_name" of relation between Category model and Product model or Offer model.
```php
    $obCategory = CategoryItem::make(1);
    $obPropertyList = $obCategory->product_filter_property;
    
    foreach($obPropertyList as $obPropertyItem) {
        echo $obPropertyList->getFilterName($obPropertyItem->id);
    }
```

### getFilterType($iPropertyID)

Method returns filter type for property with ID = $iPropertyID.
Method used pivot field "filter_type" of relation between Category model and Product model or Offer model.
```php
    $obCategory = CategoryItem::make(1);
    $obPropertyList = $obCategory->product_filter_property;
    
    foreach($obPropertyList as $obPropertyItem) {
        echo $obPropertyList->getFilterType($obPropertyItem->id);
    }
```

### type($sFilterType)

Method returns new collection with filtered properties.
Method used pivot field "filter_type" of relation between Category model and Product model or Offer model.
```php
    $obCategory = CategoryItem::make(1);
    $obPropertyList = $obCategory->product_filter_property;
    
    $obCheckboxFilterList = $obPropertyList->type('checkbox');
```
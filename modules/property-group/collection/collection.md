# GroupCollection {docsify-ignore-all}
              
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### getByCode($sCode)

Method return [GroupItem](modules/property-group/item/item.md) class object with code value == $sCode.
```php
    $obItem = GroupCollection::make([1,2,10,15])->getByCode('main');
```

### hasCode($sCode)

Method return true, if collection has [GroupItem](modules/property-group/item/item.md) class object with code value == $sCode.
```php
    $obList = GroupCollection::make([1,2,10,15]);
    if($obList->hasCode('main')) {
        //to do something
    }
```

### sort()

Method sorts elements of collection by "sort_order" field.
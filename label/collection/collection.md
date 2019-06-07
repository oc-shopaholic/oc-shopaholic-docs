# LabelCollection {docsify-ignore-all}
   
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### active()

Method applies filter to field "active" = true  for elements of collection.

### getByCode($sCode)

Method return [LabelItem](label/item/item.md) class object with code value == $sCode.
```php
    $obItem = LabelCollection::make([1,2,10,15])->getByCode('new');
``` 

### product($iProductID)
  * $iProductID - product ID

Method applies filter by product ID.

### sort()

Method sorts elements of collection by "sort_order" field.
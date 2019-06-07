# ShippingTypeCollection {docsify-ignore-all}
            
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### active()

Method applies filter to field "active" = true  for elements of collection.

### available($arData = [])

Method removes shipping types from collection that are not approved via restrictions.
```php
    $obList = ShippingTypeCollection::make([1,2,10,15])->available(['state' => 'NY']);
```

### sort()

Method sorts elements of collection by "sort_order" field.
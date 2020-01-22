# PaymentMethodCollection {docsify-ignore-all}
                    
!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

### active()

Method applies filter to field "active" = true  for elements of collection.

### available($arData = [])

Method removes payment methods from collection that are not approved via restrictions.
```php
    $obList = PaymentMethodCollection::make([1,2,10,15])->available(['state' => 'NY']);
```

### sort()

Method sorts elements of collection by "sort_order" field.
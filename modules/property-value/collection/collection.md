# PropertyValueCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### getValueString(_[$sSeparator = ', ']_)

Method returns string with property values.
```php
    $obList = PropertyValueCollection::make([1,2,10,15])->sort();
    
    echo $obList->getValueString();
    //result string: 'test1, test2, test10, test15'
    
    echo $obList->getValueString('-');
    //result string: 'test1-test2-test10-test15'
```

### sort()

Method sorts elements of collection by "value" field.
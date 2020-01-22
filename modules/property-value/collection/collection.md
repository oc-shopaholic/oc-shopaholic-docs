# PropertyValueCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

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
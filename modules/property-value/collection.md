{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [getValueString](#getvaluestringsseparator-39-39)
* [sort](#sort)

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
{% endblock %}
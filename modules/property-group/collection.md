{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [getByCode](#getbycodescode)
* [hasCode](#hascodescode)
* [sort](#sort)

### getByCode($sCode)

Method return {{ item.link() }} class object with code value == $sCode.
```php
    $obItem = GroupCollection::make([1,2,10,15])->getByCode('main');
```

### hasCode($sCode)

Method return true, if collection has {{ item.link() }} class object with code value == $sCode.
```php
    $obList = GroupCollection::make([1,2,10,15]);
    if($obList->hasCode('main')) {
        //to do something
    }
```

### sort()

Method sorts elements of collection by "sort_order" field. You can change sorting of property groups by going to **Backend -> Settings -> Property groups -> Reorder records**

![](./../../../assets/images/backend-property-group-2.png ':class=medium-image')
{% endblock %}

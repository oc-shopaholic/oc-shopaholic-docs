{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [getByCode](#getbycodescode)
* [product](#productiproductid)
* [sort](#sort)

### active()

Method applies filter to field "active" = true  for elements of collection.

### getByCode($sCode)

Method return {{ get_item('item').link() }} class object with code value == $sCode.
```php
    $obItem = LabelCollection::make([1,2,10,15])->getByCode('new');
``` 

### product($iProductID)
  * $iProductID - product ID

Method applies filter by product ID.

### sort()

Method sorts elements of collection by "sort_order" field.
{% endblock %}
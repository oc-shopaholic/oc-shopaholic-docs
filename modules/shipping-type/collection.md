{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [available](#availableardata-)
* [sort](#sort)

### active()

Method applies filter to field "active" = true  for elements of collection.

### available($arData = [])

Method removes shipping types from collection that are not approved via restrictions.
```php
$obList = ShippingTypeCollection::make([1,2,10,15])->available(['state' => 'NY']);
```

### sort()

Method sorts elements of collection by "sort_order" field. You can change sorting of shipping types by going to **Backend -> Settings -> Shipping types -> Reorder records**

![](./../../../assets/images/backend-shipping-type-2.png ':class=medium-image')
{% endblock %}

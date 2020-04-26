{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [hidden](#hidden)
* [notHidden](#nothidden)
* [sort](#sortssorting)

### active()

Method applies filter by field "active" for elements of collection.

### hidden()

Method applies filter by "hidden" field for elements of collection.

### notHidden()

Method applies filter by "hidden" field for elements of collection.

### sort($sSorting)

Method sorts elements of collection by $sSorting value.
Available sorting value:
  * 'default' - default value, sorting by sort_order field value
  * 'date_begin|asc'
  * 'date_begin|desc'
  * 'date_end|asc'
  * 'date_end|desc'
```php
$obList = PromoBlockCollection::make()->sort('date_begin|desc');
```

You can change sorting of promo blocks by going to **Backend -> Promotions -> Promo blocks -> Reorder records**

![](./../../../assets/images/backend-promo-block-2.png ':class=medium-image')
{% endblock %}

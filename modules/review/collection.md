{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [product](#productiproductid)
* [sort](#sort)

### active()

Method applies filter to field "active" = true  for elements of collection.

### product($iProductID)
  * $iProductID - product ID

Method returns collection of review for product with ID == $iProductID and sorted by "id" field (desc).

### sort()

Method sorts elements of collection by "id" field (desc).
{% endblock %}
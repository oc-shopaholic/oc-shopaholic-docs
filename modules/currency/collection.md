{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [sort](#sort)

### active()

Method applies filter by "active" field for elements of collection.

### sort()

Method sorts elements of collection by "sort_order" field. You can change sorting of currencies by going to **Backend -> Settings -> Currencies -> Reorder records**

![](./../../../assets/images/backend-currency-3.png ':class=medium-image')
{% endblock %}

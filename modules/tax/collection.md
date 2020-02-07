{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [sort](#sort)

### active()

Method applies filter to field "active" = true  for elements of collection.

### sort()

Method sorts elements of collection by "sort_order" field.
{% endblock %}

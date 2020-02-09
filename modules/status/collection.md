{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [isUserShow](#isusershow)
* [sort](#sort)

### isUserShow()

Method applies filter to field "is_user_show" = true for elements of collection.

### sort()

Method sorts elements of collection by "sort_order" field.
You can change sorting of statuses by going to **Backend -> Settings -> Order statuses -> Reorder records**

![](./../../../assets/images/backend-status-2.png)
{% endblock %}
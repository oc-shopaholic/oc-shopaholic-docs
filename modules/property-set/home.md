{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Property Set" module allows you to create property sets and attach them to categories.
A set of properties can be enabled globally.
Then the global property set will be displayed for all products.

## Backend

You can create and edit property sets by going to **Backend -> Settings-> Property sets**

![](./../../assets/images/backend-property-set-1.png)

You can change sorting of property sets by going to **Backend -> Settings-> Property sets -> Reorder records**

![](./../../assets/images/backend-property-set-2.png)

You can attach property sets with product and offer properties by going to **Backend -> Settings-> Property sets -> Create/Edit**

![](./../../assets/images/backend-property-set-3.png)
{% endblock %}
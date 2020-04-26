{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Property groups" module allows you to group properties and render properties in different parts of the product page or product card.

![](./../../assets/images/fronend-property-group-1.png ':class=medium-image')

![](./../../assets/images/fronend-property-group-2.png ':class=medium-image')

## Backend

You can create and edit property groups by going to **Backend -> Settings -> Property groups**

![](./../../assets/images/backend-property-group-1.png ':class=medium-image')

You can change sorting of property groups by going to **Backend -> Settings -> Property groups -> Reorder records**

![](./../../assets/images/backend-property-group-2.png ':class=medium-image')

You can link properties and property groups in the settings for linking between properties and property sets.
Go to  **Backend -> Settings -> Property sets -> Link between properties and property sets**

![](./../../assets/images/backend-property-group-3.png ':class=medium-image')

{% endblock %}

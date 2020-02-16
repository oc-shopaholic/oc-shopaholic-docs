{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

“Labels” module allows you to mark products with such attributes as: “top”, “best seller”, “new”, etc.
You decide how the label will be named and what products it will be attached to.

## Backend

You can create and edit labels by going to **Backend -> Settings -> Labels**

![](./../../assets/images/backend-label-1.png)

You can change sorting of labels by going to **Backend -> Settings -> Labels -> Reorder records**

![](./../../assets/images/backend-label-2.png)

You can attach products to label by going to **Backend -> Settings -> Labels -> "Product" tab**

![](./../../assets/images/backend-label-3.png)
{% endblock %}

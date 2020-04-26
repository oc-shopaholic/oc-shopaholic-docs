{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

## Backend

Module "price types" allows you to create price types and set different prices for one offer.
You can display different types of prices on the product card.
You can display a catalog with different types of prices (for example: for different user groups).
You can create orders by setting the active price type before creating an order.

!> **Attention!** You can set **price format** in Backend -> Settings -> Application settings -> "Price format" tab

![](./../../assets/images/backend-settings-1.png ':class=medium-image')

You can create and edit price types by going to **Backend -> Settings -> Price types**

![](./../../assets/images/backend-price-type-1.png ':class=medium-image')

After creating price type you can fill prices in offers

![](./../../assets/images/backend-price-type-2.png ':class=medium-image')
{% endblock %}

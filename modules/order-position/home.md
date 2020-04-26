{% extends 'docs/modules/home-default.md' %}

{% block content %}
{{ parent() }}

Order positions contain relationship between the order and the offers that the user added to cart when creating the order.
When creating an order, the offer price is saved in the order position.
The order position contains the offer price without any discounts in database.

## Backend

You can create and edit orders and order positions by going to **Backend -> Orders**

![](./../../assets/images/backend-order-1.png ':class=medium-image')

![](./../../assets/images/backend-order-3.png ':class=medium-image')

![](./../../assets/images/backend-order-4.png ':class=medium-image')
{% endblock %}

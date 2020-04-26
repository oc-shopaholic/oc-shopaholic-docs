{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

## Backend

You can set price of your offers. Products does not have price.
Only offers contains the price.
You can create several offers for one product and set them different prices.

!> **Attention!** All offer prices must be set in default currency.

!> **Attention!** You can set **price format** in Backend -> Settings -> Application settings -> "Price format" tab

![](./../../assets/images/backend-settings-1.png ':class=medium-image')

You can create and edit price types by going to **Backend -> Settings -> Price types**

![](./../../assets/images/backend-price-type-1.png ':class=medium-image')

After creating price type you can fill prices in offers

![](./../../assets/images/backend-price-type-2.png ':class=medium-image')
{% endblock %}

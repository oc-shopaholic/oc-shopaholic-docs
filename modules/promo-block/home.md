{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

Using promo blocks, you can make separate promo pages on your site, with description of promotions, discounts, or separate group of products.
You can show blocks with list of products that are attached to promo block. For example: block "on sale now".

You can attach {{ get_module('discount').link() }}, {{ get_module('campaign').link() }} or {{ get_module('coupon-group').link() }} to promo block.
This will allow you to render products attached to {{ get_module('discount').link() }}, {{ get_module('campaign').link() }} or {{ get_module('coupon-group').link() }} on promo block page. 

## Backend

You can create and edit promo blocks by going to **Backend -> Promotions -> Promo blocks**

![](./../../assets/images/backend-promo-block-1.png ':class=medium-image')
{% endblock %}

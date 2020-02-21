{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Viewed products" module allows you to add automatically products to the viewed products list.
Users can view the product list and remove products from the viewed products list.

For **non-authorized** users, the list of viewed products is saved in **session**.
For **authorized** users, the list of viewed products is saved in {{ get_module('user').link() }} table, **"viewed_products"** field.

The "Viewed products" module adds **onClearViewedProductList(), onRemoveFromViewedProductList()** methods to {{ get_component('product').link('product-data') }},
{{ get_component('product').link('product-page') }}, {{ get_component('product').link('product-list') }} components.

You can get list of viewed products with using **viewed()** method from {{ get_collection('product').link() }} class object. 
{% endblock %}

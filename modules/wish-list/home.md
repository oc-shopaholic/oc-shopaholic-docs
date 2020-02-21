{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Wish list" module allows you to add products to the wish list.
Users can view the wish list, add products to wish list, remove products from wish list.

For **non-authorized** users, the list of products added to the wish list is saved in **session**.
For **authorized** users, the list of products added to the wish list is saved in {{ get_module('user').link() }} table, **"product_wish_list"** field.

The "Wish list" module adds **onAddToWishList(), onClearWishList(), onRemoveFromWishList()** methods to {{ get_component('product').link('product-data') }},
{{ get_component('product').link('product-page') }}, {{ get_component('product').link('product-list') }} components.

You can get list of products added to the wish list with using **wishList()** method from {{ get_collection('product').link() }} class object. 

{% endblock %}

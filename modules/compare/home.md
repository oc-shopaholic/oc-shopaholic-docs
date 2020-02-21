{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Compare" module allows you to add products to the comparison list.
Users can view the comparison list, add products to compare list and remove products from the list.
The module now does not contain any complex logic for comparing product properties.

For **non-authorized** users, the list of products added to the comparison is saved in **session**.
For **authorized** users, the list of products added to the comparison is saved in {{ get_module('user').link() }} table, **"product_compare"** field.

The "Compare" module adds **onAddToCompare(), onClearCompareList(), onRemoveFromCompare()** methods to {{ get_component('product').link('product-data') }},
{{ get_component('product').link('product-page') }}, {{ get_component('product').link('product-list') }} components.

You can get list of products added to the comparison with using **compare()** method from {{ get_collection('product').link() }} class object. 

{% endblock %}

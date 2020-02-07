{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

## Introduction

Module plugin allows to bind products and assign them as an related to another product (for instance a mobile phone iPhone X and iPhone X MAX).
Related products block usually looks like list of products on main product page.

> Related products do not depend on product categories.

![](./../../assets/images/related-products-1.png)

## Backend

You can attach products as related by going to **Backend -> Catalog -> Products -> Edit product -> "Related products" tab**

![](./../../assets/images/backend-related-products-1.png)
{% endblock %}
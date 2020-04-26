{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

"Tags" module allows you to create seo pages with a list of products within a single category.
Tag can only be linked to one category.

## Backend

You can create and edit tags by going to **Backend -> Catalog -> Tags**

![](./../../assets/images/backend-tag-1.png ':class=medium-image')

You can change sorting of tags by going to **Backend -> Catalog -> Tags -> Reorder records**

![](./../../assets/images/backend-tag-2.png ':class=medium-image')

You can link products with tags by going to **Backend -> Catalog -> Tags -> "Products" tab**

![](./../../assets/images/backend-tag-3.png ':class=medium-image')
{% endblock %}

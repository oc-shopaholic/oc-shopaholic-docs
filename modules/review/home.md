{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

"Reviews" module allows you to place a feedback form on the product page.
You can display a list of collected reviews on the product page.
Review may contain a rating value.
The rating value is used to calculate the rating of the product and to sort the products by rating.

## Backend

You can create and edit reviews by going to **Backend -> Catalog -> Reviews**

![](./../../assets/images/backend-review-1.png ':class=medium-image')

You can set rating range and automatic activation of reviews after creation by going to **Backend -> Settings -> Basic settings -> "Reviews" tab**
![](./../../assets/images/backend-settings-11.png ':class=medium-image')

{% endblock %}

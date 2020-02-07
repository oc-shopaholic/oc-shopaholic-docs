{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

## Search fields

Search for Shopaholic plugin adds **search_synonym** and **search_content** fields to
[Brand](modules/brand/model/model), [Category](modules/category/model/model),
[Offer](modules/offer/model/model), [Product](modules/product/model/model)
models.
**search_synonym** field is available in backend and allows to add search synonyms
to certain keywords so customers can easily find elements by typing semantically related phrases.
**search_content** filed isn't available in backend. **search_content** field should be filled in automatically. 

![](./../../assets/images/backend-brand-4.png)

## Settings

You can configure search settings: list of fields that will use in search. 
Go to **Backend -> Application settings -> "Search" tab**

![](./../../assets/images/backend-settings-14.png)
{% endblock %}

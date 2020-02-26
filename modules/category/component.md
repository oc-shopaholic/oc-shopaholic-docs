{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [CategoryList](#categorylist)
  * [make](#makearelementidlist-null)
* [CategoryPage](#categorypage)
  * [get](#get)
* [CategoryData](#categorydata)
  * [get](#getielementid)

## CategoryList

Component allows you to render blocks with categories. For example: all categories, tree of categories,
random categories, etc.

### make(_[$arElementIDList = null]_)

Method returns new object of {{ collection.link() }} class.

## CategoryPage

Component allows you to render category page.

Available properties:

{% verbatim %}
|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If value is 1, then component will make additional check for full URL of page|
|has_wildcard|0 or 1|If value is 1, then component will process slug how wildcard URL parameter|
|skip_error|0 or 1|If value is 1, then component will not return "Not found" error|
{% endverbatim %}

### get()

Method returns {{ item.link() }} object for current page.

## CategoryData

Component allows you to render blocks with category. You can get category object by ID.

### get($iElementID)

Method returns {{ item.link() }} object with ID = $iElementID.
{% endblock %}

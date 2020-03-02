{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [BrandList](#brandlist)
* [BrandPage](#brandpage)
* [BrandData](#branddata)

## BrandList

Component allows you to render blocks with brands. For example: all brands, brand list with pagination,
random brands, filter panel with brands, etc.

### make(_[$arElementIDList = null]_)

Method returns new object of {{ collection.link() }} class.

For example: create simple block with random 5 brand list on index page.

{{ get_module('brand').example('partials/brand/random-brand-list/random-brand-list-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/brand-card/brand-card-1.htm')|raw }}

## BrandPage

Component allows you to render brand page.

Available properties:
{% verbatim %}
|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If value is 1, then component will make additional check for full URL of page|
|skip_error|0 or 1|If value is 1, then component will not return "Not found" error|
{% endverbatim %}

### get()

Method returns {{ item.link() }} object for current page.

For example: create simple brand page and render brand name, preview image, description.

{{ get_module('brand').example('pages/brand-page-1.htm')|raw }}

## BrandData

Component allows you to render blocks with brand. You can get brand object by ID.

### get($iElementID)

Method returns {{ item.link() }} object with ID = $iElementID.
{% endblock %}
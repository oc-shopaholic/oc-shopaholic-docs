{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [PromoBlockList](#promoblocklist)
  * [getSorting](#getsorting)
  * [make](#makearelementidlist-null)
* [PromoBlockPage](#promoblockpage)
  * [get](#get)
* [PromoBlockData](#promoblockdata)
  * [get](#getielementid)

## PromoBlockList

Component allows you to render blocks with promo blocks. For example: all promo blocks, promo block list with pagination,
random promo blocks, etc.

Available values of default "sorting" property:
  * default
  * date_begin|asc
  * date_begin|desc
  * date_end|asc
  * date_end|desc

### getSorting()

Get active sorting key value.

### make(_[$arElementIDList = null]_)

Method returns new object of {{ collection.link() }} class.

**Example:** Create simple block with random 5 promo block list on index page.


{{ get_module('promo-block').example('pages/index-1.htm')|raw }}

{{ get_module('promo-block').example('partials/promo-block/random-promo-block-list/random-promo-block-list-1.htm')|raw }}

{{ get_module('promo-block').example('partials/promo-block/promo-block-card/promo-block-card-1.htm')|raw }}
## PromoBlockPage

Component allows you to render promo block page.

Available properties:

{% verbatim %}
|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If value is 1, then component will make additional check for full URL of page|
{% endverbatim %}

### get()

Method returns {{ item.link() }} object for current page.

{{ get_module('promo-block').example('pages/promo-page-1.htm')|raw }}

## PromoBlockData

Component allows you to render blocks with promo block. You can get promo block object by ID.

### get($iElementID)

Method returns {{ item.link() }} object with ID = $iElementID.

{{ get_module('promo-block').example('partials/promo-block/promo-block-card/promo-block-card-2.htm')|raw }}
{% endblock %}
[Back to modules](modules/home.md)

[Home](modules/promo-block/home.md)
• [Model](modules/promo-block/model/model.md)
• [Item](modules/promo-block/item/item.md)
• [Collection](modules/promo-block/collection/collection.md)
• Components
• [Events](modules/promo-block/event/event.md)
• [Examples](modules/promo-block/examples/examples.md)
• [Extending](modules/promo-block/extending/extending.md)

# Components {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

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

Method returns new object of [PromoBlockCollection](modules/promo-block/collection/collection.md) class.

**Example:** Create simple block with random 5 promo block list on index page.

File: **pages/index.htm**
```twig
title = "Index"
url = "/"
layout = "main"
is_hidden = 0

[PromoBlockList]
==
<div class="promo-block-wrapper">
    {% partial 'promo-block/promo-block-list/random-promo-block-list' %}
</div>
```

File: **partials/promo-block/promo-block-list/random-promo-block-list.htm**
```twig
{# Get promo block collection #}
{% set obPromoBlockList = PromoBlockList.make().active() %}
{# Get array with random promo blocks #}
{% set arPromoBlockList = obPromoBlockList.random(5) %}

{% if arPromoBlockList is not empty %}
    {# Render promo block list #}
    <ul>
        {% for obPromoBlock in arPromoBlockList %}
            <li>{% partial 'promo-block/promo-block-card/promo-block-card' obPromoBlock=obPromoBlock %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## PromoBlockPage

Component allows you to render promo block page.

Available properties:

|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If value is 1, then component will make additional check for full URL of page|

### get()

Method returns [PromoBlockItem](modules/promo-block/item/item.md#promo-blockitem) object for current page.

```twig
[PromoBlockPage]
slug = "{{ :slug }}"
==

{# Get promo block item #}
{% set obPromoBlock = PromoBlockPage.get() %}
<div data-id="{{ obPromoBlock.id }}">
    <h1>{{ obPromoBlock.name }}</h1>
    {% if obPromoBlock.preview_image is not empty %}
        <img src="{{ obPromoBlock.preview_image.path }}" title="{{ obPromoBlock.preview_image.title }}" alt="{{ obPromoBlock.preview_image.description }}">
    {% endif %}
    <div>{{ obPromoBlock.description|raw }}</div>
</div>
```

## PromoBlockData

Component allows you to render blocks with promo block. You can get promo block object by ID.

### get($iElementID)

Method returns [PromoBlockItem](modules/promo-block/item/item.md#promo-blockitem) object with ID = $iElementID.
```twig
[PromoBlockData]
==

{# Get promo block item with ID = 10 #}
{% set obPromoBlock = PromoBlockData.get(10) %}
{% if obPromoBlock.isNotEmpty() %}
    <div data-id="{{ obPromoBlock.id }}">
        <h1>{{ obPromoBlock.name }}</h1>
        {% if obPromoBlock.preview_image is not empty %}
            <img src="{{ obPromoBlock.preview_image.path }}" title="{{ obPromoBlock.preview_image.title }}" alt="{{ obPromoBlock.preview_image.description }}">
        {% endif %}
        <div>{{ obPromoBlock.description|raw }}</div>
    </div>
{% endif %}
```

[Home](modules/promo-block/home.md)
• [Model](modules/promo-block/model/model.md)
• [Item](modules/promo-block/item/item.md)
• [Collection](modules/promo-block/collection/collection.md)
• Components
• [Events](modules/promo-block/event/event.md)
• [Examples](modules/promo-block/examples/examples.md)
• [Extending](modules/promo-block/extending/extending.md)

[Back to modules](modules/home.md)

# Components {docsify-ignore-all}

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ [Model](modules/brand/model/model.md)
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ Components
/ [Events](modules/brand/event/event.md)
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [BrandList](#brandlist)
  * [make](#makearelementidlist-null)
* [BrandPage](#brandpage)
  * [get](#get)
* [BrandData](#branddata)
  * [get](#getielementid)

## BrandList

Component allows you to render blocks with brands. For example: all brands, brand list with pagination,
random brands, filter panel with brands, etc.

### make(_[$arElementIDList = null]_)

Method returns new object of [BrandCollection](modules/brand/collection/collection.md) class.

**Example 1:** Get collection of brands, apply sorting + filter by flag "active"
```twig
{% set obBrandList = BrandList.make().sort().active() %}
{% if obBrandList.isNotEmpty() %}
    <ul>
        {% for obBrand in obBrandList %}
            <li>{% partial 'brand/brand-card/brand-card' obBrand=obBrand %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## BrandPage

Component allows you to render brand page.

Available properties:

|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If value is 1, then component will make additional check for full URL of page|

### get()

Method returns [BrandItem](modules/brand/item/item.md#branditem) object for current page.

```twig
[BrandPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1
==

{# Get brand item #}
{% set obBrand = BrandPage.get() %}
<div data-id="{{ obBrand.id }}">
    <h1>{{ obBrand.name }}</h1>
    {% if obBrand.preview_image is not empty %}
        <img src="{{ obBrand.preview_image.path }}" title="{{ obBrand.preview_image.title }}" alt="{{ obBrand.preview_image.description }}">
    {% endif %}
    <div>{{ obBrand.description|raw }}</div>
</div>
```

## BrandData

Component allows you to render blocks with brand. You can get brand object by ID.

### get($iElementID)

Method returns [BrandItem](modules/brand/item/item.md#branditem) object with ID = $iElementID.
```twig
{# Get brand item with ID = 10 #}
{% set obBrand = BrandData.get(10) %}
{% if obBrand.isNotEmpty() %}
    <div data-id="{{ obBrand.id }}">
        <h2>{{ obBrand.name }}</h2>
        {% if obBrand.preview_image is not empty %}
            <img src="{{ obBrand.preview_image.path }}" title="{{ obBrand.preview_image.title }}" alt="{{ obBrand.preview_image.description }}">
        {% endif %}
        <div>{{ obBrand.preview_text }}</div>
    </div>
{% endif %}
```

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ [Model](modules/brand/model/model.md)
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ Components
/ [Events](modules/brand/event/event.md)
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)
# BrandPage component {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Available properties:

|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If the value is 1, then component will make additional check for full URL of page|

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

[Back to modules](modules/home.md)
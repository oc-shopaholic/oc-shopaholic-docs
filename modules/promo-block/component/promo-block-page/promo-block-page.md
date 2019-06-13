# PromoBlockPage component {docsify-ignore-all}
  
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Available properties:

|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If the value is 1, then component will make additional check for full URL of page|

Usage example:
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
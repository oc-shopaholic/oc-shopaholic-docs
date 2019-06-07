# BrandPage component {docsify-ignore-all}
    
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig
[BrandPage]
slug = "{{ :slug }}"
slug_required = 1
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
# PromoBlockData component {docsify-ignore-all}
             
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig
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
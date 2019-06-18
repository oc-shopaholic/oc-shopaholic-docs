# BrandData component {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

# get($iElementID)

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
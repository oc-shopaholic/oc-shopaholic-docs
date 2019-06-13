# TagData component {docsify-ignore-all}
     
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig
{# Get tag item with ID = 10 #}
{% set obTag = TagData.get(10) %}
{% if obTag.isNotEmpty() %}
    <div data-id="{{ obTag.id }}">
        <h1>{{ obTag.name }}</h1>
        {% if obTag.preview_image is not empty %}
            <img src="{{ obTag.preview_image.path }}" title="{{ obTag.preview_image.title }}" alt="{{ obTag.preview_image.description }}">
        {% endif %}
        <div>{{ obTag.description|raw }}</div>
    </div>
{% endif %}
```
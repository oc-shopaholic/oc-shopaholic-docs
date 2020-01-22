# TagPage component {docsify-ignore-all}
     
!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig
[TagPage]
slug = "{{ :slug }}"
==

{# Get tag item #}
{% set obTag = TagPage.get() %}
<div data-id="{{ obTag.id }}">
    <h1>{{ obTag.name }}</h1>
    {% if obTag.preview_image is not empty %}
        <img src="{{ obTag.preview_image.path }}" title="{{ obTag.preview_image.title }}" alt="{{ obTag.preview_image.description }}">
    {% endif %}
    <div>{{ obTag.description|raw }}</div>
</div>
```
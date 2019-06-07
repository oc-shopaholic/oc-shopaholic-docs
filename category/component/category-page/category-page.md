# CategoryPage component {docsify-ignore-all}
        
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig
[CategoryPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get category item #}
{% set obCategory = CategoryPage.get() %}
<div data-id="{{ obCategory.id }}">
    <h1>{{ obCategory.name }}</h1>
    {% if obCategory.preview_image is not empty %}
        <img src="{{ obCategory.preview_image.path }}" title="{{ obCategory.preview_image.title }}" alt="{{ obCategory.preview_image.description }}">
    {% endif %}
    <div>{{ obCategory.description|raw }}</div>
    {% if obCategory.children.isNotEmpty() %}
        <ul>
            {% for obChildCategory in obCategory.children %}
                <li>{{ obChildCategory.name }}</li>
            {% endfor %}
        </ul>
    {% endif %}
</div>
```
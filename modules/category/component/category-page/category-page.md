# CategoryPage component {docsify-ignore-all}
        
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
# TagList component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Component allows to work with [TagCollection](modules/tag/collection/collection.md) class objects.

### make(_[$arElementIDList = null]_)

**Example:** Get collection of tags, apply sorting + filter by flag "active" + filter by category ID
```twig
{% obCategory = CategoryPage.get() %}

{% set obTagList = TagList.make().sort().active().category(obCategory.id) %}
{% if obTagList.isNotEmpty() %}
    <ul>
        {% for obTag in obTagList %}
            <li data-id="{{ obTag.id }}">
                <h3>{{ obTag.name }}</h3>
                {% if obTag.preview_image is not empty %}
                    <img src="{{ obTag.preview_image.path }}" title="{{ obTag.preview_image.title }}" alt="{{ obTag.preview_image.description }}">
                {% endif %}
                <div>{{ obTag.preview_text }}</div>
            </li>
        {% endfor %}
    </ul>
{% endif %}
```
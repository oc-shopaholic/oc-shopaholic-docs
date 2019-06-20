# CategoryData component {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

# get($iElementID)

Method returns [CategoryItem](modules/category/item/item.md#categoryitem) object with ID = $iElementID.
```twig
{# Get category item with ID = 10 #}
{% set obCategory = CategoryData.get(10) %}
{% if obCategory.isNotEmpty() %}
    <div data-id="{{ obCategory.id }}">
        <h2>{{ obCategory.name }}</h2>
        {% if obCategory.preview_image is not empty %}
            <img src="{{ obCategory.preview_image.path }}" title="{{ obCategory.preview_image.title }}" alt="{{ obCategory.preview_image.description }}">
        {% endif %}
        <div>{{ obCategory.preview_text|raw }}</div>
        {% if obCategory.children.isNotEmpty() %}
            <ul>
                {% for obChildCategory in obCategory.children %}
                    <li>{{ obChildCategory.name }}</li>
                {% endfor %}
            </ul>
        {% endif %}
    </div>
{% endif %}
```

[Back to modules](modules/home.md)
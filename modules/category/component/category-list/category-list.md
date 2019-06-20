# CategoryList component {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### make(_[$arElementIDList = null]_)

Method returns new object of [CategoryCollection](modules/category/collection/collection.md) class.

**Example 1:** Get tree of categories. Example is used in render of category menu.
```twig
{% set obCategoryList = CategoryList.make().tree() %}
{% if obCategoryList.isNotEmpty() %}
    <ul>
        {% for obCategory in obCategoryList if obCategory.product_count > 0 %}
            <li data-id="{{ obCategory.id }}">
                {{ obCategory.name }}
                {% if obCategory.children.isNotEmpty() %}
                    <ul>
                        {% for obChildCategory in obCategory.children if obChildCategory.product_count > 0 %}
                            <li>{{ obChildCategory.name }}</li>
                        {% endfor %}
                    </ul>
                {% endif %}
            </li>
        {% endfor %}
    </ul>
{% endif %}
```

### onAjaxRequest()

Empty method for ajax requests.

[Back to modules](modules/home.md)
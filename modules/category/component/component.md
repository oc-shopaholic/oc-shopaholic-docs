[Back to modules](modules/home.md)

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• Components
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

# Components {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [CategoryList](#categorylist)
  * [make](#makearelementidlist-null)
* [CategoryPage](#categorypage)
  * [get](#get)
* [CategoryData](#categorydata)
  * [get](#getielementid)

## CategoryList

Component allows you to render blocks with categories. For example: all categories, tree of categories,
random categories, etc.

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

## CategoryPage

Component allows you to render category page.

Available properties:

|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
|smart_url_check|0 or 1|If value is 1, then component will make additional check for full URL of page|
|has_wildcard|0 or 1|If value is 1, then component will process slug how wildcard URL parameter|
|skip_error|0 or 1|If value is 1, then component will not return "Not found" error|

### get()

Method returns [CategoryItem](modules/category/item/item.md#categoryitem) object for current page.

```twig
title = "Catalog"
url = "/catalog/:slug"
layout = "main"

[CategoryPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1
has_wildcard = 0
skip_error = 0
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

## CategoryData

Component allows you to render blocks with category. You can get category object by ID.

### get($iElementID)

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

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• Components
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

[Back to modules](modules/home.md)

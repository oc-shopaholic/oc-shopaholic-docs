# Examples: Category

[Back to modules](modules/home.md)
/ [Home](modules/category/home.md)
/ [Model](modules/category/model/model.md)
/ [Item](modules/category/item/item.md)
/ [Collection](modules/category/collection/collection.md)
/ [Components](modules/category/component/component.md)
/ [Events](modules/category/event/event.md)
/ Examples
/ [Extending](modules/category/extending/extending.md)

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Example 1: Category page](#example-1-category-page)
* [Example 2: Category tree](#example-2-category-tree)
* [Example 3: Category card](#example-3-category-card)

## Example 1: Category page

### 1.1 Task

Create simple category page and render category name.

### 1.2 How can i do it?

> Example uses [CategoryPage](modules/category/component/component.md#categorypage) component.
Component method returns [CategoryItem](modules/category/item/item.md#categoryitem) class object.
All available fields and methods of **CategoryItem** class you can find in [section](modules/category/item/item.md#categoryitem)

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/category.htm**
end note
:Attach **CategoryPage** component;
:Get CategoryItem object
from CategoryPage component;
:Render category name;
@enduml
```

### 1.3 Source code
<!-- tabs:start -->

#### ** Variant 1 **

Simple example of category page (one level).

File: **pages/category.htm**
```twig
title = "Category page"
url = "/catalog/:slug"
layout = "main"
is_hidden = 0

[CategoryPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1
==

{# Get category item #}
{% set obCategory = CategoryPage.get() %}

<div data-id="{{ obCategory.id }}" itemscope itemtype="http://schema.org/Category">
    <h1 itemprop="name">{{ obCategory.name }}</h1>
</div>
```
#### ** Variant 2 **

Simple example of category page (two levels).

File: **pages/category.htm**
```twig
title = "Category page"
url = "/catalog/:main_category/:slug"
layout = "main"
is_hidden = 0

[CategoryPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1

[CategoryPage ParentCategoryPage]
slug = "{{ :main_category }}"
slug_required = 1
smart_url_check = 0
==

{# Get category item #}
{% set obCategory = CategoryPage.get() %}

<div data-id="{{ obCategory.id }}" itemscope itemtype="http://schema.org/Category">
    <h1 itemprop="name">{{ obCategory.name }}</h1>
</div>
```
<!-- tabs:end -->

## Example 2: Category tree

### 2.1 Task

Create simple category tree (two levels).
Render block with category menu.

### 2.2 How can i do it?

> Example uses [CategoryList](modules/category/component/component.md#categorylist) component.
Component method returns [CategoryCollection](modules/category/collection/collection.md#categorycollection) class object.
All available methods of **CategoryCollection** class you can find in [section](modules/category/collection/collection.md#categorycollection)

```plantuml
@startuml
:Create layout file;
note left
    For example: **layouts/main.htm**
end note
:Attach **CategoryList** component to layout;
:Get CategoryCollection object
from CategoryList component;
:Render block with category menu;
@enduml
```

### 2.3 Source code

File: **partials/category/category-tree/category-tree.htm**
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

## Example 3: Category card

### 3.1 Task

Create simple category card and render category name, preview_image, preview_text fields.
Render link on category page.

> **"obCategory"** is object of [CategoryItem](modules/category/item/item.md#categoryitem) class.

### 3.2 Source code

Simple example of category card.

File: **partials/category/category-card/category-card.htm**
```twig
<a href="{{ obCategory.getPageUrl('category') }}">
    <div itemscope itemtype="http://schema.org/Category">
        {% if obCategory.preview_image is not empty %}
            <img src="{{ obCategory.preview_image.path }}" itemprop="image" alt="{{ obCategory.preview_image.description }}" title="{{ obCategory.preview_image.title }}">
        {% endif %}
        <h3 itemprop="name">{{ obCategory.name }}</h3>
        {% if obCategory.preview_text is not empty %}
            <div itemprop="description">
                {{ obCategory.preview_text }}
            </div>
        {% endif %}
    </div>
</a>
```

[Back to modules](modules/home.md)
/ [Home](modules/category/home.md)
/ [Model](modules/category/model/model.md)
/ [Item](modules/category/item/item.md)
/ [Collection](modules/category/collection/collection.md)
/ [Components](modules/category/component/component.md)
/ [Events](modules/category/event/event.md)
/ Examples
/ [Extending](modules/category/extending/extending.md)
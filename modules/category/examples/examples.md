# Examples: Category

[Back to modules](modules/home.md)

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Example 1: Category page

### Task

Create simple category page and render category name.

### How can i do it?

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

### Source code
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

### Task

Create simple category tree (two levels).
Render block with category menu.

### How can i do it?

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

### Source code

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

### Task

Create simple category card and render category name, preview_image, preview_text fields.
Render link on category page.

### Source code

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
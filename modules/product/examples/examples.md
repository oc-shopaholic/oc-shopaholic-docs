# Examples: Product

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Example 1: Product page

### Task
Create simple product page and render product name.

### How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product.htm**
end note
:Attach **ProductPage** component;
if (URL page contains brand slug?) then (yes)
    :Attach **BrandPage** component;
else (no)
endif
if (URL page contains categories slug?) then (yes)
    :Attach **CategoryPage** component;
    note left
        You must attach components
        for each level of category tree.
    end note
else (no)
endif
:Get ProductItem object
from ProductPage component;
:Render product name;
@enduml
```

### Source code
<!-- tabs:start -->
#### ** Variant 1 **

Simple example of product page. Page URL does not contain category slug.

File: **pages/product.htm**
```twig
title = "Product page"
url = "/product/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}

<div data-id="{{ obProduct.id }}" itemscope itemtype="http://schema.org/Product">
    <h1 itemprop="name">{{ obProduct.name }}</h1>
</div>
```
#### ** Variant 2 **

Simple example of product page. Page URL contains category slug.

> This example is suitable for **2-level** catalog.

File: **pages/product.htm**
```twig
title = "Product page"
url = "/catalog/:main_category/:category/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1

[CategoryPage]
slug = "{{ :category }}"
slug_required = 1

[CategoryPage ParentCategoryPage]
slug = "{{ :main_category }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}

<div data-id="{{ obProduct.id }}" itemscope itemtype="http://schema.org/Product">
    <h1 itemprop="name">{{ obProduct.name }}</h1>
</div>
```

#### ** Variant 3 **

Simple example of product page. Page URL contains category and brand slug.

> This example is suitable for **2-level** catalog.

File: **pages/product.htm**
```twig
title = "Product page"
url = "/catalog/:main_category/:category/:brand/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1

[BrandPage]
slug = "{{ :brand }}"
slug_required = 1

[CategoryPage]
slug = "{{ :category }}"
slug_required = 1

[CategoryPage ParentCategoryPage]
slug = "{{ :main_category }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}

<div data-id="{{ obProduct.id }}" itemscope itemtype="http://schema.org/Product">
    <h1 itemprop="name">{{ obProduct.name }}</h1>
</div>
```
<!-- tabs:end -->

## Example 2: Product card


### Task
Create simple product card and render product name, preview_image, preview_text fields.
Render link on product page.

### Source code
Simple example of product card.

File: **partials/product/product-card/product-card.htm**
```twig
<a href="{{ obProduct.getPageUrl() }}">
    <div itemscope itemtype="http://schema.org/Product">
        {% if obProduct.preview_image is not empty %}
            <img src="{{ obProduct.preview_image.path }}" itemprop="image" alt="{{ obProduct.preview_image.description }}" title="{{ obProduct.preview_image.title }}">
        {% endif %}
        <h3 itemprop="name">{{ obProduct.name }}</h3>
        {% if obProduct.preview_text is not empty %}
            <div itemprop="description">
                {{ obProduct.preview_text }}
            </div>
        {% endif %}
    </div>
</a>
```

## Example 3: Catalog page

### Task
Create simple catalog page and render product list.
Product list must be sorted and filtered by category.
Product list must have pagination block.

### How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/catalog.htm**
end note
if (URL page contains categories slug?) then (yes)
    :Attach **CategoryPage** component;
    note left
        You must attach components
        for each level of category tree.
    end note
else (no)
endif
:Create wrapper for block with list of products;
:Create partial "catalog";
note left
    For example:
    **partials/product/catalog/catalog.htm**
end note
:Get CategoryItem object
from CategoryPage component;
:Get ProductCollection object
from ProductList component;
:Apply sorting to ProductCollection object;
:Apply filter by "active" field
to ProductCollection object;
:Apply filter by category
to ProductCollection object;
:Get current page number from request;
:Get list of pagination buttons;
:Get array ob ProductItem objects
for current page;
if (Product list is empty?) then (yes)
    :Render block "Products not found";
else (no)
    :Render product cards;
    :Render pagination buttons;
endif
:Call partial "catalog" inside wrapper block;
:Add ajax handler on pagination buttons;
:Send ajax request, after user clicks pagination buttons;
:AJAX request must request "catalog" partial
and update HTML code inside wrapper block;
@enduml
```

### Source code
<!-- tabs:start -->

#### ** Variant 1 **

File: **pages/catalog.htm**
```twig
title = "Catalog"
url = "/catalog/:main_category/:category"
layout = "main"
is_hidden = 0

[CategoryPage]
slug = "{{ :category }}"
slug_required = 1
smart_url_check = 1

[CategoryPage ParentCategoryPage]
slug = "{{ :main_category }}"
slug_required = 1

[ProductList]
sorting = "popularity|desc"

[Pagination]
count_per_page = 15
pagination_limit = 5
active_class = ""
button_list = "first,first-more,main,last-more,last"
first_button_name = "First"
first_button_limit = 3
first_button_number = 1
first-more_button_name = "..."
first-more_button_limit = 4
prev_button_name = "Prev"
prev_button_limit = 1
prev-more_button_name = "..."
prev-more_button_limit = 1
next-more_button_name = "..."
next-more_button_limit = 1
next_button_name = "Next"
next_button_limit = 1
last-more_button_name = "..."
last-more_button_limit = 4
last_button_name = "Last"
last_button_limit = 3
last_button_number = 1
==
<div class="catalog-wrapper">
    {% partial 'product/catalog/catalog' %}
</div>
```

File: **partials/product/catalog/catalog.htm**
```twig
{% set obCategory = CategoryPage.get() %}

{# Get product collection #}
{% set obProductList = ProductList.make().sort(ProductList.getSorting()).active().category(obCategory.id) %}

{# Get array with pagination buttons #}
{% set iPage = Pagination.getPageFromRequest() %}
{% set arPaginationList = Pagination.get(iPage, obProductList.count()) %}

{# Apply pagination to product collection and get array with product items #}
{% set arProductList = obProductList.page(iPage, Pagination.getCountPerPage()) %}

{% if arProductList is not empty %}
    {# Render product list #}
    <ul>
        {% for obProduct in arProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
    
    {# Render pagination buttons #}
    {% if arPaginationList is not empty %}
        {% for arPagination in arPaginationList %}
            <a href="{{ obCategory.getPageUrl() }}?page={{ arPagination.value }}" class="{{ arPagination.class }}">
                {{ arPagination.name }}
            </a>
        {% endfor %}
    {% endif %}
{% else %}
    <div>
        Products not found
    </div>
{% endif %}
```
<!-- tabs:end -->
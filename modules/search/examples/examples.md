[Back to modules](modules/home.md)

[Home](modules/search/home.md)
• Examples
• [Sphinx](modules/search/sphinx/sphinx.md)

# Examples: Search {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Example 1: Simple search results](#example-1-simple-search-results)
* [Example 2: Search page](#example-2-search-page)

## Example 1: Simple search results

### 1.1 Task

Create simple block with serch results and render 5 first products.

### 1.2 How can i do it?

!> Search method available with
[Search for Shopaholic](plugins/home.md#search-for-shopaholic) and
[Sphinx for Shopaholic](plugins/home.md#sphinx-for-shopaholic)
plugins

> Example uses [ProductList](modules/product/component/component.md#productlist) component.
Component method returns [ProductCollection](modules/product/collection/collection.md#productcollection) class object.
All available methods of **ProductCollection** class you can find in [section](modules/product/collection/collection.md#productcollection).
Block can be complicated (contain filtering, pagination)

```plantuml
@startuml
:Create simple block
with search results;
:Create partial "search-result";
note left
    For example:
    **partials/product/search/search-result.htm**
end note
:Get search string from request;
:Get ProductCollection object
from ProductList component;
:Apply filter by "active" field
to ProductCollection object;
:Apply filter by "search" string
to ProductCollection object;
:Get array with 5 first products
from ProductCollection object;
:Render block with products;
:Add ajax handler on search field;
:Send ajax request, after user fill search field;
:AJAX request must request "search-result" partial
and update HTML code inside wrapper block;
@enduml
```

### 1.3 Source code

Simple example of block with search results.

File: **partials/product/search/search-result.htm**
```twig
[ProductList]
sorting = "popularity|desc"
==
{# Get search string #}
{% set sSearch = input('search') %}

{# Get product collection #}
{% set obProductList = ProductList.make().active().search(sSearch) %}

{# Get first 5 products #}
{% set arProductList = obProductList.take(5) %}

{% if arProductList is not empty %}
    {# Render product list #}
    <ul>
        {% for obProduct in arProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
{% else %}
    <div>
        Products not found
    </div>
{% endif %}
```

## Example 2: Search page

### 2.1 Task
Create simple search page and render product list.
Product list must have pagination block.

### 2.2 How can i do it?

!> Search method available with
[Search for Shopaholic](plugins/home.md#search-for-shopaholic) and
[Sphinx for Shopaholic](plugins/home.md#sphinx-for-shopaholic)
plugins

> Example uses [ProductList](modules/product/component/component.md#productlist) component.
Component method returns [ProductCollection](modules/product/collection/collection.md#productcollection) class object.
All available methods of **ProductCollection** class you can find in [section](modules/product/collection/collection.md#productcollection).
Block can be complicated (contain filtering, pagination)

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/search.htm**
end note
:Create wrapper for block with list of products;
:Create partial "search-result";
note left
    For example:
    **partials/product/search/search-result.htm**
end note
:Get search string from request;
:Get ProductCollection object
from ProductList component;
:Apply filter by "active" field
to ProductCollection object;
:Apply filter by "search" string
to ProductCollection object;
:Get current page number from request;
:Get list of pagination buttons;
:Get array of ProductItem objects
for current page;
if (Product list is empty?) then (yes)
    :Render block "Products not found";
else (no)
    :Render product cards;
    :Render pagination buttons;
endif
:Call partial "search-result" inside wrapper block;
:Add ajax handler on pagination buttons;
:Send ajax request, after user clicks pagination buttons;
:AJAX request must request "search-result" partial
and update HTML code inside wrapper block;
@enduml
```

### 2.3 Source code

File: **pages/search.htm**
```twig
title = "Search"
url = "/search"
layout = "main"
is_hidden = 0

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
<div class="search-wrapper">
    {% partial 'product/search/search-result' %}
</div>
```

File: **partials/product/search/search-result.htm**
```twig
{# Get search string #}
{% set sSearch = input('search') %}

{# Get product collection #}
{% set obProductList = ProductList.make().active().search(sSearch) %}

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

[Home](modules/search/home.md)
• Examples
• [Sphinx](modules/search/sphinx/sphinx.md)

[Back to modules](modules/home.md)
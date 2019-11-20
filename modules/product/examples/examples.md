[Back to modules](modules/home.md)

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• [Item](modules/product/item/item.md)
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• Examples
• [Extending](modules/product/extending/extending.md)

# Examples: Product {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Example 1: Product page](#example-1-product-page)
* [Example 2: Product card](#example-2-product-card)
* [Example 3: Catalog page](#example-3-catalog-page)
* [Example 4: Accessories on product page](#example-4-accessories-on-product-page)
* [Example 5: Related products on product page](#example-5-related-products-on-product-page)
* [Example 6: Simple search results](#example-6-simple-search-results)
* [Example 7: Search page](#example-7-search-page)

## Example 1: Product page

### 1.1 Task
Create simple product page and render product name.

### 1.2 How can i do it?

> Example uses [ProductPage](modules/product/component/component.md#productpage) component.
Component method returns [ProductItem](modules/product/item/item.md#productitem) class object.
All available fields and methods of **ProductItem** class you can find in [section](modules/product/item/item.md#productitem)

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

### 1.3 Source code
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

### 2.1 Task
Create simple product card and render product name, preview_image, preview_text fields.
Render link on product page.

> **"obProduct"** is object of [ProductItem](modules/product/item/item.md#productitem) class.

### 2.2 Source code

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

### 3.1 Task
Create simple catalog page and render product list.
Product list must be sorted and filtered by category.
Product list must have pagination block.

### 3.2 How can i do it?

> Example uses [ProductList](modules/product/component/component.md#productlist) component.
Component method returns [ProductCollection](modules/product/collection/collection.md#productcollection) class object.
All available methods of **ProductCollection** class you can find in [section](modules/product/collection/collection.md#productcollection)

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
:Get array of ProductItem objects
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

### 3.3 Source code

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

## Example 4: Accessories on product page

### 4.1 Task

Create simple product page and render block with 5 random accessories.
 
> Block with accessories can look like any block with product list.
Block can be simple (for example: slider with 5 random accessories).
Block can be complicated (contain searching, filtering, sorting, pagination).

### 4.2 How can i do it?

!> Accessories available with [Accessories for Shopaholic](plugins/home.md#accessories-for-shopaholic) plugin

```plantuml
@startuml
:Create simple product page;
:Get ProductItem object
from ProductPage component;
:Get ProductCollection object
with accessories from
ProductItem object;
:Apply filter by "active" field
to ProductCollection object;
:Get array with 5 random products
from ProductCollection object;
:Render block with accessories;
@enduml
```

### 4.3 Source code

Simple example of product page.

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

{# Get accessories + apply filder by "active" field #}
{% set obProductList = obProduct.accessory.active() %}
{% set arProductList = obProductList.random(5) %}
{% if arProductList is not empty %}
<div>
    <span>Accessories</span>
    {# Render product list #}
    <ul>
        {% for obProduct in arProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
</div>
{% endif %}
```

## Example 5: Related products on product page

### 5.1 Task

Create simple product page and render block with 5 random related products.

> Block with related products can look like any block with product list.
Block can be simple (for example: slider with 5 random related products).
Block can be complicated (contain searching, filtering, sorting, pagination).

### 5.2 How can i do it?

!> Related products available with [Related products for Shopaholic](plugins/home.md#related-products-for-shopaholic) plugin

```plantuml
@startuml
:Create simple product page;
:Get ProductItem object
from ProductPage component;
:Get ProductCollection object
with related products from
ProductItem object;
:Apply filter by "active" field
to ProductCollection object;
:Get array with 5 random products
from ProductCollection object;
:Render block with related products;
@enduml
```

### 5.3 Source code

Simple example of product page.

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

{# Get related products + apply filder by "active" field #}
{% set obProductList = obProduct.related.active() %}
{% set arProductList = obProductList.random(5) %}
{% if arProductList is not empty %}
<div>
    <span>Related products</span>
    {# Render product list #}
    <ul>
        {% for obProduct in arProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
</div>
{% endif %}
```

## Example 6: Simple search results

### 6.1 Task

Create simple block with serch results and render 5 first products.

### 6.2 How can i do it?

!> Search method available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) plugin

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

### 6.3 Source code

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

## Example 7: Search page

### 7.1 Task
Create simple search page and render product list.
Product list must have pagination block.

### 7.2 How can i do it?

!> Search method available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) plugin

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

### 7.3 Source code

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

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• [Item](modules/product/item/item.md)
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• Examples
• [Extending](modules/product/extending/extending.md)

[Back to modules](modules/home.md)

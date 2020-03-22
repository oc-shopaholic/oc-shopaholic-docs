{% extends 'docs/modules/examples-default.md' %}

{% block content %}
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

> Example uses {{ get_component('product').link('product-page') }} component.
Component method returns {{ get_item('product').link() }} class object.
All available fields and methods of **ProductItem** class you can find in {{ get_item('product').link('section') }}.

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product-page.htm**
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
:Get **ProductItem** object
from **ProductPage** component;
:Render product name;
@enduml
```

### 1.3 Source code
<!-- tabs:start -->
#### ** Variant 1 **

Simple example of product page. Page URL does not contain category slug.

{{ get_module('product').example('pages/product-page-1.htm')|raw }}
#### ** Variant 2 **

Simple example of product page. Page URL contains category slug (two levels).

> CategoryPage components must be attached on page so that child categories are higher than parent categories.

{{ get_module('product').example('pages/product-page-2.htm')|raw }}
#### ** Variant 3 **

Simple example of product page. Page URL contains category (two levels) and brand slug.

> CategoryPage components must be attached on page so that child categories are higher than parent categories.

{{ get_module('product').example('pages/product-page-3.htm')|raw }}

#### ** Wildcard **

Catalog page with wildcard URL parameter.

{{ get_module('product').example('pages/product-page-4.htm')|raw }}
<!-- tabs:end -->

## Example 2: Product card

### 2.1 Task
Create simple product card and render product name, preview_image, preview_text fields.
Render link on product page.

> **"obProduct"** is object of {{ get_item('product').link() }} class.

### 2.2 Source code

Simple example of product card.

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

## Example 3: Catalog page

### 3.1 Task
Create simple catalog page and render product list.
Product list must be sorted and filtered by category.
Product list must have pagination block.

### 3.2 How can i do it?

> Example uses {{ get_component('product').link('product-list') }} component.
Component method returns {{ get_collection('product').link() }} class object.
All available methods of **ProductCollection** class you can find in {{ get_collection('product').link('section') }}.

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
:Get **CategoryItem** object
from **CategoryPage** component;
:Get **ProductCollection** object
from **ProductList** component;
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

<!-- tabs:start -->

#### ** One level **

Simple example of catalog page (one level).

{{ get_module('product').example('pages/catalog-1.htm')|raw }}

{{ get_module('product').example('partials/product/catalog/catalog-2.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}

#### ** Two levels **

Simple example of catalog page (two levels).

> CategoryPage components must be attached on page so that child categories are higher than parent categories.

{{ get_module('product').example('pages/catalog-2.htm')|raw }}

{{ get_module('product').example('partials/product/catalog/catalog-2.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}

#### ** Wildcard **

Catalog page with wildcard URL parameter.

{{ get_module('product').example('pages/catalog-3.htm')|raw }}

{{ get_module('product').example('partials/product/catalog/catalog-2.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}

<!-- tabs:end -->

## Example 4: Accessories on product page

### 4.1 Task

Create simple product page and render block with 5 random accessories.
 
> Block with accessories can look like any block with product list.
Block can be simple (for example: slider with 5 random accessories).
Block can be complicated (contain searching, filtering, sorting, pagination).

### 4.2 How can i do it?

!> Accessories {{ 'accessories'|available_with|lcfirst }}

```plantuml
@startuml
:Create simple product page;
:Get **ProductItem** object
from **ProductPage** component;
:Get **ProductCollection** object
with accessories from
**ProductItem** object;
:Apply filter by "active" field
to ProductCollection object;
:Get array with 5 random products
from ProductCollection object;
:Render block with accessories;
@enduml
```

### 4.3 Source code

Simple example of product page.

{{ get_module('product').example('pages/product-page-5.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

## Example 5: Related products on product page

### 5.1 Task

Create simple product page and render block with 5 random related products.

> Block with related products can look like any block with product list.
Block can be simple (for example: slider with 5 random related products).
Block can be complicated (contain searching, filtering, sorting, pagination).

### 5.2 How can i do it?

!> Related products {{ 'related-products'|available_with|lcfirst }}

```plantuml
@startuml
:Create simple product page;
:Get **ProductItem** object
from **ProductPage** component;
:Get **ProductCollection** object
with related products from
**ProductItem** object;
:Apply filter by "active" field
to ProductCollection object;
:Get array with 5 random products
from ProductCollection object;
:Render block with related products;
@enduml
```

### 5.3 Source code

Simple example of product page.



{{ get_module('product').example('pages/product-page-6.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

## Example 6: Simple search results

### 6.1 Task

Create simple block with serch results and render 5 first products.

### 6.2 How can i do it?

!> Search method {{ ['search', 'sphinx']|available_with|lcfirst }}

> Example uses {{ get_component('product').link('product-list') }} component.
Component method returns {{ get_collection('product').link() }} class object.
All available methods of **ProductCollection** class you can find in {{ get_collection('product').link('section') }}.
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
:Get **ProductCollection** object
from **ProductList** component;
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

{{ get_module('product').example('partials/product/search/search-result-1.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

## Example 7: Search page

### 7.1 Task

Create simple search page and render product list.
Product list must have pagination block.

### 7.2 How can i do it?

!> Search method {{ ['search', 'sphinx']|available_with|lcfirst }}

> Example uses {{ get_component('product').link('product-list') }} component.
Component method returns {{ get_collection('product').link() }} class object.
All available methods of **ProductCollection** class you can find in {{ get_collection('product').link('section') }}.
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
:Get **ProductCollection** object
from **ProductList** component;
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

{{ get_module('product').example('pages/search-1.htm')|raw }}

{{ get_module('product').example('partials/product/search/search-result-2.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}
{% endblock %}
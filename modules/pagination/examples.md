{% extends 'docs/modules/examples-default.md' %}

{% block content %}
* [Example 1: Pagination block](#example-1-pagination-block)
* [Example 2: Show more button](#example-2-show-more-button)

## Example 1: Pagination block

### 1.1 Task

Create simple catalog page with pagination.

### 1.2 How can i do it?

> Example uses {{ component.link('pagination') }} and {{ get_component('product').link('product-list') }} components.

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product-list.htm**
end note
:Attach **ProductList** component;
:Attach **Pagination** component;
:Get **ProductCollection** object
from **ProductList** component;
:Render product list;
:Render pagination block;
:Add handlers for pagination buttons;
:Send ajax requst with **"page"** param;
:Update partial with product list and
pagination block;
@enduml
```

### 1.3 Source code

{{ get_module('product').example('pages/product-list-1.htm')|raw }}

{{ get_module('product').example('partials/product/catalog/catalog-1.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}

## Example 2: Show more button

### 2.1 Task

Create simple catalog page with "Show more" button.

### 2.2 How can i do it?

> Example uses {{ component.link('pagination') }} and {{ get_component('product').link('product-list') }} components.

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product-list.htm**
end note
:Attach **ProductList** component;
:Attach **Pagination** component;
:Get **ProductCollection** object
from **ProductList** component;
:Render product list;
:Get max page number
from **Pagination** component;
:Add handlers for pagination buttons;
:Remove old "Show more" button;
:Send ajax requst with **"page"** param;
:Appends partial with product list and
new "Show more" button;
@enduml
```

### 2.3 Source code

{{ get_module('product').example('pages/product-list-1.htm')|raw }}

{{ get_module('product').example('partials/product/catalog/catalog-1.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-3.htm')|raw }}
{% endblock %}
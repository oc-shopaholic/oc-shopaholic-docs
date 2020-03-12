{% extends 'docs/modules/examples-default.md' %}

{% block content %}
* [Example 1: Brand page](#example-1-brand-page)
* [Example 2: Brand card](#example-2-brand-card)
* [Example 3: Random brand list](#example-3-random-brand-list)
* [Example 4: Brand list with pagination](#example-4-brand-list-with-pagination)
* [Example 5: Filter panel with brands](#example-5-filter-panel-with-brands)

## Example 1: Brand page

### 1.1 Task

Create simple brand page and render brand name, preview image, description.

### 1.2 How can i do it?

> Example uses {{ component.link('brand-page') }} component.
Component method returns {{ item.link() }} class object.
All available fields and methods of **BrandItem** class you can find in {{ item.link('section') }}

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/brand-page.htm**
end note
:Attach **BrandPage** component;
:Get **BrandItem** object
from **BrandPage** component;
:Render brand name,
preview_image,
description fields;
@enduml
```

### 1.3 Source code
{{ get_module('brand').example('pages/brand-page-1.htm')|raw }}

## Example 2: Brand card

### 2.1 Task

Create simple brand card and render brand name, preview_image, preview_text fields.
Render link on brand page.

> **"obBrand"** is object of {{ item.link() }} class.

### 2.2 Source code

Simple example of brand card.

{{ get_module('brand').example('partials/brand/brand-card/brand-card-1.htm')|raw }}

## Example 3: Random brand list

### 3.1 Task

Create simple block with random 5 brand list on index page.

### 3.2 How can i do it?

> Example uses {{ component.link('brand-list') }} component.
Component method returns {{ collection.link() }} class object.
All available methods of **{{ collection.class }}** class you can find in {{ collection.link('section') }}

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/index.htm**
end note
:Attach **BrandList** component to page;
:Create partial "random-brand-list";
note left
    For example:
    **partials/brand/random-brand-list**
    **/random-brand-list.htm**
end note
:Get **BrandCollection** object from
**BrandList** component;
:Apply filter by "active" field
to BrandCollection object;
:Get array with 5 random
BrandItem objects;
:Render brand list;
@enduml
```

### 3.3 Source code

{{ get_module('brand').example('pages/index-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/random-brand-list/random-brand-list-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/brand-card/brand-card-1.htm')|raw }}

## Example 4: Brand list with pagination

### 4.1 Task

Create simple page with brand list.
Brand list must have pagination block.

### 4.2 How can i do it?

> Example uses {{ component.link('brand-list') }} component.
Component method returns {{ collection.link() }} class object.
All available methods of **{{ collection.class }}** class you can find in {{ collection.link('section') }}

> You can find more information about **Pagination** component {{ get_module('pagination').link('here') }}

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/brand-list.htm**
end note
:Attach **BrandList** component to page;
:Create wrapper for block with list of brands;
:Create partial "brand-list";
note left
    For example:
    **partials/brand/brand-list/brand-list.htm**
end note
:Get **BrandCollection** object from
**BrandList** component;
:Apply filter by "active" field
to BrandCollection object;
:Apply sorting to BrandCollection object;
:Get current page number from request;
:Get list of pagination buttons;
:Get array of **BrandItem** objects
for current page;
if (Brand list is empty?) then (yes)
    :Render block "Brands not found";
else (no)
    :Render brand cards;
    :Render pagination buttons;
endif
:Call partial "brand-list" inside wrapper block;
:Add ajax handler on pagination buttons;
:Send ajax request, after user clicks pagination buttons;
:AJAX request must request "brand-list" partial
and update HTML code inside wrapper block;
@enduml
```

### 4.3 Source code

{{ get_module('brand').example('pages/brand-list-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/brand-list/brand-list-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/brand-card/brand-card-1.htm')|raw }}

## Example 5: Filter panel with brands

### 5.1 Task

Create simple catalog page with filter panel by brands.
Apply filter by category ID to brand list.  

### 5.2 How can i do it?

> Example uses {{ component.link('brand-list') }} component.
Component method returns {{ collection.link() }} class object.
All available methods of **{{ collection.class }}** class you can find in {{ collection.link('section') }}

```plantuml
@startuml
:Create catalog page file;
note left
    For example: **pages/catalog.htm**
end note
:Attach BrandList component to page;
:Attach CategoryPage component to page;
:Create partial "filter-brand-list";
note left
    For example:
    **partials/brand/filter-brand-list**
    **/filter-brand-list.htm**
end note
:Get CategoryItem object from
CategoryPage component;
:Get BrandCollection object from
BrandList component;
:Apply filter by "active" field
to BrandCollection object;
:Apply filter by "category" field
to BrandCollection object;
:Get array with BrandItem objects;
:Render brand list;
@enduml
```

### 5.3 Source code

{{ get_module('brand').example('pages/catalog-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/filter-brand-list/filter-brand-list-1.htm')|raw }}

{% endblock %}
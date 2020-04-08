## Example {{ i }}: Render filter panel on search page

### {{ i }}.1 Task

Create search page and render product list.
Render filter panel by product and offer properties.
Get properties from {{ get_component('filter').link('filter-panel') }} component. 
Product list must have pagination block.

### {{ i }}.2 How can i do it?

!> Search method {{ ['search', 'sphinx']|available_with|lcfirst }} Filtration methods {{ ['filter']|available_with|lcfirst }} 

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
:Get an array with filters applied;
:Get **ProductCollection** object
from **ProductList** component;
:Apply filter by "active" field
to ProductCollection object;
:Apply filter by "search" string
to ProductCollection object;
:Get **FilterPropertyCollection** object
from **FilterPanel** component;
:Render filter panel;
:Apply filter by properties
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
:Add ajax handler on filter panel;
:Send ajax request, after user clicks
pagination buttons or filter panel;
:AJAX request must request "search-result" partial
and update HTML code inside wrapper block;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('product').example('pages/search-1.htm')|raw }}

{{ get_module('filter').example('partials/product/search/search-result-1.htm')|raw }}

{{ get_module('filter').example('partials/product/filter-panel/filter-panel-1.htm')|raw }}

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}
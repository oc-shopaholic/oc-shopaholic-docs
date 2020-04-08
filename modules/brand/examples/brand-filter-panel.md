## Example {{ i }}: Filter panel with brands

### {{ i }}.1 Task

Create simple catalog page with filter panel by brands.
Apply filter by category ID to brand list.  

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('brand').link('brand-list') }} component.
Component method returns {{ get_collection('brand').link() }} class object.
All available methods of **{{ get_collection('brand').class }}** class you can find in {{ get_collection('brand').link('section') }}

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

### {{ i }}.3 Source code

{{ get_module('brand').example('pages/catalog-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/filter-brand-list/filter-brand-list-1.htm')|raw }}

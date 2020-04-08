## Example {{ i }}: Brand list with pagination

### {{ i }}.1 Task

Create simple page with brand list.
Brand list must have pagination block.

### {{ i }}.2 How can i do it?

> Example uses {{ component.link('brand-list') }} component.
Component method returns {{ get_collection('brand').link() }} class object.
All available methods of **{{ get_collection('brand').class }}** class you can find in {{ get_collection('brand').link('section') }}

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

### {{ i }}.3 Source code

{{ get_module('brand').example('pages/brand-list-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/brand-list/brand-list-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/brand-card/brand-card-1.htm')|raw }}
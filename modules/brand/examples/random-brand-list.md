## Example {{ i }}: Random brand list

### {{ i }}.1 Task

Create simple block with random 5 brand list on index page.

### {{ i }}.2 How can i do it?

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

### {{ i }}.3 Source code

{{ get_module('brand').example('pages/index-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/random-brand-list/random-brand-list-1.htm')|raw }}

{{ get_module('brand').example('partials/brand/brand-card/brand-card-1.htm')|raw }}
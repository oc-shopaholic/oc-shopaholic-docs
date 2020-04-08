## Example {{ i }}: Promo block list with pagination

### {{ i }}.1 Task

Create simple page with promo block list.
Promo block list must have pagination block.

### {{ i }}.2 How can i do it?

> Example uses {{ component.link('promo-block-list') }} component.
Component method returns {{ get_collection('promo-block').link() }} class object.
All available methods of **PromoBlockCollection** class you can find in {{ get_collection('promo-block').link('section') }}.

> You can find more information about **Pagination** component {{ get_module('pagination').link('here') }} 

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/promo-block-list.htm**
end note
:Attach **PromoBlockList** component to page;
:Create wrapper for block with list of promo blocks;
:Create partial "promo-block-list";
note left
    For example:
    **partials/promo-block/promo-block-list/promo-block-list.htm**
end note
:Get **PromoBlockCollection** object from
**PromoBlockList** component;
:Apply filter by "active" field
to PromoBlockCollection object;
:Apply sorting to PromoBlockCollection object;
:Get current page number from request;
:Get list of pagination buttons;
:Get array of PromoBlockItem objects
for current page;
if (Promo block list is empty?) then (yes)
    :Render block "Promo blocks not found";
else (no)
    :Render promo block cards;
    :Render pagination buttons;
endif
:Call partial "promo-block-list" inside wrapper block;
:Add ajax handler on pagination buttons;
:Send ajax request, after user clicks pagination buttons;
:AJAX request must request "promo-block-list" partial
and update HTML code inside wrapper block;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('promo-block').example('pages/promo-block-list-1.htm')|raw }}

{{ get_module('promo-block').example('partials/promo-block/promo-block-list/promo-block-list-1.htm')|raw }}

{{ get_module('promo-block').example('partials/promo-block/promo-block-card/promo-block-card-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}
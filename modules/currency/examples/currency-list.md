## Example {{ i }}: Currency list

### {{ i }}.1 Task

Create simple block with currency list.

### {{ i }}.2 How can i do it?

> Example uses {{ component.link('currency-list') }} component.
Component method returns {{ collection.link() }} class object.
All available methods of **{{ collection.class }}** class you can find in {{ collection.link('section') }}

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/index.htm**
end note
:Attach **CurrencyList** component to page;
:Create partial "currency-list";
note left
    For example:
    **partials/currency/currency-list**
    **/currency-list.htm**
end note
:Get **CurrencyCollection** object
from **CurrencyList** component;
:Apply filter by "active" field
to CurrencyCollection object;
:Apply filter by "sort" field
to CurrencyCollection object;
:Render currency list;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('currency').example('pages/index-1.htm')|raw }}

{{ get_module('currency').example('partials/currency/currency-list/currency-list-1.htm')|raw }}

## Example {{ i }}: Render properties separated by groups

### {{ i }}.1 Task

Create simple product page and render block with product properties separated by groups.

For example, your block might look like this:

![](./../../../assets/images/fronend-property-group-1.png ':class=medium-image')

### {{ i }}.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product-page.htm**
end note
:Get **ProductItem** object
from **ProductPage** component;
:Render product name;
:Get **PropertyCollection** object
from **ProductItem** object;
:Get **GroupCollection** object
:Filter *PropertyCollection** object
by property group ID;
:Render block with properties;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('property-group').example('pages/product-page-2.htm')|raw }}

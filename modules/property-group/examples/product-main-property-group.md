## Example {{ i }}: Render property group with code "main" 

### {{ i }}.1 Task

Create simple product page and render block with product properties from group with code 'main'.

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
from **PropertyCollection** object;
:Get **GroupItem** object with code "main"
from **GroupCollection** object;
:Filter *PropertyCollection** object
by property group ID;
:Render block with properties;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('property-group').example('pages/product-page-1.htm')|raw }}
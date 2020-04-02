## Example {{ i }}: Render properties

### {{ i }}.1 Task

Create simple product page and render block with product properties.

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
:Render block with properties;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('property').example('pages/product-page-1.htm')|raw }}
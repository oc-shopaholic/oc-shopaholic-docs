## Example {{ i }}: Render tax price of shipping type

### {{ i }}.1 Task

Create simple cart page and list of shipping types. Get prices of shipping types with tax and without tax.

### {{ i }}.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/cart.htm**
end note
:Attach **ShippingTypeList** component;
:Get **ShippingTypeCollection** object
from **ShippingTypeList** component;
:Render table with prices;
:Render price without tax;
:Render price with tax;
:Render tax price;
:Render tax percent;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('tax').example('pages/cart-2.htm')|raw }}
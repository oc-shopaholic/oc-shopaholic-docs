## Example {{ i }}: Render tax price of order

### {{ i }}.1 Task

Create simple order page and render price block. Get prices of order positions with tax and without tax.

### {{ i }}.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/order-page.htm**
end note
:Attach **OrderPage** component;
:Get **OrderItem** object
from **OrderPage** component;
:Render table with order prices;
:Get **OrderPositionCollection** object
from **OrderItem** component;
:Render table with prices;
:Render price without tax;
:Render price with tax;
:Render tax price;
:Render tax percent;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('tax').example('pages/order-page-1.htm')|raw }}

{{ get_module('tax').example('partials/order/order-position/order-position-1.htm')|raw }}
## Example {{ i }}: Render tax price of offers

### {{ i }}.1 Task

Create simple product page and render price block. Get the price of the first offer with tax and without tax.

### {{ i }}.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product-page.htm**
end note
:Attach **ProductPage** component;
:Get **ProductItem** object
from **ProductPage** component;
:Render product name;
:Get **OfferCollection**
from **ProductItem** object;
:Get first **OfferItem** object
from **OfferCollection** object;
:Render price without tax;
:Render price with tax;
:Render tax price;
:Render tax percent;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('tax').example('pages/product-page-1.htm')|raw }}
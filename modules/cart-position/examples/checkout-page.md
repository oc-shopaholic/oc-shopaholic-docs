## Example {{ i }}: Render block with cart positions on checkout page

### {{ i }}.1 Task

Render block with cart positions on checkout page.

![](./../../../assets/images/fronend-cart-2.png ':class=medium-image')

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('cart').link('cart') }} component.
Component method returns {{ get_collection('cart-position').link() }} class object.
All available fields and methods of **{{ get_collection('cart-position').class }}** class you can find in {{ get_collection('cart-position').link('section') }}

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/checkout.htm**
end note
:Attach **Cart** component;
:Get CartPositionCollection object
from Cart component;
:Render cart positions
and total price of positions;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('cart-position').example('pages/checkout-1.htm')|raw }}

{{ get_module('cart-position').example('partials/cart/checkout/checkout-1.htm')|raw }}

{{ get_module('cart-position').example('partials/cart/cart-position/cart-position-1.htm')|raw }}

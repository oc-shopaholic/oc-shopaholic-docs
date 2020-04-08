## Example {{ i }}: Render block with mini-cart

### {{ i }}.1 Task

Render block with mini-cart.

> Block with mini-cart is often located in the header of your site.

![](./../../../assets/images/fronend-cart-1.png)

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('cart').link('cart') }} component.
Component method returns {{ get_collection('cart-position').link() }} class object.
All available fields and methods of **{{ get_collection('cart-position').class }}** class you can find in {{ get_collection('cart-position').link('section') }}

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/index.htm**
end note
:Attach **Cart** component;
:Get CartPositionCollection object
from Cart component;
:Render cart positions
and total price of positions;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('cart-position').example('pages/index-1.htm')|raw }}

{{ get_module('cart-position').example('partials/cart/mini-cart/mini-cart-1.htm')|raw }}

{{ get_module('cart-position').example('partials/cart/cart-position/cart-position-1.htm')|raw }}

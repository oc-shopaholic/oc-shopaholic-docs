## Example {{ i }}: Add offers to cart without properties

### {{ i }}.1 Task

Sending an ajax request to add offers to the cart.

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('cart').link('cart') }} component.

```plantuml
@startuml
:Render "Add to cart" button;
:Add hendler to "Add to cart" button;
:Prepare request object;
:Send ajax request;
:Process response;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('cart').example('js/add-cart/add-cart-1.js')|raw }}
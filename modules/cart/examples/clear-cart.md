## Example {{ i }}: Clear cart

### {{ i }}.1 Task

Sending an ajax request to clear the cart.

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('cart').link('cart') }} component.

```plantuml
@startuml
:Render "Clear cart" button;
:Add hendler to "Clear cart" button;
:Send ajax request;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('cart').example('js/clear-cart/clear-cart-1.js')|raw }}
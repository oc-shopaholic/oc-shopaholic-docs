## Example {{ i }}: Sync cart positions without properties

### {{ i }}.1 Task

Sending an ajax request to sync cart positions in the cart.

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('cart').link('cart') }} component.

```plantuml
@startuml
:Render "Update cart" button;
:Add hendler to "Update cart" button;
:Prepare request object;
:Send ajax request;
:Process response;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('cart').example('js/sync-cart/sync-cart-1.js')|raw }}
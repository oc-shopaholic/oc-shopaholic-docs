## Example {{ i }}: Restore cart positions by position ID

### {{ i }}.1 Task

Sending an ajax request to restore cart positions by position IDs.

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('cart').link('cart') }} component.

```plantuml
@startuml
:Render "Restore" button;
:Add hendler to "Restore" button;
:Prepare request object;
:Send ajax request;
:Process response;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('cart').example('js/restore-cart/restore-cart-1.js')|raw }}
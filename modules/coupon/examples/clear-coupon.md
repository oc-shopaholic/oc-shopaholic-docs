## Example {{ i }}: Clear coupons

### {{ i }}.1 Task

Sending an ajax request to clear coupons.

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('cart').link('cart') }} component.

```plantuml
@startuml
:Render "Clear coupons" button;
:Add hendler to "Clear coupons" button;
:Prepare request object;
:Send ajax request;
:Process response;
@enduml
```

### {{ i }}.3 Source code

{{ get_module('coupon').example('js/clear-coupon/clear-coupon-1.js')|raw }}
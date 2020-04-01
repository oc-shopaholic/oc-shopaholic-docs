## Example {{ i }}: Order page

### {{ i }}.1 Task

Create simple "Thank you" page with order number.

### {{ i }}.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/checkout_success.htm**
end note
:Attach **OrderPage** component;
:Get OrderItem object
from OrderPage component;
:Render order number;
@enduml
```

### {{ i }}.3 Source code

File: **pages/checkout_success.htm**
{% verbatim %}
```twig
title = "Thank you page"
url = "/checkout/:slug"
layout = "main"

[OrderPage]
slug = "{{ :slug }}"
==

{# Get order object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    <h1>{{ obOrder.order_number }}</h1>
</div>
```
{% endverbatim %}

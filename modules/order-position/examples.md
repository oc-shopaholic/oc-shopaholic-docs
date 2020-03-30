{% extends 'docs/modules/examples-default.md' %}

{% block content %}
* [Example 1: Order page](#example-1-order-page)
* [Example 2: Render tax price of order](#example-2-render-tax-price-of-order)

## Example 1: Order page

### 1.1 Task

Create simple "Thank you" page with order number and order positions.

### 1.2 How can i do it?

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
:Get OrderPositionCollection
object from OrderItem;
:Render order positions;
@enduml
```

### 1.3 Source code

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
    {# Get order positions #}
    {% set obOrderPositionList = obOrder.order_position %}
    {% for obOrderPosition in obOrderPositionList %}
      {% set obOffer = obOrderPosition.item %}
      {% set obProduct = obOffer.product %}
      <div>
        <div>{{ obProduct.name }}</div>
        <div>{{ obOrderPosition.quantity }}</div>
        <div>{{ obOrderPosition.price }} {{ obOrderPosition.currency_symbol }}</div>
      </div>
    {% endfor %}
</div>
```
{% endverbatim %}

## Example 2: Render tax price of order

### 2.1 Task

Create simple order page and render price block. Get prices of order positions with tax and without tax.

### 2.2 How can i do it?

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

### 2.3 Source code

{{ get_module('tax').example('pages/order-page-1.htm')|raw }}

{{ get_module('tax').example('partials/order/order-position/order-position-1.htm')|raw }}

{% endblock %}

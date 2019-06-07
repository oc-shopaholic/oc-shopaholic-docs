# OrderPage component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

The component allows to display page with data of completed orders.

Usage example:
```twig
[OrderPage]
slug = "{{ :slug }}"
==

{# Get order object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    <h1>{{ obOrder.order_number }}</h1>
</div>
```

### onPurchase()

Method adds ability to send purchase request to payment gateway from order page.
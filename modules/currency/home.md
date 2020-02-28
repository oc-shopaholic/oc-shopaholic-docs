{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Currencies" module allows you to display catalog prices in different currencies.
The offer price should be set only in the default currency.

## Backend

You can create and edit currency by going to **Backend -> Settings -> Currency**

![](./../../assets/images/backend-currency-1.png)

You can set one of currencies as default currency.

!> **Attention!** All offer prices must be set in default currency.

![](./../../assets/images/backend-currency-2.png)

**"Symbol"** field is used to render currency symbol on your site (For example: "$").
**"Code"** field is used to render international currency code in meta tags (For example: "USD").

Example:
{% verbatim %}
```twig
Example:
<span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">
    {{ obOffer.currency }}
</span>

Result:
<span itemprop="priceCurrency" content="USD">$</span>
```
{% endverbatim %}

You can change sorting of currencies by going to **Backend -> Settings -> Currencies -> Reorder records**

![](./../../assets/images/backend-currency-3.png)
{% endblock %}
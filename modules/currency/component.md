{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [CurrencyList](#currencylist)
  * [make](#makearelementidlist-null)
  * [onSwitch](#onswitch)
  * [switch](#switchscurrencycode-null)

## CurrencyList

Component allows you to render blocks with currencies. For example: all currencies,
switching active currency, etc.

### make(_[$arElementIDList = null]_)

Method returns new object of {{ collection.link() }} class.

{{ get_module('currency').example('partials/currency/currency-list/currency-list-1.htm')|raw }}

### onSwitch()

Method switches active currency.
You can send AJAX request with currency code to switch active currency.

{{ get_module('currency').example('partials/currency/currency-list/currency-list-1.js')|raw }}

### switch(_[$sCurrencyCode = null]_)
  * $sCurrencyCode - currency code
  
Method switches active currency.
{% endblock %}

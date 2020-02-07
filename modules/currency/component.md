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

**Example 1:** Get collection of currencies, apply sorting + filter by flag "active"
{% verbatim %}
```twig
{% set obCurrencyList = CurrencyList.make().sort().active() %}
{% if obCurrencyList.isNotEmpty() %}
    <ul class="currency-list-wrapper">
        {% for obCurrency in obCurrencyList %}
            <li data-code="{{ obCurrency.code }}">{{ obCurrency.symbol }}</li>
        {% endfor %}
    </ul>
{% endif %}
```
{% endverbatim %}

### onSwitch()

Method switches active currency.
You can send AJAX request with currency code to switch active currency. 
```javascript
$.request('CurrencyList::onSwitch', {
  data: {currency: 'EUR'}
});
```

### switch(_[$sCurrencyCode = null]_)
  * $sCurrencyCode - currency code
  
Method switches active currency.
{% endblock %}

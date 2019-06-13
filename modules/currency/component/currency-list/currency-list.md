# CurrencyList component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### make(_[$arElementIDList = null]_)

**Example 1:** Get collection of currencies, apply sorting + filter by flag "active"
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

### onAjaxRequest()

Empty method for ajax requests.

### onSwitch()

Method switches active currency.
```javascript
$.request('CurrencyList::onSwitch', {
  data: {currency: 'EUR'}
});
```

### switch(_[$sCurrencyCode = null]_)
  * $sCurrencyCode - currency code
  
Method switches active currency.
[Back to modules](modules/home.md)

[Home](modules/currency/home.md)
• [Model](modules/currency/model/model.md)
• [Item](modules/currency/item/item.md)
• [Collection](modules/currency/collection/collection.md)
• Components
• [Examples](modules/currency/examples/examples.md)
• [Extending](modules/currency/extending/extending.md)
• [Advanced usage](modules/currency/advanced-usage/home.md)

# Components {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [CurrencyList](#currencylist)
  * [make](#makearelementidlist-null)
  * [onSwitch](#onswitch)
  * [switch](#switchscurrencycode-null)

## CurrencyList

Component allows you to render blocks with currencies. For example: all currencies,
switching active currency, etc.

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

[Home](modules/currency/home.md)
• [Model](modules/currency/model/model.md)
• [Item](modules/currency/item/item.md)
• [Collection](modules/currency/collection/collection.md)
• Components
• [Examples](modules/currency/examples/examples.md)
• [Extending](modules/currency/extending/extending.md)
• [Advanced usage](modules/currency/advanced-usage/home.md)

[Back to modules](modules/home.md)

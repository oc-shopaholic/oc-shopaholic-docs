# Components {docsify-ignore-all}

[Back to modules](modules/home.md)
/ [Home](modules/currency/home.md)
/ [Model](modules/currency/model/model.md)
/ [Item](modules/currency/item/item.md)
/ [Collection](modules/currency/collection/collection.md)
/ Components
/ [Examples](modules/currency/examples/examples.md)
/ [Extending](modules/currency/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [CurrencyList](#currencylist)
  * [make(_[$arElementIDList = null]_)](#makearelementidlist-null)
  * [onSwitch()](#onswitch)
  * [switch(_[$sCurrencyCode = null]_)](#switchscurrencycode-null)

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

[Back to modules](modules/home.md)
/ [Home](modules/currency/home.md)
/ [Model](modules/currency/model/model.md)
/ [Item](modules/currency/item/item.md)
/ [Collection](modules/currency/collection/collection.md)
/ Components
/ [Examples](modules/currency/examples/examples.md)
/ [Extending](modules/currency/extending/extending.md)
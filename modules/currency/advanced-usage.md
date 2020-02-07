{% extends 'docs/modules/layout.md' %}

{% block page_title %}Advanced usage{% endblock %}

{% block content %}

* [CurrencyHelper class](#currencyhelper-class)
  * [convert](#convertfprice-scurrencyto-null)
  * [getActive](#getactive)
  * [getActiveCurrencyCode](#getactivecurrencycode)
  * [getActiveCurrencySymbol](#getactivecurrencysymbol)
  * [getCurrencyCode](#getcurrencycodescurrencycode)
  * [getCurrencySymbol](#getcurrencysymbolscurrencycode)
  * [getDefault](#getdefault)
  * [resetActive](#resetactive)
  * [switchActive](#switchactivescurrencycode)

## CurrencyHelper class

Class allows you to get/set active currencies, switches active currency, etc.
```php
CurrencyHelper::instance()->switchActive('usd');

echo CurrencyHelper::instance()->getActiveCurrencyCode();
```

## Method list

#### convert($fPrice, _[$sCurrencyTo = null]_)

Convert price value to currency with code = $sCurrencyTo. If $sCurrencyTo is empty,
then price will be convert to active currency;

#### getActive()

Method returns object of active currency.

#### getActiveCurrencyCode()

Method returns code of active currency. For example: USD.

#### getActiveCurrencySymbol()

Method returns symbol of active currency. For example: $.

#### getCurrencyCode($sCurrencyCode)

Method returns currency code. For example: USD.

#### getCurrencySymbol($sCurrencyCode)

Method returns currency symbol. For example: $.

#### getDefault()

Method returns object of default currency.

#### resetActive()

Method allow you reset active currency for user.

#### switchActive($sCurrencyCode)

Method allow you to switch active currency.
```php
CurrencyHelper::instance()->switchActive('usd');
```
{% endblock %}

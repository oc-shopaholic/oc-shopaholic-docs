# Advanced usage {docsify-ignore-all}

[Back to modules](modules/home.md)
/ [Home](modules/currency/home.md)
/ [Model](modules/currency/model/model.md)
/ [Item](modules/currency/item/item.md)
/ [Collection](modules/currency/collection/collection.md)
/ [Components](modules/currency/component/component.md)
/ [Examples](modules/currency/examples/examples.md)
/ [Extending](modules/currency/extending/extending.md)
/ Advanced usage

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [CurrencyHelper class](#currencyhelper-class)
  * [convert($fPrice, [$sCurrencyTo = null])](#convertfprice-scurrencyto-null)
  * [getActive()](#getactive)
  * [getActiveCurrencyCode()](#getactivecurrencycode)
  * [getActiveCurrencySymbol()](#getactivecurrencysymbol)
  * [getCurrencyCode($sCurrencyCode)](#getcurrencycodescurrencycode)
  * [getCurrencySymbol($sCurrencyCode)](#getcurrencysymbolscurrencycode)
  * [getDefault()](#getdefault)
  * [resetActive()](#resetactive)
  * [switchActive($sCurrencyCode)](#switchactivescurrencycode)

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

[Back to modules](modules/home.md)
/ [Home](modules/currency/home.md)
/ [Model](modules/currency/model/model.md)
/ [Item](modules/currency/item/item.md)
/ [Collection](modules/currency/collection/collection.md)
/ [Components](modules/currency/component/component.md)
/ [Examples](modules/currency/examples/examples.md)
/ [Extending](modules/currency/extending/extending.md)
/ Advanced usage
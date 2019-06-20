# Advanced usage {docsify-ignore-all}

[Back to modules](modules/home.md)

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## CurrencyHelper class

Class allows you to get/set active currencies.
```php
CurrencyHelper::instance()->switchActive('usd');

echo CurrencyHelper::instance()->getActiveCurrencyCode();
```

## Method list

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
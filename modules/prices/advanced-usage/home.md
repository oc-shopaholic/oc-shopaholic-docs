# Advanced usage {docsify-ignore-all}

## PriceTypeHelper class

Class allows you to get/set active price type.
```php
PriceTypeHelper::instance()->switchActive('b2b');

echo PriceTypeHelper::instance()->getActivePriceTypeCode();
```

## Method list

#### findByCode($sPriceTypeCode)

Method finds price type object by code.
```php
$obPriceType = PriceTypeHelper::instance()->findByCode('b2b');
```

#### getActive()

Method returns active price type.

#### getActivePriceTypeCode()

Method returns code of active price type.

#### switchActive($sPriceTypeCode)

Method allow you to switch active price type.
```php
PriceTypeHelper::instance()->switchActive('b2b');
```
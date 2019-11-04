[Back to modules](modules/home.md)

[Home](modules/price-type/home.md)
• [Model](modules/price-type/model/model.md)
• Advanced usage

# Advanced usage {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [PriceTypeHelper class](#pricetypehelper-class)
  * [findByCode](#findbycodespricetypecode)
  * [getActive](#getactive)
  * [getActivePriceTypeCode](#getactivepricetypecode)
  * [switchActive](#switchactivespricetypecode)

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

[Home](modules/price-type/home.md)
• [Model](modules/price-type/model/model.md)
• Advanced usage

[Back to modules](modules/home.md)

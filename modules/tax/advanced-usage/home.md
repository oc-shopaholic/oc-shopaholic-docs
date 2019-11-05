[Back to modules](modules/home.md)

[Home](modules/tax/home.md)
• [Model](modules/tax/model/model.md)
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• [Extending](modules/tax/extending/extending.md)
• Advanced usage

# Advanced usage {docsify-ignore-all}

## TaxHelper class

Class allows you to set active country/state.
This allows you to apply different taxes for different countries and states.

#### switchCountry($sCountryCode)

!> Methods work only with [Rainlab.Location](https://octobercms.com/plugin/rainlab-location) plugin

Method allow you to switch active country.
```php
TaxHelper::instance()->switchCountry('US');
```

#### switchState($sStateCode)

!> Methods work only with [Rainlab.Location](https://octobercms.com/plugin/rainlab-location) plugin

Method allow you to switch active state.
```php
TaxHelper::instance()->switchState('NY');
```

[Home](modules/tax/home.md)
• [Model](modules/tax/model/model.md)
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• [Extending](modules/tax/extending/extending.md)
• Advanced usage

[Back to modules](modules/home.md)

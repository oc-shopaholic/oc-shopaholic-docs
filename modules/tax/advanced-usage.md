{% extends 'docs/modules/layout.md' %}

{% block page_title %}Advanced usage{% endblock %}

{% block content %}

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
{% endblock %}

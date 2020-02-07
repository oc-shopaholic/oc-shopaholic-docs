{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [filterByDiscount](#filterbydiscount)
* [filterByPrice](#filterbypricefstartprice-fstopprice-ipricetypeid-null)
* [filterByProperty](#filterbypropertyarfilterlist-obpropertylist)
* [filterByQuantity](#filterbyquantity)
* [getTotalQuantity](#gettotalquantity)
* [sort](#sortssorting)
* [sortByPeriod](#sortbyperiod)

### active()

Method applies filter to field "active" = true  for elements of collection.

### filterByDiscount()

Method applies filter and returns offer list with offers that have discount.
Method {{ 'filter'|available_with|lcfirst }}

### filterByPrice($fStartPrice, $fStopPrice, _[$iPriceTypeID = null]_)

Method applies filter by range of price value from $fStartPrice to $fStopPrice.
Method {{ 'filter'|available_with|lcfirst }}

If **$fStartPrice has empty value**, then method applies filter by range of price value from 0 to $fStopPrice.
If **$fStopPrice has empty value**, then method applies filter by range of price value from $fStartPrice.
If **$fStopPrice and $fStartPrice has empty values**, then method isn't  apply filter by range of price value.

```php
    $obList = OfferCollection::make([1,2,10,15])->filterByPrice(10, 15);
```

### filterByProperty($arFilterList, $obPropertyList)
  * $arFilterList - array with filter values
  * $obPropertyList - object {{ get_collection('filter-property').link() }}

Method applies filter by offer properties.
Method available with {{ get_plugin('filter').link() }} and {{ get_plugin('properties').link() }} plugins.

You needs to prepare array $arFilterList in format:
```php
    $arFilterList = [
        '12' => [ //Property ID
            'green', 'blue' //Array with values of properties for filtration
        ],
        15 => [
            10, 14 //Array with range of values (only for filter with type 'between')
        ],
    ];
```

You needs to get $obPropertyList object from current category item object or from {{ get_component('filter-property').link('filter-panel') }} component:

**Example 1:** Get $obPropertyList object from current category item object
{% verbatim %}
```twig
    $obCategory = CategoryItem.make(10);
    $obPropertyList = $obCategory.offer_filter_property;
    
    $obList = OfferCollection::make([1,2,10,15])->filterByProperty($arFilterList, $obPropertyList);
```
{% endverbatim %}

**Example 2:** Get $obPropertyList object from {{ get_component('filter-property').link('filter-panel') }} component
{% verbatim %}
```twig
title = "Product page"
url = "/product/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1
skip_error = 0

[FilterPanel]
==
{# Get product object from ProductPage component #}
{% set obProduct = ProductPage.get() %}

{# Get offer list from product object #}
{% set obOfferList = obProduct.offer %}

{# Get offer proeprty list for property sets with code 'main', enabled how filters #}
{% set obPropertyList = FilterPanel.getOfferPropertyList(['main'], null, obOfferList) %}
```
{% endverbatim %}

### filterByQuantity()

Method applies filter and returns offer list with offers that have quantity value > 0.
Method {{ 'filter'|available_with|lcfirst }}

### getTotalQuantity()

The method returns total quantity of offers.

### sort($sSorting)

Method sorts elements of collection by $sSorting value.
Available sorting value:
* 'no' - default value
* 'price|asc'
* 'price|desc'
* 'new'
```php
$obList = OfferCollection::make([1,2,10,15])->sort('price|desc');
```

> You can use [**shopaholic.sorting.offer.get.list**](modules/offer/event/event.md#shopaholicsortingoffergetlist) event and add custom sorting for list of offers

### sortByPeriod()

Method applies sorting by access period to subscriptions.
Method {{ 'subscriptions'|available_with|lcfirst }}
{% endblock %}
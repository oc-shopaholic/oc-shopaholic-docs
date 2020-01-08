[Back to modules](modules/home.md)

[Home](modules/offer/home.md)
• [Model](modules/offer/model/model.md)
• [Item](modules/offer/item/item.md)
• Collection
• [Events](modules/offer/event/event.md)
• [Examples](modules/offer/examples/examples.md)
• [Extending](modules/offer/extending/extending.md)

# OfferCollection{docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

!> **Attention!** **BrandCollection** extends [ElementCollection class](collection-class/collection-class.md).
All available methods of ElementCollection class you can find in [section](collection-class/collection-class.md#method-list) 

## Method list

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
Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) plugin.

### filterByPrice($fStartPrice, $fStopPrice, _[$iPriceTypeID = null]_)

Method applies filter by range of price value from $fStartPrice to $fStopPrice.
Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) plugin.

If **$fStartPrice has empty value**, then method applies filter by range of price value from 0 to $fStopPrice.
If **$fStopPrice has empty value**, then method applies filter by range of price value from $fStartPrice.
If **$fStopPrice and $fStartPrice has empty values**, then method isn't  apply filter by range of price value.

```php
    $obList = OfferCollection::make([1,2,10,15])->filterByPrice(10, 15);
```

### filterByProperty($arFilterList, $obPropertyList)
  * $arFilterList - array with filter values
  * $obPropertyList - object [FilterPropertyCollection](modules/property/collection/collection.md#filterpropertycollection)

Method applies filter by offer properties.
Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) and [Properties for Shopaholic](plugins/home.md#properties-for-shopaholic) plugins.

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

You needs to get $obPropertyList object from current category item:
```php
    $obCategory = CategoryItem.make(10);
    $obPropertyList = $obCategory.offer_filter_property;
    
    $obList = OfferCollection::make([1,2,10,15])->filterByProperty($arFilterList, $obPropertyList);
```

### filterByQuantity()

Method applies filter and returns offer list with offers that have quantity value > 0.
Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) plugin.

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
Method available with [Subscriptions for Shopaholic](plugins/home#subscriptions-for-shopaholic) plugin.

[Home](modules/offer/home.md)
• [Model](modules/offer/model/model.md)
• [Item](modules/offer/item/item.md)
• Collection
• [Events](modules/offer/event/event.md)
• [Examples](modules/offer/examples/examples.md)
• [Extending](modules/offer/extending/extending.md)

[Back to modules](modules/home.md)

# OfferCollection{docsify-ignore-all}
      
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

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
  * $obPropertyList - object [FilterPropertyCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterPropertyCollection)

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
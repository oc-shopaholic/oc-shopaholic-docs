{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [getCurrency](#getcurrency)
* [getCurrencyCode](#getcurrencycode)
* [getTotalPrice](#gettotalprice)
* [getTotalPriceValue](#gettotalpricevalue)
* [getOldTotalPrice](#getoldtotalprice)
* [getOldTotalPriceValue](#getoldtotalpricevalue)
* [getDiscountTotalPrice](#getdiscounttotalprice)
* [getDiscountTotalPriceValue](#getdiscounttotalpricevalue)
* [getTotalPriceData](#gettotalpricedata)
* [getTotalQuantity](#gettotalquantity)
* [hasOffer](#hasofferiofferid)
* [hasProduct](#hasproductiproductid)

### getCurrency()

Method returns active currency symbol. For example: $

### getCurrencyCode()

Method returns active currency code. For example: USD

### getTotalPrice()

Method returns formatted total price string (**"1 450,95"**)

### getTotalPriceValue()

Method returns float total price value (**1450.95**)

### getOldTotalPrice()

Method returns formatted total price string without discounts (**"1 650,95"**)

### getOldTotalPriceValue()

Method returns float total price value without discounts (**1650.95**)

### getDiscountTotalPrice()

Method returns formatted discount price string (**"200,00"**)

### getDiscountTotalPriceValue()

Method returns float discount price value (**200**)

### getTotalPriceData()

Method returns [TotalPriceContainer](modules/price-container/home.md#totalpricecontainer) class object.
Object contains all fields of total price. For example: price, old_price, tax_price, discount_price, etc.

```php
    $obList = CartPositionCollection::make([1,2,10,15]);
    $obPriceContainer = $obList->getTotalPriceData();
    echo $obPriceContainer->price;
```

### getTotalQuantity()

Method returns total quantity of cart positions.

### hasOffer($iOfferID)

Method returns true, if collection has offer with ID = $iOfferID
```php
    $obList = CartPositionCollection::make([1,2,10,15]);
    if ($obList->hasOffer(2)) {
        //to do something
    }
```

### hasProduct($iProductID)

Method returns true, if collection has product with ID = $iProductID
```php
    $obList = CartPositionCollection::make([1,2,10,15]);
    if ($obList->hasProduct(2)) {
        //to do something
    }
```
{% endblock %}
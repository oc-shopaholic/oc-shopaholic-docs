[Back to modules](modules/home.md)

[Home](modules/cart-position/home.md)
• [Model](modules/cart-position/model/model.md)
• [Item](modules/cart-position/item/item.md)
• Collection
• [Examples](modules/cart-position/examples/examples.md)
• [Extending](modules/cart-position/extending/extending.md)

# CartPositionCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

!> **Attention!** **CartPositionCollection** extends [ElementCollection class](collection-class/collection-class.md).
All available methods of ElementCollection class you can find in [section](collection-class/collection-class.md#method-list) 

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

[Home](modules/cart-position/home.md)
• [Model](modules/cart-position/model/model.md)
• [Item](modules/cart-position/item/item.md)
• Collection
• [Examples](modules/cart-position/examples/examples.md)
• [Extending](modules/cart-position/extending/extending.md)

[Back to modules](modules/home.md)

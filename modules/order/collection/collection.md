[Back to modules](modules/home.md)

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• [Item](modules/order/item/item.md)
• Collection
<!--
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Examples](modules/order/examples/examples.md)
• [Extending](modules/order/extending/extending.md)
-->

# OrderCollection {docsify-ignore-all}
     
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

!> **Attention!** **OrderCollection** extends [ElementCollection class](collection-class/collection-class.md).
All available methods of ElementCollection class you can find in [section](collection-class/collection-class.md#method-list) 

## Method list

* [paymentMethod](#paymentmethodipaymentmethodid-iuserid-null)
* [shippingType](#shippingtypeishippingtypeid-iuserid-null)
* [status](#statusistatusid-iuserid-null)
* [user](#useriuserid-null)

### paymentMethod($iPaymentMethodID, _[$iUserID = null]_)
  * $iPaymentMethodID - payment method ID
  * $iUserID - user ID

Method applies filter by payment method ID and user ID.
```php
    $obList = OrderCollection::make()->paymentMethod(2);
```
```php
    $obList = OrderCollection::make()->paymentMethod(4, 2);
```

### shippingType($iShippingTypeID, _[$iUserID = null]_)
  * $iShippingTypeID - shipping type ID
  * $iUserID - user ID

Method applies filter by shipping type ID and user ID.
```php
    $obList = OrderCollection::make()->shippingType(2);
```
```php
    $obList = OrderCollection::make()->shippingType(4, 2);
```

### status($iStatusID, _[$iUserID = null]_)
  * $iStatusID - status ID
  * $iUserID - user ID

Method applies filter by status ID and user ID.
```php
    $obList = OrderCollection::make()->status(2);
```
```php
    $obList = OrderCollection::make()->status(4, 2);
```

### user(_[$iUserID = null]_)
  * $iUserID - user ID, by default $iUserID == ID of authorized user

Method applies filter by user ID.
```php
    $obList = OrderCollection::make()->user(2);
```
```php
    $obList = OrderCollection::make()->user();
```

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• [Item](modules/order/item/item.md)
• Collection
<!--
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Examples](modules/order/examples/examples.md)
• [Extending](modules/order/extending/extending.md)
-->
[Back to modules](modules/home.md)
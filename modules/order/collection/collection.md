# OrderCollection {docsify-ignore-all}
     
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

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
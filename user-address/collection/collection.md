# UserAddressCollection {docsify-ignore-all}
 
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### user(_[$iUserID = null]_)
  * $iUserID - user ID, by default $iUserID == ID of authorized user

Method applies filter by user ID.
```php
    $obList = UserAddressCollection::make()->user(2);
```
```php
    $obList = UserAddressCollection::make()->user();
```
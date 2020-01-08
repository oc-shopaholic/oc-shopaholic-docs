[Back to modules](modules/home.md)

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• Collection
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

# SubscriptionAccessCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

!> **Attention!** **SubscriptionAccessCollection** extends [ElementCollection class](collection-class/collection-class.md).
All available methods of ElementCollection class you can find in [section](collection-class/collection-class.md#method-list) 

## Method list

* [active](#active)
* [elementID](#elementidielementid-iuserid-null)
* [elementType](#elementtypeselementtype-iuserid-null)
* [findByProduct](#findbyproductiproductid-iuserid-ielementid-null-selementtype-null)
* [product](#productarproductidlist-iuserid-null)
* [user](#useriuserid-null)

### active()

Method applies filter and removes inactive access to subscription from collection.

### elementID($iElementID, _[$iUserID = null]_)
  * $iElementID - related element ID
  * $iUserID - user ID

Method applies filter by related element ID.

### elementType($sElementType, _[$iUserID = null]_)
  * $sElementType - related element type (model class)
  * $iUserID - user ID

Method applies filter by related element type.

### findByProduct($iProductID, $iUserID, _[$iElementID = null]_, _[$sElementType = null]_)
  * $iProductID - product ID
  * $iUserID - user ID
  * $iElementID - related element ID
  * $sElementType - related element type (model class)

Method finds access object by product ID, user ID and related element.

### product($arProductIDList, _[$iUserID = null]_)
  * $arProductIDList - array with product ID list
  * $iUserID - user ID

Method applies filter by array with product IDs and user ID.

### user(_[$iUserID = null]_)
  * $iUserID - user ID. If parameter value is empty, then authorized user ID will be applied

Method applies filter by user ID.

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• Collection
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

[Back to modules](modules/home.md)

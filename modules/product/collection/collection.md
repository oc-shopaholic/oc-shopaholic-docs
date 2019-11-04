[Back to modules](modules/home.md)

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• [Item](modules/product/item/item.md)
• Collection
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

# ProductCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

!> **Attention!** **BrandCollection** extends [ElementCollection class](collection-class/collection-class.md).
All available methods of ElementCollection class you can find in [section](collection-class/collection-class.md#method-list) 

* [active](#active)
* [brand](#brandibrandid)
* [campaign](#campaignicampaignid)
* [category](#categoryicategoryid-bwithchildren-false)
* [compare](#compare)
* [couponGroup](#coupongroupicoupongroupid)
* [discount](#discountidiscountid)
* [filterByBrandList](#filterbybrandlistarbrandidlist)
* [filterByDiscount](#filterbydiscount)
* [filterByPrice](#filterbypricefstartprice-fstopprice-ipricetypeid-null)
* [filterByProperty](#filterbypropertyarfilterlist-obpropertylist-obofferlist-null)
* [filterByQuantity](#filterbyquantity)
* [getOfferMaxPrice](#getoffermaxpricespricetypecode-null)
* [getOfferMinPrice](#getofferminpricespricetypecode-null)
* [label](#labelilabelid)
* [promo](#promoipromoblockid)
* [promoBlock](#promoblockipromoblockid)
* [search](#searchssearchstring)
* [sort](#sortssorting)
* [tag](#tagitagid)
* [viewed](#viewed)
* [wishList](#wishlist)

### active()

Method applies filter to field "active" = true  for elements of collection.

### brand($iBrandID)
  * $iBrandID - product brand ID

Method applies filter by brand ID.
```php
$obList = ProductCollection::make()->brand(2);
```

### campaign($iCampaignID)
  * $iCampaignID - campaign ID

Method applies filter by campaign ID. Method available with [Campaign for Shopaholic](plugins/home.md#campaign-for-shopaholic) plugin.
```php
$obList = ProductCollection::make()->campaign(2);
```

### category($iCategoryID, _[$bWithChildren = false]_)
  * $iCategoryID - product category ID or array with ID of categories
  * $bWithChildren - flag, if == true, then method returns list of products for category with ID == $iCategoryID + products of children categories 

Method applies filter by category ID.
```php
$obList = ProductCollection::make()->category(2);

$obList = ProductCollection::make()->category(2, true);

$obList = ProductCollection::make()->category([2, 5, 6]);

$obList = ProductCollection::make()->category([2, 5, 6], true);
```

### compare()

Method returns list of products added to compare. Method available with [Compare for Shopaholic](plugins/home.md#compare-for-shopaholic) plugin.

### couponGroup($iCouponGroupID)
  * $iCouponGroupID - coupon group ID

Method applies filter by coupon group ID. Method available with [Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic) plugin.
```php
$obList = ProductCollection::make()->couponGroup(2);
```

### discount($iDiscountID)
  * $iDiscountID - discount ID

Method applies filter by discount ID. Method available with [Discounts for Shopaholic](plugins/home.md#discounts-for-shopaholic) plugin.
```php
$obList = ProductCollection::make()->discount(2);
```

### filterByBrandList($arBrandIDList)
  * $arBrandIDList - array with brand ID

Method applies filter by list of brands. Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) plugin.
```php
$obList = ProductCollection::make([1,2,10,15])->filterByBrandList([10, 15]);
```

### filterByDiscount()

Method applies filter and returns product list with offers that have discount. Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) plugin.
```php
$obList = ProductCollection::make([1,2,10,15])->filterByDiscount();
```

### filterByPrice($fStartPrice, $fStopPrice, _[$iPriceTypeID = null]_)

Method applies filter by range of offer price from $fStartPrice to $fStopPrice. Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) plugin.

If $fStartPrice has empty value, then method applies filter by range of offer price from 0 to $fStopPrice.
If $fStopPrice has empty value, then method applies filter by range of offer price from $fStartPrice.
If $fStopPrice and $fStartPrice has empty value, then method isn't  apply filter by range of offer price.

```php
    $obList = ProductCollection::make([1,2,10,15])->filterByPrice(10, 15);
```

### filterByProperty($arFilterList, $obPropertyList, _[$obOfferList = null]_)
  * $arFilterList - array with filter values
  * $obPropertyList - object [FilterPropertyCollection](modules/property/collection/collection.md#filterpropertycollection)
  * $obOfferList - object [OfferCollection](offer/collection/collection.md) - filtered offer collection. Only these offers will be involved in filtering of products.

Method applies filter by product or offer properties.
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

You needs to get $obPropertyList object from current category item or with using [FilterPanel](modules/property/component/component.md#filterpanel):
```php
//Apply filter by product properties
$obCategory = CategoryItem->make(10);
$obPropertyList = $obCategory->product_filter_property;

$obList = ProductCollection::make([1,2,10,15])->filterByProperty($arFilterList, $obPropertyList);

//.....

//Apply filter by offer properties
$obCategory = CategoryItem->make(10);
$obPropertyList = $obCategory->offer_filter_property;

$obList = ProductCollection::make([1,2,10,15])->filterByProperty($arFilterList, $obPropertyList);
```
```twig
//Apply filter by product properties
{# Get product list collection #}
{% set obProductList = ProductList.make().active() %}

{# Get products proeprty list for property sets with code 'main', enabled how filters #}
{% set obPropertyList = FilterPanel.getProductPropertyList(['main'], obProductList) %}

{% set obProductList = obProductList.filterByProperty(arFilterList, obPropertyList) %}

{# .... #}
    
//Apply filter by offer properties
{# Get product list collection #}
{% set obProductList = ProductList.make().active() %}

{# Get products proeprty list for property sets with code 'main', enabled how filters #}
{% set obPropertyList = FilterPanel.getOfferPropertyList(['main'], obProductList) %}

{% set obProductList = obProductList.filterByProperty(arFilterList, obPropertyList) %}
```

### filterByQuantity()

Method applies filter and returns product list with offers that have quantity value > 0. Method available with [Filter for Shopaholic](plugins/home.md#filter-for-shopaholic) plugin.
```php
$obList = ProductCollection::make([1,2,10,15])->filterByQuantity();
```

### getOfferMaxPrice(_[$sPriceTypeCode = null]_)

Method returns object of [OfferItem](offer/item/item.md) class with max price value for product collection.
Method returns only active offer.

```php
$obList = ProductCollection::make()->active()->category(2);
$obOfferMaxPrice = $obList->getOfferMaxPrice();
```

### getOfferMinPrice(_[$sPriceTypeCode = null]_)

Method returns object of [OfferItem](offer/item/item.md) class with min price value for product collection.
Method returns only active offer.

```php
$obList = ProductCollection::make()->active()->category(2);
$obOfferMinPrice = $obList->getOfferMinPrice();
```

### label($iLabelID)
  * $iLabelID - label ID

Method applies filter by label ID. Method available with [Labels for Shopaholic](plugins/home.md#labels-for-shopaholic) plugin.
```php
$obList = ProductCollection::make()->label(2);
```

### promo($iPromoBlockID)
  * $iPromoBlockID - promo block ID

Method applies filter by promo block ID. Method uses **[shopaholic.promo_block.get.product.list](modules/product/event/event.md#shopaholicpromo_blockgetproductlist)** event to extend list of products.
```php
$obList = ProductCollection::make()->promo(2);
```

### promoBlock($iPromoBlockID)
  * $iPromoBlockID - promo block ID

Method applies filter by promo block ID.
```php
$obList = ProductCollection::make()->promoBlock(2);
```

### search($sSearchString)
  * $sSearchString - search string

Method search elements by name, code, preview_text, description, search_synonym, search_content fields.
Method available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins.
```php
$obList = ProductCollection::make()->search('test search');
```

### sort($sSorting)

Method sorts elements of collection by $sSorting value.
Available sorting value:
  * 'no' - default value
  * 'price|asc'
  * 'price|desc'
  * 'new'
  * 'popularity|desc' (Available with "[Popularity for Shopaholic](plugins/home.md#popularity-for-shopaholic)" plugin).
  * 'rating|desc' (Available with "[Reviews for Shopaholic](plugins/home.md#reviews-for-shopaholic)" plugin).
  * 'rating|asc' (Available with "[Reviews for Shopaholic](plugins/home.md#reviews-for-shopaholic)" plugin).

> You can apply sorting by price with using price type code. For example: 'price|desc|b2b', where b2b is code of price type.

> You can use [**shopaholic.sorting.get.list**](modules/product/event/event.md#shopaholicsortinggetlist) event and add custom sorting for list of products

### tag($iTagID)
  * $iTagID - tag ID

Method applies filter by tag ID. Method available with [Tags for Shopaholic](plugins/home.md#tags-for-shopaholic) plugin.
```php
$obList = ProductCollection::make()->tag(2);
```

### viewed()

Method returns list of viewed products. Method available with [Viewed products for Shopaholic](plugins/home.md#viewed-products-for-shopaholic) plugin.
```php
$obList = ProductCollection::make()->viewed()->active();
```

### wishList()

Method returns list of products from user wish list. Method available with [Wish list for Shopaholic](plugins/home.md#wish-list-for-shopaholic) plugin.
```php
$obList = ProductCollection::make()->wishList()->active();
```

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• [Item](modules/product/item/item.md)
• Collection
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

[Back to modules](modules/home.md)

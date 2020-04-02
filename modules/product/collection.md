{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

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

Method applies filter by "active" field for elements of collection.

Often projects require you to hide products that do not have active offers.
You can enable additional check when you get list of active products.
If this setting is enabled, list of active products will contain only those products that have active offers.

Go to **Backend -> Settings -> Basic Settings**
![](./../../../assets/images/backend-settings-4.png)

### brand($iBrandID)
  * $iBrandID - product brand ID

Method applies filter by brand ID.
```php
$obList = ProductCollection::make()->brand(2);
```

### campaign($iCampaignID)
  * $iCampaignID - campaign ID

Method applies filter by campaign ID. Method {{ ['campaigns']|available_with|lcfirst }}
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

Method returns list of products added to compare. Method {{ ['compare']|available_with|lcfirst }}

### couponGroup($iCouponGroupID)
  * $iCouponGroupID - coupon group ID

Method applies filter by coupon group ID. Method {{ ['coupons']|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->couponGroup(2);
```

### discount($iDiscountID)
  * $iDiscountID - discount ID

Method applies filter by discount ID. Method {{ ['discounts']|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->discount(2);
```

### filterByBrandList($arBrandIDList)
  * $arBrandIDList - array with brand ID

Method applies filter by list of brands. Method {{ 'filter'|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->filterByBrandList([10, 15]);
```

### filterByDiscount()

Method applies filter and returns product list with offers that have discount (old_price > 0). Method {{ 'filter'|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->filterByDiscount();
```

### filterByPrice($fStartPrice, $fStopPrice, _[$iPriceTypeID = null]_)

Method applies filter by range of offer price from $fStartPrice to $fStopPrice. Method {{ 'filter'|available_with|lcfirst }}

If $fStartPrice has empty value, then method applies filter by range of offer price from 0 to $fStopPrice.
If $fStopPrice has empty value, then method applies filter by range of offer price from $fStartPrice.
If $fStopPrice and $fStartPrice has empty value, then method isn't  apply filter by range of offer price.

```php
$obList = ProductCollection::make()->filterByPrice(10, 15);
```

### filterByProperty($arFilterList, $obPropertyList, _[$obOfferList = null]_)
  * $arFilterList - array with filter values
  * $obPropertyList - object {{ get_collection('filter-property').link() }}
  * $obOfferList - object {{ get_collection('offer').link() }} - filtered offer collection. Only these offers will be used in filtering of products.

Method applies filter by product or offer properties.
Method {{ ['filter', 'properties']|available_with|lcfirst }}

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

You should get $obPropertyList object from current {{ get_item('category').link() }} or with using {{ get_component('filter-property').link('filter-panel') }}:
```php
//Apply filter by product properties
$obCategory = CategoryItem->make(10);
$obPropertyList = $obCategory->product_filter_property;

$obList = ProductCollection::make()->filterByProperty($arFilterList, $obPropertyList);

//.....

//Apply filter by offer properties
$obCategory = CategoryItem->make(10);
$obPropertyList = $obCategory->offer_filter_property;

$obList = ProductCollection::make()->filterByProperty($arFilterList, $obPropertyList);
```
{% verbatim %}
```twig
{# Apply filter by product properties #}
{# Get product list collection #}
{% set obProductList = ProductList.make().active() %}

{# Get products proeprty list for property sets with code 'main', enabled how filters #}
{% set obPropertyList = FilterPanel.getProductPropertyList(['main'], obProductList) %}

{% set obProductList = obProductList.filterByProperty(arFilterList, obPropertyList) %}

{# .... #}
    
{# Apply filter by offer properties #}
{# Get product list collection #}
{% set obProductList = ProductList.make().active() %}

{# Get products proeprty list for property sets with code 'main', enabled how filters #}
{% set obPropertyList = FilterPanel.getOfferPropertyList(['main'], obProductList) %}

{% set obProductList = obProductList.filterByProperty(arFilterList, obPropertyList) %}
```
{% endverbatim %}

### filterByQuantity()

Method applies filter and returns product list with offers that have quantity value > 0. Method {{ 'filter'|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->filterByQuantity();
```

### getOfferMaxPrice(_[$sPriceTypeCode = null]_)

Method returns object of {{ get_item('offer').link() }} class with max price value for product collection.
Method returns only active offer.

```php
$obList = ProductCollection::make()->active()->category(2);
$obOfferMaxPrice = $obList->getOfferMaxPrice();
```

### getOfferMinPrice(_[$sPriceTypeCode = null]_)

Method returns object of {{ get_item('offer').link() }} class with min price value for product collection.
Method returns only active offer.

```php
$obList = ProductCollection::make()->active()->category(2);
$obOfferMinPrice = $obList->getOfferMinPrice();
```

### label($iLabelID)
  * $iLabelID - label ID

Method applies filter by label ID. Method {{ ['labels']|available_with|lcfirst }}
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
Method {{ ['search', 'sphinx']|available_with|lcfirst }}
```php
$obProductList = ProductCollection::make()->search('search phrase');
```

### sort($sSorting)

Method sorts elements of collection by $sSorting value.
Available sorting value:
  * 'no' - default value
  * 'price|asc'
  * 'price|desc'
  * 'new'
  * 'popularity|desc' ({{ 'popularity'|available_with }}).
  * 'rating|desc' ({{ 'reviews'|available_with }}).
  * 'rating|asc' ({{ 'reviews'|available_with }}).

> You can apply sorting by price with using price type code. For example: 'price|desc|b2b', where b2b is code of price type.

> You can use [**shopaholic.sorting.get.list**](modules/product/event/event.md#shopaholicsortinggetlist) event and add custom sorting for list of products

### tag($iTagID)
  * $iTagID - tag ID

Method applies filter by tag ID. Method {{ 'tags'|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->tag(2);
```

### viewed()

Method returns list of viewed products. Method {{ 'viewed-products'|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->viewed()->active();
```

### wishList()

Method returns list of products from user wish list. Method {{ 'wish-list'|available_with|lcfirst }}
```php
$obList = ProductCollection::make()->wishList()->active();
```
{% endblock %}
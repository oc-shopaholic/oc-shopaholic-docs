# Plugins end extensions

## Accessories for Shopaholic

Accessories plugin allows to bind products and assign them as an accessory to another product (for instance a mobile phone and headphones).
See more information about accessory module in [section](modules/accessory/home). 

![](./../assets/images/backend-accessory-1.png)

Plugin adds:
* "accessory" relation to [Product](modules/product/model/model) model
* "accessory" attribute to [ProductItem](modules/product/item/item) item class

## Campaign for Shopaholic

## Compare for Shopaholic

## Coupons for Shopaholic

## Discounts for Shopaholic

## Digital products for Shopaholic

## Facebook for Shopaholic

## Filter for Shopaholic

## Labels for Shopaholic

## Orders for Shopaholic

## Popularity for Shopaholic

## Properties for Shopaholic

## Related products for Shopaholic

Related products plugin allows to bind products and assign them as an related to another product (for instance a mobile phone iPhone X and iPhone X MAX).
See more information about related products module in [section](modules/related-products/home). 

![](./../assets/images/backend-related-products-1.png)

Plugin adds:
* "related" relation to [Product](modules/product/model/model) model
* "related" attribute to [ProductItem](modules/product/item/item) item class

## Reviews for Shopaholic

## Search for Shopaholic

Search for Shopaholic plugin allows to search products, categories, brands, tags by:
* name (product name);
* code (product code or vendor code);
* preview_text (preview text of product description);
* description (product description);
* search_synonym - allows to add search synonyms to certain keywords so customers can easily find elements by typing semantically related phrases;
* search_content - a field that is invisible to the user in backend and allows developer to automatically place searchable content.

See more information about search module in [section](modules/search/home).

Plugin adds:
* "search" method to [ProductCollection](modules/product/collection/collection#searchssearchstring) collection class
* "search" method to [BrandCollection](modules/brand/collection/collection#searchssearchstring) collection class
* "search" method to [CategoryCollection](modules/category/collection/collection#searchssearchstring) collection class
* "search" method to [TagCollection](modules/tag/collection/collection#searchssearchstring) collection class

## Sphinx for Shopaholic

## Tags for Shopaholic

## Viewed products for Shopaholic

## VK Goods for Shopaholic

## Wish list for Shopaholic

## Yandex Market for Shopaholic
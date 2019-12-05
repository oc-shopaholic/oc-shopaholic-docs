# Plugins end extensions

## Main plugin

Main plugin allows you to create simple catalog.
You can easily render product catalog page, product page, blocks with list of brands, content brand page,
blocks with list of promo blocks, promotions or sales, marketing pages with list of discounted products.

If your site only needs to display products, without making an order, then main plugin is perfect for solving this task.

Main plugin allows you to create/edit [brands](modules/brand/home.md), [categories](modules/category/home.md),
[products](modules/product/home.md), [offers](modules/offer/home.md), 
[promo blocks](modules/promo-block/home.md), [price types](modules/price-type/home.md),
[currencies](modules/currency/home.md), [taxes](modules/tax/home.md).

![](./../assets/images/backend-brand-1.png)

![](./../assets/images/backend-category-1.png)

![](./../assets/images/backend-product-1.png)

![](./../assets/images/backend-offer-1.png)

![](./../assets/images/backend-promo-block-1.png)

![](./../assets/images/backend-price-type-1.png)

![](./../assets/images/backend-currency-1.png)

![](./../assets/images/backend-tax-1.png)

## Accessories for Shopaholic

Accessories plugin allows to bind products and assign them as an accessory to another product (for instance a mobile phone and headphones).
See more information about accessory module in [section](modules/accessory/home). 

![](./../assets/images/backend-accessory-1.png)

Plugin adds:
* "accessory" relation to [Product](modules/product/model/model) model
* "accessory" attribute to [ProductItem](modules/product/item/item) item class

## Campaigns for Shopaholic

## Compare for Shopaholic

## Coupons for Shopaholic

## Discounts for Shopaholic

## Digital products for Shopaholic

## Facebook for Shopaholic

## Filter for Shopaholic

## Labels for Shopaholic

## Orders for Shopaholic

Using [cart](modules/cart/home) module you will be able to allow users to add product offers to cart,
display cart positions (for example: mini-cart),
change quantity and remove positions from cart.

![](./../assets/images/fronend-cart-1.png)

![](./../assets/images/fronend-cart-2.png)

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

You can use [Sphinx](http://sphinxsearch.com/) to add full-text search on your site.
Sphinx for Shopaholic plugin allows to search products, categories, brands, tags by:
* name (product name);
* code (product code or vendor code);
* preview_text (preview text of product description);
* description (product description);
* search_synonym - allows to add search synonyms to certain keywords so customers can easily find elements by typing semantically related phrases;
* search_content - a field that is invisible to the user in backend and allows developer to automatically place searchable content.

See more information about search module in [section](modules/search/sphinx/sphinx).

Plugin adds:
* "search" method to [ProductCollection](modules/product/collection/collection#searchssearchstring) collection class
* "search" method to [BrandCollection](modules/brand/collection/collection#searchssearchstring) collection class
* "search" method to [CategoryCollection](modules/category/collection/collection#searchssearchstring) collection class
* "search" method to [TagCollection](modules/tag/collection/collection#searchssearchstring) collection class

## Tags for Shopaholic

## Viewed products for Shopaholic

## VK Goods for Shopaholic

## Wish list for Shopaholic

## Yandex Market for Shopaholic
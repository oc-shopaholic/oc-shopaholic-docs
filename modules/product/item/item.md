[Back to modules](modules/home.md)

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• Item
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

# ProductItem {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|accessory|[ProductCollection](modules/product/collection/collection.md)|Available with ["Accessory for Shopaholic"](plugins/home.md#accessory-for-shopaholic) plugin|
|active|bool|
|active_vk|bool|Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin|
|additional_category|[CategoryCollection](modules/category/collection/collection.md)|collection of additional categories|
|additional_category_id|array|
|brand|[BrandItem](modules/brand/item/item.md)|
|brand_id|int|
|category|[CategoryItem](modules/category/item/item.md)|
|category_id|int|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|description|string|
|external_vk_id|int|Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin|
|images|\October\Rain\Database\Collection, \System\Models\File[]|
|images_facebook|\October\Rain\Database\Collection, \System\Models\File[]|Available with [Facebook for Shopaholic](plugins/home#facebook-for-shopaholic) plugin|
|images_vkontakte|\October\Rain\Database\Collection, \System\Models\File[]|Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin|
|images_yandex|\October\Rain\Database\Collection, \System\Models\File[]|Available with [Yandex Market for Shopaholic](plugins/home#yandex-market-for-shopaholic) plugin|
|label|[LabelCollection](modules/label/collection/collection.md)|Available with ["Labels for Shopaholic"](plugins/home.md#labels-for-shopaholic) plugin|
|name|string|
|offer|[OfferCollection](modules/offer/collection/collection.md)|Collection with **active** offers|
|offer_id_list|array|**active** offer ID list|
|preview_image|\System\Models\File|
|preview_image_facebook|\System\Models\File|Available with [Facebook for Shopaholic](plugins/home#facebook-for-shopaholic) plugin|
|preview_image_vkontakte|\System\Models\File|Available with [VK Goods for Shopaholic](plugins/home#vk-goods-for-shopaholic) plugin|
|preview_image_yandex|\System\Models\File|Available with [Yandex Market for Shopaholic](plugins/home#yandex-market-for-shopaholic) plugin|
|preview_text|string|
|property|[PropertyCollection](modules/property/collection/collection.md)|Object with sorted active product properties. Available with [Properties for Shopaholic](plugins/home.md#properties-for-shopaholic) plugin|
|rating|float|Available with ["Reviews for Shopaholic"](plugins/home.md#reviews-for-shopaholic) plugin|
|rating_data|array|For example: [1 => 0, 2 => 4, 3 => 7, 4 => 21, 5 => 48]<br><br>Available with ["Reviews for Shopaholic"](plugins/home.md#reviews-for-shopaholic) plugin|
|related|[ProductCollection](modules/product/collection/collection.md)|Available with ["Related products for Shopaholic"](plugins/home.md#related-products-for-shopaholic) plugin|
|review|[ReviewCollection](modules/review/collection/collection.md)|Available with ["Reviews for Shopaholic"](plugins/home.md#reviews-for-shopaholic) plugin|
|slug|string|
|trashed|bool|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Product** model.
```php
Product::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obProductItem = ProductItem::make(1);
echo $obProductItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in ProductItem class and add your method name in **$arExtendResult** array.
```php
ProductItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';
TagItem.md
     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obProductItem = ProductItem::make(1);
echo $obProductItem->my_property;
```

## Method List:

### inCompare()

Method returns true, if product is added in compare. Available with ["Compare for Shopaholic"](plugins/home.md#compare-for-shopaholic) plugin.

### inWishList()

Method returns true, if product is added in wish list. Available with ["Wish list for Shopaholic"](plugins/home.md#with-list-for-shopaholic) plugin.

### isActive()

Method returns true, if product is active and not deleted (not trashed).

### getPageUrl(_[$sPageCode = 'product']_)
  * $sPageCode - page file name

Method returns URL of product page.
Method gets list of [ProductPage](modules/product/component/component.md#productpage), [BrandPage](modules/brand/component/component.md#brandpage),
[CategoryPage](modules/category/component/component.md#categorypage) components attached on page and compiles list of parameters :slug to generate page URL.

> CategoryPage components must be attached on page so that child categories are higher than parent categories.

```twig
title = "Product page"
url = "/catalog/:main_category/:category/:brand/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1

[BrandPage]
slug = "{{ :brand }}"
slug_required = 1
smart_url_check = 1
skip_error = 0

[CategoryPage]
slug = "{{ :category }}"
slug_required = 1
smart_url_check = 1
has_wildcard = 0
skip_error = 0

[CategoryPage ParentCategoryPage]
slug = "{{ :main_category }}"
slug_required = 1
smart_url_check = 0
has_wildcard = 0
skip_error = 0
```

### getRatingCount($iRating)

Method returns number of reviews with rating value = $iRating. Available with ["Reviews for Shopaholic"](plugins/home.md#reviews-for-shopaholic) plugin.

For example: if ```rating_data = [1 => 0, 2 => 0, 3 => 0, 4 => 3, 5 => 1]```, then code ```$obProduct->getRatingCount(4);```  returns 3.

### getRatingPercent($iRating)

Method returns number of reviews with rating value = $iRating in percentage. Available with ["Reviews for Shopaholic"](plugins/home.md#reviews-for-shopaholic) plugin.

For example: if ```rating_data = [1 => 0, 2 => 0, 3 => 0, 4 => 3, 5 => 1]```, then code ```$obProduct->getRatingPercent(4)``` returns 75.

### getRatingTotalCount()

Method returns total count of reviews with rating. Available with ["Reviews for Shopaholic"](plugins/home.md#reviews-for-shopaholic) plugin.

For example:  if ```rating_data = [1 => 0, 2 => 0, 3 => 0, 4 => 3, 5 => 1]```, then code ```$obProduct->getRatingTotalCount()``` returns 4.

[Home](modules/product/home.md)
• [Model](modules/product/model/model.md)
• Item
• [Collection](modules/product/collection/collection.md)
• [Components](modules/product/component/component.md)
• [Events](modules/product/event/event.md)
• [Examples](modules/product/examples/examples.md)
• [Extending](modules/product/extending/extending.md)

[Back to modules](modules/home.md)

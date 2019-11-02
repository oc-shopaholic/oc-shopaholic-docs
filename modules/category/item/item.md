# CategoryItem {docsify-ignore-all}

[Back to modules](modules/home.md)
/ [Home](modules/category/home.md)
/ [Model](modules/category/model/model.md)
/ Item
/ [Collection](modules/category/collection/collection.md)
/ [Components](modules/category/component/component.md)
/ [Events](modules/category/event/event.md)
/ [Examples](modules/category/examples/examples.md)
/ [Extending](modules/category/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Field list

|  Name | Type | Description |
|-------|------|--------|
|id|int|
|children|[CategoryCollection](modules/category/collection/collection.md)|Collection with **active** children category|
|category_vk_id|int|Field available with [VK Goods for Shopaholic](/plugins/home.md#vk-goods-for-shopaholic)|
|code|string|Unique element code that can be used in our custom plugins or theme templates|
|description|string|
|images|\October\Rain\Database\Collection, \System\Models\File[]|
|name|string|
|nest_depth|int|
|offer_filter_property|[FilterPropertyCollection](modules/property/collection/collection.md#filterpropertycollection)|Available with [Properties for Shopaholic](plugins/home.md#properties-for-shopaholic) and ["Filter for Shopaholic"](plugins/home.md#filter-for-shopaholic) plugins|
|parent|CategoryItem|Object of parent category|
|parent_id|int|
|preview_image|\System\Models\File|
|preview_text|string|
|product_count|int|
|product_filter_property|[FilterPropertyCollection](modules/property/collection/collection.md#filterpropertycollection)|Available with [Properties for Shopaholic](plugins/home.md#properties-for-shopaholic) and ["Filter for Shopaholic"](plugins/home.md#filter-for-shopaholic) plugins|
|slug|string|
|updated_at|\October\Rain\Argon\Argon|

## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **Category** model.
```php
Category::extend(function($obModel) {
    $obModel->addCachedField(['field_1', 'field_2']);
});

...

$obCategoryItem = CategoryItem::make(1);
echo $obCategoryItem->field_1;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in CategoryItem class and add your method name in **$arExtendResult** array.
```php
CategoryItem::extend(function($obItem) {

     $obItem->arExtendResult[] = 'addMyProperty';

     $obItem->addDynamicMethod('addMyProperty', function() use ($obItem) {

         $obModel = $obItem->getObject();
         $obItem->setAttribute('my_property', $obModel->my_property);
     });
});

...

$obCategoryItem = CategoryItem::make(1);
echo $obCategoryItem->my_property;
```

## Method List:

### getPageUrl($sPageCode)
  * $sPageCode - page file name

Method returns URL of category page.
Method gets list of [CategoryPage](modules/category/component/component.md#categorypage) components attached on page and compiles list of parameters :slug to generate page URL.
[CategoryPage](modules/category/component/component.md#categorypage) components must be attached on page so that child categories are higher than parent categories.

```twig
title = "Catalog"
url = "/catalog/:parent_category/:category"
layout = "default"
is_hidden = 0

[CategoryPage]
slug = "{{ :category }}"
slug_required = 1
smart_url_check = 1

[CategoryPage ParentCategoryPage]
slug = "{{ :parent_category }}"
slug_required = 1
smart_url_check = 0
```

[Back to modules](modules/home.md)
/ [Home](modules/category/home.md)
/ [Model](modules/category/model/model.md)
/ Item
/ [Collection](modules/category/collection/collection.md)
/ [Components](modules/category/component/component.md)
/ [Events](modules/category/event/event.md)
/ [Examples](modules/category/examples/examples.md)
/ [Extending](modules/category/extending/extending.md)
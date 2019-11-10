[Back to modules](modules/home.md)

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• Collection
• [Components](modules/category/component/component.md)
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

# CategoryCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

!> **Attention!** **CategoryCollection** extends [ElementCollection class](collection-class/collection-class.md).
All available methods of ElementCollection class you can find in [section](collection-class/collection-class.md#method-list) 

## Method list

* [active](#active)
* [search](#searchssearchstring)
* [tree](#tree)

### active()

Method applies filter to field "active" == true for elements of collection.

### search($sSearchString)
  * $sSearchString - search string

Method search elements by name, preview_text, description, search_synonym, search_content fields.
Method available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins.
```php
    $obList = CategoryCollection::make()->search('test search');
```

### tree()

Method returns category list of top level. Method returns only active categories. 
You can change tree of categories by going to **Backend -> Catalog -> Categories -> Reorder records**

![](./../../../assets/images/backend-category-5.png)

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• Collection
• [Components](modules/category/component/component.md)
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

[Back to modules](modules/home.md)

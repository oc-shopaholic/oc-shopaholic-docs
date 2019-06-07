# BrandCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### active()

Method applies filter to field "active" = true for elements of collection.

### category($iCategoryID)
  * $iCategoryID - product category ID

Method applies filter by category ID.
> List is created based on relations of models: Brand -\> Product -\> Category

```php
    $obList = BrandCollection::make()->category(2);
```

### search($sSearchString)
  * $sSearchString - search string

Method search elements by name, preview_text, description, search_synonym, search_content fields.
Method available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins.
```php
    $obList = ProductCollection::make()->search('test search');
```

### sort()

Method sorts the elements of collection by "sort_order" field.

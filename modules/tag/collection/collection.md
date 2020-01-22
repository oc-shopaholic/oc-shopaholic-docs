# TagCollection {docsify-ignore-all}
       
!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

### active()

Method applies filter to field "active" = true  for elements of collection.

### category($iCategoryID)
  * $iCategoryID - category ID

Method applies filter by category ID.

### search($sSearchString)
  * $sSearchString - search string

Method search elements by name, code, preview_text, description, search_synonym, search_content fields.
Method available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins.
```php
$obList = TagCollection::make()->search('test search');
```

### sort()

Method sorts elements of collection by "sort_order" field.
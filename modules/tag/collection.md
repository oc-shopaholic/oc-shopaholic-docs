{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [category](#categoryicategoryid)
* [search](#searchssearchstring)
* [sort](#sort)

### active()

Method applies filter to field "active" = true  for elements of collection.

### category($iCategoryID)
  * $iCategoryID - category ID

Method applies filter by category ID.

### search($sSearchString)
  * $sSearchString - search string

Method search elements by name, preview_text, description, search_synonym, search_content fields.
Method available with {{ get_plugin('search').link() }} or {{ get_plugin('sphinx').link() }} plugins.
```php
$obList = TagCollection::make()->search('test search');
```

### sort()

Method sorts elements of collection by "sort_order" field. You can change sorting of tags by going to **Backend -> Catalog -> Tags -> Reorder records**

![](./../../../assets/images/backend-tag-2.png ':class=medium-image')
{% endblock %}

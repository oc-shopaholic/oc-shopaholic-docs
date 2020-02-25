{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [category](#categoryicategoryid)
* [search](#searchssearchstring)
* [sort](#sort)

### active()

Method applies filter by field "active" == true for elements of the collection.

### category($iCategoryID)
  * $iCategoryID - product category ID

Method applies filter by category ID.
> List is created based on relations of models: Brand -\> Product -\> Category

```php
$obBrandList = BrandCollection::make()->category(2);
```

### search($sSearchString)
  * $sSearchString - search string

Method search elements by name, preview_text, description, search_synonym, search_content fields.
Method available with {{ get_plugin('search').link() }} or {{ get_plugin('sphinx').link() }} plugins.

> You can find more information about search settings {{ get_module('search').link('here') }}

```php
$obBrandList = BrandCollection::make()->search('test search');
```

### sort()

Method sorts elements of collection by "sort_order" field.
You can change sorting of brands by going to **Backend -> Catalog -> Brands -> Reorder records**

![](./../../../assets/images/backend-brand-5.png)
{% endblock %}
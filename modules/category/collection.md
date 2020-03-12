{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [active](#active)
* [search](#searchssearchstring)
* [tree](#tree)

### active()

Method applies filter to field "active" == true for elements of collection.

### search($sSearchString)
  * $sSearchString - search string

Method search elements by name, preview_text, description, search_synonym, search_content fields.
Method {{ ['search', 'sphinx']|available_with|lcfirst }}
```php
    $obList = CategoryCollection::make()->search('test search');
```

### tree()

Method returns category list of top level. Method returns only active categories. 
You can change tree of categories by going to **Backend -> Catalog -> Categories -> Reorder records**

![](./../../../assets/images/backend-category-5.png)
{% endblock %}

{% extends 'docs/modules/item-default.md' %}

{% block method_list %}
{{ parent() }}

### inCompare()

Method returns true, if product is added in compare. {{ "compare"|available_with }}

### inWishList()

Method returns true, if product is added in wish list. {{ 'wish-list'|available_with }}

### isActive()

Method returns true, if product is active and not deleted (not trashed).

### getPageUrl(_[$sPageCode = 'product']_)
  * $sPageCode - page file name

Method returns URL of product page.
Method gets list of {{ component.link('product-page') }}, {{ get_component('brand').link('brand-page') }},
{{ get_component('category').link('category-page') }} components attached on page and compiles list of parameters :slug to generate page URL.

> CategoryPage components must be attached on page so that child categories are higher than parent categories.

{% verbatim %}
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
{% endverbatim %}

### getRatingCount($iRating)

Method returns number of reviews with rating value = $iRating. {{ 'reviews'|available_with }}

For example: if ```rating_data = [1 => 0, 2 => 0, 3 => 0, 4 => 3, 5 => 1]```, then code ```$obProduct->getRatingCount(4);```  returns 3.

### getRatingPercent($iRating)

Method returns number of reviews with rating value = $iRating in percentage. {{ 'reviews'|available_with }}

For example: if ```rating_data = [1 => 0, 2 => 0, 3 => 0, 4 => 3, 5 => 1]```, then code ```$obProduct->getRatingPercent(4)``` returns 75.

### getRatingTotalCount()

Method returns total count of reviews with rating. {{ 'reviews'|available_with }}

For example:  if ```rating_data = [1 => 0, 2 => 0, 3 => 0, 4 => 3, 5 => 1]```, then code ```$obProduct->getRatingTotalCount()``` returns 4.
{% endblock %}
{% extends 'docs/modules/item-default.md' %}

{% block method_list %}
  {{ parent() }}

### getPageUrl($sPageCode, _[$arRemoveParamList = \[\]]_)
* $sPageCode - page file name
* $arRemoveParamList - list of optional URL parameters that must be deleted when generating the URL page

Method returns URL of category page.
Method gets list of {{ component.link('category-page') }} components attached on page and compiles list of parameters :slug to generate page URL.
{{ component.link('category-page') }} components must be attached on page so that child categories are higher than parent categories.

{{ get_module('category').example('pages/category-page-2.htm')|raw }}
{% endblock %}
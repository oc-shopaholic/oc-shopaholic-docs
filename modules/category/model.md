{% extends 'docs/modules/model-default.md' %}

{% block relations %}
{{ parent() }}

## Search fields

Search fields available with [Search for Shopaholic](plugins/home.md#search-for-shopaholic) or [Sphinx for Shopaholic](plugins/home.md#search-for-shopaholic) plugins.

**search_synonym** field is available in backend. **search_content** filed isn't available in backend. **search_content** field should be filled in automatically. 

![](./../../../assets/images/backend-category-6.png)
{% endblock %}
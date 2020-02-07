{% extends 'docs/modules/model-default.md' %}

{% block relations %}
{{ parent() }}

## Search fields

Search fields available with {{ get_plugin('search').link() }} or {{ get_plugin('sphinx').link() }} plugins.

**search_synonym** field is available in backend. **search_content** filed isn't available in backend. **search_content** field should be filled in automatically. 

![](./../../../assets/images/backend-product-3.png)
{% endblock %}
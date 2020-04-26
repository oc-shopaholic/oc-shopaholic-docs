{% extends 'docs/modules/model-default.md' %}

{% block relations %}
{{ parent() }}

## Search fields

Search fields {{ ['search', 'sphinx']|available_with|lcfirst }}

**search_synonym** field is available in backend. **search_content** filed isn't available in backend. **search_content** field should be filled in automatically. 

![](./../../../assets/images/backend-category-6.png ':class=medium-image')
{% endblock %}

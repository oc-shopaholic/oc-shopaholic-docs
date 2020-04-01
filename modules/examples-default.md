{% extends "docs/modules/layout.md" %}

{% block page_title %}Examples: {{ module.name }}{% endblock %}
{% block content %}
{% for iKey, obExample in module.get('example') %}
* [Example {{ iKey + 1}}: {{ obExample.title }}](#example-{{ iKey + 1}}-{{ obExample.slug }})
{% endfor %}

{% set arParamList = {
    "section": section,
    "module": module,
    "model": model,
    "item": item,
    "collection": collection,
    "component": component
}
%}

{{ module.renderExample(arParamList)|raw }}
{% endblock %}
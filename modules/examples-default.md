{% extends "docs/modules/layout.md" %}

{% block page_title %}Examples: {{ module.name }}{% endblock %}
{% block content %}
{% for iKey, obExample in module.get('example') %}
* [{{ render_twig(obExample.title, {"i": iKey + 1}) }}](#{{ render_twig(obExample.slug, {"i": iKey + 1}) }})
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
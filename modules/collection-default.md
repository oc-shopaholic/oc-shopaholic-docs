{% extends "docs/modules/layout.md" %}

{% block page_title %}{{ collection.class }}{% endblock %}

{% block content %}

!> **Attention!** **{{ collection.class }}** extends [ElementCollection class](architecture/collection-class/collection-class.md).
All available methods of ElementCollection class you can find in [section](architecture/collection-class/collection-class.md#method-list) 

{% block method_list %}
## Method list

{% endblock %}

{% endblock %}
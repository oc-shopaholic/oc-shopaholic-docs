[Back to modules](modules/home.md)

{% if section == 'home' %}
Home
{% else %}
  [Home](modules/{{ module.slug }}/home.md)
{% endif %}
{% for sKey, arMenuItem in menu %}
  {% if sKey != section %}
• [{{ arMenuItem.title }}](modules/{{ module.slug }}/{{ sKey }}/{{ arMenuItem.slug }}.md)
  {% else %}
• {{ arMenuItem.title }}
  {% endif %}
{% endfor %}

# {% block page_title %}{{ module.title }}{% endblock %} {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

{% block content %}{% endblock %}

{% if section == 'home' %}
  Home
{% else %}
  [Home](modules/{{ module.slug }}/home.md)
{% endif %}
{% for sKey, arMenuItem in menu %}
  {% if sKey != section %}
    • [{{ arMenuItem.title }}](modules/{{ module.slug }}/{{ sKey }}/{{ arMenuItem.slug }}.md)
  {% else %}
    • {{ arMenuItem.title }}
  {% endif %}
{% endfor %}

[Back to modules](modules/home.md)
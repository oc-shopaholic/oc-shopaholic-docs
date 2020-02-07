{% extends 'docs/modules/item-default.md' %}

{% block method_list %}
{{ parent() }}

### isActive()

Method returns true if access to subscription has not yet expired.
{% endblock %}

{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [user](#user)

### user(_[$iUserID = null]_)
  * $iUserID - user ID, by default $iUserID == ID of authorized user

Method applies filter by user ID.
{% endblock %}
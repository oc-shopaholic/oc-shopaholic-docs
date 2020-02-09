{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [StatusList](#statuslist)
  * [make](#makearelementidlist-null)

## StatusList

Component allows you to render blocks with available statuses.

### make(_[$arElementIDList = null]_)

**Example:** Get collection of statuses, apply sorting + filter by flag "is_user_show"
{% verbatim %}
```twig
[StatusList]
==
{# Get StatusCollection object from StatusList component #}
{% set obStatusList = StatusList.make().sort().isUserShow() %}
{% if obStatusList.isNotEmpty() %}
    <select>
        {% for obStatus in obStatusList %}
            <option value="{{ obStatus.id }}">{{ obStatus.name_for_user }}</option>
        {% endfor %}
    </select>
{% endif %}
```
{% endverbatim %}
{% endblock %}
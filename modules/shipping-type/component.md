{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [ShippingTypeList](#shippingtypelist)
  * [make](#makearelementidlist-null)

## ShippingTypeList

Component allows you to render blocks with available shipping types.

### make(_[$arElementIDList = null]_)

**Example:** Get collection of shipping types, apply sorting + filter by flag "active"
{% verbatim %}
```twig
[ShippingTypeList]
==
{# Get ShippingTypeCollection object from ShippingTypeList component #}
{% set obShippingTypeList = ShippingTypeList.make().sort().active() %}
{% if obShippingTypeList.isNotEmpty() %}
    <ul>
        {% for obShippingType in obShippingTypeList %}
            <li data-id="{{ obShippingType.id }}">
                <div>{{ obShippingType.name }}</div>
                <div>{{ obShippingType.preview_text }}</div>
            </li>
        {% endfor %}
    </ul>
{% endif %}
```
{% endverbatim %}
{% endblock %}
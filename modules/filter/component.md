{% extends 'docs/modules/component-default.md' %}

{% block content %}

## FilterPanel

Component allows you to render custom filter panel for different pages of your site. For example: search page, brand page with product list, etc.

### getProductPropertyList($arPropertySetList, _[$obProductList = null]_)
  * (array|string) $arPropertySetList - array with list of property set codes
  * ([ProductCollection](modules/product/collection/collection.md)) $obProductList - product collection. A list of property values will be generated for this product list.

**Example 1:** Render of filter panel for product property set with code "main"
{% verbatim %}
```twig
[FilterPanel]

[ProductList]
sorting = "popularity|desc"
==

{# Get product list collection #}
{% set obProductList = ProductList.make().active() %}

{# Get products proeprty list for property sets with code 'main', enabled how filters #}
{% set obPropertyList = FilterPanel.getProductPropertyList(['main'], obProductList) %}

{% for obProperty in obPropertyList if obProperty.hasValue() %}
    
    {# Render filter name #}
    <div>{{ obProperty.filter_name }}</div>
    
    {# Get filter type #}
    {% set sFilterType = obProperty.filter_type %}
    
    {# Get proeprty value list #}
    {% set obPropertyValueList = obProperty.property_value.sort() %}
    
    {# Render filtre with type == checkbox #}
    {% if sFilterType == 'checkbox' %}
        {% for obValue in obPropertyValueList %}
            <input type="checkbox" value="{{ obValue.slug }}">
            <label>{{ obValue.value }}</label>
        {% endfor%}
    {% endif %}
    
    {# Render filtre with type == select #}
    {% if sFilterType == 'select' %}
        <select>
            {% for obValue in obPropertyValueList %}
                <option value="{{ obValue.slug }}">{{ obValue.value }}</option>
            {% endfor%}
        </select>
    {% endif %}
{% endfor %}
```
{% endverbatim %}

### getOfferPropertyList($arPropertySetList, _[$obProductList = null]_, _[$obOfferList = null]_)
  * (array|string) $arPropertySetList - array with list of property set codes
  * ([ProductCollection](modules/product/collection/collection.md)) $obProductList - product collection. List of property values will be obtained for this product list.
  * ([OfferCollection](offer/collection/collection.md)) $obOfferList - offer collection. List of property values will be obtained for this offer list.

**Example:** Render of filter panel for offer property set with code "main"
{% verbatim %}
```twig
[FilterPanel]

[ProductList]
sorting = "popularity|desc"
==

{# Get product list collection#}
{% set obProductList = ProductList.make().active() %}

{# Get products proeprty list for property sets with code 'main', enabled how filters #}
{% set obPropertyList = FilterPanel.getOfferPropertyList(['main'], obProductList) %}

{% for obProperty in obPropertyList if obProperty.hasValue() %}
    
    {# Render filter name #}
    <div>{{ obProperty.filter_name }}</div>
    
    {# Get filter type #}
    {% set sFilterType = obProperty.filter_type %}
    
    {# Get proeprty value list #}
    {% set obPropertyValueList = obProperty.property_value.sort() %}
    
    {# Render filtre with type == checkbox #}
    {% if sFilterType == 'checkbox' %}
        {% for obValue in obPropertyValueList %}
            <input type="checkbox" value="{{ obValue.slug }}">
            <label>{{ obValue.value }}</label>
        {% endfor%}
    {% endif %}
    
    {# Render filtre with type == select #}
    {% if sFilterType == 'select' %}
        <select>
            {% for obValue in obPropertyValueList %}
                <option value="{{ obValue.slug }}">{{ obValue.value }}</option>
            {% endfor%}
        </select>
    {% endif %}
{% endfor %}
```
{% endverbatim %}
{% endblock %}
{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [LabelList](#labellist)
  * [make](#makearelementidlist-null)
* [LabelPage](#labelpage)
  * [get](#get)
* [LabelData](#labeldata)
  * [get](#getielementid)

## LabelList

Component allows you to render blocks with labels.

### make(_[$arElementIDList = null]_)

Method returns new object of {{ collection.link() }} class.

**Example:** Get collection of labels, apply sorting + filter by flag "active".
{% verbatim %}
```twig
{% set obLabelList = LabelList.make().sort().active() %}
{% if obLabelList.isNotEmpty() %}
    <div class="label-list-wrapper">
        {% for obLabel in obLabelList %}
            <div data-id="{{ obLabel.id }}">
                <span>{{ obLabel.name }}</span>
            </div>
        {% endfor %}
    </div>
{% endif %}
```
{% endverbatim %}

## LabelPage

Component allows you to render label page.

Available properties:
{% verbatim %}
|Property|Available values|Description|
|---|---|---|
|slug|{{ :slug }}|URL parameter from page settings|
|slug_required|0 or 1|If value is 1, component will generate 404 page, if "slug" parameter is empty|
{% endverbatim %}

### get()

Method returns {{ item.link() }} object for current page.
{% verbatim %}
```twig
[LabelPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get label item #}
{% set obLabel = LabelPage.get() %}
<div data-id="{{ obLabel.id }}">
    <h1>{{ obLabel.name }}</h1>
</div>
```
{% endverbatim %}

## LabelData
Component allows you to render blocks with label. You can get label object by ID.

### get($iElementID)

Method returns {{ item.link() }} object with ID = $iElementID.
{% verbatim %}
```twig
{# Get label item with ID = 10 #}
{% set obLabel = LabelData.get(10) %}
{% if obLabel.isNotEmpty() %}
    <div data-id="{{ obLabel.id }}">
        <span>{{ obLabel.name }}</span>
    </div>
{% endif %}
```
{% endverbatim %}
{% endblock %}
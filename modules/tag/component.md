{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [TagList](#taglist)
  * [make](#makearelementidlist-null)
* [TagPage](#tagpage)
  * [get](#get)
* [TagData](#tagdata)
  * [get](#getielementid)

## TagList

Component allows you to render blocks with tags. For example: all tags, tag list with pagination,
random tags, filter panel with tags, etc.

### make(_[$arElementIDList = null]_)

Method returns new object of {{ collection.link() }} class.

**Example 1:** Get collection of tags, apply sorting + filter by flag "active"
{% verbatim %}
```twig
[TagList]
==

{% set obTagList = TagList.make().sort().active() %}
{% if obTagList.isNotEmpty() %}
    <ul>
        {% for obTag in obTagList %}
            <li>{% partial 'tag/tag-card/tag-card' obTag=obTag %}</li>
        {% endfor %}
    </ul>
{% endif %}
```
{% endverbatim %}

## TagPage

Component allows you to render tag page.

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
title = "Tag page"
url = "/tags/:slug"
layout = "main"
is_hidden = 0

[TagPage]
slug = "{{ :slug }}"
slug_required = 1
skip_error = 0
==

{# Get tag item #}
{% set obTag = TagPage.get() %}
<div data-id="{{ obTag.id }}">
    <h1>{{ obTag.name }}</h1>
    {% if obTag.preview_image is not empty %}
        <img src="{{ obTag.preview_image.path }}" title="{{ obTag.preview_image.title }}" alt="{{ obTag.preview_image.description }}">
    {% endif %}
    <div>{{ obTag.description|raw }}</div>
</div>
```
{% endverbatim %}

## TagData

Component allows you to render blocks with tag. You can get tag object by ID.

### get($iElementID)

Method returns {{ item.link() }} object with ID = $iElementID.
{% verbatim %}
```twig
[TagData]
==

{# Get tag item with ID = 10 #}
{% set obTag = TagData.get(10) %}
{% if obTag.isNotEmpty() %}
    <div data-id="{{ obTag.id }}">
        <h2>{{ obTag.name }}</h2>
        {% if obTag.preview_image is not empty %}
            <img src="{{ obTag.preview_image.path }}" title="{{ obTag.preview_image.title }}" alt="{{ obTag.preview_image.description }}">
        {% endif %}
        <div>{{ obTag.preview_text }}</div>
    </div>
{% endif %}
```
{% endverbatim %}
{% endblock %}
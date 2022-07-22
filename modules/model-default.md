{% extends "docs/modules/layout.md" %}

{% block page_title %}{{ model.class }} model{% endblock %}

{% block content %}
{% block fields %}
{% set arFieldList = model.fields() %}
{% if arFieldList is not empty %}

## Field list

|  Name | Type | Description |
|-------|------|--------|
{% for sName, arFieldData in arFieldList %}
{% set sDescription = arFieldData.description ~ ' ' ~ arFieldData.relation|relation_with ~ ' ' ~ arFieldData.available|available_with %}
|{{ sName }}|{{ arFieldData.type }}|{{ sDescription }}|
{% endfor %}
{% endif %}
{% endblock %}


{% block images %}
{% set arImageList = model.images() %}
{% if arImageList is not empty %}

## Images

> You can be found detailed information about file attachments in OctoberCMS [documentation](https://octobercms.com/docs/database/attachments).

Attach one: **{{ arImageList.attach_one|join(', ')|default('none') }}**, attach many: **{{ arImageList.attach_many|join(', ')|default('none') }}**.
{% endif %}
{% endblock %}


{% block relations %}
{% set arRelationList = model.relation() %}
{% if arRelationList is not empty %}

## Relations

|Name|Type|Model|Description|
|-----|-----|-----|-----|
  {% for sKey, arRelation in arRelationList %}
|{{ sKey }}|{{ arRelation.type }}|{{ get_model(arRelation.model).link() }}|{{ arRelation.description }} {{ arRelation.available|available_with }}|
  {% endfor %}
{% endif %}
{% endblock %}


{% block extending %}
## Extending

You can add dynamic methods and properties in model class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

```php
{{ model.class }}::extend(function ($ob{{ model.class }}) {
    /** @var {{ model.class }} $ob{{ model.class }} */
    $ob{{ model.class }}->fillable[] = 'my_field';{% if item.class is not empty %}


    $ob{{ model.class }}->addCachedField(['my_field']);{% endif %}

});
```
{% endblock %}


{% endblock %}

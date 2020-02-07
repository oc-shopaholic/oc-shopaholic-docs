{% extends "docs/modules/layout.md" %}

{% block page_title %}{{ item.class }}{% endblock %}

{% block content %}
{% block fields %}
{% set arFieldList = item.fields() %}
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


{% block method_list %}

## Method List:

{% endblock %}


{% block extending %}
## Extending

You can add dynamic methods and properties in item class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

You can add custom fields to **$cached** array of **{{ model.class }}** model.
```php
{{ model.class }}::extend(function($ob{{ model.class }}) {
    /** @var {{ model.class }} $ob{{ model.class }} */
    $ob{{ model.class }}->fillable[] = 'my_field';

    $ob{{ model.class }}->addCachedField(['my_field']);
});
...

$ob{{ item.class }} = {{ item.class }}::make(1);
echo $ob{{ item.class }}->my_field;
```

You can add custom fields to cached data array with using your custom method.
You need to add dynamic method in {{ item.class }} class and add your method name in **$arExtendResult** array.
```php
{{ item.class }}::extend(function($ob{{ item.class }}) {
    /** @var {{ item.class }} $ob{{ item.class }} */
    $ob{{ item.class }}->arExtendResult[] = 'addMyProperty';

    $ob{{ item.class }}->addDynamicMethod('addMyProperty', function() use ($ob{{ item.class }}) {
        /** @var {{ model.class }} $ob{{ model.class }} */
        $ob{{ model.class }} = $ob{{ item.class }}->getObject();
        $ob{{ item.class }}->setAttribute('my_property', $ob{{ model.class }}->my_property);
     });
});
...

$ob{{ item.class }} = {{ item.class }}::make(1);
echo $ob{{ item.class }}->my_property;
```
{% endblock %}

{% endblock %}
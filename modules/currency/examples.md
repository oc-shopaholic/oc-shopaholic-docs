{% extends 'docs/modules/examples-default.md' %}

{% block content %}
* [Example 1: Currency list](#example-1-currency-list)
* [Example 2: Switching active currency](#example-2-switching-active-currency)

## Example 1: Currency list

### 1.1 Task

Create simple block with currency list.

### 1.2 How can i do it?

> Example uses {{ component.link('currency-list') }} component.
Component method returns {{ collection.link() }} class object.
All available methods of **{{ collection.class }}** class you can find in {{ collection.link('section') }}

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/index.htm**
end note
:Attach CurrencyList to page;
:Create partial "currency-list";
note left
    For example:
    **partials/currency/currency-list**
    **/currency-list.htm**
end note
:Get CurrencyCollection object
from CurrencyList component;
:Apply filter by "active" field
to CurrencyCollection object;
:Apply filter by "sort" field
to CurrencyCollection object;
:Render currency list;
@enduml
```

### 1.3 Source code

File: **pages/index.htm**
{% verbatim %}
```twig
title = "Index"
url = "/"
layout = "main"
is_hidden = 0

[CurrencyList]
==
<div class="currency-wrapper">
    {% partial 'currency/currency-list/currency-list' %}
</div>
```
{% endverbatim %}

File: **partials/currency/currency-list/currency-list.htm**
{% verbatim %}
```twig
{# Get currency collection #}
{% set obCurrencyList = CurrencyList.make().active().sort() %}

{% if obCurrencyList.isNotEmpty() %}
    {# Render currency list #}
    <select>
        {% for obCurrency in obCurrencyList %}
            <option value="{{ obCurrency.code }}" {% if obCurrency.isActive() %}selected="selected" {% endif %}>
                {{ obCurrency.symbol }}
            </option>
        {% endfor %}
    </select>
{% endif %}
```
{% endverbatim %}

## Example 2: Switching active currency

### 2.1 Task

Switch active currency.

### 2.2 How can i do it?

You need to send AJAX requests after user switches active currency on frontend.

### 2.3 Source code

<!-- tabs:start -->

#### ** javascript **

```javascript
function swirchCurrency(sCurrencyCode) {
    $.request('CurrencyList::onSwitch', {
      data: {currency: sCurrencyCode}
    }); 
}
```

#### ** php **

You can find more information about CurrencyHelper class [here](modules/currency/advanced-usage/home.md) 

```php
CurrencyHelper::instance()->switchActive('usd');
```

<!-- tabs:end -->
{% endblock %}
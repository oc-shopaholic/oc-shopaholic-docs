# Examples: Currency

[Back to modules](modules/home.md)

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Example 1: Currency list

### Task

Create simple block with currency list.

### How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/index.htm**
end note
:Attach CurrencyList to layout;
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

### Source code

File: **pages/index.htm**
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

File: **partials/currency/currency-list/currency-list.htm**
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

[Back to modules](modules/home.md)
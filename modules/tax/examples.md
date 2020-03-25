{% extends 'docs/modules/examples-default.md' %}

{% block content %}
* [Example 1: Render tax price of offers](#example-1-render-tax-price-of-offers)

## Example 1: Render tax price of offers

### 1.1 Task

Create simple product page and render price block. Get the price of the first offer with tax and without tax.

### 1.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product-page.htm**
end note
:Attach **ProductPage** component;
:Get **ProductItem** object
from **ProductPage** component;
:Render product name;
:Get **OfferCollection**
from **ProductItem** object;
:Get first **OfferItem** object
from **OfferCollection** object;
:Render price without tax;
:Render price with tax;
:Render tax price;
:Render tax percent;
@enduml
```

### 1.3 Source code

{{ get_module('tax').example('pages/product-page-1.htm')|raw }}
{% endblock %}
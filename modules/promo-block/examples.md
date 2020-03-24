{% extends 'docs/modules/examples-default.md' %}

{% block content %}
* [Example 1: Promo block page](#example-1-promo-block-page)
* [Example 2: Promo block card](#example-2-promo-block-card)
* [Example 3: Random promo block list](#example-3-random-promo-block-list)
* [Example 4: Promo block list with pagination](#example-4-promo-block-list-with-pagination)

## Example 1: Promo block page

### 1.1 Task

Create simple promo block page and render promo block name.

### 1.2 How can i do it?

> Example uses {{ component.link('promo-block-page') }} component.
Component method returns {{ item.link() }} class object.
All available fields and methods of **PromoBlockItem** class you can find in {{ item.link('section') }}.

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/promo-page.htm**
end note
:Attach **PromoBlockPage** component;
:Get **PromoBlockItem** object
from **PromoBlockPage** component;
:Render promo block name;
@enduml
```

### 1.3 Source code

{{ get_module('promo-block').example('pages/promo-page-1.htm')|raw }}

## Example 2: Promo block card

### 2.1 Task

Create simple promo block card and render promo block name, preview_image, preview_text fields.
Render link on promo block page.

> **"obPromoBlock"** is object of {{ item.link() }} class.

### 2.2 Source code

Simple example of promoblock card.

{{ get_module('promo-block').example('partials/promo-block/promo-block-card/promo-block-card-1.htm')|raw }}

## Example 3: Random promo block list

### 3.1 Task

Create simple block with random 5 promo block list on index page.

### 3.2 How can i do it?

> Example uses {{ component.link('promo-block-list') }} component.
Component method returns {{ collection.link() }} class object.
All available methods of **PromoBlockCollection** class you can find in {{ collection.link('section') }}.

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/index.htm**
end note
:Attach PromoBlockList component to page;
:Create partial "random-promo-block-list";
note left
    For example:
    **partials/promo-block/promo-block-list**
    **/random-promo-block-list.htm**
end note
:Get PromoBlockCollection object from
PromoBlockList component;
:Apply filter by "active" field
to PromoBlockCollection object;
:Get array with 5 random
PromoBlockItem objects;
:Render promo block list;
@enduml
```

### 3.3 Source code

File: **pages/index.htm**
{% verbatim %}
```twig
title = "Index"
url = "/"
layout = "main"
is_hidden = 0

[PromoBlockList]
==
<div class="promo-block-wrapper">
    {% partial 'promo-block/promo-block-list/random-promo-block-list' %}
</div>
```
{% endverbatim %}

File: **partials/promo-block/promo-block-list/random-promo-block-list.htm**
{% verbatim %}
```twig
{# Get promo block collection #}
{% set obPromoBlockList = PromoBlockList.make().active() %}
{# Get array with random promo blocks #}
{% set arPromoBlockList = obPromoBlockList.random(5) %}

{% if arPromoBlockList is not empty %}
    {# Render promo block list #}
    <ul>
        {% for obPromoBlock in arPromoBlockList %}
            <li>{% partial 'promo-block/promo-block-card/promo-block-card' obPromoBlock=obPromoBlock %}</li>
        {% endfor %}
    </ul>
{% endif %}
```
{% endverbatim %}

## Example 4: Promo block list with pagination

### 4.1 Task

Create simple page with promo block list.
Promo block list must have pagination block.

### 4.2 How can i do it?

> Example uses {{ component.link('promo-block-list') }} component.
Component method returns {{ collection.link() }} class object.
All available methods of **PromoBlockCollection** class you can find in {{ collection.link('section') }}.

> You can find more information about **Pagination** component {{ get_module('pagination').link('here') }} 

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/promo-block-list.htm**
end note
:Attach PromoBlockList component to page;
:Create wrapper for block with list of promo blocks;
:Create partial "promo-block-list";
note left
    For example:
    **partials/promo-block/promo-block-list/promo-block-list.htm**
end note
:Get PromoBlockCollection object from
PromoBlockList component;
:Apply filter by "active" field
to PromoBlockCollection object;
:Apply sorting to PromoBlockCollection object;
:Get current page number from request;
:Get list of pagination buttons;
:Get array of PromoBlockItem objects
for current page;
if (Promo block list is empty?) then (yes)
    :Render block "Promo blocks not found";
else (no)
    :Render promo block cards;
    :Render pagination buttons;
endif
:Call partial "promo-block-list" inside wrapper block;
:Add ajax handler on pagination buttons;
:Send ajax request, after user clicks pagination buttons;
:AJAX request must request "promo-block-list" partial
and update HTML code inside wrapper block;
@enduml
```

### 4.3 Source code

File: **pages/promo-block-list.htm**
{% verbatim %}
```twig
title = "Promo block list"
url = "/promo-blocks"
layout = "main"
is_hidden = 0

[PromoBlockList]

[Pagination]
count_per_page = 15
pagination_limit = 5
active_class = ""
button_list = "first,first-more,main,last-more,last"
first_button_name = "First"
first_button_limit = 3
first_button_number = 1
first-more_button_name = "..."
first-more_button_limit = 4
prev_button_name = "Prev"
prev_button_limit = 1
prev-more_button_name = "..."
prev-more_button_limit = 1
next-more_button_name = "..."
next-more_button_limit = 1
next_button_name = "Next"
next_button_limit = 1
last-more_button_name = "..."
last-more_button_limit = 4
last_button_name = "Last"
last_button_limit = 3
last_button_number = 1
==
<div class="promo-block-wrapper">
    {% partial 'promo-block/promo-block-list/promo-block-list' %}
</div>
```

File: **partials/promo-block/promo-block-list/promo-block-list.htm**
```twig
{# Get promo block collection #}
{% set obPromoBlockList = PromoBlockList.make().sort().active() %}

{# Get array with pagination buttons #}
{% set iPage = Pagination.getPageFromRequest() %}
{% set arPaginationList = Pagination.get(iPage, obPromoBlockList.count()) %}

{# Apply pagination to promo block collection and get array with promo block items #}
{% set arPromoBlockList = obPromoBlockList.page(iPage, Pagination.getCountPerPage()) %}

{% if arPromoBlockList is not empty %}
    {# Render promo block list #}
    <ul>
        {% for obPromoBlock in arPromoBlockList %}
            <li>{% partial 'promo-block/promo-block-card/promo-block-card' obPromoBlock=obPromoBlock %}</li>
        {% endfor %}
    </ul>
    
    {# Render pagination buttons #}
    {% if arPaginationList is not empty %}
        {% for arPagination in arPaginationList %}
            <a href="?page={{ arPagination.value }}" class="{{ arPagination.class }}" data-page="{{ arPagination.value }}">{{ arPagination.name }}</a>
        {% endfor %}
    {% endif %}
{% else %}
    <div>
        Promo blocks not found
    </div>
{% endif %}
```
{% endverbatim %}
{% endblock %}
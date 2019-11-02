# Examples: Offer

[Back to modules](modules/home.md)
/ [Home](modules/offer/home.md)
/ [Model](modules/offer/model/model.md)
/ [Item](modules/offer/item/item.md)
/ [Collection](modules/offer/collection/collection.md)
/ [Events](modules/offer/event/event.md)
/ Examples
/ [Extending](modules/offer/extending/extending.md)

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Example 1: Product page](#example-1-product-page)
* [Example 2: Product card](#example-2-product-card)

## Example 1: Product page

### 1.1 Task

Create simple product page and render select with offers. Render block with offer price and currency.

### 1.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product.htm**
end note
:Attach **ProductPage** component;
if (URL page contains brand slug?) then (yes)
    :Attach **BrandPage** component;
else (no)
endif
if (URL page contains categories slug?) then (yes)
    :Attach **CategoryPage** component;
    note left
        You must attach components
        for each level of category tree.
    end note
else (no)
endif
:Get ProductItem object
from ProductPage component;
:Render product name;
:Get OfferCollection
from ProductItem object;
:Render offer list;
@enduml
```

### 1.3 Source code
<!-- tabs:start -->
#### ** Variant 1 **

Simple example of product page. Page URL does not contain category slug.

File: **pages/product.htm**
```twig
title = "Product page"
url = "/product/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}

<div data-id="{{ obProduct.id }}" itemscope itemtype="http://schema.org/Product">
    <h1 itemprop="name">{{ obProduct.name }}</h1>
</div>
{# Get first offer object #}
{% set obOffer = obProduct.offer.first() %}
{# Render price block #}
<div>
    <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
    <span itemprop="price">{{ obOffer.price }}</span>
</div>
{# Render old price block #}
{% if obOffer.old_price_value > 0 %}
    <div>
        <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
        <span itemprop="price">{{ obOffer.old_price }}</span>
    </div>
{% endif %}
{# Get offer list #}
{% set obOfferList = obProduct.offer %}
{# Render select with offers #}
{% if obOfferList.isNotEmpty() %}
    <select>
        {% for obOffer in obOfferList %}
            <option value="{{ obOffer.id }}">{{ obOffer.name }}</option>
        {% endfor %}
    </select>
{% endif %}
```
#### ** Variant 2 **

Simple example of product page. Page URL contains category slug.

> This example is suitable for **2-level** catalog.

File: **pages/product.htm**
```twig
title = "Product page"
url = "/catalog/:main_category/:category/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1

[CategoryPage]
slug = "{{ :category }}"
slug_required = 1

[CategoryPage ParentCategoryPage]
slug = "{{ :main_category }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}

<div data-id="{{ obProduct.id }}" itemscope itemtype="http://schema.org/Product">
    <h1 itemprop="name">{{ obProduct.name }}</h1>
</div>
{# Get first offer object #}
{% set obOffer = obProduct.offer.first() %}
{# Render price block #}
<div>
    <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
    <span itemprop="price">{{ obOffer.price }}</span>
</div>
{# Render old price block #}
{% if obOffer.old_price_value > 0 %}
    <div>
        <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
        <span itemprop="price">{{ obOffer.old_price }}</span>
    </div>
{% endif %}
{# Get offer list #}
{% set obOfferList = obProduct.offer %}
{# Render select with offers #}
{% if obOfferList.isNotEmpty() %}
    <select>
        {% for obOffer in obOfferList %}
            <option value="{{ obOffer.id }}">{{ obOffer.name }}</option>
        {% endfor %}
    </select>
{% endif %}
```

#### ** Variant 3 **

Simple example of product page. Page URL contains category and brand slug.

> This example is suitable for **2-level** catalog.

File: **pages/product.htm**
```twig
title = "Product page"
url = "/catalog/:main_category/:category/:brand/:slug"
layout = "main"
is_hidden = 0

[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
smart_url_check = 1

[BrandPage]
slug = "{{ :brand }}"
slug_required = 1

[CategoryPage]
slug = "{{ :category }}"
slug_required = 1

[CategoryPage ParentCategoryPage]
slug = "{{ :main_category }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}

<div data-id="{{ obProduct.id }}" itemscope itemtype="http://schema.org/Product">
    <h1 itemprop="name">{{ obProduct.name }}</h1>
</div>
{# Get first offer object #}
{% set obOffer = obProduct.offer.first() %}
{# Render price block #}
<div>
    <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
    <span itemprop="price">{{ obOffer.price }}</span>
</div>
{# Render old price block #}
{% if obOffer.old_price_value > 0 %}
    <div>
        <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
        <span itemprop="price">{{ obOffer.old_price }}</span>
    </div>
{% endif %}
{# Get offer list #}
{% set obOfferList = obProduct.offer %}
{# Render select with offers #}
{% if obOfferList.isNotEmpty() %}
    <select>
        {% for obOffer in obOfferList %}
            <option value="{{ obOffer.id }}">{{ obOffer.name }}</option>
        {% endfor %}
    </select>
{% endif %}
```
<!-- tabs:end -->

## Example 2: Product card

### 2.1 Task
Create simple product card and render product name, preview_image, preview_text fields.
Render link on product page. Render block with offer price and currency.

> **"obProduct"** is object of [ProductItem](modules/product/item/item.md#productitem) class.

### 2.2 Source code

Simple example of product card.

File: **partials/product/product-card/product-card.htm**
```twig
<a href="{{ obProduct.getPageUrl() }}">
    <div itemscope itemtype="http://schema.org/Product">
        {% if obProduct.preview_image is not empty %}
            <img src="{{ obProduct.preview_image.path }}" itemprop="image" alt="{{ obProduct.preview_image.description }}" title="{{ obProduct.preview_image.title }}">
        {% endif %}
        <h3 itemprop="name">{{ obProduct.name }}</h3>
        {% if obProduct.preview_text is not empty %}
            <div itemprop="description">
                {{ obProduct.preview_text }}
            </div>
        {% endif %}
        {# Get first offer object #}
        {% set obOffer = obProduct.offer.first() %}
        {# Render price block #}
        <div>
            <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
            <span itemprop="price">{{ obOffer.price }}</span>
        </div>
        {# Render old price block #}
        {% if obOffer.old_price_value > 0 %}
            <div>
                <span itemprop="priceCurrency" content="{{ obOffer.currency_code }}">{{ obOffer.currency }}</span>
                <span itemprop="price">{{ obOffer.old_price }}</span>
            </div>
        {% endif %}
    </div>
</a>
```

[Back to modules](modules/home.md)
/ [Home](modules/offer/home.md)
/ [Model](modules/offer/model/model.md)
/ [Item](modules/offer/item/item.md)
/ [Collection](modules/offer/collection/collection.md)
/ [Events](modules/offer/event/event.md)
/ Examples
/ [Extending](modules/offer/extending/extending.md)
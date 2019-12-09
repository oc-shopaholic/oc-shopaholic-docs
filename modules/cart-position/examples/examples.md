[Back to modules](modules/home.md)

[Home](modules/cart-position/home.md)
• [Model](modules/cart-position/model/model.md)
• [Item](modules/cart-position/item/item.md)
• [Collection](modules/cart-position/collection/collection.md)
• Examples
• [Extending](modules/cart-position/extending/extending.md)

# Examples: CartPosition {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Example 1: Render block with mini-cart](#example-1-render-block-with-mini-cart)
* [Example 2: Render block with cart positions on checkout page](#example-2-render-block-with-cart-positions-on-checkout-page)

## Example 1: Render block with mini-cart

### 1.1 Task

Render block with mini-cart.

> Block with mini-cart is often located in the header of your site.

![](./../../../assets/images/fronend-cart-1.png)

### 1.2 How can i do it?

> Example uses [Cart](modules/cart/component/component.md#cart) component.
Component method returns [CartPositionCollection](modules/cart-position/collection/collection.md#cartpositioncollection) class object.
All available fields and methods of **CartPositionCollection** class you can find in [section](modules/cart-position/collection/collection.md#cartpositioncollection)

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/index.htm**
end note
:Attach **Cart** component;
:Get CartPositionCollection object
from Cart component;
:Render cart positions
and total price of positions;
@enduml
```

### 1.3 Source code

```twig
title = "Index page"
url = "/"
layout = "main"
is_hidden = 0


[Cart]
==

{# Get cart positions #}
{% set obCartPositionList = Cart.get() %}
{% if obCartPositionList.isNotEmpty() %}
    <ul>
    {% for obCartPosition in obCartPositionList %}
        <li>{% partial 'product/cart-position/cart-position' obCartPosition=obCartPosition %}</li>
    {% endfor %}
    </ul>
    
    <div>Total price: {{ obCartPositionList.getTotalPrice() }} {{ obCartPositionList.getCurrency() }}</div>
{% else %}
    <div>Cart is empty</div>
{% endif %}
```

File: **product/cart-position/cart-position.htm**
```twig
{% set obOffer = obCartPosition.item %}
{% set obProduct = obOffer.product %}

<a href="{{ obProduct.getPageUrl('product') }}">
    <div>
        {% if obProduct.preview_image is not empty %}
            <img src="{{ obProduct.preview_image.path }}" itemprop="image" alt="{{ obProduct.preview_image.description }}" title="{{ obProduct.preview_image.title }}">
        {% endif %}
        <h3 itemprop="name">{{ obProduct.name }}</h3>
        {% if obProduct.preview_text is not empty %}
            <div itemprop="description">
                {{ obProduct.preview_text }}
            </div>
        {% endif %}
        <span price="{{ obCartPosition.price_value }}">{{ obCartPosition.price }}</span>
        {% if obCartPosition.discount_price_value > 0 %}
            <span price="{{ obCartPosition.old_price_value }}">{{ obCartPosition.old_price }}</span>
        {% endif %}
        <input type="number" name="quantity" value="{{ obCartPosition.value }}" max="{{ obOffer.quantity }}" min="1">
    </div>
</a>
```

## Example 2: Render block with cart positions on checkout page

### 1.1 Task

Render block with cart positions on checkout page.

![](./../../../assets/images/fronend-cart-2.png)

### 1.2 How can i do it?

> Example uses [Cart](modules/cart/component/component.md#cart) component.
Component method returns [CartPositionCollection](modules/cart-position/collection/collection.md#cartpositioncollection) class object.
All available fields and methods of **CartPositionCollection** class you can find in [section](modules/cart-position/collection/collection.md#cartpositioncollection)

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/checkout.htm**
end note
:Attach **Cart** component;
:Get CartPositionCollection object
from Cart component;
:Render cart positions
and total price of positions;
@enduml
```

### 1.3 Source code

```twig
title = "Checkout page"
url = "/checkout"
layout = "main"
is_hidden = 0

[Cart]
==

{# Get cart positions #}
{% set obCartPositionList = Cart.get() %}
{% if obCartPositionList.isNotEmpty() %}
    <ul>
    {% for obCartPosition in obCartPositionList %}
        <li>{% partial 'product/cart-position/cart-position' obCartPosition=obCartPosition %}</li>
    {% endfor %}
    </ul>
    
    <div>Total price: {{ obCartPositionList.getTotalPrice() }} {{ obCartPositionList.getCurrency() }}</div>
{% else %}
    <div>Cart is empty</div>
{% endif %}
```

File: **product/cart-position/cart-position.htm**
```twig
{% set obOffer = obCartPosition.item %}
{% set obProduct = obOffer.product %}

<a href="{{ obProduct.getPageUrl('product') }}">
    <div>
        {% if obProduct.preview_image is not empty %}
            <img src="{{ obProduct.preview_image.path }}" itemprop="image" alt="{{ obProduct.preview_image.description }}" title="{{ obProduct.preview_image.title }}">
        {% endif %}
        <h3 itemprop="name">{{ obProduct.name }}</h3>
        {% if obProduct.preview_text is not empty %}
            <div itemprop="description">
                {{ obProduct.preview_text }}
            </div>
        {% endif %}
        <span price="{{ obCartPosition.price_value }}">{{ obCartPosition.price }}</span>
        {% if obCartPosition.discount_price_value > 0 %}
            <span price="{{ obCartPosition.old_price_value }}">{{ obCartPosition.old_price }}</span>
        {% endif %}
        <input type="number" name="quantity" value="{{ obCartPosition.value }}" max="{{ obOffer.quantity }}" min="1">
    </div>
</a>
```


[Home](modules/cart-position/home.md)
• [Model](modules/cart-position/model/model.md)
• [Item](modules/cart-position/item/item.md)
• [Collection](modules/cart-position/collection/collection.md)
• Examples
• [Extending](modules/cart-position/extending/extending.md)

[Back to modules](modules/home.md)

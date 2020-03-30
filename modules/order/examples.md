{% extends 'docs/modules/examples-default.md' %}

{% block content %}
* [Example 1: Make order](#example-1-make-order)
* [Example 2: Order page](#example-2-order-page)
* [Example 3: User order list](#example-3-user-order-list)
* [Example 4: Render tax price of order](#example-4-render-tax-price-of-order)

## Example 1: Make order

### 1.1 Task

Make order with using ajax request and redirect user to "Thank you" page.

### 1.2 How can i do it?

> Example uses {{ component.link('make-order') }} and {{ component.link('order-page') }} components.
{{ component.link('order-page') }} component method returns {{ item.link() }} class object.
All available fields and methods of **OrderItem** class you can find in {{ item.link('section') }}

```plantuml
@startuml
start
:Create checkout page file;
note left
    For example: **pages/checkout.htm**
end note
:Attach **MakeOrder** component;
:Prepare request array;
:Send ajax request to MakeOrder component;
if (Response has errors?) then (yes)
    :Display error message;
else (no)
    :Redirect to "Thank you" page;
    :Create "Thank you" page file;
    note left
        For example: **pages/order_success.htm**
    end note
    :Attach **OrderPage** component;
    :Get OrderItem object
    from OrderPage component;
    :Render order number;
endif
stop
@enduml
```

### 1.3 Source code

File: **pages/checkout.htm**
{% verbatim %}
```twig
title = "Checkout"
url = "/checkout"
layout = "main"
is_hidden = 0

[MakeOrder]
mode = "ajax"
redirect_on = 1
redirect_page = "success"

[ShippingTypeList]

[PaymentMethodList]
==
<form>
  <div>
    <label for="name">Your name</label>
    <input type="text" id="name" name="name">
  </div>
  <div>
    <label for="phone">Contact phone</label>
    <input type="text" id="phone" name="phone">
  </div>
  <div>
    <label for="email">Email</label>
    <input type="text" id="email" name="email">
  </div>
  <div>
    <label for="address">Address</label>
    <input type="text" id="address" name="address">
  </div>
  
  {# Render shipping types #}
  {% set obShippingTypeList = ShippingTypeList.make().sort().active() %}
  {% if ShippingTypeList.isNotEmpty() %}
  <div>
    <span>Choose shipping type:</span>
    {% for obShippingType in obShippingTypeList %}
      <input type="radio" id="shipping-type-{{ obShippingType.id }}" name="shipping_type" value="{{ obShippingType.id }}">
      <label for="shipping-type-{{ obShippingType.id }}">{{ obShippingType.name }}</label>
    {% endfor%}
  </div>
  {% endif %}
  
  {# Render payment methods #}
  {% set obPaymentMethodList = PaymentMethodList.make().sort().active() %}
  {% if PaymentMethodList.isNotEmpty() %}
  <div>
    <span>Choose payment method:</span>
    {% for obPaymentMethod in obPaymentMethodList %}
      <input type="radio" id="payment-method-{{ obPaymentMethod.id }}" name="payment_method" value="{{ obPaymentMethod.id }}">
      <label for="payment-method-{{ obPaymentMethod.id }}">{{ obPaymentMethod.name }}</label>
    {% endfor%}
  </div>
  {% endif %}
</form>
```
{% endverbatim %}

Prepare request array and send AJAX request to MakeOrder component
```javascript
let data = {
    'order': {
        'payment_method_id': ...,     //Get value from radio button with name="payment_method"
        'shipping_type_id': ...,      //Get value from radio button with name="shipping_type"
        'property': {
            'address': '...',         //Get value from input with name="address"
        }
    },
    'user': {
        'email': ...,                 //Get value from input with name="email"
        'name': ...,                  //Get value from input with name="name"
        'phone': ...,                 //Get value from input with name="phone"
    }
};

$.request('MakeOrder::onCreate', {
    'data': data,
    success: function(obResponse) {
      if (!obResponse) {
        return;
      }
      
      if (!!obResponse['X_OCTOBER_REDIRECT']) {
        return this.success(obResponse);  
      }
      
      if (!obResponse.status) {
        //Show message with error
        ...
        return;
      }
      
      //Show "Success message"
      ...
      return this.success(obResponse);
    }
});
```

File: **pages/success.htm**
{% verbatim %}
```twig
title = "Thank you page"
url = "/checkout/:slug"
layout = "main"

[OrderPage]
slug = "{{ :slug }}"
==

{# Get order object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    <h1>{{ obOrder.order_number }}</h1>
</div>
```
{% endverbatim %}

## Example 2: Order page

### 2.1 Task

Create simple "Thank you" page with order number.

### 2.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/checkout_success.htm**
end note
:Attach **OrderPage** component;
:Get OrderItem object
from OrderPage component;
:Render order number;
@enduml
```

### 2.3 Source code

File: **pages/checkout_success.htm**
{% verbatim %}
```twig
title = "Thank you page"
url = "/checkout/:slug"
layout = "main"

[OrderPage]
slug = "{{ :slug }}"
==

{# Get order object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    <h1>{{ obOrder.order_number }}</h1>
</div>
```
{% endverbatim %}

## Example 3: User order list

### 3.1 Task

Render table with user order list.

> Block with user order list can be complicated (contain searching, filtering, sorting, pagination).

### 3.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/order_list.htm**
end note
:Get user object;
:Get OrderCollection object
from user object;
:Render table with orders;
@enduml
```

### 3.3 Source code

<!-- tabs:start -->
#### ** Lovata.Buddies **

File: **pages/order_list.htm**
{% verbatim %}
```twig
title = "User order list"
url = "/user/order"
layout = "main"
is_hidden = 0

[UserData]

[UserPage]
slug = ""
slug_required = 0
mode = "ajax"
flash_on = 0
redirect_on = 1
redirect_page = "user_profile"
login_page = "login"
==

{# Get user object #}
{% set obUser = UserData.get() %}

{# Get OrderCollection object from user object #}
{% set obOrderList = obUser.order %}
{% if obOrderList.isNotEmpty() %}
  <table>
    <caption>Order list</caption>
    <tr>
      <th>Order number</th>
      <th>Status</th>
      <th>Total price</th>
    </tr>
    {% for obOrder in obOrderList %}
      <tr>
        <td>{{ obOrder.order_number }}</td>
        <td>{{ obOrder.status.name_for_user }}</td>
        <td>{{ obOrder.total_price }} {{ obOrder.currency_symbol }}</td>
      </tr>
    {% endfor %}
    </table>
{% else %}
  <div>You have no orders yet</div>
{% endif %}
```
{% endverbatim %}

#### ** RainLab.User **

File: **pages/order_list.htm**
{% verbatim %}
```twig
title = "Index page"
url = "/"
layout = "main"
is_hidden = 0
==

{% if user %}
  {# Get OrderCollection object from user object #}
  {% set obOrderList = user.order_list %}
  {% if obOrderList.isNotEmpty() %}
    <table>
      <caption>Order list</caption>
      <tr>
        <th>Order number</th>
        <th>Status</th>
        <th>Total price</th>
      </tr>
      {% for obOrder in obOrderList %}
        <tr>
          <td>{{ obOrder.order_number }}</td>
          <td>{{ obOrder.status.name_for_user }}</td>
          <td>{{ obOrder.total_price }} {{ obOrder.currency_symbol }}</td>
        </tr>
      {% endfor %}
      </table>
  {% else %}
    <div>You have no orders yet</div>
  {% endif %}
{% else %}
    <p>Nobody is logged in</p>
{% endif %}
```
{% endverbatim %}
<!-- tabs:end -->

## Example 4: Render tax price of order

### 4.1 Task

Create simple order page and render price block. Get prices of order positions with tax and without tax.

### 4.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/order-page.htm**
end note
:Attach **OrderPage** component;
:Get **OrderItem** object
from **OrderPage** component;
:Render table with order prices;
:Get **OrderPositionCollection** object
from **OrderItem** component;
:Render table with prices;
:Render price without tax;
:Render price with tax;
:Render tax price;
:Render tax percent;
@enduml
```

### 4.3 Source code

{{ get_module('tax').example('pages/order-page-1.htm')|raw }}

{{ get_module('tax').example('partials/order/order-position/order-position-1.htm')|raw }}
{% endblock %}
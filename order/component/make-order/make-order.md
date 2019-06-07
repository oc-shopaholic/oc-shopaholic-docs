# MakeOrder component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

The component allows to create orders.

**Component properties:**
  - Mode (Submit form/Ajax form)
  - Send flash message (only for Ajax mode)
  - Enable redirect
  - Choose page for redirect (order ID and order number will be passed to page URL)
  
**Usage:**
The component is used to process order form.
To send ajax request, you must use **MakeOrder::onCreate** method.
You need to send **'order'** object with order data and **'user'** object with user data.
Acceptable order fields: **payment_method_id**, **shipping_type_id**, **shipping_price**, **property (array)**.
User data will be stored in 'property' field of order object.
New user will be created or order will be attached to authorized user. You can disable user creation in settings. 

**Example 1** Submit form

```html
[MakeOrder]
mode="submit"
redirect_on=1
redirect_page="order_success"

[PaymentMethodList]

[ShippingTypeList]
==

{% set arError = MakeOrder.getErrorMessage %}
{% set arForm = MakeOrder.getOldFormData %}

<form href="{{ 'order'|page }}">
    <label for="field-email">Email</label>
    <input type="email" id="field-email" placeholder="Email" name="user[email]" value="{{ arForm.user.email }}">
    {% if arError.message is not empty and arError.field == 'email' %}
        <p>{{ arError.message }}</p>
    {% endif %}
    
    <label for="field-company-name">Company name</label>
    <input type="text" id="field-company-name" placeholder="My company" name="user[property][company_name]" value="{{ arForm.user.property.company_name }}">
    
    {% set obPaymentMethodList = PaymentMethodList.make().sort().active() %}
    {% if obPaymentMethodList.isNotEmpty() %}
        <div class="payment-method-list-wrapper">
            {% for obPaymentMethod in obPaymentMethodList %}
                <input type="radio" name="order[payment_method_id]" id="payment-{{ obPaymentMethod.id }}" value="{{ obPaymentMethod.id }}">
                <label for="payment-{{ obPaymentMethod.id }}">{{ obPaymentMethod.name }}</label>
            {% endfor %}
        </div>
    {% endif %}
    
    {% set obShippingTypeList = ShippingTypeList.make().sort().active() %}
    {% if obShippingTypeList.isNotEmpty() %}
        <div class="payment-method-list-wrapper">
            {% for obShippingType in obShippingTypeList %}
                <input type="radio" name="order[shipping_type_id]" id="payment-{{ obShippingType.id }}" value="{{ obShippingType.id }}">
                <label for="payment-{{ obShippingType.id }}">{{ obShippingType.name }}</label>
            {% endfor %}
        </div>
    {% endif %}
    
    <input type="hidden" name="order[shipping_price]" value="5.50">
    <button type="submit">Submit</button>
</form>
{% if arError.message is not empty %}
    <p>{{ arError.message }}</p>
{% endif %}

```

**Example 2** Ajax request

```javascript
let data = {
    'order': {
        'payment_method_id': 1,
        'shipping_type_id': 2,
        'shipping_price': 10.5,
        'property': {
            'address': '...',
            'city': 'Minsk'
        }
    },
    'user': {
        'email': 'test@test.com',
        'name': 'Andrey'
    },
    'shipping_address': {
        'id': 10  //Address data of user with ID == 10 will be save in order
    },
    'billing_address': {
        //New billing address will be created for user.
        'country': 'Belarus',
        'address1': 'test 1',
        'address2': 'test 2'
    }
};

$.request('MakeOrder::onCreate', {
    'data': data
});
```

The MakeOrder.getOldFormData method returns filled form fields, if form was sent and error occurred.
The MakeOrder.getErrorMessage method returns error message if form was sent and error occurred.
```php
[
    'message' => 'Error message',
    'field'   => 'email',           //Field name, if there was a validation error
]
```

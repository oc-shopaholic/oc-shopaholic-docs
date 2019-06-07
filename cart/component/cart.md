# Cart

## Cart component

> Component is available in **[Orders for Shopaholic](plugins/home.md#orders-for-shopaholic)** plugin.

### get($obShippingType = null)

Method returns [CartPositionCollection](cart-position/collection/collection.md) class object.
You can pass active sipping type object to method to get total cost of order with shipping price.
```twig
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

### getAppliedCampaignList()

> Method available with **[Campaigns for Shopaholic](plugins/home.md#campaigns-for-shopaholic)** plugin

Method returns collection of applied campaigns.

### getAppliedCouponList()

> Method available with **[Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic)** plugin

Method returns collection of applied coupons.

### getCurrency()

Method returns active currency symbol.

### getCurrencyCode()

Method returns active currency code.

### getTotalPrice()

Method returns formatted total price string (**"1 450,95"**)

### getTotalPriceValue()

Method returns float total price value (**1450.95**)

### getOldTotalPrice()

Method returns formatted total price string without discounts (**"1 650,95"**)

### getOldTotalPriceValue()

Method returns float total price value without discounts (**1650.95**)

### getDiscountTotalPrice()

Method returns formatted discount price string (**"200,00"**)

### getDiscountTotalPriceValue()

Method returns float discount price value (**200**)

### getTotalPriceData()

Method returns [TotalPriceContainer](price-container/home.md#TotalPriceContainer) class object.

### onAdd()

Method adds offers to cart.
```javascript
//Prepare object with offers
var data = {
    'cart': [
        {'offer_id': 2, 'quantity': 4, 'property': {'double_cheese': true}},
        {'offer_id': 5, 'quantity': 1, 'property': {'double_cheese': false}},
        {'offer_id': 10, 'quantity': 1, 'property': {'double_cheese': true}}
    ],
    'shipping_type_id': 4
};

//Send ajax request and update cart items
$.request('Cart::onAdd', {
    'data': data,
    'update': {'cart-items': '.cart-item-wrapper'}
});
```

### onAddCoupon()

> Method available with **[Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic)** plugin

Method attach coupon to cart.
```javascript
$.request('Cart::onAddCoupon', {
    'data': {'coupon': 'XXYY-XXZZ-YYZZ'}
});
```

### onClear()

Method removes all offers from cart.
```javascript
//Send ajax request and update cart items
$.request('Cart::onClear', {
    'data': data,
    'update': {'cart-items': '.cart-item-wrapper'}
});
```

### onClearCouponList()

> Method available with **[Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic)** plugin

Method remove all attached coupons from cart.
```javascript
$.request('Cart::onClearCouponList');
```

### onRemove()

Method removes offers from cart.
```javascript
//Prepare array with offers ID
var data = {
    'cart': [2,10],
    'shipping_type_id': 4
};

//Send ajax request and update cart items
$.request('Cart::onRemove', {
    'data': data,
    'update': {'cart-items': '.cart-item-wrapper'}
});
```

### onRemoveCoupon()

> Method available with **[Coupons for Shopaholic](plugins/home.md#coupons-for-shopaholic)** plugin

Method detach coupon from cart.
```javascript
$.request('Cart::onRemoveCoupon', {
    'data': {'coupon': 'XXYY-XXZZ-YYZZ'}
});
```

### onRestore()

Method restores cart positions by ID.
```javascript
//Prepare array with cart position ID
var data = {
    'cart': [2,10],
    'shipping_type_id': 4
};

//Send ajax request and update cart items
$.request('Cart::onRestore', {
    'data': data,
    'update': {'cart-items': '.cart-item-wrapper'}
});
```

### onSaveData()

Method save data in cart object. For example, for checkout page, divided into steps.
```javascript

//Prepare array with position ID
var data = {
    'user': {'email': 'test@test.com'},
    'property': {'comment': 'User comment ...'},
    'billing_address': {...},
    'shipping_address': {...},
    'shipping_type_id': 2,
    'payment_method_id': 3
};

//Send ajax request and update cart items
$.request('Cart::onSaveData', {
    'data': data
});
```

### onSetShippingType()

Method allows you to send ajax request with ID of active shipping type and get updated cart data.
```javascript
//Send ajax request and update cart data
$.request('Cart::onSetShippingType', {
    'data': {'shipping_type_id': iActiveShippingTypeID},
    success: function(response) {
        updateCartInfo(response);
    }
});
```

### onUpdate()

Method updates quantity of offers in cart.
```javascript
//Prepare object with offers
var data = {
    'cart': [
        {'offer_id': 2, 'quantity': 4},
        {'offer_id': 5, 'quantity': 1},
        {'offer_id': 10, 'quantity': 1}
    ],
    'shipping_type_id': 4
};

//Send ajax request and update cart items
$.request('Cart::onUpdate', {
    'data': data,
    'update': {'cart-items': '.cart-item-wrapper'}
});
```
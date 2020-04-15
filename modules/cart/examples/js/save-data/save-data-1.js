//Prepare array with cart data
let data = {
  'user': {'email': 'test@test.com'},
  'property': {'comment': 'User comment ...'},
  'billing_address': {...},
  'shipping_address': {...},
  'shipping_type_id': 4,
  'payment_method_id': 3
};

//Send ajax request and update cart items
$.request('Cart::onSaveData', {
  'data': data,
  'update': {'cart/mini-cart/mini-cart': '.mini-cart-wrapper'}
});
//Prepare array with cart position IDs
let data = {
  'cart': [11, 12],
  'shipping_type_id': 4,
  'payment_method_id': 3
};

//Send ajax request and update cart items
$.request('Cart::onRestore', {
  'data': data,
  'update': {'cart/mini-cart/mini-cart': '.mini-cart-wrapper'}
});
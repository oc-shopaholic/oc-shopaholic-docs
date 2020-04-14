//Prepare array with offers ID
let data = {
  'cart': [2,10],
  'type': 'position',
  'shipping_type_id': 4,
  'payment_method_id': 3
};

//Send ajax request and update cart items
$.request('Cart::onRemove', {
  'data': data,
  'update': {'cart/mini-cart/mini-cart': '.mini-cart-wrapper'}
});
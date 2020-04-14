//Prepare object with offers
let data = {
  'cart': [
    {'offer_id': 32, 'quantity': 4, 'property': {'double_cheese': true}},
    {'offer_id': 44, 'quantity': 1, 'property': {'double_cheese': false}}
  ],
  'shipping_type_id': 4,
  'payment_method_id': 3
};

//Send ajax request and update cart items
$.request('Cart::onAdd', {
  'data': data,
  'update': {'cart/mini-cart/mini-cart': '.mini-cart-wrapper'}
});
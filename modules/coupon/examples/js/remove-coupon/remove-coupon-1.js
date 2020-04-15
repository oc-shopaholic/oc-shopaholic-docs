let data = {
  'coupon': $('#coupon').val(),
  'shipping_type_id': 4,
  'payment_method_id': 3
};

$.request('Cart::onRemoveCoupon', {
  'data': data
});
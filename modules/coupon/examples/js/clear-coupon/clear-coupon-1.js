let data = {
  'shipping_type_id': 4,
  'payment_method_id': 3
};

$.request('Cart::onClearCouponList', {
  'data': data
});
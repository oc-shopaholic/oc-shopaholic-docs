{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

"Coupon" module allows customers to apply coupons in a cart and get additional discounts.
The coupon adds the promo mechanisms that are linked with these coupons.
The added promo mechanism will affect the logic of pricing until the coupon is removed from the cart.

> You can find more information about promo mechanisms {{ get_module('promo-mechanism').link('here') }}

You can **add** a coupon to the cart with using **onAddCoupon()** method of {{ get_component('cart').link('cart') }} component.
You can **remove** a coupon from the cart with using **onRemoveCoupon()** method of {{ get_component('cart').link('cart') }} component.
You can **get** applied coupon list with using **getAppliedCouponList()** method of {{ get_component('cart').link('cart') }} component.
You can **clear** applied coupon list with using **onClearCouponList()** method of {{ get_component('cart').link('cart') }} component.

## Backend

You can create and edit coupons by going to **Backend -> Promotions -> Coupon groups -> "Coupons" tab**

![](./../../assets/images/backend-coupon-1.png ':class=medium-image')

You can generate coupons by going to **Backend -> Promotions -> Coupon groups -> "Coupons" tab -> "Generate coupons" button**

![](./../../assets/images/backend-coupon-3.png ':class=medium-image')

![](./../../assets/images/backend-coupon-2.png ':class=medium-image')

You can limit the max usage per coupon with using the settings of the coupon or group of coupons.

![](./../../assets/images/backend-coupon-4.png ':class=medium-image')

![](./../../assets/images/backend-coupon-5.png ':class=medium-image')

Your site may contain a block with a list of available coupons for the user. You can hide some coupons from this list with using "Hidden" flag.

![](./../../assets/images/backend-coupon-6.png ':class=medium-image')

You can create a personal coupon and link it with user.

![](./../../assets/images/backend-coupon-7.png ':class=medium-image')

{% endblock %}

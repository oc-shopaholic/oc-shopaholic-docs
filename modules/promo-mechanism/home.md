{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

## Introduction

Promo mechanism is a discount mechanic that can change the price of a cart position,
the price of an order position, the delivery price, and the total amount of an order.
The promo mechanism may have a simple or complex condition under which a discount will be applied. For example:
* 100% discount on delivery price, if the order amount is more than $100
* 3 at the price of 2
* 30% discount on the cheapest goods, if the goods are whiter than 3

By default, the promo mechanism does not have logic that adds it to the cart or order.
The promo mechanism will affect the price only if you add it to the cart and order with using events.
The logic of adding a promo mechanic to the cart or order can be varied.
For example: adding a discount after applying the coupon, adding a scheduled discount (campaigns), adding a discount to a group of users, adding a permanent discount, etc.

Ready-made plugins allow you to quickly add promo mechanisms to your website:
* {{ get_plugin('coupons').link() }}
* {{ get_plugin('campaigns').link() }}

You can always add promo mechanism to the cart and order with using [events](modules/promo-mechanism/event/event).

## Available promo mechanisms

### Discounts **without checking any conditions**.
1. The discount on the price of the **position** will be applied **without checking any conditions**. For example: Can be used when applying a coupon.
2. The discount on the price of the **position with min price** will be applied **without checking any conditions**. For example: Can be used when applying a coupon.
3. The discount on the **total price of positions** list will be applied **without checking any conditions**. For example: Can be used when applying a coupon.
4. The discount on the **shipping price** will be applied **without checking any conditions**. For example: Can be used when applying a coupon.
5. The discount on the **total price** of order will be applied **without checking any conditions**. For example: Can be used when applying a coupon.
6. The discount on the **shipping price** will be applied **if total price of the position greater than the set value**. For example: Discount is 5%, if the total price of position is >= 50$.

### Discounts **if total price of the position greater than the set value**.
7. The discount on the **total price** of order will be applied **if total price of the position greater than the set value**. For example: Discount is 5%, if total price of position is >= 50$.
8. The discount on the price of the **position** will be applied **if the total quantity of one offer in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offer "T-shirt size 52" is >= 3.

### Discounts **if the total quantity of one offer in the order is greater than the set value**.
9. The discount on the price of the **position with min price** will be applied **if the total quantity of one offer in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offer "T-shirt size 52" is >= 3.
10. The discount on the **total price of positions** list will be applied **if the total quantity of one offer in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offer "T-shirt size 52" is >= 3.
11. The discount on the **shipping price** will be applied **if the total quantity of one offer in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offer "T-shirt size 52" is >= 3.
12. The discount on the **total price** of order will be applied **if the total quantity of one offer in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offer "T-shirt size 52" is >= 3.

### Discounts **if the total quantity of offers in the order is greater than the set value**.
13. The discount on the price of the **position** will be applied **if the total quantity of offers in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offers "T-shirt size 52" (quantity = 2) + "T-shirt size 56" (quantity = 2) = 4 is >= 3.
14. The discount on the price of the **position with min price** will be applied **if the total quantity of offers in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offers "T-shirt size 52" (quantity = 2) + "T-shirt size 56" (quantity = 2) = 4 is >= 3.
15. The discount on the **total price of positions** list will be applied **if the total quantity of offers in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offers "T-shirt size 52" (quantity = 2) + "T-shirt size 56" (quantity = 2) = 4 is >= 3.
16. The discount on the **shipping price** will be applied **if the total quantity of offers in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offers "T-shirt size 52" (quantity = 2) + "T-shirt size 56" (quantity = 2) = 4 is >= 3.
17. The discount on the **total price** of order will be applied **if the total quantity of offers in the order is greater than the set value**. For example: Discount is 5%, if total quantity of offers "T-shirt size 52" (quantity = 2) + "T-shirt size 56" (quantity = 2) = 4 is >= 3.

### Discounts **if the position count in the order is greater than the set value**.
18. The discount on the price of the **position** will be applied **if the position count in the order is greater than the set value**. For example: Discount is 5%, if position count is >= 3.
19. The discount on the price of the **position with min price** will be applied **if the position count in the order is greater than the set value**. For example: Discount is 5%, if position count is >= 3.
20. The discount on the **total price of positions** list will be applied **if the position count in the order is greater than the set value**. For example: Discount is 5%, if position count is >= 3.
21. The discount on the **shipping price** will be applied **if the position count in the order is greater than the set value**. For example: Discount is 5%, if position count is >= 3.
22. The discount on the **total price** of order will be applied **if the position count in the order is greater than the set value**. For example: Discount is 5%, if position count is >= 3.

{% endblock %}
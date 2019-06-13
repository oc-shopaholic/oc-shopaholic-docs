# Available promo mechanism list

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

# Adding custom promo mechanism to your project

## Applying of custom promo mechanics to the cart

Using **shopaholic.order.promo_mechanism.cart.add_class** event you must add a list of available promo mechanisms.
```php
$obEvent->listen(\Lovata\OrdersShopaholic\Classes\PromoMechanism\CartPromoMechanismProcessor::EVENT_GET_MECHANISM_LIST, function ($obPromoProcessor) {
    //Get list of available promo mechanisms
    $obMechanismList = ...;
    
    /** @var \Lovata\OrdersShopaholic\Models\PromoMechanism $obMechanismModel */
    /** @var \Lovata\OrdersShopaholic\Classes\PromoMechanism\InterfacePromoMechanism $obMechanism */
    foreach($obMechanismList as $obMechanismModel) {
        $obMechanism = $obMechanismModel->getTypeObject();
    
        //Adding callback function to check the possibility of applying a discount for cart position
        $obMechanism->setCheckPositionCallback(function ($obPosition) {
            /** @var \Lovata\OrdersShopaholic\Classes\Item\CartPositionItem $obPosition */
            
            //Check position
            if (...) {
                //Skip position and do not apply discount.
                return false;
            }
            
            //Apply discount to position
            return true;
        });
        
        //Adding callback function to check the possibility of applying a discount for shipping type
        $obMechanism->setCheckShippingTypeCallback(function ($obShippingType) {
            /** @var \Lovata\OrdersShopaholic\Classes\Item\ShippingTypeItem $obShippingType */
            
            //Check shipping type
            if (...) {
                //Skip shipping type and do not apply discount.
                return false;
            }
            
            //Apply discount to shipping type
            return true;
        });
        
        //Set custom description with discount information
        $obMechanism->setRelatedDescription('...');
        
        $obPromoProcessor->addMechanism($obMechanism);
    }
});
```

## Applying of custom promo mechanics to the order

Using **shopaholic.order.after_create** event you must attach a list of available promo mechanisms to order model.

```php
$obEvent->listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_UPDATE_ORDER_AFTER_CREATE, function ($obOrder) {
    //Get list of available promo mechanisms
    $obMechanismList = ...;
    
    /** @var \Lovata\OrdersShopaholic\Models\PromoMechanism $obMechanism */
    foreach($obMechanismList as $obMechanism) {
        
        //array with your custom data
        $arElementData = [
            'name'                  => '...',
            'product_list'          => [...],
            'offer_list'            => [...],
            'shipping_type_list'    => [...],
        ];

        try {
            OrderPromoMechanism::create([
                'order_id'       => $obOrder->id,
                'mechanism_id'   => $obMechanism->id,
                'name'           => $obMechanism->name,
                'type'           => $obMechanism->type,
                'priority'       => $obMechanism->priority,
                'discount_value' => $obMechanism->discount_value,
                'discount_type'  => $obMechanism->discount_type,
                'final_discount' => $obMechanism->final_discount,
                'property'       => $obMechanism->property,
                'element_id'     => ..., //Related element ID (coupon ID, campaign ID)
                'element_type'   => 'my_custom_type', //Related type
                'element_data'   => $arElementData,
            ]);
        } catch (\Exception $obException) {
            return;
        }
    }
});
```

Using **shopaholic.order.promo_mechanism.order.add_check_callback_method** event you must add callback function to check the possibility of applying a discount for order position

```php
$obEvent->listen(\Lovata\OrdersShopaholic\Classes\PromoMechanism\OrderPromoMechanismProcessor::EVENT_MECHANISM_ADD_CHECK_CALLBACK_METHOD, function ($obMechanism, $iElementID, $sElementType, $arElementData) {
    if ($sElementType != 'my_custom_type') {
        return null;
    }
    
    //Adding callback function to check the possibility of applying a discount for cart position
    $obMechanism->setCheckPositionCallback(function ($obPosition) use ($arElementData) {
        /** @var \Lovata\OrdersShopaholic\Models\OrderPosition $obPosition */
        
        //Check position
        if (...) {
            //Skip position and do not apply discount.
            return false;
        }
        
        //Apply discount to position
        return true;
    });
    
    //Adding callback function to check the possibility of applying a discount for shipping type
    $obMechanism->setCheckShippingTypeCallback(function ($obShippingType) use ($arElementData) {
        /** @var \Lovata\OrdersShopaholic\Classes\Item\ShippingTypeItem $obShippingType */
        
        //Check shipping type
        if (...) {
            //Skip shipping type and do not apply discount.
            return false;
        }
        
        //Apply discount to shipping type
        return true;
    });
});
```

Using **shopaholic.order.promo_mechanism.description** event you can add custom description with discount information (For backend)

```php
$obEvent->listen(\Lovata\OrdersShopaholic\Models\OrderPromoMechanism::EVENT_GET_DESCRIPTION, function ($obOrderMechanism) {
    /** @var OrderPromoMechanism $obOrderMechanism */
    $sResult = null;
    if ($obOrderMechanism->element_type == 'my_custom_type') {
        $sResult = Lang::get('...', ['name' => array_get($obOrderMechanism->element_data, 'name')]);
    }

    return $sResult;
});
```
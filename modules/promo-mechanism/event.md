{% extends 'docs/modules/event-default.md' %}

{% block content %}

* [shopaholic.order.after_create](#shopaholicorderafter_create)
* [shopaholic.order.promo_mechanism.cart.add_class](#shopaholicorderpromo_mechanismcartadd_class)
* [shopaholic.order.promo_mechanism.description](#shopaholicorderpromo_mechanismdescription)
* [shopaholic.order.promo_mechanism.order.add_check_callback_method](#shopaholicorderpromo_mechanismorderadd_check_callback_method)

## **shopaholic.order.after_create**

Event allows you to add a list of available promo mechanisms to order.

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

## **shopaholic.order.promo_mechanism.cart.add_class**

Event allows you to add promo mechanisms to cart.
```php
$obEvent->listen(\Lovata\OrdersShopaholic\Classes\PromoMechanism\CartPromoMechanismProcessor::EVENT_GET_MECHANISM_LIST, function ($obPromoProcessor) {
//Get list of available promo mechanisms
$obMechanismList = ...;

/** @var \Lovata\OrdersShopaholic\Models\PromoMechanism $obMechanismModel */
/** @var \Lovata\OrdersShopaholic\Classes\PromoMechanism\InterfacePromoMechanism $obMechanism */
foreach($obMechanismList as $obMechanismModel) {
    $obMechanism = $obMechanismModel->getTypeObject();

    //Adding callback function to check
    //the possibility of applying a discount for cart position
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

    //Adding callback function to check
    //the possibility of applying a discount for shipping type
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

## **shopaholic.order.promo_mechanism.description**

  Event allows you to add custom description with discount information (uses in backend).

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

## **shopaholic.order.promo_mechanism.order.add_check_callback_method**

Event allows you to add callback function to check the possibility of applying a discount for order position.

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

{% endblock %}
# Add custom restriction of payment method

Required steps that you need to perform to successfully to add your custom restriction of payment method:
* Create restriction class with implementation of \Lovata\OrdersShopaholic\Interfaces\CheckRestrictionInterface interface.
* Add your restriction class to list with using 'shopaholic.paymentmethod.get.restriction.list' event:
For example:
```php
    Event::listen(\Lovata\OrdersShopaholic\Models\PaymentRestriction::EVENT_GET_PAYMENT_RESTRICTION_LIST, function() {
        $arResult = [
            RescrictionByCountry::class => 'Restriction by country',
            RescrictionByState::class => 'Restriction by state',
        ];
        
        return $arResult;
    });
```
* Create payment method and attach restriction to it.

# Add custom restriction of shipping type

Required steps that you need to perform to successfully to add your custom restriction of shipping type:
* Create restriction class with implementation of \Lovata\OrdersShopaholic\Interfaces\CheckRestrictionInterface interface.
* Add your restriction class to list with using 'shopaholic.shippingtype.get.restriction.list' event:
For example:
```php
    Event::listen(\Lovata\OrdersShopaholic\Models\ShippingRestriction::EVENT_GET_SHIPPING_RESTRICTION_LIST, function() {
        $arResult = [
            RescrictionByCountry::class => 'Restriction by country',
            RescrictionByState::class => 'Restriction by state',
        ];
        
        return $arResult;
    });
```
* Create shipping type and attach restriction to it.
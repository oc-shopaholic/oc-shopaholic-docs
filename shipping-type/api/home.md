# Add custom API class for shipping type

Required steps that you need to perform to successfully to add your custom class for integration with API of delivery service:
* Create API class with implementation of \Lovata\OrdersShopaholic\Interfaces\ShippingPriceProcessorInterface interface.
* Add your API class to list with using 'shopaholic.shipping_type.get_api_class_list' event:
For example:
```php
    Event::listen(\Lovata\OrdersShopaholic\Models\ShippingType::EVENT_GET_SHIPPING_TYPE_API_CLASS_LIST, function() {
        $arResult = [
            MyApiClass::class => 'Api with delyvery service',
        ];
        
        return $arResult;
    });
```
* Create shipping type and attach API class to it.
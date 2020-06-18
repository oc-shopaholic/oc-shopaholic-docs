# Event list

## Currency

### **shopaholic.currency.get_active_value**

The event allows you to set active currency value

For example:
```php
Event::listen(\Lovata\Shopaholic\Classes\Helper\CurrencyHelper::EVENT_GET_ACTIVE_CURRENCY_VALUE, function() {
    return 'BYN';
});
```

## Product

### **shopaholic.sorting.get.list**

Event allows you to quickly add custom sorting for list of products ([ProductCollection](modules/product/collection/collection.md) class, sort() method)

For example:
```php
Event::listen('shopaholic.sorting.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with product ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

**You need to add cache clearing for your custom sorting**
```php
    \Lovata\Shopaholic\Classes\Store\ProductListStore::instance()->sorting->clear('my_custom_sorting');
```

## Offer

### **shopaholic.sorting.offer.get.list**

Event allows you to quickly add custom sorting for list of offers ([OfferCollection](modules/offer/collection/collection.md) class, sort() method)

For example:
```php
Event::listen('shopaholic.sorting.offer.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with offer ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

**You need to add cache clearing for your custom sorting**
```php
    \Lovata\Shopaholic\Classes\Store\OfferListStore::instance()->sorting->clear('my_custom_sorting');
```

## Order

### **shopaholic.order.find_user_before_create**

The event can be used to search user by additional conditions. The event fires before creating an order through MakeOrder component.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_FIND_USER_BEFORE_CREATE, function($arUserData) {
    //$arUserData - array with user data from request
    ...
});
```

### **shopaholic.order.user_created**

The event is triggered after registering a new user before creating an order through MakeOrder component. The event can be used to send an email notifying that it was registered during the creation of an order.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_USER_CREATED, function($obUser) {
    //$obUser - user object
    ...
});
```

### **shopaholic.order.created**

The event is generated after new order is created through MakeOrder component.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_CREATED, function($obOrder) {
    ...
});
```

### **shopaholic.order_position.created**

The event is generated after new order position is created through MakeOrder component.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_POSITION_CREATED, function($obCartPositionItem, $obOrderPosition) {
    ...
});
```

### **shopaholic.order.get_redirect_url**

The event can be used to generate the URL for redirecting the user after creating an order.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_GET_REDIRECT_URL, function($obOrder) {
    ...
});
```

### **shopaholic.order.update_data**

Event allows you to change order data before creating.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_UPDATE_ORDER_DATA, function($arOrderData) {
    //$arOrderData - array with order data from request
    ...
});
```

### **shopaholic.order.before_create**

An event is fired before an order is created and allows you to block the creation of an order.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_UPDATE_ORDER_BEFORE_CREATE, function($arOrderData, $obUser) {
    //$arOrderData - array with order data from request
    //$obUser - user object
    ...
    
    return false;
});
```

### **shopaholic.order.after_create**

An event is fired after an order was created.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_UPDATE_ORDER_AFTER_CREATE, function($obOrder) {
    //$obOrderData - order object
    ...
});
```

### **shopaholic.order.get_shipping_price**

The event allows you to set your own value for shipping price before creating an order.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_GET_SHIPPING_PRICE, function($arOrderData) {
    //$arOrderData - array with order data from request
    ...
    
    return 5.5;
});
```

# Shipping type

### **shopaholic.shipping_type.get_price**

The event allows you to dynamically change the shipping price.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Models\ShippingType::EVENT_GET_SHIPPING_PRICE, function($obShippingType) {
    /** @var \Lovata\OrdersShopaholic\Models\ShippingType $obShippingType */
    //Get dynamic price from external api
    $fPrice = ...
    
    return $fPrice;
});
```

## Promo block

### **shopaholic.promo_block.get.product.list**

The event allows you to extend the list of products for promo block

For example:
```php
Event::listen(\Lovata\Shopaholic\Models\PromoBlock::EVENT_GET_PRODUCT_LIST, function($obPromoBlock) {
    $arProductIDList = ...
    
    return $arProductIDList;
});
```

### **shopaholic.promo_block.sorting.get.list**

Event allows you to quickly add custom sorting for list of promo blocks ([PromoBlockCollection](modules/promo-block/collection/collection.md) class, sort() method)

For example:
```php
Event::listen('shopaholic.promo_block.sorting.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with promo block ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

**You need to add cache clearing for your custom sorting**
```php
    \Lovata\Shopaholic\Classes\Store\PromoBlockListStore::instance()->sorting->clear('my_custom_sorting');
```

## Payment gateways

### **shopaholic.payment_method.get.gateway.list**

Event allows you to add your custom payment gateway to list of available payment gateways in the PaymentMethod model form.

For example:
```php
Event::listen(\Lovata\OrdersShopaholic\Models\PaymentMethod::EVENT_GET_GATEWAY_LIST, function() {
    $arPaymentMethodList = [
        'paypal_express' => 'Paypal express',
        'paypal_pro'     => 'PaypalPro',
    ];
    
    return $arPaymentMethodList;
});
```

### **shopaholic.payment_method.omnipay.gateway.class**

By default, processing payment gateways of omnipay package makes \Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway class.
You can change processing class by using **shopaholic.payment_method.omnipay.gateway.class** event.

For example:
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_GET_PAYMENT_GATEWAY_CLASS, function($sGatewayCode) {
    if ($sGatewayCode != 'paypal') {
        return null;
    }
    
    return MyPaymentGateway::class;
});
```

### **shopaholic.payment_method.omnipay.gateway.purchase_data**

Event allows you to change array of data that will be sent to omnipay payment gateway.

For example:
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_GET_PAYMENT_GATEWAY_PURCHASE_DATA, function($obOrder, $obPaymentMethod, $arPurchaseData) {
    /** @var \Lovata\OrdersShopaholic\Models\Order $obOrder */
    /** @var \Lovata\OrdersShopaholic\Models\PaymentMethod $obPaymentMethod */
    /** @var array $arPurchaseData */
    
    ...
    //Change purchase data array
    ...
    
    return $arPurchaseData;
});
```

### **shopaholic.payment_method.omnipay.gateway.card_data**

Event allows you to change card data that will be sent to omnipay payment gateway.

For example:
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_GET_PAYMENT_GATEWAY_CARD_DATA, function($obOrder, $obPaymentMethod, $arCardData) {
    /** @var \Lovata\OrdersShopaholic\Models\Order $obOrder */
    /** @var \Lovata\OrdersShopaholic\Models\PaymentMethod $obPaymentMethod */
    /** @var array $arCardData */
    
    ...
    //Change purchase data array
    ...
    
    return $arCardData;
});
```

### **shopaholic.payment_method.omnipay.gateway.cancel_url**

Event allows you to change cancel URL page to be sent to omnipay payment gateway.

For example:
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_GET_PAYMENT_GATEWAY_CANCEL_URL, function($obOrder, $obPaymentMethod) {
    /** @var \Lovata\OrdersShopaholic\Models\Order $obOrder */
    /** @var \Lovata\OrdersShopaholic\Models\PaymentMethod $obPaymentMethod */
    
    ...
    //Generate redirect URL
    $sRedirectURL = ...;
    
    return $sRedirectURL;
});
```

### **shopaholic.payment_method.omnipay.gateway.return_url**

Event allows you to change return URL page to be sent to omnipay payment gateway.

For example:
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_GET_PAYMENT_GATEWAY_RETURN_URL, function($obOrder, $obPaymentMethod) {
    /** @var \Lovata\OrdersShopaholic\Models\Order $obOrder */
    /** @var \Lovata\OrdersShopaholic\Models\PaymentMethod $obPaymentMethod */
    
    ...
    //Generate redirect URL
    $sRedirectURL = ...;
    
    return $sRedirectURL;
});
```

### **shopaholic.payment_method.omnipay.gateway.process_return_url**

Event allows you to make additional payment processing, when client redirects to "returnUrl" URL.

For example
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_PROCESS_RETURN_URL, function($obOrder, $obPaymentMethod) {
    /** @var \Lovata\OrdersShopaholic\Models\Order $obOrder */
    /** @var \Lovata\OrdersShopaholic\Models\PaymentMethod $obPaymentMethod */
    
    ...
});
```

### **shopaholic.payment_method.omnipay.gateway.process_cancel_url**

Event allows you to make additional payment processing, when client redirects to "cancelUrl" URL.

For example
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_PROCESS_CANCEL_URL, function($obOrder, $obPaymentMethod) {
    /** @var \Lovata\OrdersShopaholic\Models\Order $obOrder */
    /** @var \Lovata\OrdersShopaholic\Models\PaymentMethod $obPaymentMethod */
    
    ...
});
```

### **shopaholic.payment_method.omnipay.gateway.process_notify_url**

Event allows you to make additional payment processing, when client redirects to "notifyUrl" URL.

For example
```php
Event::listen(\Lovata\OmnipayShopaholic\Classes\Helper\PaymentGateway::EVENT_PROCESS_NOTIFY_URL, function($obOrder, $obPaymentMethod) {
    /** @var \Lovata\OrdersShopaholic\Models\Order $obOrder */
    /** @var \Lovata\OrdersShopaholic\Models\PaymentMethod $obPaymentMethod */
    
    ...
});
```

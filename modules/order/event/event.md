
### Event "shopaholic.order.created"
You can add your logic after creating an order.
```php

Event::listen('shopaholic.order.created', function($obOrder) {
    ...
});
```

### Event "shopaholic.order.created.user.template.data"
You can add additional fields in the email template **(for users)**.
By default, the 'lovata.ordersshopaholic::mail.create_order_user' template is used.
To integrate with the Translate plugin, you need to create templates for languages with suffix = language code.
For example:
  * 'lovata.ordersshopaholic::mail.create_order_user' - for default language
  * 'lovata.ordersshopaholic::mail.create_order_user_ru' - for language with code 'ru'
```php

Event::listen('shopaholic.order.created.user.template.data', function($obOrder) {
    ...
    
    //Return array with addition fields
    return $arResult;
});
```

### Event "shopaholic.order.created.manager.template.data"
You can add additional fields in the email template **(for managers)**.
By default, the 'lovata.ordersshopaholic::mail.create_order_manager' template is used.
To integrate with the Translate plugin, you need to create templates for languages with suffix = language code.
For example:
  * 'lovata.ordersshopaholic::mail.create_order_manager' - for default language
  * 'lovata.ordersshopaholic::mail.create_order_manager_ru' - for language with code 'ru'
```php

Event::listen('shopaholic.order.created.manager.template.data', function($obOrder) {
    ...
    
    //Return array with addition fields
    return $arResult;
});
```

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
[Back to modules](modules/home.md)

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• [Item](modules/order/item/item.md)
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• Events
<!--
• [Examples](modules/order/examples/examples.md)
• [Extending](modules/order/extending/extending.md)
-->

# Event list: Order {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### **shopaholic.order.after_create**

An event is fired after an order was created.
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_UPDATE_ORDER_AFTER_CREATE, function($obOrder) {
    //to do something
});
```

### **shopaholic.order.before_create**

An event is fired before an order is created and allows you to block the creation of an order.
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_UPDATE_ORDER_BEFORE_CREATE, function($arOrderData, $obUser) {
    //$arOrderData - array with order data from request
    //$obUser - user object
    
    return false;
});
```

### **shopaholic.order.created**

You can use the event after successfully creating the order.
```php
Event::listen('shopaholic.order.created', function($obOrder) {
    //to do something
});
```

### **shopaholic.order.created.manager.template.data**

You can expand list of fields transferred to manager's email template.
By default, sending an email to a user is disabled, but you can enable it in the settings. You can specify the letter template that will be used to send emails.

![](./../../../assets/images/backend-settings-16.png)

To send multilingual letters with using [RainLab.Translate](https://octobercms.com/plugin/rainlab-translate) plugin, you need to create email templates with prefix equal to language code.
For example:
* 'lovata.ordersshopaholic::mail.create_order_manager' - for **default** language
* 'lovata.ordersshopaholic::mail.create_order_manager**_ru**' - for language with code **'ru'**
  
```php
Event::listen('shopaholic.order.created.manager.template.data', function($obOrder) {
    $arResult = [];
    //to do something
    
    //Return array with addition fields
    return $arResult;
});
```

### **shopaholic.order.created.user.template.data**

You can expand list of fields transferred to user's email template.
By default, sending an email to a user is disabled, but you can enable it in the settings. You can specify the letter template that will be used to send emails.

![](./../../../assets/images/backend-settings-16.png)

To send multilingual letters with using [RainLab.Translate](https://octobercms.com/plugin/rainlab-translate) plugin, you need to create email templates with prefix equal to language code.
For example:
* 'lovata.ordersshopaholic::mail.create_order_user' - for **default** language
* 'lovata.ordersshopaholic::mail.create_order_user**_ru**' - for language with code **'ru'**

```php
Event::listen('shopaholic.order.created.user.template.data', function($obOrder) {
    $arResult = [];
    //to do something
    
    //Return array with addition fields
    return $arResult;
});
```

### **shopaholic.order.find_user_before_create**

The event can be used to search user by additional conditions. The event fires before creating an order through [MakeOrder](modules/order/component/component#makeorder) component.
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_FIND_USER_BEFORE_CREATE, function($arUserData) {
    //$arUserData - array with user data from request
    //find user by credentials
    $obUser = ...;
    
    return $obUser;
});
```

### **shopaholic.order.get_shipping_price**

The event allows you to set your own value for shipping price before creating an order.
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_GET_SHIPPING_PRICE, function($arOrderData) {
    //$arOrderData - array with order data from request
    //Calculate shipping price
    $sShippingPrice = 5.5;
    
    return $sShippingPrice;
});
```

### **shopaholic.order.get_redirect_url**

The event can be used to generate the URL for redirecting the user after creating an order.
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_GET_REDIRECT_URL, function($obOrder) {
    //Generate redirect URL
    $sRedirectURL = ...;
    
    return $sRedirectURL;
});
```

### **shopaholic.order.update_data**

Event allows you to change order data before creating.
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_UPDATE_ORDER_DATA, function($arOrderData) {
    //$arOrderData - array with order data from request
    //Change order data from request
    $arOrderData['test'] = 1;
    
    return $arOrderData;
});
```

### **shopaholic.order.user_created**

The event is triggered after registering a new user before creating an order through [MakeOrder](modules/order/component/component#makeorder) component.
The event can be used to send an email notifying that it was registered during the creation of an order.
```php
Event::listen(\Lovata\OrdersShopaholic\Classes\Processor\OrderProcessor::EVENT_ORDER_USER_CREATED, function($obUser) {
    //$obUser - user object
});
```

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• [Item](modules/order/item/item.md)
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• Events
<!--
• [Examples](modules/order/examples/examples.md)
• [Extending](modules/order/extending/extending.md)
-->

[Back to modules](modules/home.md)

# Integration with custom payment gateway

Required steps that you need to perform to successfully integrate with your custom payment gateway:

1. Extend PaymentMethod model form. Add payment gateway properties.
2. Add your payment gateway to list of available payment gateways in the PaymentMethod model form. You must use **shopaholic.payment_method.get.gateway.list** event.
```php
    Event::listen(\Lovata\OrdersShopaholic\Models\PaymentMethod::EVENT_GET_GATEWAY_LIST, function() {
        $arPaymentMethodList = [
            'paypal_express' => 'Paypal express',
            'paypal_pro'     => 'PaypalPro',
        ];
        
        return $arPaymentMethodList;
    });
```
3. Add your PaymentGateway class. PaymentGateway class should
extend of [AbstractPaymentGateway](#abstractpaymentgateway-class) abstract class
or implement of [PaymentGatewayInterface](#paymentgatewayinterface-interface) interface.
4. Extend PaymentMethod model and add payment gateway class.
```php
    PaymentMethod::extend(function ($obElement) {
        /** @var PaymentMethod $obElement */
        
        $obElement->addGatewayClass('my_custom_payment', PaymentGateway::class);
    }
```

## PaymentGatewayInterface interface

Your payment gateway class must implement PaymentGatewayInterface interface.

Example of your PaymentGateway class:

```php

<?php namespace VendorNema\PluginName\Classes\Helpers;

use Lovata\OrdersShopaholic\Interfaces\PaymentGatewayInterface;

class PaymentGateway implements PaymentGatewayInterface
{
    /** @var array - response from payment gateway */
    protected $arResponse = [];
    protected $arRequestData = [];
    protected $sRedirectURL = '';
    protected $sMessage = '';
    protected $bIsRedirect = false;
    protected $bIsSuccessful = false;
    
    protected $obResponse;
    
    /**
    * Return true, if response has redirect URL
    * @return bool
    */
    public function isRedirect() : bool
    {
        return $this->bIsRedirect;
    }
    
    /**
    * Return true, if purchase is successful
    * @return bool
    */
    public function isSuccessful() : bool
    {
        return $this->bIsSuccessful;
    }
    
    /**
    * Get response array
    * @return array
    */
    public function getResponse() : array
    {
        return $this->arResponse;
    }
    
    /**
    * Get redirect URL
    * @return string
    */
    public function getRedirectURL() : string
    {
        return $this->sRedirectURL;
    }
    
    /**
    * Get error message from payment gateway
    * @return string
    */
    public function getMessage() : string
    {
        return $this->sMessage;
    }
    
    /**
    * Prepare data for request in payment gateway
    * @param \Lovata\OrdersShopaholic\Models\Order $obOrder
    */
    public function purchase($obOrder)
    {
        $this->obOrder = $obOrder;
        $this->obPaymentMethod = $obOrder->payment_method;
        
        $this->arRequestData = [
            'currency'   => $this->obPaymentMethod->gateway_currency,
            'secred_key' => $this->getGatewayProperty('secred_key'),
            'total_cost' => $this->obOrder->total_price_value,
            'user_name'  => $this->getOrderProperty('name'),
        ];
        
         //Send request to payment gateway
        $this->obResponse = ...;
        
         //Set redirect URL or error message
        if ($this->obResponse->...) {
            $this->sRedirectURL = $this->obResponse->...;
            $this->bIsRedirect = true;
        } elseif ($this->obResponse->...) {
            //Payment is success
            $this->bIsSuccessful = true;
        } else {
            $this->sMessage = $this->obResponse->...;
        }
    }
}

```

## AbstractPaymentGateway class

AbstractPaymentGateway class  implements [PaymentGatewayInterface](paymentgatewayinterface-interface)

AbstractPaymentGateway class makes it easy to add integration with your custom payment gateways.

Example of your PaymentGateway class:

```php

<?php namespace VendorNema\PluginName\Classes\Helpers;

use Lovata\OrdersShopaholic\Classes\Helper\AbstractPaymentGateway;

class PaymentGateway extends AbstractPaymentGateway
{
    /** @var array - response from payment gateway */
    protected $arResponse = [];
    protected $arRequestData = [];
    protected $sRedirectURL = '';
    protected $sMessage = '';
    
    protected $obResponse;
    
    /**
    * Get response array
    * @return array
    */
    public function getResponse() : array
    {
        return $this->arResponse;
    }
    
    /**
    * Get redirect URL
    * @return string
    */
    public function getRedirectURL() : string
    {
        return $this->sRedirectURL;
    }
    
    /**
    * Get error message from payment gateway
    * @return string
    */
    public function getMessage() : string
    {
        return $this->sMessage;
    }
    
    /**
    * Prepare data for request in payment gateway 
    */
    protected function preparePurchaseData()
    {
        $this->arRequestData = [
            'currency'   => $this->obPaymentMethod->gateway_currency,            
            'secred_key' => $this->getGatewayProperty('secred_key'),            
            'total_cost' => $this->obOrder->total_price_value,            
            'user_name'  => $this->getOrderProperty('name'),            
        ];
    }
    
    /**
    * Validate request data
    * @return bool 
    */
    protected function validatePurchaseData()
    {
        if (empty($this->arRequestData['currency'])) {
            $this->sMessage = 'Currency is required';
            return false;
        }
        
        return true;
    }
    
    /**
    * Send request to payment gateway
    */
    protected function sendPurchaseData()
    {
        //Send request to payment gateway
        $this->obResponse = ...;
        
    }
    
    /**
    * Process response from payment gateway 
    */
    protected function processPurchaseResponse()
    {
        //Set redirect URL or error message
        if ($this->obResponse->...) {
            $this->sRedirectURL = $this->obResponse->...;
            $this->bIsRedirect = true;
            
            $this->setWaitPaymentStatus();
        } elseif ($this->obResponse->...) {
            //Payment is success
            $this->bIsSuccessful = true;
            
            $this->setSuccessStatus();
        } else {
            $this->sMessage = $this->obResponse->...;
        }
    }
}

```

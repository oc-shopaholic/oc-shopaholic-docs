# Changelog

## Updates for May, 29, 2019

### Shopaholic plugin.

Release version **1.22.0**
  * Added customizable import from xml file.
  * Added **"shopaholic:import_from_xml"** and **"shopaholic:preconfigure_import_from_xml"** commands.
  * Added widgets to manually start import from XML and CSV files.

### [Properties for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertiesForShopaholic) plugin.

Release version **1.9.0**
  * Added customizable import from xml file.

## Updates for May, 10, 2019

### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version **1.22.0**
  * Added event 'shopaholic.order_position.created'.
  * Added ability to create restrictions for payment methods.
  * Added restrictions of payment methods by position total price and active shipping type.
  * Added isAvailable() method to [PaymentMethodItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/PaymentMethodItem) class.
  * Added available() method to [PaymentMethodCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/PaymentMethodCollection) class.

## Updates for April, 9, 2019

### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version **1.21.0**
  * Added **"onRestore"** method to [Cart](https://github.com/lovata/oc-shopaholic-plugin/wiki/Cart) component.

## Updates for March, 29, 2019

### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version **1.19.0**
  * Added ability to add multiple identical offers, but with different set of properties. 
  * Added ability to create restrictions for shipping types.
  * Added restrictions of shipping types by position total price.
  * Added ability to save data in cart object. Saved data will be automatically transferred in Order object. For example, for the checkout page, divided into steps. Added method onSaveData() in [Cart](https://github.com/lovata/oc-shopaholic-plugin/wiki/Cart) component.
  * Added ability to delete cart positions by ID.
  * Added **property**, **restriction**, **api_class**, **api** fields to [ShippingTypeItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/ShippingTypeItem) class.
  * Added getProperty(), isAvailable() methods to [ShippingTypeItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/ShippingTypeItem) class.
  * Shipping types and payment methods menu items moved to settings menu.
  * Added available() method to [ShippingTypeCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/ShippingTypeCollection) class.

### [Properties for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertiesForShopaholic) plugin.

Release version **1.8.0**
  * Added "global" flag to PropertySet model.
  * Added "Inherit property sets" to Category model.
  * Added setting "Enable for categories inheriting property sets from parent categories".

## Updates for February, 27, 2019

### Shopaholic plugin.

Release version **1.21.0**
  * **Added taxes. Added multicurrency.** Added price types.
  * Added Price model. All price fields moved from Offer model to Price model.
  * Added [Currency](https://github.com/lovata/oc-shopaholic-plugin/wiki/CurrencyModel) model.
  * Added [Tax](https://github.com/lovata/oc-shopaholic-plugin/wiki/TaxModel) model.
  * Added PriceType model.
  * Added [CurrencyList](https://github.com/lovata/oc-shopaholic-plugin/wiki/CurrencyList) component.
  * Added setActiveCurrency()/getActiveCurrency() methods in [OfferItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OfferItem) class.
  * Added setActivePriceType()/getActivePriceType() methods in [OfferItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OfferItem) class.
  * Added tax_price, price_without_tax, price_with_tax, tax_old_price, old_price_without_tax, old_price_with_tax, discount_price, tax_discount_price, discount_price_without_tax, discount_price_with_tax, currency_code, tax_percent, tax_list fields to [OfferItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OfferItem) class.
  * Added [CurrencyCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/CurrencyCollection), [CurrencyItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/CurrencyItem) classes.
  * Added [TaxCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/TaxCollection), [TaxItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/TaxItem) classes.
  * Added $sPriceTypeCode parameter to getOfferMinPrice()/getOfferMaxPrice() methods of [ProductCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductCollection) class.

### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version **1.19.0**
  * Added support of taxes in cart and orders.
  * Added tax price fields to [CartPositionItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/CartPositionItem) class.
  * Added tax price fields to [ShippingTypeItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/ShippingTypeItem) class.
  * Added tax price fields to [OrderPositionItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderPositionItem) class.
  * Added getCurrencyCode() method to [CartPositionCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/CartPositionCollection) class.

### [Filter for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterForShopaholic) plugin.

Release version **1.6.0**
  * Updated logic of filter by price in [ProductCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductCollection), [OfferCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/OfferCollection) classes, after adding taxes in main plugin.
  * Added $iPriceTypeID parameter to filterByPrice method in [ProductCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductCollection), [OfferCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/OfferCollection) classes.

## Updates for December, 21, 2018

### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version 1.17.0
  * Added shopaholic.shipping_type.get_price event. The event allows you to dynamically change the shipping price.

## Updates for November, 18, 2018

### Shopaholic plugin.

Release version **1.19.0**
  * Added translatable slug in Product, Brand, Category, PromoBlock models. You can enable translatable slug in "Application settings" (/backend/system/settings/update/lovata/toolbox/config)
  * Added "Smart URL check" property in ProductPage, CategoryPage, BrandPage, PromoBlockPage components.
> "Smart URL check" works only when you have components on page correctly connected and [ProductItem::getPageUrl](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductItem#getpageurlspagecode--product) method returns the correct URL to the product page.

## Updates for November, 9, 2018

### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version 1.14.0
  * Added getCurrency() method in Cart component.
  * Improved parameter generation for redirecting to order page in MakeOrder component.
  * Added shipping_type_id parameter processing in onAdd, onUpdate, onRemove methods (Cart component).

## Updates for November, 5, 2018

### [Filter for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterForShopaholic) plugin.

Release version **1.5.0**
  * Added filterByDiscount(), filterByQuantity() methods to [OfferCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/OfferCollection) class.

## Updates for November, 2, 2018

### [Properties for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertiesForShopaholic) plugin.

Release version **1.7.0**
  * Added import properties from CSV file in backend.
  * Added import property values of products/offers from CSV file in backend.
  * Added supported types of properties: number, rich editor, single checkbox, switch, balloon selector, tag list, radio.
  * Adding ability to use multilanguage for fields with type select/checkbox list.

## Updates for November, 1, 2018

### Shopaholic plugin.

Release version **1.15.0**
  * Added import product, offers, categories, brands from CSV file in backend.

## Updates for October, 21, 2018

### Shopaholic plugin.

Release version **1.14.0**
  * Added "additional_category" field to [ProductItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductItem) class.

## Updates for October, 15, 2018

### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version 1.11.0
  * Added **[22 promo mechanisms](https://github.com/lovata/oc-shopaholic-plugin/wiki/PromoMechanismList)** that may affect total price of the order. These can be discounts without checking any conditions or discounts with checking conditions for count of offer/positions/products, etc. Promo mechanisms can be used to change the total price of the order using different logic: applying of coupons, sales, loyalty system, personal discounts, etc. 
  * Added discount log, manager, active_task, completed_task fields to Order form in backend.
  * Added the ability to save the user's shipping/billing address when creating an order through [MakeOrder](https://github.com/lovata/oc-shopaholic-plugin/wiki/MakeOrder) component.
  * Added onSetShippingType(), onGetData(), getTotalPrice(), getTotalPriceValue(), getOldTotalPrice(), getOldTotalPriceValue(), getDiscountTotalPrice(), getDiscountTotalPriceValue(), getTotalPriceData() method to [Cart](https://github.com/lovata/oc-shopaholic-plugin/wiki/Cart) component.
  * The methods of the [Cart](https://github.com/lovata/oc-shopaholic-plugin/wiki/Cart) component now always return an object with information about the state of the basket with lists of positions and price information.
  * Added **shopaholic.order.find_user_before_create**, **shopaholic.order.user_created**, **shopaholic.order.get_redirect_url**, **shopaholic.order.update_data**, **shopaholic.order.before_create**, **shopaholic.order.after_create**,  **shopaholic.order.get_shipping_price** events.
  * Added **old_shipping_price**, **old_shipping_price_value**, **discount_shipping_price**, **discount_shipping_price_value**, **shipping_price_data**, **old_total_position_price**, **old_total_position_price_value**, **discount_total_position_price**, **discount_total_position_price_value**, **total_position_price_data**, **old_total_price**, **old_total_price_value**, **discount_total_price**, **discount_total_price_value**, **total_price_data** fields to [OrderItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderItem) class.
  * Added **old_total_price**, **old_total_price_value**, **discount_total_price**, **discount_total_price_value**, **price_data** fields to [OrderPositionItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderPositionItem) class.
  * Added **old_price**, **old_price_value**, **discount_price**, **discount_price_value**, **price_data** fields to [CartPositionItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/CartPositionItem) class.
  * Added **old_price**, **old_price_value**, **discount_price**, **discount_price_value**, **price_data** fields to [ShippingTypeItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/CartPositionItem) class.
  * Added the ability to create, edit, delete **user shipping/billing addresses**. Added the ability to save the addresses when creating an order.
  * Added the ability to create tasks related to orders or users. In the task, manager can set notification email to send it to manager email.
  * Added [UserAddress](https://github.com/lovata/oc-shopaholic-plugin/wiki/UserAddressModel) model. Added [UserAddress](https://github.com/lovata/oc-shopaholic-plugin/wiki/UserAddress) component. [UserAddressItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/UserAddressItem), [UserAddressCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/UserAddressCollection) classes.
  * Added **address** attribute to UserItem class (Buddies plugin).
  * Added **order** relation to User model.
  * Added **address** relation to User model. Added **address_list** attribute to User model.
  * Added **task**, **active_task**, **completed_task** relations to User model.
  * Added **order**, **active_task**, **completed_task** fields to User form in backend.
  * Added **shopaholic:order.send_manager_notification** artisan command. The command can be used to automatically send email notifications to order managers.
  * Added getOldTotalPrice(), getOldTotalPriceValue(), getDiscountTotalPrice(), getDiscountTotalPriceValue(), getTotalQuantity() methods in [CartPositionCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/CartPositionCollection) class.
  

### Shopaholic plugin.

Release version **1.13.0**
  * Added [PromoBlock](https://github.com/lovata/oc-shopaholic-plugin/wiki/PromoBlockModel) model. Promo blocks are sections of content that you can place throughout your eCommerce website and advertise products, offers, discounts, campaigns, and other activity.
  * Added [PromoBlockItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/PromoBlockItem) class.
  * Added [PromoBlockCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/PromoBlockCollection) class.
  * Added [PromoBlockData](https://github.com/lovata/oc-shopaholic-plugin/wiki/PromoBlockData), [PromoBlockPage](https://github.com/lovata/oc-shopaholic-plugin/wiki/PromoBlockPage), [PromoBlockList](https://github.com/lovata/oc-shopaholic-plugin/wiki/PromoBlockList) components.
  * **promo($iPromoBlockID)**, **promoBlock($iPromoBlockID)** methods added to [ProductCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductCollection) class.
  * **getTotalQuantity()** method added to [OfferCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/OfferCollection) class.
  * Added **shopaholic.currency.get_active_value** event. The event allows you to set active currency value. By default, the currency value will be taken from the settings.

## Updates for September, 3, 2018

### [Filter for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterForShopaholic) plugin.

Release version **1.4.0**
  * Changed: only property values of active products and offers are stored in the cache for filtration.

### [Properties for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertiesForShopaholic) plugin.

Release version **1.6.0**
  * Changed: only property values of active products and offers are stored in the cache.

## Updates for August, 6, 2018

### [Omnipay for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OmnipayForShopaholic) plugin.

Release version **1.3.0**
  * Added events for processing requests from payment gateway. ('shopaholic.payment_method.omnipay.gateway.process_return_url', 'shopaholic.payment_method.omnipay.gateway.process_cancel_url', 'shopaholic.payment_method.omnipay.gateway.process_notify_url').
  * Added event for extending card data ('shopaholic.payment_method.omnipay.gateway.card_data'), before sending it to payment gateway.
  * Added simple logic for processing 'returnUrl', 'cancelUrl'.
  * Added saving of data array before sending request to payment gateway.
  * Added saving of response data, transaction ID and payment token after receiving response from payment gateway.
  
### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version **1.8.0**
  * Adds "payment_token" field to [Order](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderModel) model. 

## Updates for August, 1, 2018

### Update wiki

  * Add documentation [page](https://github.com/lovata/oc-shopaholic-plugin/wiki/EventList) by plugin events.
  * Add documentation by [integration with your custom payment gateway](https://github.com/lovata/oc-shopaholic-plugin/wiki/IntegrationWithCustomPaymentGateway).
  * Add documentation of [AbstractPaymentGateway](https://github.com/lovata/oc-shopaholic-plugin/wiki/AbstractPaymentGateway) class.
  * Add documentation of [PaymentGatewayInterface](https://github.com/lovata/oc-shopaholic-plugin/wiki/PaymentGatewayInterface) interface.
  
### [Omnipay for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OmnipayForShopaholic) plugin.

Release version **1.2.0**
  * Improved integration with payment gateways. Request to payment gateway is automatically send after order was created. **Requires [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin version 1.7.0 and later**.
  * Remove **getPaymentGateway()** method from OrderPage component.
  
### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version **1.7.0**
  * Add ability to send purchase request to payment gateway in MakeOrder component. Request to payment gateway is automatically send if:
    * Payment method has a payment gateway class that implement PaymentGatewayInterface interface.
    * **send_purchase_check** flag of payment method object == true
  * Adds **onPurchase()** method in **[OrderPage]((https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderPage))** component. onPurchase() method adds ability to send purchase request to payment gateway from order page.
  * Add **transaction_id**, **payment_data**, **payment_response** fields to Order model. **payment_data**, **payment_response** fields is **encryptable**.
  * Add **gateway_id**, **gateway_currency**, **gateway_property**, **before_status_id**, **after_status_id**, **cancel_status_id**, **fail_status_id**, **send_purchase_request** fields to PaymentMethod model. **gateway_property** field is **encryptable**.
  * Add transaction_id, payment_data_json, payment_response_json fields in Order model form.
  * Add gateway_id, gateway_currency, before_status, after_status, cancel_status, fail_status, send_purchase_request fields in PaymentMethod model form.
  * Add [AbstractPaymentGateway](https://github.com/lovata/oc-shopaholic-plugin/wiki/AbstractPaymentGateway) abstract class
and [PaymentGatewayInterface](https://github.com/lovata/oc-shopaholic-plugin/wiki/PaymentGatewayInterface) interface for integration with payment gateways.
  * Adds of shipping price filling from shipping type object, if shipping_price field value from request is empty.

## Updates for July 11, 2018

### [Properties for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertiesForShopaholic) plugin.

Release version **1.3.0**
  * Logic for storing values of products properties has been changed. Empty property values are not stored in database. Changed database structure.
  * Add RelationSet model.
  * Now to display properties of products in backend you need:
    * Attach properties to property set
    * Attach property set to category
    * Attach product to category
  * Remove relation between Category model and Property model.
  * Add relation between Category model and PropertySet model.
  * Add relation between Property model and PropertySet model.
  * Remove propertyHasValue(), notEmpty(), unique() methods from [PropertyValueCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertyValueCollection) class.
  * Add PropertySetCollection, PropertySetItem classes.
  * Add code(), getByCode() methods to [PropertyCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertyCollection) class.

### [Filter for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterForShopaholic) plugin.

Release version **1.2.0**
  * Improve performance.
  * Adding [FilterPanel](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterPanel) component.
Component allows you to render of custom filter panel for different site pages. For example: search results page, brand page with product list, etc.
  * Added ability to create filter panel with mutually exclusive values of properties. To do this, you can use the isDisabled () method of [PropertyValueItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertyValueItem).
  * **getFilterType()**, **getFilterName()** methods are deprecated in [FilterPropertyCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterPropertyCollection) class.
  * **filter_type**, **filter_name** fields are available in [PropertyItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertyItem) class object.

## Updates for June 25, 2018
  
### **Shopaholic** plugin.

Release version **1.11.1**
  * Adding "field.additional_category" value to lang files.
  * Fixed displaying "additional categories" field only for update/preview forms.

## Updates for June 25, 2018
  
### **Shopaholic** plugin.

Release version **1.11.0**
  * Adding getPageUrl() method to [ProductItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductItem#getpageurlspagecode--product),
[BrandItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/BrandItem#getpageurlspagecode--brand) classes.

## Updates for June 22, 2018
  
### **Shopaholic** plugin.

Release version **1.10.0**
  * Adding additional "BelongsToMany" relation between Category and Product models.
Now you can use "BelongsTo" relation between Category and Product models, how main category of product.
And you can use additional "BelongsToMany" relation between Category and Product models that get you ability to render products in different categories.
  * Improved category() method of [ProductCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/ProductCollection) class.
  * You can get products of child categories, for this you need to pass in category() method ID of parent category + flag = true. For example:
  ```php
  $obList = ProductCollection::make()->category(2, true);
  ```
  * You can get products for list of categories, for this you need to pass in category() method array with ID of categories. For example:
  ```php
  $obList = ProductCollection::make()->category([2,5,6]);
  ```

## Updates for June 21, 2018

### [Accessories for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/AccessoriesForShopaholic) plugin.

Release version **1.1.0**
  * Add AccessoryListStore class. Refactoring ProductModelHandler class. **Requires Toolbox plugin version 1.10.0 and later**.
  
### [Filter for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/FilterForShopaholic) plugin.

Release version **1.1.0**
  * Add FilterByDiscountStore, FilterByPropertyStore, FilterByQuantityStore classes. **Requires Toolbox plugin version 1.10.0 and later**.
  
### [Omnipay for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OmnipayForShopaholic) plugin.

Release version **1.1.0**
  * Update logic for price field of Order model. **Requires Toolbox plugin version 1.10.0 and later**.
  
### [Orders for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrdersForShopaholic) plugin.

Release version **1.6.0**
  * Add classes: [OrderCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderCollection),
[OrderPositionCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderPositionCollection),
[StatusCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/StatusCollection),
[OrderItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderItem),
[OrderPositionItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/OrderPositionItem),
[StatusItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/StatusItem).
  * Add [StatusList](https://github.com/lovata/oc-shopaholic-plugin/wiki/StatusTypeList) component.
  * Adding the ability to **create cart positions with custom properties** (Fox example: {'double_cheese': true}).
  * Adding the ability to **create custom properties for order positions** (Fox example: comment).
  * Adding the ability to **attach users with orders**.
  * Adding the ability to **create/update order positions in backend**.
  * Add filter order list (backend) by payment method, shipping type, created_at/update_at fields.
  * Add "hasMany" relation in User model with Order model.
  * Add "user_list" property in User model. Add "order" in UserItem class.
  * Refactoring CartProcessor, OrderProcessor classes.
  * Rename classes: CartElementCollection => [CartPositionCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/CartPositionCollection), CartElementItem => [CartPositionItem](https://github.com/lovata/oc-shopaholic-plugin/wiki/CartPositionItem).
  * **Requires Toolbox plugin version 1.10.0 and later.**
  
### [Popularity for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/PopularityForShopaholic) plugin.

Release version **1.1.0**
  * Refactoring *Event classes. **Requires Toolbox plugin version 1.10.0 and later and "Order for Shopaholic" plugin version 1.6.0 and later**.
  
### [Properties for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/PropertiesForShopaholic) plugin.

Release version **1.2.0**
  * Refactoring *Event, *Model, *Item, *Collection classes. **Requires Toolbox plugin version 1.10.0 and later**.
  
### [Related products for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/RelatedProductsForShopaholic) plugin.

Release version **1.1.0**
  * Add RelatedProductListStore class. Refactoring ProductModelHandler class. **Requires Toolbox plugin version 1.10.0 and later**.
  
### [Reviews for Shopaholic](https://github.com/lovata/oc-shopaholic-plugin/wiki/ReviewsForShopaholic) plugin.

Release version **1.3.0**
  * Add new store classes. Refactoring *Store, *Item, *Collection classes. **Requires Toolbox plugin version 1.10.0 and later**.
  
### **Shopaholic** plugin.

Release version **1.9.0**
  * Add PriceHelperTrait, TraitCached in models.
  * Add active() method to [CategoryCollection](https://github.com/lovata/oc-shopaholic-plugin/wiki/CategoryCollection) class.
  * Move PriceHelper class from Shopaholic plugin to Toolbox plugin.
  * Add new store classes.
  * Refactoring *Store, *Item, *Collection classes.
  * **Requires Toolbox plugin version 1.10.0 and later**.
# Store class {docsify-ignore-all}

Store classes are used to store cached lists of element IDs.

## Logical diagram

Logical diagram of initialization of new ProductCollection object and getting list of active product

```plantuml
@startuml
start
:**$obProductList = ProductItem::make()->active();**|
:**$arResultIDList = ProductListStore::instance()->active->get();**|
note right
Code inside active() method
end note
:Get instance of **ProductListStore** class;
:Get instance of **ActiveListStore** class\nfrom object of **ProductListStore** class\nwith using **"active"** proeprty;
:Call **get()** method from object of **ActiveListStore** class;
if (Does cache is exist?) then (yes)
else (no)
    :Get active product IDs from database;
    :Save array in cache;
endif
:Return cached array with active product IDs;
:**return $this->intersect($arResultIDList);**|
note right
Code inside active() method
end note
stop
@enduml
```

Logical diagram of cache clearing active of active product

```plantuml
@startuml
start
:Add events on **afresSave()** and **afterDelete()** for **Product** model;
if (**afresSave()** or **afterDelete()**?) then (save)
    :Check "active" field was changed;
    if (Was value changed?) then (yes)
    else (no)
        stop
    endif
else (delete)
    :Clear cache, if product is active;
    if ("active" field == true?) then (yes)
    else (no)
        stop
    endif
endif
:ProductListStore::instance()->active->clear();|
stop
@enduml
```

## AbstractStoreWithoutParam

AbstractStoreWithoutParam class allows you to quickly create store that do not use parameters in database query.
For example: caching list of active brands.

```php
<?php namespace Lovata\Shopaholic\Classes\Store\Brand;

use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

use Lovata\Shopaholic\Models\Brand;

/**
 * Class ActiveListStore
 * @package Lovata\Shopaholic\Classes\Store\Brand
 */
class ActiveListStore extends AbstractStoreWithoutParam
{
    protected static $instance;

    /**
     * Get ID list from database
     * @return array
     */
    protected function getIDListFromDB() : array
    {
        $arElementIDList = (array) Brand::active()->lists('id');

        return $arElementIDList;
    }
}
```

## AbstractStoreWithParam

AbstractStoreWithParam class allows you to quickly create store that do use one parameter in database query.
For example: caching list of products with filter by brand ID.

```php
<?php namespace Lovata\Shopaholic\Classes\Store\Product;

use Lovata\Toolbox\Classes\Store\AbstractStoreWithParam;

use Lovata\Shopaholic\Models\Product;

/**
 * Class ListByBrandStore
 * @package Lovata\Shopaholic\Classes\Store\Product
 */
class ListByBrandStore extends AbstractStoreWithParam
{
    protected static $instance;

    /**
     * Get ID list from database
     * @return array
     */
    protected function getIDListFromDB() : array
    {
        $arElementIDList = (array) Product::getByBrand($this->sValue)->lists('id');

        return $arElementIDList;
    }
}
```

## AbstractStoreWithTwoParam

AbstractStoreWithTwoParam class allows you to quickly create store that do use two parameters in database query.
For example: caching list of orders with filter by status ID and user ID.


```php
<?php namespace Lovata\OrdersShopaholic\Classes\Store\Order;

use Lovata\Toolbox\Classes\Store\AbstractStoreWithTwoParam;

use Lovata\OrdersShopaholic\Models\Order;

/**
 * Class SortingListStore
 * @package Lovata\OrdersShopaholic\Classes\Store\Order
 */
class StatusListStore extends AbstractStoreWithTwoParam
{
    protected static $instance;

    /**
     * Get ID list from database
     * @return array
     */
    protected function getIDListFromDB() : array
    {
        if (empty($this->sAdditionParam)) {
            $arElementIDList = (array) Order::getByStatus($this->sValue)->lists('id');
        } else {
            $arElementIDList = (array) Order::getByUser($this->sAdditionParam)->getByStatus($this->sValue)->lists('id');
        }

        return $arElementIDList;
    }
}
```
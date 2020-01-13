[Back to modules](modules/home.md)

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• [Item](modules/order/item/item.md)
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Examples](modules/order/examples/examples.md)
• Extending

# Extending: Order {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Add custom field](#add-custom-field)
  * [Step 1: Create custom plugin](#step-1-create-custom-plugin)
  * [Step 2: Create field in database](#step-2-create-field-in-database)
  * [Step 3: Add field in backend](#step-3-add-field-in-backend)
  * [Step 4: Add field to cache](#step-4-add-field-to-cache)
  * [Step 5: Render field in template](#step-5-render-field-in-template)
* [Add custom filter](#add-custom-filter)
  * [Step 1: Add custom method to collection](#step-1-add-custom-method-to-collection)
  * [Step 2: Render list with custom filter](#step-2-render-list-with-custom-filter)
* [Add custom filter with caching](#add-custom-filter-with-caching)
  * [Step 1: Create custom store](#step-1-create-custom-store)
  * [Step 2: Adding cache flush](#step-2-adding-cache-flush)
  * [Step 3: Add custom method to collection](#step-3-add-custom-method-to-collection)
  * [Step 4: Render list with custom filter](#step-4-render-list-with-custom-filter)

## Add custom field

In this section, we will go through all required steps that you need to follow to add your custom field **"my_field"** to model and display it in template.

### Step 1: Create custom plugin

You need to create your custom plugin in which we will add all custom code in your project.
If this plugin has already been created, then you should proceed to [step 2](modules/order/extending/extending.md#step-2-create-field-in-database).

> You can find more information about [plugins](https://octobercms.com/docs/plugin/registration) in OctoberCMS documentation.

For example, we will use custom plugin with name Lovata.BaseCode.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function boot()
    {
        //...
    }
}
```

### Step 2: Create field in database

1. Create migration file to add custom field to database.

> You can find more information about [migrations](https://octobercms.com/docs/database/structure) in OctoberCMS documentation.

File: **plugins/lovata/basecode/updates/update_table_orders_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableOrders1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableOrders1 extends Migration
{
    const TABLE_NAME = 'lovata_orders_shopaholic_orders';
    
    public function up()
    {
        if (!Schema::hasTable(self::TABLE_NAME) || Schema::hasColumn(self::TABLE_NAME, 'my_field')) {
            return;
        }

        Schema::table(self::TABLE_NAME, function (Blueprint $obTable)
        {
            $obTable->boolean('my_field')->default(0);
        });
    }

    public function down()
    {
        if (!Schema::hasTable(self::TABLE_NAME) || !Schema::hasColumn(self::TABLE_NAME, 'my_field')) {
            return;
        }

        Schema::table(self::TABLE_NAME, function (Blueprint $obTable)
        {
            $obTable->dropColumn(['my_field']);
        });
    }
}
```

2. Create version.yaml file and add migration file to it.

> You can find more information about [version file](https://octobercms.com/docs/plugin/updates#version-file) in OctoberCMS documentation.

File: **plugins/lovata/basecode/updates/version.yaml**
```yaml
1.0.0:
    - 'Initialize plugin.'
    - update_table_orders_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/order/ExtendOrderFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Order;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\Shopaholic\Models\Order;
use Lovata\Shopaholic\Controllers\Orders;

/**
 * Class ExtendOrderFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\Order
 */
class ExtendOrderFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend orders field
     * @param \Backend\Widgets\Form $obWidget
     */
    protected function extendFields($obWidget)
    {
        $arAdditionFields = [
            'my_field' => [
                'label'   => 'My field',
                'tab'     => 'lovata.toolbox::lang.tab.settings',
                'type'    => 'checkbox',
            ],
        ];

        $obWidget->addTabFields($arAdditionFields);
    }

    /**
     * Get model class name
     * @return string
     */
    protected function getModelClass() : string
    {
        return Order::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return Orders::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Order\ExtendOrderFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendOrderFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend Order model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/order/ExtendOrderModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Order;

use Lovata\Shopaholic\Models\Order;

/**
 * Class ExtendOrderModel
 * @package Lovata\BaseCode\Classes\Event\Order
 */
class ExtendOrderModel
{
    public function subscribe()
    {
        Order::extend(function ($obOrder) {
            /** @var Order $obOrder */
            $obOrder->fillable[] = 'my_field';
            
            $obOrder->addCachedField(['my_field']);
        });
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Order\ExtendOrderFieldsHandler;
use Lovata\BaseCode\Classes\Event\Order\ExtendOrderModel;

//...

public function boot()
{
    Event::subscribe(ExtendOrderFieldsHandler::class);
    Event::subscribe(ExtendOrderModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Render field in template  

```twig
title = "Thank you page"
url = "/checkout/:slug"
layout = "main"

[OrderPage]
slug = "{{ :slug }}"
==

{# Get order object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    <h1>{{ obOrder.order_number }}</h1>
    <span>{{ obOrder.my_field == true ? 'My field in enabled' : 'My field in disabled' }}</span>
</div>
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [OrderCollection](modules/order/collection/collection.md) class.
In [section](modules/order/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend OrderCollection class.

File: **plugins/lovata/basecode/classes/event/order/ExtendOrderCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Order;

use Lovata\Shopaholic\Models\Order;
use Lovata\Shopaholic\Classes\Collection\OrderCollection;

/**
 * Class ExtendOrderCollection
 * @package Lovata\BaseCode\Classes\Event\Order
 */
class ExtendOrderCollection
{
    public function subscribe()
    {
        OrderCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param OrderCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) Order::where('my_field', true)->lists('id');

            return $obCollection->intersect($arResultIDList);
        });
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;

//...
use Lovata\BaseCode\Classes\Event\Order\ExtendOrderCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendOrderCollection::class);
}
```

### Step 2: Render list with custom filter

<!-- tabs:start -->
#### ** Lovata.Buddies **

File: **pages/index.htm**
```twig
title = "User orders"
url = "/user/orders"
layout = "main"
is_hidden = 0

[UserData]
==

{# Get user object #}
{% set obUser = UserData.get() %}

{# Get order list from user object #}
{% set obOrderList = obUser.order.myCustomMethod() %}
{% if obOrderList.isNotEmpty() %}
    <ul>
        {% for obOrder in obOrderList %}
            <li>{% partial 'order/order-card/order-card' obOrder=obOrder %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

#### ** RainLab.User **

File: **pages/index.htm**
```twig
title = "User orders"
url = "/user/orders"
layout = "main"
is_hidden = 0
==

{% if user %}
    <p>Hello {{ user.name }}</p>
    
    {# Get order list from user object #}
    {% set obOrderList = user.order_list.myCustomMethod() %}
    {% if obOrderList.isNotEmpty() %}
        <ul>
            {% for obOrder in obOrderList %}
                <li>{% partial 'order/order-card/order-card' obOrder=obOrder %}</li>
            {% endfor %}
        </ul>
    {% endif %}
{% else %}
    <p>Nobody is logged in</p>
{% endif %}
```
<!-- tabs:end -->

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/order/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\Order;

use Lovata\Shopaholic\Models\Order;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\Order
 */
class GetCustomList extends AbstractStoreWithoutParam
{
    protected static $instance;

    /**
     * Get ID list from database
     * @return array
     */
    protected function getIDListFromDB() : array
    {
        $arElementIDList = (array) Order::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/OrderListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\Order\GetCustomList;

/**
 * Class OrderListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class OrderListStore extends AbstractListStore
{
    protected static $instance;

    /**
     * Init store method
     */
    protected function init()
    {
        $this->addToStoreList('my_custom', GetCustomList::class);
    }
}
```

### Step 2: Adding cache flush

1. Modify event that we added in ["Add custom field"](modules/order/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/order/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/order/ExtendOrderModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Order;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\Shopaholic\Models\Order;
use Lovata\Shopaholic\Classes\Item\OrderItem;
use Lovata\BaseCode\Classes\Store\OrderListStore;

/**
 * Class ExtendOrderModel
 * @package Lovata\BaseCode\Classes\Event\Order
 */
class ExtendOrderModel extends ModelHandler
{
    /** @var Order */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        Order::extend(function ($obOrder) {
            /** @var Order $obOrder */
            $obOrder->fillable[] = 'my_field';
            
            $obOrder->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', OrderListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            OrderListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return Order::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return OrderItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend OrderCollection class.

File: **plugins/lovata/basecode/classes/event/order/ExtendOrderCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Order;

use Lovata\BaseCode\Classes\Store\OrderListStore;
use Lovata\Shopaholic\Classes\Collection\OrderCollection;

/**
 * Class ExtendOrderCollection
 * @package Lovata\BaseCode\Classes\Event\Order
 */
class ExtendOrderCollection
{
    public function subscribe()
    {
        OrderCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param OrderCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = OrderListStore::instance()->my_custom->get();

            return $obCollection->intersect($arResultIDList);
        });
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;

//...
use Lovata\BaseCode\Classes\Event\Order\ExtendOrderCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendOrderCollection::class);
}
```

### Step 4: Render list with custom filter

<!-- tabs:start -->
#### ** Lovata.Buddies **

File: **pages/index.htm**
```twig
title = "User orders"
url = "/user/orders"
layout = "main"
is_hidden = 0

[UserData]
==

{# Get user object #}
{% set obUser = UserData.get() %}

{# Get order list from user object #}
{% set obOrderList = obUser.order.myCustomMethod() %}
{% if obOrderList.isNotEmpty() %}
    <ul>
        {% for obOrder in obOrderList %}
            <li>{% partial 'order/order-card/order-card' obOrder=obOrder %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

#### ** RainLab.User **

File: **pages/index.htm**
```twig
title = "User orders"
url = "/user/orders"
layout = "main"
is_hidden = 0
==

{% if user %}
    <p>Hello {{ user.name }}</p>
    
    {# Get order list from user object #}
    {% set obOrderList = user.order_list.myCustomMethod() %}
    {% if obOrderList.isNotEmpty() %}
        <ul>
            {% for obOrder in obOrderList %}
                <li>{% partial 'order/order-card/order-card' obOrder=obOrder %}</li>
            {% endfor %}
        </ul>
    {% endif %}
{% else %}
    <p>Nobody is logged in</p>
{% endif %}
```
<!-- tabs:end -->

[Home](modules/order/home.md)
• [Model](modules/order/model/model.md)
• [Item](modules/order/item/item.md)
• [Collection](modules/order/collection/collection.md)
• [Components](modules/order/component/component.md)
• [Events](modules/order/event/event.md)
• [Examples](modules/order/examples/examples.md)
• Extending

[Back to modules](modules/home.md)

[Back to modules](modules/home.md)

[Home](modules/order-position/home.md)
• [Model](modules/order-position/model/model.md)
• [Item](modules/order-position/item/item.md)
• [Collection](modules/order-position/collection/collection.md)
• [Examples](modules/order-position/examples/examples.md)
• Extending

# Extending: OrderPosition {docsify-ignore-all}

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
If this plugin has already been created, then you should proceed to [step 2](modules/order-position/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_order_positions_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableOrderPositions1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableOrderPositions1 extends Migration
{
    const TABLE_NAME = 'lovata_orders_shopaholic_order_positions';
    
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
    - update_table_order_positions_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/orderposition/ExtendOrderPositionFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\OrderPosition;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\OrdersShopaholic\Models\OrderPosition;
use Lovata\OrdersShopaholic\Controllers\OrderPositions;

/**
 * Class ExtendOrderPositionFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\OrderPosition
 */
class ExtendOrderPositionFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend order positions field
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
        return OrderPosition::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return OrderPositions::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\OrderPosition\ExtendOrderPositionFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendOrderPositionFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend OrderPosition model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/orderposition/ExtendOrderPositionModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\OrderPosition;

use Lovata\OrdersShopaholic\Models\OrderPosition;

/**
 * Class ExtendOrderPositionModel
 * @package Lovata\BaseCode\Classes\Event\OrderPosition
 */
class ExtendOrderPositionModel
{
    public function subscribe()
    {
        OrderPosition::extend(function ($obOrderPosition) {
            /** @var OrderPosition $obOrderPosition */
            $obOrderPosition->fillable[] = 'my_field';
            
            $obOrderPosition->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\OrderPosition\ExtendOrderPositionFieldsHandler;
use Lovata\BaseCode\Classes\Event\OrderPosition\ExtendOrderPositionModel;

//...

public function boot()
{
    Event::subscribe(ExtendOrderPositionFieldsHandler::class);
    Event::subscribe(ExtendOrderPositionModel::class);
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

{# Get order position object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    {# Get order positions #}
    {% set obOrderPositionList = obOrder.order_position %}
    {% for obOrderPosition in obOrderPositionList %}
      <div>{{ obOrderPosition.my_field == true ? 'My field in enabled' : 'My field in disabled' }}</div>
    {% endfor %}
</div>
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [OrderPositionCollection](modules/order-position/collection/collection.md) class.
In [section](modules/order-position/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend OrderPositionCollection class.

File: **plugins/lovata/basecode/classes/event/orderposition/ExtendOrderPositionCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\OrderPosition;

use Lovata\OrdersShopaholic\Models\OrderPosition;
use Lovata\Shopaholic\Classes\Collection\OrderPositionCollection;

/**
 * Class ExtendOrderPositionCollection
 * @package Lovata\BaseCode\Classes\Event\OrderPosition
 */
class ExtendOrderPositionCollection
{
    public function subscribe()
    {
        OrderPositionCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param OrderPositionCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) OrderPosition::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\OrderPosition\ExtendOrderPositionCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendOrderPositionCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
title = "Thank you page"
url = "/checkout/:slug"
layout = "main"

[OrderPage]
slug = "{{ :slug }}"
==

{# Get order position object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    {# Get order positions #}
    {% set obOrderPositionList = obOrder.order_position.myCustomMethod() %}
    {% for obOrderPosition in obOrderPositionList %}
      <div>{{ obOrderPosition.item.name }}</div>
    {% endfor %}
</div>
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/orderposition/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\OrderPosition;

use Lovata\OrdersShopaholic\Models\OrderPosition;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\OrderPosition
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
        $arElementIDList = (array) OrderPosition::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/OrderPositionListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\OrderPosition\GetCustomList;

/**
 * Class OrderPositionListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class OrderPositionListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/order-position/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/order-position/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/orderposition/ExtendOrderPositionModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\OrderPosition;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\OrdersShopaholic\Models\OrderPosition;
use Lovata\Shopaholic\Classes\Item\OrderPositionItem;
use Lovata\BaseCode\Classes\Store\OrderPositionListStore;

/**
 * Class ExtendOrderPositionModel
 * @package Lovata\BaseCode\Classes\Event\OrderPosition
 */
class ExtendOrderPositionModel extends ModelHandler
{
    /** @var OrderPosition */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        OrderPosition::extend(function ($obOrderPosition) {
            /** @var OrderPosition $obOrderPosition */
            $obOrderPosition->fillable[] = 'my_field';
            
            $obOrderPosition->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', OrderPositionListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            OrderPositionListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return OrderPosition::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return OrderPositionItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend OrderPositionCollection class.

File: **plugins/lovata/basecode/classes/event/orderposition/ExtendOrderPositionCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\OrderPosition;

use Lovata\BaseCode\Classes\Store\OrderPositionListStore;
use Lovata\Shopaholic\Classes\Collection\OrderPositionCollection;

/**
 * Class ExtendOrderPositionCollection
 * @package Lovata\BaseCode\Classes\Event\OrderPosition
 */
class ExtendOrderPositionCollection
{
    public function subscribe()
    {
        OrderPositionCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param OrderPositionCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = OrderPositionListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\OrderPosition\ExtendOrderPositionCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendOrderPositionCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
title = "Thank you page"
url = "/checkout/:slug"
layout = "main"

[OrderPage]
slug = "{{ :slug }}"
==

{# Get order position object #}
{% set obOrder = OrderPage.get() %}
<div data-id="{{ obOrder.id }}">
    {# Get order positions #}
    {% set obOrderPositionList = obOrder.order_position.myCustomMethod() %}
    {% for obOrderPosition in obOrderPositionList %}
      <div>{{ obOrderPosition.item.name }}</div>
    {% endfor %}
</div>
```

[Home](modules/order-position/home.md)
• [Model](modules/order-position/model/model.md)
• [Item](modules/order-position/item/item.md)
• [Collection](modules/order-position/collection/collection.md)
• [Examples](modules/order-position/examples/examples.md)
• Extending

[Back to modules](modules/home.md)

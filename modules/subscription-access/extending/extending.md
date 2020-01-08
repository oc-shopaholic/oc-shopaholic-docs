[Back to modules](modules/home.md)

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• Extending

# Extending: SubscriptionAccess {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Add custom field](#add-custom-field)
  * [Step 1: Create custom plugin](#step-1-create-custom-plugin)
  * [Step 2: Create field in database](#step-2-create-field-in-database)
  * [Step 3: Add field in backend](#step-3-add-field-in-backend)
  * [Step 4: Add field to cache](#step-4-add-field-to-cache)
  * [Step 5: Add custom field in your custom logic](#step-5-add-custom-field-in-your-custom-logic)
* [Add custom filter](#add-custom-filter)
  * [Step 1: Add custom method to collection](#step-1-add-custom-method-to-collection)
  * [Step 2: Use method in your custom logic](#step-2-use-method-in-your-custom-logic)
* [Add custom filter with caching](#add-custom-filter-with-caching)
  * [Step 1: Create custom store](#step-1-create-custom-store)
  * [Step 2: Adding cache flush](#step-2-adding-cache-flush)
  * [Step 3: Add custom method to collection](#step-3-add-custom-method-to-collection)
  * [Step 4: Use method in your custom logic](#step-4-use-method-in-your-custom-logic)

## Add custom field

In this section, we will go through all required steps that you need to follow to add your custom field **"my_field"** to model and display it in template.

### Step 1: Create custom plugin

You need to create your custom plugin in which we will add all custom code in your project.
If this plugin has already been created, then you should proceed to [step 2](modules/subscription-access/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_subscription_access_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableSubscriptionAccess1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableSubscriptionAccess1 extends Migration
{
    const TABLE_NAME = 'lovata_subscriptions_shopaholic_access';
    
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
    - update_table_subscription_access_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/subscriptionaccess/ExtendSubscriptionAccessFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionAccess;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionAccess;
use Lovata\SubscriptionsShopaholic\Controllers\SubscriptionAccesses;

/**
 * Class ExtendSubscriptionAccessFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\SubscriptionAccess
 */
class ExtendSubscriptionAccessFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend subscription access field
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
        return SubscriptionAccess::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return SubscriptionAccesses::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\SubscriptionAccess\ExtendSubscriptionAccessFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendSubscriptionAccessFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend SubscriptionAccess model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/subscriptionaccess/ExtendSubscriptionAccessModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionAccess;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionAccess;

/**
 * Class ExtendSubscriptionAccessModel
 * @package Lovata\BaseCode\Classes\Event\SubscriptionAccess
 */
class ExtendSubscriptionAccessModel
{
    public function subscribe()
    {
        SubscriptionAccess::extend(function ($obSubscriptionAccess) {
            /** @var SubscriptionAccess $obSubscriptionAccess */
            $obSubscriptionAccess->fillable[] = 'my_field';
            
            $obSubscriptionAccess->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\SubscriptionAccess\ExtendSubscriptionAccessFieldsHandler;
use Lovata\BaseCode\Classes\Event\SubscriptionAccess\ExtendSubscriptionAccessModel;

//...

public function boot()
{
    Event::subscribe(ExtendSubscriptionAccessFieldsHandler::class);
    Event::subscribe(ExtendSubscriptionAccessModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Add custom field in your custom logic

```php

use Lovata\SubscriptionsShopaholic\Models\SubscriptionAccess;
use Lovata\SubscriptionsShopaholic\Classes\Item\SubscriptionAccessItem;


//Find first object from database
$obSubscriptionAccessItem = SubscriptionAccessItem::make(SubscriptionAccess::first()->id);

if ($obSubscriptionAccessItem->my_field) {
  //to do something
}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [SubscriptionAccessCollection](modules/subscription-access/collection/collection.md) class.
In [section](modules/subscription-access/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend SubscriptionAccessCollection class.

File: **plugins/lovata/basecode/classes/event/subscriptionaccess/ExtendSubscriptionAccessCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionAccess;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionAccess;
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionAccessCollection;

/**
 * Class ExtendSubscriptionAccessCollection
 * @package Lovata\BaseCode\Classes\Event\SubscriptionAccess
 */
class ExtendSubscriptionAccessCollection
{
    public function subscribe()
    {
        SubscriptionAccessCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param SubscriptionAccessCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) SubscriptionAccess::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\SubscriptionAccess\ExtendSubscriptionAccessCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendSubscriptionAccessCollection::class);
}
```

### Step 2: Use method in your custom logic

```php
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionAccessCollection;

$obSubscriptionAccessList = SubscriptionAccessCollection::make().user().myCustomMethod();
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/subscriptionaccess/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\SubscriptionAccess;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionAccess;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\SubscriptionAccess
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
        $arElementIDList = (array) SubscriptionAccess::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/SubscriptionAccessListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\SubscriptionAccess\GetCustomList;

/**
 * Class SubscriptionAccessListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class SubscriptionAccessListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/subscription-access/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/subscription-access/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/subscriptionaccess/ExtendSubscriptionAccessModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionAccess;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionAccess;
use Lovata\SubscriptionsShopaholic\Classes\Item\SubscriptionAccessItem;
use Lovata\BaseCode\Classes\Store\SubscriptionAccessListStore;

/**
 * Class ExtendSubscriptionAccessModel
 * @package Lovata\BaseCode\Classes\Event\SubscriptionAccess
 */
class ExtendSubscriptionAccessModel extends ModelHandler
{
    /** @var SubscriptionAccess */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        SubscriptionAccess::extend(function ($obSubscriptionAccess) {
            /** @var SubscriptionAccess $obSubscriptionAccess */
            $obSubscriptionAccess->fillable[] = 'my_field';
            
            $obSubscriptionAccess->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', SubscriptionAccessListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            SubscriptionAccessListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return SubscriptionAccess::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return SubscriptionAccessItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend SubscriptionAccessCollection class.

File: **plugins/lovata/basecode/classes/event/subscriptionaccess/ExtendSubscriptionAccessCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionAccess;

use Lovata\BaseCode\Classes\Store\SubscriptionAccessListStore;
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionAccessCollection;

/**
 * Class ExtendSubscriptionAccessCollection
 * @package Lovata\BaseCode\Classes\Event\SubscriptionAccess
 */
class ExtendSubscriptionAccessCollection
{
    public function subscribe()
    {
        SubscriptionAccessCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param SubscriptionAccessCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = SubscriptionAccessListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\SubscriptionAccess\ExtendSubscriptionAccessCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendSubscriptionAccessCollection::class);
}
```

### Step 4: Use method in your custom logic

```php
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionAccessCollection;

$obSubscriptionAccessList = SubscriptionAccessCollection::make().user().myCustomMethod();
```

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• Extending

[Back to modules](modules/home.md)

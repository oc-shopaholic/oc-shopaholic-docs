[Back to modules](modules/home.md)

[Home](modules/subscription-period/home.md)
• [Model](modules/subscription-period/model/model.md)
• [Item](modules/subscription-period/item/item.md)
• [Collection](modules/subscription-period/collection/collection.md)
• [Examples](modules/subscription-period/examples/examples.md)
• Extending

# Extending: SubscriptionPeriod {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

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
If this plugin has already been created, then you should proceed to [step 2](modules/subscription-period/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_subscription_period_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableSubscriptionPeriod1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableSubscriptionPeriod1 extends Migration
{
    const TABLE_NAME = 'lovata_subscriptions_shopaholic_period';
    
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
    - update_table_subscription_period_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/subscriptionperiod/ExtendSubscriptionPeriodFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionPeriod;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionPeriod;
use Lovata\SubscriptionsShopaholic\Controllers\SubscriptionPeriods;

/**
 * Class ExtendSubscriptionPeriodFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\SubscriptionPeriod
 */
class ExtendSubscriptionPeriodFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend subscription period field
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
        return SubscriptionPeriod::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return SubscriptionPeriods::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\SubscriptionPeriod\ExtendSubscriptionPeriodFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendSubscriptionPeriodFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend SubscriptionPeriod model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/subscriptionperiod/ExtendSubscriptionPeriodModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionPeriod;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionPeriod;

/**
 * Class ExtendSubscriptionPeriodModel
 * @package Lovata\BaseCode\Classes\Event\SubscriptionPeriod
 */
class ExtendSubscriptionPeriodModel
{
    public function subscribe()
    {
        SubscriptionPeriod::extend(function ($obSubscriptionPeriod) {
            /** @var SubscriptionPeriod $obSubscriptionPeriod */
            $obSubscriptionPeriod->fillable[] = 'my_field';
            
            $obSubscriptionPeriod->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\SubscriptionPeriod\ExtendSubscriptionPeriodFieldsHandler;
use Lovata\BaseCode\Classes\Event\SubscriptionPeriod\ExtendSubscriptionPeriodModel;

//...

public function boot()
{
    Event::subscribe(ExtendSubscriptionPeriodFieldsHandler::class);
    Event::subscribe(ExtendSubscriptionPeriodModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Add custom field in your custom logic

```php

use Lovata\SubscriptionsShopaholic\Models\SubscriptionPeriod;
use Lovata\SubscriptionsShopaholic\Classes\Item\SubscriptionPeriodItem;


//Find first object from database
$obSubscriptionPeriodItem = SubscriptionPeriodItem::make(SubscriptionPeriod::first()->id);

if ($obSubscriptionPeriodItem->my_field) {
  //to do something
}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [SubscriptionPeriodCollection](modules/subscription-period/collection/collection.md) class.
In [section](modules/subscription-period/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend SubscriptionPeriodCollection class.

File: **plugins/lovata/basecode/classes/event/subscriptionperiod/ExtendSubscriptionPeriodCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionPeriod;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionPeriod;
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionPeriodCollection;

/**
 * Class ExtendSubscriptionPeriodCollection
 * @package Lovata\BaseCode\Classes\Event\SubscriptionPeriod
 */
class ExtendSubscriptionPeriodCollection
{
    public function subscribe()
    {
        SubscriptionPeriodCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param SubscriptionPeriodCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) SubscriptionPeriod::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\SubscriptionPeriod\ExtendSubscriptionPeriodCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendSubscriptionPeriodCollection::class);
}
```

### Step 2: Use method in your custom logic

```php
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionPeriodCollection;

$obSubscriptionPeriodList = SubscriptionPeriodCollection::make().user().myCustomMethod();
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/subscriptionperiod/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\SubscriptionPeriod;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionPeriod;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\SubscriptionPeriod
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
        $arElementIDList = (array) SubscriptionPeriod::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/SubscriptionPeriodListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\SubscriptionPeriod\GetCustomList;

/**
 * Class SubscriptionPeriodListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class SubscriptionPeriodListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/subscription-period/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/subscription-period/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/subscriptionperiod/ExtendSubscriptionPeriodModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionPeriod;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\SubscriptionsShopaholic\Models\SubscriptionPeriod;
use Lovata\SubscriptionsShopaholic\Classes\Item\SubscriptionPeriodItem;
use Lovata\BaseCode\Classes\Store\SubscriptionPeriodListStore;

/**
 * Class ExtendSubscriptionPeriodModel
 * @package Lovata\BaseCode\Classes\Event\SubscriptionPeriod
 */
class ExtendSubscriptionPeriodModel extends ModelHandler
{
    /** @var SubscriptionPeriod */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        SubscriptionPeriod::extend(function ($obSubscriptionPeriod) {
            /** @var SubscriptionPeriod $obSubscriptionPeriod */
            $obSubscriptionPeriod->fillable[] = 'my_field';
            
            $obSubscriptionPeriod->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', SubscriptionPeriodListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            SubscriptionPeriodListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return SubscriptionPeriod::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return SubscriptionPeriodItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend SubscriptionPeriodCollection class.

File: **plugins/lovata/basecode/classes/event/subscriptionperiod/ExtendSubscriptionPeriodCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\SubscriptionPeriod;

use Lovata\BaseCode\Classes\Store\SubscriptionPeriodListStore;
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionPeriodCollection;

/**
 * Class ExtendSubscriptionPeriodCollection
 * @package Lovata\BaseCode\Classes\Event\SubscriptionPeriod
 */
class ExtendSubscriptionPeriodCollection
{
    public function subscribe()
    {
        SubscriptionPeriodCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param SubscriptionPeriodCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = SubscriptionPeriodListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\SubscriptionPeriod\ExtendSubscriptionPeriodCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendSubscriptionPeriodCollection::class);
}
```

### Step 4: Use method in your custom logic

```php
use Lovata\SubscriptionsShopaholic\Classes\Collection\SubscriptionPeriodCollection;

$obSubscriptionPeriodList = SubscriptionPeriodCollection::make().user().myCustomMethod();
```

[Home](modules/subscription-period/home.md)
• [Model](modules/subscription-period/model/model.md)
• [Item](modules/subscription-period/item/item.md)
• [Collection](modules/subscription-period/collection/collection.md)
• [Examples](modules/subscription-period/examples/examples.md)
• Extending

[Back to modules](modules/home.md)

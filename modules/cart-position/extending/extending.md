[Back to modules](modules/home.md)

[Home](modules/cart-position/home.md)
• [Model](modules/cart-position/model/model.md)
• [Item](modules/cart-position/item/item.md)
• [Collection](modules/cart-position/collection/collection.md)
• [Examples](modules/cart-position/examples/examples.md)
• Extending

# Extending: CartPosition {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Add custom field](#add-custom-field)
  * [Step 1: Create custom plugin](#step-1-create-custom-plugin)
  * [Step 2: Create field in database](#step-2-create-field-in-database)
  * [Step 3: Add field to cache](#step-3-add-field-to-cache)
  * [Step 4: Render field in template](#step-4-render-field-in-template)
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
If this plugin has already been created, then you should proceed to [step 2](modules/cart-position/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_cart_positions_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableCartPositions1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableCartPositions1 extends Migration
{
    const TABLE_NAME = 'lovata_orders_shopaholic_cart_positions';
    
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
    - update_table_cart_positions_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field to cache

1. Create event class to extend CartPosition model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/cartposition/ExtendCartPositionModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\CartPosition;

use Lovata\OrdersShopaholic\Models\CartPosition;

/**
 * Class ExtendCartPositionModel
 * @package Lovata\BaseCode\Classes\Event\CartPosition
 */
class ExtendCartPositionModel
{
    public function subscribe()
    {
        CartPosition::extend(function ($obCartPosition) {
            /** @var CartPosition $obCartPosition */
            $obCartPosition->fillable[] = 'my_field';
            
            $obCartPosition->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\CartPosition\ExtendCartPositionModel;

//...

public function boot()
{
    Event::subscribe(ExtendCartPositionModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 4: Render field in template  

```twig
[Cart]
==

{# Get cart position item #}
{% set obCartPositionList = Cart.get() %}
{% set obCartPosition = obCartPositionList.first() %}
{{ obCartPosition.my_field == true ? 'My field in enabled' : 'My field in disabled' }}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [CartPositionCollection](modules/cart-position/collection/collection.md) class.
In [section](modules/cart-position/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend CartPositionCollection class.

File: **plugins/lovata/basecode/classes/event/cartposition/ExtendCartPositionCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\CartPosition;

use Lovata\OrdersShopaholic\Models\CartPosition;
use Lovata\OrdersShopaholic\Classes\Collection\CartPositionCollection;

/**
 * Class ExtendCartPositionCollection
 * @package Lovata\BaseCode\Classes\Event\CartPosition
 */
class ExtendCartPositionCollection
{
    public function subscribe()
    {
        CartPositionCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param CartPositionCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) CartPosition::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\CartPosition\ExtendCartPositionCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendCartPositionCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
[Cart]
==

{% set obCartPositionList = Cart.get().myCustomMethod() %}
{% if obCartPositionList.isNotEmpty() %}
    <ul>
        {% for obCartPosition in obCartPositionList %}
            <li>{% partial 'cart-position/cart-position-card/cart-position-card' obCartPosition=obCartPosition %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/cartposition/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\CartPosition;

use Lovata\OrdersShopaholic\Models\CartPosition;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\CartPosition
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
        $arElementIDList = (array) CartPosition::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/CartPositionListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\CartPosition\GetCustomList;

/**
 * Class CartPositionListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class CartPositionListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/cart-position/extending/extending.md#add-custom-field) section on ["Step 3: Add field to cache"](modules/cart-position/extending/extending.md#step-3-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/cartposition/ExtendCartPositionModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\CartPosition;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\OrdersShopaholic\Models\CartPosition;
use Lovata\OrdersShopaholic\Classes\Item\CartPositionItem;
use Lovata\BaseCode\Classes\Store\CartPositionListStore;

/**
 * Class ExtendCartPositionModel
 * @package Lovata\BaseCode\Classes\Event\CartPosition
 */
class ExtendCartPositionModel extends ModelHandler
{
    /** @var CartPosition */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        CartPosition::extend(function ($obCartPosition) {
            /** @var CartPosition $obCartPosition */
            $obCartPosition->fillable[] = 'my_field';
            
            $obCartPosition->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', CartPositionListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            CartPositionListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return CartPosition::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return CartPositionItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend CartPositionCollection class.

File: **plugins/lovata/basecode/classes/event/cartposition/ExtendCartPositionCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\CartPosition;

use Lovata\BaseCode\Classes\Store\CartPositionListStore;
use Lovata\OrdersShopaholic\Classes\Collection\CartPositionCollection;

/**
 * Class ExtendCartPositionCollection
 * @package Lovata\BaseCode\Classes\Event\CartPosition
 */
class ExtendCartPositionCollection
{
    public function subscribe()
    {
        CartPositionCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param CartPositionCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = CartPositionListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\CartPosition\ExtendCartPositionCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendCartPositionCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
[Cart]
==

{% set obCartPositionList = Cart.get().myCustomMethod() %}
{% if obCartPositionList.isNotEmpty() %}
    <ul>
        {% for obCartPosition in obCartPositionList %}
            <li>{% partial 'cart-position/cart-position-card/cart-position-card' obCartPosition=obCartPosition %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

[Home](modules/cart-position/home.md)
• [Model](modules/cart-position/model/model.md)
• [Item](modules/cart-position/item/item.md)
• [Collection](modules/cart-position/collection/collection.md)
• [Examples](modules/cart-position/examples/examples.md)
• Extending

[Back to modules](modules/home.md)

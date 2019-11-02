# Extending: Currency

[Back to modules](modules/home.md)
/ [Home](modules/currency/home.md)
/ [Model](modules/currency/model/model.md)
/ [Item](modules/currency/item/item.md)
/ [Collection](modules/currency/collection/collection.md)
/ [Components](modules/currency/component/component.md)
/ [Examples](modules/currency/examples/examples.md)
/ Extending
/ [Advanced usage](modules/currency/advanced-usage/home.md)

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
If this plugin has already been created, then you should proceed to [step 2](modules/currency/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_currencies_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableCurrencies1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableCurrencies1 extends Migration
{
    const TABLE_NAME = 'lovata_shopaholic_currency';
    
    public function up()
    {
        if (!Schema::hasTable(self::TABLE_NAME) || Schema::hasColumn(self::TABLE_NAME, 'my_field')) {
            return;
        }

        Schema::create(self::TABLE_NAME, function (Blueprint $obTable)
        {
            $obTable->boolean('my_field')->default(0);
        });
    }

    public function down()
    {
        if (!Schema::hasTable(self::TABLE_NAME) || !Schema::hasColumn(self::TABLE_NAME, 'my_field')) {
            return;
        }

        Schema::create(self::TABLE_NAME, function (Blueprint $obTable)
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
    - update_table_currencies_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/currency/ExtendCurrencyFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Currency;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\Shopaholic\Models\Currency;
use Lovata\Shopaholic\Controllers\Currencies;

/**
 * Class ExtendCurrencyFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\Currency
 */
class ExtendCurrencyFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend currencies field
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
        return Currency::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return Currencies::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Currency\ExtendCurrencyFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendCurrencyFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend Currency model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/currency/ExtendCurrencyModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Currency;

use Lovata\Shopaholic\Models\Currency;

/**
 * Class ExtendCurrencyModel
 * @package Lovata\BaseCode\Classes\Event\Currency
 */
class ExtendCurrencyModel
{
    public function subscribe()
    {
        Currency::extend(function ($obCurrency) {
            /** @var Currency $obCurrency */
            $obCurrency->fillable[] = 'my_field';
            
            $obCurrency->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\Currency\ExtendCurrencyFieldsHandler;
use Lovata\BaseCode\Classes\Event\Currency\ExtendCurrencyModel;

//...

public function boot()
{
    Event::subscribe(ExtendCurrencyFieldsHandler::class);
    Event::subscribe(ExtendCurrencyModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Render field in template  

```twig
[CurrencyList]
==

{# Get currency item #}
{% set obCurrency = CurrencyList.make().active().sort().first() %}
{{ obCurrency.my_field == true ? 'My field in enabled' : 'My field in disabled' }}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [CurrencyCollection](modules/currency/collection/collection.md) class.
In [section](modules/currency/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend CurrencyCollection class.

File: **plugins/lovata/basecode/classes/events/currency/ExtendCurrencyCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Currency;

use Lovata\Shopaholic\Models\Currency;
use Lovata\Shopaholic\Classes\Collection\CurrencyCollection;

/**
 * Class ExtendCurrencyCollection
 * @package Lovata\BaseCode\Classes\Event\Currency
 */
class ExtendCurrencyCollection
{
    public function subscribe()
    {
        CurrencyCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param CurrencyCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) Currency::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\Currency\ExtendCurrencyCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendCurrencyCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
[CurrencyList]
==

{% set obCurrencyList = CurrencyList.make().active().myCustomMethod() %}
{% if obCurrencyList.isNotEmpty() %}
    <ul>
        {% for obCurrency in obCurrencyList %}
            <li currency="{{ obCurrency.code }}">{{ obCurrency.symbol }}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/currency/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\Currency;

use Lovata\Shopaholic\Models\Currency;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\Currency
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
        $arElementIDList = (array) Currency::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/CurrencyListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\Currency\GetCustomList;

/**
 * Class CurrencyListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class CurrencyListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/currency/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/currency/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/events/currency/ExtendCurrencyModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Currency;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\Shopaholic\Models\Currency;
use Lovata\Shopaholic\Classes\Item\CurrencyItem;
use Lovata\BaseCode\Classes\Store\CurrencyListStore;

/**
 * Class ExtendCurrencyModel
 * @package Lovata\BaseCode\Classes\Event\Currency
 */
class ExtendCurrencyModel extends ModelHandler
{
    /** @var Currency */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        Currency::extend(function ($obCurrency) {
            /** @var Currency $obCurrency */
            $obCurrency->fillable[] = 'my_field';
            
            $obCurrency->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', CurrencyListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            CurrencyListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return Currency::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return CurrencyItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend CurrencyCollection class.

File: **plugins/lovata/basecode/classes/events/currency/ExtendCurrencyCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Currency;

use Lovata\BaseCode\Classes\Store\CurrencyListStore;
use Lovata\Shopaholic\Classes\Collection\CurrencyCollection;

/**
 * Class ExtendCurrencyCollection
 * @package Lovata\BaseCode\Classes\Event\Currency
 */
class ExtendCurrencyCollection
{
    public function subscribe()
    {
        CurrencyCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param CurrencyCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = CurrencyListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\Currency\ExtendCurrencyCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendCurrencyCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
[CurrencyList]
==

{% set obCurrencyList = CurrencyList.make().active().myCustomMethod() %}
{% if obCurrencyList.isNotEmpty() %}
    <ul>
        {% for obCurrency in obCurrencyList %}
            <li currency="{{ obCurrency.code }}">{{ obCurrency.symbol }}</li>
        {% endfor %}
    </ul>
{% endif %}
```

[Back to modules](modules/home.md)
/ [Home](modules/currency/home.md)
/ [Model](modules/currency/model/model.md)
/ [Item](modules/currency/item/item.md)
/ [Collection](modules/currency/collection/collection.md)
/ [Components](modules/currency/component/component.md)
/ [Examples](modules/currency/examples/examples.md)
/ Extending
/ [Advanced usage](modules/currency/advanced-usage/home.md)
[Back to modules](modules/home.md)

[Home](modules/tax/home.md)
• [Model](modules/tax/model/model.md)
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• Extending
• [Advanced usage](modules/tax/advanced-usage/home.md)

# Extending: Tax

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
If this plugin has already been created, then you should proceed to [step 2](modules/tax/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_taxes_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableTaxes1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableTaxes1 extends Migration
{
    const TABLE_NAME = 'lovata_shopaholic_tax';
    
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
    - update_table_taxes_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/tax/ExtendTaxFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Tax;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\Shopaholic\Models\Tax;
use Lovata\Shopaholic\Controllers\Taxes;

/**
 * Class ExtendTaxFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\Tax
 */
class ExtendTaxFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend taxes field
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
        return Tax::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return Taxes::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Tax\ExtendTaxFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendTaxFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend Tax model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/tax/ExtendTaxModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Tax;

use Lovata\Shopaholic\Models\Tax;

/**
 * Class ExtendTaxModel
 * @package Lovata\BaseCode\Classes\Event\Tax
 */
class ExtendTaxModel
{
    public function subscribe()
    {
        Tax::extend(function ($obTax) {
            /** @var Tax $obTax */
            $obTax->fillable[] = 'my_field';
            
            $obTax->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\Tax\ExtendTaxFieldsHandler;
use Lovata\BaseCode\Classes\Event\Tax\ExtendTaxModel;

//...

public function boot()
{
    Event::subscribe(ExtendTaxFieldsHandler::class);
    Event::subscribe(ExtendTaxModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Render field in template  

```twig
[TaxList]
==

{# Get tax item #}
{% set obTax = TaxList.make().active().sort().first() %}
{{ obTax.my_field == true ? 'My field in enabled' : 'My field in disabled' }}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [TaxCollection](modules/tax/collection/collection.md) class.
In [section](modules/tax/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend TaxCollection class.

File: **plugins/lovata/basecode/classes/event/tax/ExtendTaxCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Tax;

use Lovata\Shopaholic\Models\Tax;
use Lovata\Shopaholic\Classes\Collection\TaxCollection;

/**
 * Class ExtendTaxCollection
 * @package Lovata\BaseCode\Classes\Event\Tax
 */
class ExtendTaxCollection
{
    public function subscribe()
    {
        TaxCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param TaxCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) Tax::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\Tax\ExtendTaxCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendTaxCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
[TaxList]
==

{% set obTaxList = TaxList.make().active().myCustomMethod() %}
{% if obTaxList.isNotEmpty() %}
    <ul>
        {% for obTax in obTaxList %}
            <li tax="{{ obTax.code }}">{{ obTax.symbol }}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/tax/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\Tax;

use Lovata\Shopaholic\Models\Tax;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\Tax
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
        $arElementIDList = (array) Tax::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/TaxListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\Tax\GetCustomList;

/**
 * Class TaxListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class TaxListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/tax/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/tax/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/tax/ExtendTaxModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Tax;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\Shopaholic\Models\Tax;
use Lovata\Shopaholic\Classes\Item\TaxItem;
use Lovata\BaseCode\Classes\Store\TaxListStore;

/**
 * Class ExtendTaxModel
 * @package Lovata\BaseCode\Classes\Event\Tax
 */
class ExtendTaxModel extends ModelHandler
{
    /** @var Tax */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        Tax::extend(function ($obTax) {
            /** @var Tax $obTax */
            $obTax->fillable[] = 'my_field';
            
            $obTax->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', TaxListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            TaxListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return Tax::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return TaxItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend TaxCollection class.

File: **plugins/lovata/basecode/classes/event/tax/ExtendTaxCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Tax;

use Lovata\BaseCode\Classes\Store\TaxListStore;
use Lovata\Shopaholic\Classes\Collection\TaxCollection;

/**
 * Class ExtendTaxCollection
 * @package Lovata\BaseCode\Classes\Event\Tax
 */
class ExtendTaxCollection
{
    public function subscribe()
    {
        TaxCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param TaxCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = TaxListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\Tax\ExtendTaxCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendTaxCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
[TaxList]
==

{% set obTaxList = TaxList.make().active().myCustomMethod() %}
{% if obTaxList.isNotEmpty() %}
    <ul>
        {% for obTax in obTaxList %}
            <li tax="{{ obTax.code }}">{{ obTax.symbol }}</li>
        {% endfor %}
    </ul>
{% endif %}
```

[Home](modules/tax/home.md)
• [Model](modules/tax/model/model.md)
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• Extending
• [Advanced usage](modules/tax/advanced-usage/home.md)

[Back to modules](modules/home.md)

[Back to modules](modules/home.md)

[Home](modules/brand/home.md)
• [Model](modules/brand/model/model.md)
• [Item](modules/brand/item/item.md)
• [Collection](modules/brand/collection/collection.md)
• [Components](modules/brand/component/component.md)
• [Events](modules/brand/event/event.md)
• [Examples](modules/brand/examples/examples.md)
• Extending
# Extending: Brand

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
If this plugin has already been created, then you should proceed to [step 2](modules/brand/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_brands_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableBrands1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableBrands1 extends Migration
{
    const TABLE_NAME = 'lovata_shopaholic_brands';
    
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
    - update_table_brands_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/brand/ExtendBrandFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Brand;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\Shopaholic\Models\Brand;
use Lovata\Shopaholic\Controllers\Brands;

/**
 * Class ExtendBrandFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\Brand
 */
class ExtendBrandFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend brands field
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
        return Brand::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return Brands::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Brand\ExtendBrandFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendBrandFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend Brand model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/brand/ExtendBrandModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Brand;

use Lovata\Shopaholic\Models\Brand;

/**
 * Class ExtendBrandModel
 * @package Lovata\BaseCode\Classes\Event\Brand
 */
class ExtendBrandModel
{
    public function subscribe()
    {
        Brand::extend(function ($obBrand) {
            /** @var Brand $obBrand */
            $obBrand->fillable[] = 'my_field';
            
            $obBrand->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\Brand\ExtendBrandFieldsHandler;
use Lovata\BaseCode\Classes\Event\Brand\ExtendBrandModel;

//...

public function boot()
{
    Event::subscribe(ExtendBrandFieldsHandler::class);
    Event::subscribe(ExtendBrandModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Render field in template  

```twig
[BrandPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get brand item #}
{% set obBrand = BrandPage.get() %}
{{ obBrand.my_field == true ? 'My field in enabled' : 'My field in disabled' }}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [BrandCollection](modules/brand/collection/collection.md) class.
In [section](modules/brand/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend BrandCollection class.

File: **plugins/lovata/basecode/classes/events/brand/ExtendBrandCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Brand;

use Lovata\Shopaholic\Models\Brand;
use Lovata\Shopaholic\Classes\Collection\BrandCollection;

/**
 * Class ExtendBrandCollection
 * @package Lovata\BaseCode\Classes\Event\Brand
 */
class ExtendBrandCollection
{
    public function subscribe()
    {
        BrandCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param BrandCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) Brand::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\Brand\ExtendBrandCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendBrandCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
[BrandList]
==

{% set obBrandList = BrandList.make().active().myCustomMethod() %}
{% if obBrandList.isNotEmpty() %}
    <ul>
        {% for obBrand in obBrandList %}
            <li>{% partial 'brand/brand-card/brand-card' obBrand=obBrand %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/brand/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\Brand;

use Lovata\Shopaholic\Models\Brand;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\Brand
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
        $arElementIDList = (array) Brand::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/BrandListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\Brand\GetCustomList;

/**
 * Class BrandListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class BrandListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/brand/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/brand/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/events/brand/ExtendBrandModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Brand;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\Shopaholic\Models\Brand;
use Lovata\Shopaholic\Classes\Item\BrandItem;
use Lovata\BaseCode\Classes\Store\BrandListStore;

/**
 * Class ExtendBrandModel
 * @package Lovata\BaseCode\Classes\Event\Brand
 */
class ExtendBrandModel extends ModelHandler
{
    /** @var Brand */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        Brand::extend(function ($obBrand) {
            /** @var Brand $obBrand */
            $obBrand->fillable[] = 'my_field';
            
            $obBrand->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', BrandListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            BrandListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return Brand::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return BrandItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend BrandCollection class.

File: **plugins/lovata/basecode/classes/events/brand/ExtendBrandCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Brand;

use Lovata\BaseCode\Classes\Store\BrandListStore;
use Lovata\Shopaholic\Classes\Collection\BrandCollection;

/**
 * Class ExtendBrandCollection
 * @package Lovata\BaseCode\Classes\Event\Brand
 */
class ExtendBrandCollection
{
    public function subscribe()
    {
        BrandCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param BrandCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = BrandListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\Brand\ExtendBrandCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendBrandCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
[BrandList]
==

{% set obBrandList = BrandList.make().active().myCustomMethod() %}
{% if obBrandList.isNotEmpty() %}
    <ul>
        {% for obBrand in obBrandList %}
            <li>{% partial 'brand/brand-card/brand-card' obBrand=obBrand %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

[Home](modules/brand/home.md)
• [Model](modules/brand/model/model.md)
• [Item](modules/brand/item/item.md)
• [Collection](modules/brand/collection/collection.md)
• [Components](modules/brand/component/component.md)
• [Events](modules/brand/event/event.md)
• [Examples](modules/brand/examples/examples.md)
• Extending

[Back to modules](modules/home.md)

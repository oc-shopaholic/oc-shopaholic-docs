# Extending: Product

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Add custom field

In this section, we will go through all required steps that you need to follow to add your custom field **"my_field"** to model and display it in template.

### Step 1: Create custom plugin

You need to create your custom plugin in which we will add all custom code in your project.
If this plugin has already been created, then you should proceed to [step 2](modules/product/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_products_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableProducts1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableProducts1 extends Migration
{
    const TABLE_NAME = 'lovata_shopaholic_products';
    
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
    - cupdate_table_products_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/product/ExtendProductFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Product;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\Shopaholic\Models\Product;
use Lovata\Shopaholic\Controllers\Products;

/**
 * Class ExtendProductFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\Product
 */
class ExtendProductFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend products field
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
        return Product::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return Products::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Product\ExtendProductFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendProductFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend Product model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/product/ExtendProductModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Product;

use Lovata\Shopaholic\Models\Product;

/**
 * Class ExtendProductModel
 * @package Lovata\BaseCode\Classes\Event\Product
 */
class ExtendProductModel
{
    public function subscribe()
    {
        Product::extend(function ($obProduct) {
            /** @var Product $obProduct */
            $obProduct->fillable[] = 'my_field';
            
            $obProduct->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\Product\ExtendProductFieldsHandler;
use Lovata\BaseCode\Classes\Event\Product\ExtendProductModel;

//...

public function boot()
{
    Event::subscribe(ExtendProductFieldsHandler::class);
    Event::subscribe(ExtendProductModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Render field in template  

```twig
[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get product item #}
{% set obProduct = ProductPage.get() %}
{{ obProduct.my_field == true ? 'My field in enabled' : 'My field in disabled' }}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [ProductCollection](modules/product/collection/collection.md) class.
In [section](modules/product/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend ProductCollection class.

File: **plugins/lovata/basecode/classes/events/product/ExtendProductCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Product;

use Lovata\Shopaholic\Models\Product;
use Lovata\Shopaholic\Classes\Collection\ProductCollection;

/**
 * Class ExtendProductCollection
 * @package Lovata\BaseCode\Classes\Event\Product
 */
class ExtendProductCollection
{
    public function subscribe()
    {
        ProductCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param ProductCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) Product::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\Product\ExtendProductCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendProductCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
{% set obProductList = ProductList.make().active().myCustomMethod() %}
{% if obProductList.isNotEmpty() %}
    <ul>
        {% for obProduct in obProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/product/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\Product;

use Lovata\Shopaholic\Models\Product;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\Product
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
        $arElementIDList = (array) Product::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/ProductListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\Product\GetCustomList;

/**
 * Class ProductListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class ProductListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/product/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/product/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/events/product/ExtendProductModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Product;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\Shopaholic\Models\Product;
use Lovata\Shopaholic\Classes\Item\ProductItem;
use Lovata\BaseCode\Classes\Store\ProductListStore;

/**
 * Class ExtendProductModel
 * @package Lovata\BaseCode\Classes\Event\Product
 */
class ExtendProductModel extends ModelHandler
{
    /** @var Product */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        Product::extend(function ($obProduct) {
            /** @var Product $obProduct */
            $obProduct->fillable[] = 'my_field';
            
            $obProduct->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', ProductListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            ProductListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return Product::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return ProductItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend ProductCollection class.

File: **plugins/lovata/basecode/classes/events/product/ExtendProductCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Product;

use Lovata\BaseCode\Classes\Store\ProductListStore;
use Lovata\Shopaholic\Classes\Collection\ProductCollection;

/**
 * Class ExtendProductCollection
 * @package Lovata\BaseCode\Classes\Event\Product
 */
class ExtendProductCollection
{
    public function subscribe()
    {
        ProductCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param ProductCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = ProductListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\Product\ExtendProductCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendProductCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
{% set obProductList = ProductList.make().active().myCustomMethod() %}
{% if obProductList.isNotEmpty() %}
    <ul>
        {% for obProduct in obProductList %}
            <li>{% partial 'product/product-card/product-card' obProduct=obProduct %}</li>
        {% endfor %}
    </ul>
{% endif %}
```
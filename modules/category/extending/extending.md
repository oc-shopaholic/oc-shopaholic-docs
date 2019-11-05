[Back to modules](modules/home.md)

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• [Components](modules/category/component/component.md)
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• Extending

# Extending: Category

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
If this plugin has already been created, then you should proceed to [step 2](modules/category/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_categories_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableCategories1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableCategories1 extends Migration
{
    const TABLE_NAME = 'lovata_shopaholic_categories';
    
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
    - update_table_categories_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/category/ExtendCategoryFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Category;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\Shopaholic\Models\Category;
use Lovata\Shopaholic\Controllers\Categories;

/**
 * Class ExtendCategoryFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\Category
 */
class ExtendCategoryFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend categories field
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
        return Category::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return Categories::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Category\ExtendCategoryFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendCategoryFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend Category model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/category/ExtendCategoryModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Category;

use Lovata\Shopaholic\Models\Category;

/**
 * Class ExtendCategoryModel
 * @package Lovata\BaseCode\Classes\Event\Category
 */
class ExtendCategoryModel
{
    public function subscribe()
    {
        Category::extend(function ($obCategory) {
            /** @var Category $obCategory */
            $obCategory->fillable[] = 'my_field';
            
            $obCategory->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\Category\ExtendCategoryFieldsHandler;
use Lovata\BaseCode\Classes\Event\Category\ExtendCategoryModel;

//...

public function boot()
{
    Event::subscribe(ExtendCategoryFieldsHandler::class);
    Event::subscribe(ExtendCategoryModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Render field in template  

```twig
[CategoryPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get category item #}
{% set obCategory = CategoryPage.get() %}
{{ obCategory.my_field == true ? 'My field in enabled' : 'My field in disabled' }}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [CategoryCollection](modules/category/collection/collection.md) class.
In [section](modules/category/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend CategoryCollection class.

File: **plugins/lovata/basecode/classes/event/category/ExtendCategoryCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Category;

use Lovata\Shopaholic\Models\Category;
use Lovata\Shopaholic\Classes\Collection\CategoryCollection;

/**
 * Class ExtendCategoryCollection
 * @package Lovata\BaseCode\Classes\Event\Category
 */
class ExtendCategoryCollection
{
    public function subscribe()
    {
        CategoryCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param CategoryCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) Category::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\Category\ExtendCategoryCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendCategoryCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
[CategoryList]
==

{% set obCategoryList = CategoryList.make().active().myCustomMethod() %}
{% if obCategoryList.isNotEmpty() %}
    <ul>
        {% for obCategory in obCategoryList %}
            <li>{% partial 'category/category-card/category-card' obCategory=obCategory %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/category/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\Category;

use Lovata\Shopaholic\Models\Category;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\Category
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
        $arElementIDList = (array) Category::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/CategoryListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\Category\GetCustomList;

/**
 * Class CategoryListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class CategoryListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/category/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/category/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/category/ExtendCategoryModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Category;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\Shopaholic\Models\Category;
use Lovata\Shopaholic\Classes\Item\CategoryItem;
use Lovata\BaseCode\Classes\Store\CategoryListStore;

/**
 * Class ExtendCategoryModel
 * @package Lovata\BaseCode\Classes\Event\Category
 */
class ExtendCategoryModel extends ModelHandler
{
    /** @var Category */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        Category::extend(function ($obCategory) {
            /** @var Category $obCategory */
            $obCategory->fillable[] = 'my_field';
            
            $obCategory->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', CategoryListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            CategoryListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return Category::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return CategoryItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend CategoryCollection class.

File: **plugins/lovata/basecode/classes/event/category/ExtendCategoryCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Category;

use Lovata\BaseCode\Classes\Store\CategoryListStore;
use Lovata\Shopaholic\Classes\Collection\CategoryCollection;

/**
 * Class ExtendCategoryCollection
 * @package Lovata\BaseCode\Classes\Event\Category
 */
class ExtendCategoryCollection
{
    public function subscribe()
    {
        CategoryCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param CategoryCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = CategoryListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\Category\ExtendCategoryCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendCategoryCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
[CategoryList]
==

{% set obCategoryList = CategoryList.make().active().myCustomMethod() %}
{% if obCategoryList.isNotEmpty() %}
    <ul>
        {% for obCategory in obCategoryList %}
            <li>{% partial 'category/category-card/category-card' obCategory=obCategory %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• [Components](modules/category/component/component.md)
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• Extending

[Back to modules](modules/home.md)

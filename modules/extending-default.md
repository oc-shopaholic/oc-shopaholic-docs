{% extends "docs/modules/layout.md" %}

{% block page_title %}Extending: {{ model.class }}{% endblock %}

{% block content %}
* [Add custom field](#add-custom-field)
  * [Step 1: Create custom plugin](#step-1-create-custom-plugin)
  * [Step 2: Create field in database](#step-2-create-field-in-database)
{% if module.get('controller.class') is not empty %}
  * [Step 3: Add field in backend](#step-3-add-field-in-backend)
  * [Step 4: Add field to cache](#step-4-add-field-to-cache)
  * [Step 5: Render field](#step-5-render-field)
{% else %}
  * [Step 3: Add field to cache](#step-3-add-field-to-cache)
  * [Step 4: Render field in template](#step-4-render-field-in-template)
{% endif %}
* [Add custom filter](#add-custom-filter)
  * [Step 1: Add custom method to collection](#step-1-add-custom-method-to-collection)
  * [Step 2: Get collection object with custom filter](#step-2-get-collection-object-with-custom-filter)
* [Add custom filter with caching](#add-custom-filter-with-caching)
  * [Step 1: Create custom store](#step-1-create-custom-store)
  * [Step 2: Adding cache flush](#step-2-adding-cache-flush)
  * [Step 3: Add custom method to collection](#step-3-add-custom-method-to-collection)
  * [Step 4: Get collection object with custom filter](#step-4-get-collection-object-with-custom-filter)

## Add custom field

In this section, we will go through all required steps that you need to follow to add your custom field **"my_field"** to {{ model.link() }} model and display it in template with using {{ item.link() }} class.

### Step 1: Create custom plugin

You need to create your custom plugin in which we will add all custom code in your project.
If this plugin has already been created, then you should proceed to [step 2](#step-2-create-field-in-database).

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

### Step 2: Create custon field in database

1. Create migration file to add custom field to database.

> You can find more information about [migrations](https://octobercms.com/docs/database/structure) in OctoberCMS documentation.

File: **plugins/lovata/basecode/updates/update_table_{{ module.name_many|lower }}_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTable{{ module.name_many }}1
 * @package Lovata\BaseCode\Updates
 */
class UpdateTable{{ module.name_many }}1 extends Migration
{
    const TABLE_NAME = '{{ model.table }}';
    
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
    - update_table_{{ module.name_many|lower }}_1.php
```

3. Run ```php artisan october:up``` command.
{% if module.get('controller.class') is not empty %}

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/{{ module.name|lower }}/Extend{{ module.name }}FieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\{{ module.name }};

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use {{ model.namespace }};
use {{ module.get('controller.namespace') }};

/**
 * Class Extend{{ module.name }}FieldsHandler
 * @package Lovata\BaseCode\Classes\Event\{{ module.name }}
 */
class Extend{{ module.name }}FieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend field
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
        return {{ model.class }}::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return {{ module.get('controller.class') }}::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\{{ module.name }}\Extend{{ module.name }}FieldsHandler;

//...

public function boot()
{
    Event::subscribe(Extend{{ module.name }}FieldsHandler::class);
}
```
{% endif %}
{% if module.get('controller.class') is not empty %}

### Step 4: Add field to cache
{% else %}

### Step 3: Add field to cache
{% endif %}

1. Create event class to extend {{ model.class }} model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/event/{{ module.name|lower }}/Extend{{ module.name }}Model.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\{{ module.name }};

use {{ model.namespace }};

/**
 * Class Extend{{ module.name }}Model
 * @package Lovata\BaseCode\Classes\Event\{{ module.name }}
 */
class Extend{{ module.name }}Model
{
    public function subscribe()
    {
        {{ model.class }}::extend(function ($ob{{ model.class }}) {
            /** @var {{ model.class }} $ob{{ model.class }} */
            $ob{{ model.class }}->fillable[] = 'my_field';
            
            $ob{{ model.class }}->addCachedField(['my_field']);
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
{% if module.get('controller.class') is not empty %}
use Lovata\BaseCode\Classes\Event\{{ module.name }}\Extend{{ module.name }}FieldsHandler;
{% endif %}
use Lovata\BaseCode\Classes\Event\{{ module.name }}\Extend{{ module.name }}Model;

//...

public function boot()
{
{% if module.get('controller.class') is not empty %}
    Event::subscribe(Extend{{ module.name }}FieldsHandler::class);
{% endif %}
    Event::subscribe(Extend{{ module.name }}Model::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

{% if module.get('controller.class') is not empty %}
### Step 5: Render field
{% else %}
### Step 4: Render field
{% endif %}

```php
use {{ item.namespace }};

//Get item object with ID = 1
$ob{{ item.class }} = {{ item.class }}::make(1);
if ($ob{{ item.class }}->my_field) {
    echo 'My field == true';
} else {
  echo 'My field == false';
}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to {{ collection.link() }} class.
In [section](#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend {{ collection.link() }} class.

File: **plugins/lovata/basecode/classes/event/{{ module.name|lower }}/Extend{{ module.name }}Collection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\{{ module.name }};

use {{ model.namespace }};
use {{ collection.namespace }};

/**
 * Class Extend{{ module.name }}Collection
 * @package Lovata\BaseCode\Classes\Event\{{ module.name }}
 */
class Extend{{ module.name }}Collection
{
    public function subscribe()
    {
        {{ collection.class }}::extend(function ($ob{{ model.class }}List) {
            $this->addCustomMethod($ob{{ model.class }}List);
        });
    }

    /**
     * Add myCustomMethod method
     * @param {{ collection.class }} $ob{{ model.class }}List
     */
    protected function addCustomMethod($ob{{ model.class }}List)
    {
        $ob{{ model.class }}List->addDynamicMethod('myCustomMethod', function () use ($ob{{ model.class }}List) {
            
            $arResultIDList = (array) {{ model.class }}::where('my_field', true)->lists('id');

            return $ob{{ model.class }}List->intersect($arResultIDList);
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
use Lovata\BaseCode\Classes\Event\{{ module.name }}\Extend{{ module.name }}Collection;
//...

public function boot()
{
    //...
    Event::subscribe(Extend{{ module.name }}Collection::class);
}
```

### Step 2: Get collection object with custom filter

```php
use {{ collection.namespace }};

$ob{{ model.class }}List = {{ collection.class }}::make()->myCustomMethod();
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/{{ module.name|lower }}/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\{{ module.name }};

use {{ model.namespace }};
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\{{ module.name }}
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
        $arElementIDList = (array) {{ model.class }}::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/{{ module.name }}ListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\{{ module.name }}\GetCustomList;

/**
 * Class {{ module.name }}ListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class {{ module.name }}ListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](#add-custom-field) section on ["Step 4: Add field to cache"](#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/event/{{ module.name|lower }}/Extend{{ module.name }}Model.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\{{ module.name }};

use Lovata\Toolbox\Classes\Event\ModelHandler;

use {{ model.namespace }};
use {{ item.namespace }};
use Lovata\BaseCode\Classes\Store\{{ module.name }}ListStore;

/**
 * Class Extend{{ module.name }}Model
 * @package Lovata\BaseCode\Classes\Event\{{ module.name }}
 */
class Extend{{ module.name }}Model extends ModelHandler
{
    /** @var {{ model.class }} */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        {{ model.class }}::extend(function ($ob{{ model.class }}) {
            /** @var {{ model.class }} $ob{{ model.class }} */
            $ob{{ model.class }}->fillable[] = 'my_field';
            
            $ob{{ model.class }}->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', {{ module.name }}ListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            {{ module.name }}ListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return {{ model.class }}::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return {{ item.class }}::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend {{ module.name }}Collection class.

File: **plugins/lovata/basecode/classes/event/{{ module.name|lower }}/Extend{{ module.name }}Collection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\{{ module.name }};

use Lovata\BaseCode\Classes\Store\{{ module.name }}ListStore;
use {{ collection.namespace }};

/**
 * Class Extend{{ module.name }}Collection
 * @package Lovata\BaseCode\Classes\Event\{{ module.name }}
 */
class Extend{{ module.name }}Collection
{
    public function subscribe()
    {
        {{ collection.class }}::extend(function ($ob{{ model.class }}List) {
            $this->addCustomMethod($ob{{ model.class }}List);
        });
    }

    /**
     * Add myCustomMethod method
     * @param {{ collection.class }} $ob{{ model.class }}List
     */
    protected function addCustomMethod($ob{{ model.class }}List)
    {
        $ob{{ model.class }}List->addDynamicMethod('myCustomMethod', function () use ($ob{{ model.class }}List) {
            
            $arResultIDList = {{ module.name }}ListStore::instance()->my_custom->get();

            return $ob{{ model.class }}List->intersect($arResultIDList);
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
use Lovata\BaseCode\Classes\Event\{{ module.name }}\Extend{{ module.name }}Collection;
//...

public function boot()
{
    //...
    Event::subscribe(Extend{{ module.name }}Collection::class);
}
```

### Step 4: Get collection object with custom filter

```php
use {{ collection.namespace }};

$ob{{ model.class }}List = {{ collection.class }}::make()->myCustomMethod();
  ```

{% endblock %}

# Extending: Offer

[Back to modules](modules/home.md)

!> **Attention!** We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Add custom field

In this section, we will go through all required steps that you need to follow to add your custom field **"my_field"** to model and display it in template.

### Step 1: Create custom plugin

You need to create your custom plugin in which we will add all custom code in your project.
If this plugin has already been created, then you should proceed to [step 2](modules/offer/extending/extending.md#step-2-create-field-in-database).

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

File: **plugins/lovata/basecode/updates/update_table_offers_1.php**

```php
<?php namespace Lovata\BaseCode\Updates;

use Schema;
use Illuminate\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * Class UpdateTableOffers1
 * @package Lovata\Shopaholic\Updates
 */
class UpdateTableOffers1 extends Migration
{
    const TABLE_NAME = 'lovata_shopaholic_offers';
    
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
    - cupdate_table_offers_1.php
```

3. Run ```php artisan october:up``` command.

### Step 3: Add field in backend

1. Create event class to add custom field in backend form.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/offer/ExtendOfferFieldsHandler.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Offer;

use Lovata\Toolbox\Classes\Event\AbstractBackendFieldHandler;

use Lovata\Shopaholic\Models\Offer;
use Lovata\Shopaholic\Controllers\Offers;

/**
 * Class ExtendOfferFieldsHandler
 * @package Lovata\BaseCode\Classes\Event\Offer
 */
class ExtendOfferFieldsHandler extends AbstractBackendFieldHandler
{
    /**
     * Extend offers field
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
        return Offer::class;
    }

    /**
     * Get controller class name
     * @return string
     */
    protected function getControllerClass() : string
    {
        return Offers::class;
    }
}
```

2. Add event listener in Plugin.php file.

File: **plugins/lovata/basecode/Plugin.php** 
```php
<?php namespace Lovata\BaseCode;

use Event;
use System\Classes\PluginBase;
use Lovata\BaseCode\Classes\Event\Offer\ExtendOfferFieldsHandler;

//...

public function boot()
{
    Event::subscribe(ExtendOfferFieldsHandler::class);
}
```

### Step 4: Add field to cache

1. Create event class to extend Offer model.

> You can find more information about [extending plugins](https://octobercms.com/docs/plugin/extending) in OctoberCMS documentation.

File: **plugins/lovata/basecode/classes/events/offer/ExtendOfferModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Offer;

use Lovata\Shopaholic\Models\Offer;

/**
 * Class ExtendOfferModel
 * @package Lovata\BaseCode\Classes\Event\Offer
 */
class ExtendOfferModel
{
    public function subscribe()
    {
        Offer::extend(function ($obOffer) {
            /** @var Offer $obOffer */
            $obOffer->fillable[] = 'my_field';
            
            $obOffer->addCachedField(['my_field']);
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
use Lovata\BaseCode\Classes\Event\Offer\ExtendOfferFieldsHandler;
use Lovata\BaseCode\Classes\Event\Offer\ExtendOfferModel;

//...

public function boot()
{
    Event::subscribe(ExtendOfferFieldsHandler::class);
    Event::subscribe(ExtendOfferModel::class);
}
```

3. Clear cache with using ```php artisan cache:clear``` command. 

### Step 5: Render field in template  

```twig
[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get offer item #}
{% set obProduct = ProductPage.get() %}
{% set obOffer = obProduct.offer.first() %}

{{ obOffer.my_field == true ? 'My field in enabled' : 'My field in disabled' }}
```

## Add custom filter

In this section, we will go through all required steps that you need to follow to add your custom filter by field **"my_field"** to [OfferCollection](modules/offer/collection/collection.md) class.
In [section](modules/offer/extending/extending.md#add-custom-field) you can find information about adding custom field **"my_field"** to model.

### Step 1: Add custom method to collection

1. Create event class to extend OfferCollection class.

File: **plugins/lovata/basecode/classes/events/offer/ExtendOfferCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Offer;

use Lovata\Shopaholic\Models\Offer;
use Lovata\Shopaholic\Classes\Collection\OfferCollection;

/**
 * Class ExtendOfferCollection
 * @package Lovata\BaseCode\Classes\Event\Offer
 */
class ExtendOfferCollection
{
    public function subscribe()
    {
        OfferCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param OfferCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = (array) Offer::where('my_field', true)->lists('id');

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
use Lovata\BaseCode\Classes\Event\Offer\ExtendOfferCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendOfferCollection::class);
}
```

### Step 2: Render list with custom filter

```twig
[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get offer item #}
{% set obProduct = ProductPage.get() %}
{% set obOfferList = obProduct.offer.myCustomMethod() %}

{% if obOfferList.isNotEmpty() %}
    <select>
        {% for obOffer in obOfferList %}
            <option value="{{ obOffer.id }}">{{ obOffer.name }}</option>
        {% endfor %}
    </select>
{% endif %}
```

## Add custom filter with caching

### Step 1: Create custom store

1. Create store class.

File: **plugins/lovata/basecode/classes/store/offer/GetCustomList.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store\Offer;

use Lovata\Shopaholic\Models\Offer;
use Lovata\Toolbox\Classes\Store\AbstractStoreWithoutParam;

/**
 * Class GetCustomList
 * @package Lovata\BaseCode\Classes\Store\Offer
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
        $arElementIDList = (array) Offer::where('my_field', true)->lists('id');

        return $arElementIDList;
    }
}
```

File: **plugins/lovata/basecode/classes/store/OfferListStore.php**
```php
<?php namespace Lovata\BaseCode\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\BaseCode\Classes\Store\Offer\GetCustomList;

/**
 * Class OfferListStore
 * @package Lovata\BaseCode\Classes\Store
 * @property GetCustomList $my_custom
 */
class OfferListStore extends AbstractListStore
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

1. Modify event that we added in ["Add custom field"](modules/offer/extending/extending.md#add-custom-field) section on ["Step 4: Add field to cache"](modules/offer/extending/extending.md#step-4-add-field-to-cache) step.

File: **plugins/lovata/basecode/classes/events/offer/ExtendOfferModel.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Offer;

use Lovata\Toolbox\Classes\Event\ModelHandler;

use Lovata\Shopaholic\Models\Offer;
use Lovata\Shopaholic\Classes\Item\OfferItem;
use Lovata\BaseCode\Classes\Store\OfferListStore;

/**
 * Class ExtendOfferModel
 * @package Lovata\BaseCode\Classes\Event\Offer
 */
class ExtendOfferModel extends ModelHandler
{
    /** @var Offer */
     protected $obElement;
 
     /**
      * @param $obEvent
      */
     public function subscribe($obEvent)
     {
        parent::subscribe($obEvent);

        Offer::extend(function ($obOffer) {
            /** @var Offer $obOffer */
            $obOffer->fillable[] = 'my_field';
            
            $obOffer->addCachedField(['my_field']);
        });
    }

    /**
     * After save event handler
     */
    protected function afterSave()
    {
        $this->checkFieldChanges('my_field', OfferListStore::instance()->my_custom);
    }

    /**
     * After delete event handler
     */
    protected function afterDelete()
    {
        if ($this->obElement->my_field) {
            OfferListStore::instance()->my_custom->clear();
        }
    }

    /**
     * Get model class
     * @return string
     */
    protected function getModelClass()
    {
        return Offer::class;
    }

    /**
     * Get item class
     * @return string
     */
    protected function getItemClass()
    {
        return OfferItem::class;
    }
}
```

### Step 3: Add custom method to collection

1. Create event class to extend OfferCollection class.

File: **plugins/lovata/basecode/classes/events/offer/ExtendOfferCollection.php**
```php
<?php namespace Lovata\BaseCode\Classes\Event\Offer;

use Lovata\BaseCode\Classes\Store\OfferListStore;
use Lovata\Shopaholic\Classes\Collection\OfferCollection;

/**
 * Class ExtendOfferCollection
 * @package Lovata\BaseCode\Classes\Event\Offer
 */
class ExtendOfferCollection
{
    public function subscribe()
    {
        OfferCollection::extend(function ($obCollection) {
            $this->addCustomMethod($obCollection);
        });
    }

    /**
     * Add myCustomMethod method
     * @param OfferCollection $obCollection
     */
    protected function addCustomMethod($obCollection)
    {
        $obCollection->addDynamicMethod('myCustomMethod', function () use ($obCollection) {
            
            $arResultIDList = OfferListStore::instance()->my_custom->get();

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
use Lovata\BaseCode\Classes\Event\Offer\ExtendOfferCollection;
//...

public function boot()
{
    //...
    Event::subscribe(ExtendOfferCollection::class);
}
```

### Step 4: Render list with custom filter

```twig
[ProductPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get offer item #}
{% set obProduct = ProductPage.get() %}
{% set obOfferList = obProduct.offer.myCustomMethod() %}

{% if obOfferList.isNotEmpty() %}
    <select>
        {% for obOffer in obOfferList %}
            <option value="{{ obOffer.id }}">{{ obOffer.name }}</option>
        {% endfor %}
    </select>
{% endif %}
```

[Back to modules](modules/home.md)
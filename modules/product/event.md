{% extends 'docs/modules/event-default.md' %}

{% block content %}
* [model.afterImport](#modelafterimport)
* [model.beforeImport](#modelbeforeimport)
* [shopaholic.product.extend_xml_import_data](#shopaholicproductextend_xml_import_data)
* [shopaholic.product.extend_xml_import_fields](#shopaholicproductextend_xml_import_fields)
* [shopaholic.promo_block.get.product.list](#shopaholicpromo_blockgetproductlist)
* [shopaholic.sorting.get.list](#shopaholicsortinggetlist)

## model.afterImport

Event allows you to process import data, after saving model object

```php
$obEvent->listen(ImportProductModelFromCSV::EVENT_AFTER_IMPORT, function ($obModel, $arImportData) {
    if (!$obModel instanceof Product::class) {
        return;
    }

    //to do something 
}, 900);
```

## model.beforeImport

Event allows you to change import data, before saving model object

```php
$obEvent->listen(ImportProductModelFromCSV::EVENT_BEFORE_IMPORT, function ($sModelClass, $arImportData) {
    if ($sModelClass != Product::class) {
        return null;
    }

    $arImportData['my_field'] = array_get($arImportData, 'my_field') == 'yes' ? true : false;

    return $arImportData;
}, 900);
```

## shopaholic.product.extend_xml_import_data

Event allows you to extend processing of XML node and change import data

```php
Event::listen(ImportProductModelFromXML::EXTEND_IMPORT_DATA, function($arImportData, $obParseNode) {
    //Get custom field from node
    $sValue = $obParseNode->...;

    //Process custom field value
    $arImportData['my_field'] = $sValue == 'yes' ? true : false;
    
    return $arImportData;
});
```

## shopaholic.product.extend_xml_import_fields

Event allows you to extend list of fields that are available for configuring import from XML.

![](./../../../assets/images/backend-product-4.png ':class=medium-image') 

```php
Event::listen(ImportProductModelFromXML::EXTEND_FIELD_LIST, function($arFieldList) {
    $arFieldList['my_field'] = 'My field label';
    
    return $arFieldList;
});
```


## **shopaholic.promo_block.get.product.list**

The event allows you to extend list of products for promo block

For example:
```php
Event::listen(\Lovata\Shopaholic\Models\PromoBlock::EVENT_GET_PRODUCT_LIST, function($obPromoBlock) {
    /** @var \Lovata\Shopaholic\Models\PromoBlock $obPromoBlock */
    //to get produt ID list with using $obPromoBlock object
    $arProductIDList = ...
    
    return $arProductIDList;
});
```

## **shopaholic.sorting.get.list**

Event allows you to quickly add custom sorting for list of products ({{ get_collection('product').link() }} class, sort() method)

For example:
```php
Event::listen('shopaholic.sorting.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with product ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

!> You need to add cache clearing for your custom sorting

```php
\Lovata\Shopaholic\Classes\Store\ProductListStore::instance()->sorting->clear('my_custom_sorting');
```
{% endblock %}

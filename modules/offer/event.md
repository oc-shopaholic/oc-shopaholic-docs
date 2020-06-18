{% extends 'docs/modules/event-default.md' %}

{% block content %}
* [model.afterImport](#modelafterimport)
* [model.beforeImport](#modelbeforeimport)
* [shopaholic.offer.extend_xml_import_data](#shopaholicofferextend_xml_import_data)
* [shopaholic.offer.extend_xml_import_fields](#shopaholicofferextend_xml_import_fields)
* [shopaholic.price.extend_xml_import_data](#shopaholicpriceextend_xml_import_data)
* [shopaholic.price.extend_xml_import_fields](#shopaholicpriceextend_xml_import_fields)
* [shopaholic.sorting.offer.get.list](#shopaholicsortingoffergetlist)

## model.afterImport

Event allows you to process import data, after saving model object

```php
$obEvent->listen(ImportOfferModelFromCSV::EVENT_AFTER_IMPORT, function ($obModel, $arImportData) {
    if (!$obModel instanceof Offer::class) {
        return;
    }

    //to do something 
}, 900);
```

## model.beforeImport

Event allows you to change import data, before saving model object

```php
$obEvent->listen(ImportOfferModelFromCSV::EVENT_BEFORE_IMPORT, function ($sModelClass, $arImportData) {
    if ($sModelClass != Offer::class) {
        return null;
    }

    $arImportData['my_field'] = array_get($arImportData, 'my_field') == 'yes' ? true : false;

    return $arImportData;
}, 900);
```

## shopaholic.offer.extend_xml_import_data

Event allows you to extend processing of XML node and change import data

```php
Event::listen(ImportOfferModelFromXML::EXTEND_IMPORT_DATA, function($arImportData, $obParseNode) {
    //Get custom field from node
    $sValue = $obParseNode->...;

    //Process custom field value
    $arImportData['my_field'] = $sValue == 'yes' ? true : false;
    
    return $arImportData;
});
```

## shopaholic.offer.extend_xml_import_fields

Event allows you to extend list of fields that are available for configuring import from XML.

![](./../../../assets/images/backend-offer-3.png ':class=medium-image') 

```php
Event::listen(ImportOfferModelFromXML::EXTEND_FIELD_LIST, function($arFieldList) {
    $arFieldList['my_field'] = 'My field label';
    
    return $arFieldList;
});
```

## shopaholic.price.extend_xml_import_data

Event allows you to extend processing of XML node and change import data

```php
Event::listen(ImportOfferPriceFromXML::EXTEND_IMPORT_DATA, function($arImportData, $obParseNode) {
    //Get custom field from node
    $sValue = $obParseNode->...;

    //Process custom field value
    $arImportData['my_field'] = $sValue == 'yes' ? true : false;
    
    return $arImportData;
});
```

## shopaholic.price.extend_xml_import_fields

Event allows you to extend list of fields that are available for configuring import from XML.

![](./../../../assets/images/backend-offer-4.png ':class=medium-image') 

```php
Event::listen(ImportOfferPriceFromXML::EXTEND_FIELD_LIST, function($arFieldList) {
    $arFieldList['my_field'] = 'My field label';
    
    return $arFieldList;
});
```


## **shopaholic.sorting.offer.get.list**

Event allows you to quickly add custom sorting for list of offers ({{ collection.link() }} class, sort() method)

For example:
```php
Event::listen('shopaholic.sorting.offer.get.list', function($sSorting) {
    if ($sSorting != 'my_custom_sorting') {
        return null;
    }
    
    //Get array with offer ID list for your custom sorting
    $arElementIDList = ...;
    
    return $arElementIDList;
});
```

!> You need to add cache clearing for your custom sorting
```php
\Lovata\Shopaholic\Classes\Store\OfferListStore::instance()->sorting->clear('my_custom_sorting');
```
{% endblock %}

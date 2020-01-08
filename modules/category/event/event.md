[Back to modules](modules/home.md)

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• [Components](modules/category/component/component.md)
• Events
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

# Event list: Category {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [model.afterImport](#modelafterimport)
* [model.beforeImport](#modelbeforeimport)
* [shopaholic.category.extend_xml_import_data](#shopaholiccategoryextend_xml_import_data)
* [shopaholic.category.extend_xml_import_fields](#shopaholiccategoryextend_xml_import_fields)
* [shopaholic.category.open](#shopaholiccategoryopen)

## model.afterImport

Event allows you to process import data, after saving model object

```php
$obEvent->listen(ImportCategoryModelFromCSV::EVENT_AFTER_IMPORT, function ($obModel, $arImportData) {
    if (!$obModel instanceof Category::class) {
        return;
    }

    //to do something 
}, 900);
```

## model.beforeImport

Event allows you to change import data, before saving model object

```php
$obEvent->listen(ImportCategoryModelFromCSV::EVENT_BEFORE_IMPORT, function ($sModelClass, $arImportData) {
    if ($sModelClass != Category::class) {
        return null;
    }

    $arImportData['my_field'] = array_get($arImportData, 'my_field') == 'yes' ? true : false;

    return $arImportData;
}, 900);
```

## shopaholic.category.extend_xml_import_data

Event allows you to extend processing of XML node and change import data

```php
Event::listen(ImportCategoryModelFromXML::EXTEND_IMPORT_DATA, function($arImportData, $obParseNode) {
    //Get custom field from node
    $sValue = $obParseNode->...;

    //Process custom field value
    $arImportData['my_field'] = $sValue == 'yes' ? true : false;
    
    return $arImportData;
});
```

## shopaholic.category.extend_xml_import_fields

Event allows you to extend list of fields that are available for configuring import from XML.

![](./../../../assets/images/backend-category-7.png) 

```php
Event::listen(ImportCategoryModelFromXML::EXTEND_FIELD_LIST, function($arFieldList) {
    $arFieldList['my_field'] = 'My field label';
    
    return $arFieldList;
});
```

## **shopaholic.category.open**

Event is triggered when you open category page.
```php
Event::listen('shopaholic.category.open', function($obCategory) {
    /** @var \Lovata\Shopaholic\Models\Category $obCategory */
    //to do something
});
```

[Home](modules/category/home.md)
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• [Components](modules/category/component/component.md)
• Events
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

[Back to modules](modules/home.md)

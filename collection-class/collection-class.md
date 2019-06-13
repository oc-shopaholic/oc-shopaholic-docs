# ElementCollection class {docsify-ignore-all}

Class allow you flexible tool for working with cached lists of elements.

ElementCollection class
and [Collection](https://octobercms.com/docs/services/collections) class from laravel framework have some methods,
but logic that they perform within them is different.

!> **Attention!**  The opinion that ElementCollection class
and [Collection](https://octobercms.com/docs/services/collections) class
from laravel framework are same is wrong.

Object of ElementCollection class processes arrays of element IDs without getting full data of elements.
Object creates [ElementItem](item-class/item-class.md#elementitem-classes) objects only in methods of getting lists of items
(For example: [take](collection-class/collection-class.md#takeicount-0), [page](collection-class/collection-class.md#pageipage-ielementonpage-10), [random](collection-class/collection-class.md#randomicount), [first](collection-class/collection-class.md#first) and etc.).

Methods of ElementCollection class uses [Store classes](store-class/store-class.md) to get cached lists in element IDs.

## Logical diagram

Logical diagram of initialization of new ProductCollection object and getting first 2 active products, sorted by newness.

```plantuml
@startuml
start
:**$obProductList = ProductCollection::make();**|
:Initializing collection object with empty product IDs;
:**$obProductList->active();**|
:Get cached list of active product IDs\nfrom ProductListStore class;
note right
    For examle:
    Active product list is
    **[1,4,10]**
end note
:Find intersection of product IDs from currenct collection object\nand product IDs from ProductListStore class;
:Collection object contains product IDs - **[1,4,10]**;
:**$obProductList->sort('new');**|
:Get cached list of sorted product IDs\n from ProductListStore class;
note right
    For examle:
    Active product list is
    **[10,9,4,3,1]**
end note
:Find intersection of product IDs from ProductListStore class\nand product IDs from currenct collection object;
:Collection object contains product IDs - **[10,4,1]**;
:**$obProductList->take(2);**|
:Getting first 2 IDs from array - **[10,4]**;
:Get ProductItem objects with IDs 10 and 4;
:Result array with ProductItem objects;
stop
@enduml
```

## Extending

You can add dynamic methods and properties in collection class with using [extending constructors](http://octobercms.com/docs/services/behaviors#constructor-extension).
It is default function of OctoberCMS.

**Example**
```php
ElementCollection::extend(function($obCollection) {
    $obCollection->addDynamicMethod('my_method', function($arElementIDList) use ($obCollection) {
        return $obCollection->diff($arElementIDList);
    });
});
```

## Method List:
### make(_[$arElementIDList = []]_)
  * arElementIDList - array with element IDs

Static method. Used to create new object of  ElementCollection class.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
```

### all()

Method returns array of objects [ElementItem](item-class/item-class.md#elementitem-classes) with all elements of collection.

### applySorting($arElementIDList)
 * $arElementIDList - list of element IDs for intersection

Method applies  **array_intersect()** function to  array of element IDs $arElementIDList and  collection.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);

$arElementIDList = [10, 2,14,18];
//result: [10, 2]
$obList->applySorting($arElementIDList);
```

### clear()

Method clears  collection.

### copy()

Method clones  collection object and returns new collection object.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
$obNewList = $obList->copy();
```

### count()

Method returns count of elements in collection.

### debug()

Method allows to set break point while using xDebug in case of calling collection methods in Twig templates.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
$obList->skip(2)->debug()->take(2);
```

### diff($arElementIDList)
 * $arElementIDList - list of element IDs

Method applies **array_diff()** function to collection and array of element IDs $arElementIDList.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);

$arElementIDList = [2,14,18];
//result: [1,10,15]
$obList->diff($arElementIDList);
```

### exclude($iElementID)
  * $iElementID - element ID

Method excludes element with ID = $iElementID from collection.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
//result: [1,10,15]
$obList->exclude(2);
```

### find($iElementID)
  * iElementID - element ID

Method returns object ElementItem with ID = $iElementID.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
//result: object of ElementItem class with ID = 10
return $obList->find(10);
```

### first()

Method returns first ElementItem object in collection.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
//result: object of ElementItem class with ID = 1
return $obList->first();
```

### getIDList()

Method returns array of element IDs.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
//result: [1, 2, 10, 15]
return $obList->getIDList();
```

### getNearestNext($iElementID, $iCount = 1, $bCyclic = false)

Method returns new collection with next nearest elements.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);

//Collection has elements: 10
$obNewList = $obList->getNearestNext(2);

//Collection has elements: 2,10,15
$obNewList = $obList->getNearestNext(1, 3);

//Collection has elements: 10,15
$obNewList = $obList->getNearestNext(2, 3);

//Collection has elements: 10,15,1
$obNewList = $obList->getNearestNext(2, 3, true);
```

### getNearestPrev($iElementID, $iCount = 1, $bCyclic = false)

Method returns new collection with previous nearest elements.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);

//Collection has elements: 1
$obNewList = $obList->getNearestPrev(2);

//Collection has elements: 10,2,1
$obNewList = $obList->getNearestPrev(15, 3);

//Collection has elements: 2,1
$obNewList = $obList->getNearestPrev(10, 3);

//Collection has elements: 2,1,15
$obNewList = $obList->getNearestPrev(10, 3, true);
```

### has($iElementID)
  * iElementID - element ID

Method returns true, if collection contains element with ID = $iElementID.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
if($obList->has(10)) {
    //to do something
}
```

### implode($sFieldName, $sDelimiter = ', ')

Method returns array of values for given field name and applies **implode** function to array.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->implode('name', '-');
```

### intersect($arElementIDList)
 * $arElementIDList - list of element IDs for intersection

Method applies **array_intersect()** function to collection and array of element IDs $arElementIDList.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);

$arElementIDList = [10, 2,14,18];
//result: [2,10]
$obList->intersect($arElementIDList);
```

### isEmpty()

Method returns true, if element list **is empty**.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
if($obList->isEmpty()) {
    return false;
}
```

### isNotEmpty()

Method returns true, if element list **isn't empty**.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
if($obList->isNotEmpty()) {
    //to do something
}
```

### last()

Method returns last ElementItem object in collection.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
//result: object of ElementItem class with ID = 15
return $obList->last();
```

### merge($arElementIDList)
 * $arElementIDList - list of element IDs to merge

Method applies **array_merge()** function to collection and array of element IDs $arElementIDList.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);

$arElementIDList = [2,14,18];
//result: [1,2,10,15,14,18]
$obList->merge($arElementIDList);
```

### page($iPage, $iElementOnPage = 10)
  * $iPage - current page number
  * $iElementOnPage - count of elements on page

Method returns array of ElementItem objects for page with number = $iPage.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->page(2, 10);
```

### pluck($sFieldName)

Method returns array of values for given field name.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->pluck('name');
```

### pop()

Method returns first ElementItem object in collection and excludes it from collection.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->pop();
```

### push($iElementID)

Method adds element to end of collection
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
$obList->push(4);
```

### random($iCount)
  * $iCount - count of elements generated

Method returns array of random ElementItem objects.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->random(2);
```

### save($sKey)/saved($sKey)
  * $sKey - collection state key to save

Method saves state of collection for it to be obtained later.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
$obList->save('my_key');

...

$obSavedList = ElementCollection::make()->saved('my_key');

//result: $obSavedList == clone $obList
```

### set($arElementIDList)
  * arElementIDList - array of element ID

Method allow to set list of element IDs in collection
```php
$obList = ElementCollection::make()->set([1,2]);
```

### skip($iCount)
  * $iCount - count of elements to skip 

Method is used in combination with take() method to specify count of elements needed to be skipped.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->skip(2)->take(1);
```

### take($iCount = 0)
  * $iCount - count of elements to be get

Method returns array of ElementItem objects. Count of elements = $iCount, starting from position specified in skip() method.
If you send $iCount = 0, you will obtain all elements, starting from position specified in skip() method.
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->skip(2)->take(1);
```

### shift()

Method returns first ElementItem object in collection and excludes it from collection
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
return $obList->shift();
```

### unshift($iElementID)

Method adds element to beginning of collection
```php
$obList = ElementCollection::make([1, 2, 10, 15]);
$obList->unshift(4);
```
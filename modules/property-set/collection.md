{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [code](#codearcodelist)
* [isGlobal](#isglobal)
* [getOfferPropertyList](#getofferpropertylist)
* [getProductPropertyList](#getproductpropertylist)
* [sort](#sort)

### code($arCodeList)
* $arCodeList - array with codes of property sets

Method applies filter by "code" field.

### isGlobal()

Method applies filter by "is_global" field.

### getOfferPropertyList()

Method returns array with data of properties of offers.

### getProductPropertyList()

Method returns array with data of properties of products. 

### sort()

Method sorts elements of collection by "sort_order" field. You can change sorting of property sets by going to **Backend -> Settings-> Property sets -> Reorder records**

![](./../../../assets/images/backend-property-set-2.png)

{% endblock %}
{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Property" module allows you to render product and offer properties in different parts of the product page or product card.
You can use {{ get_module('property-group').link('property groups') }} to display properties in different parts of the product page.

You should follow steps to display properties of products/offers in the backend:
1. Create unit measure
2. Create properties
3. Create {{ get_module('property-group').link('property groups') }}
4. Create {{ get_module('property-set').link('property sets') }}
5. Attach properties to {{ get_module('property-set').link('property sets') }}
6. Enable {{ get_module('property-set').link('"property set"') }} how "global" or attach {{ get_module('property-set').link('"property set"') }} to {{ get_module('category').link('category') }}

![](./../../assets/images/fronend-property-group-2.png ':class=medium-image')

![](./../../assets/images/fronend-property-group-1.png ':class=medium-image')

You can display the offer selection block on the product page using the properties of the offers.

![](./../../assets/images/fronend-property-1.png ':class=medium-image')

## Backend

You can create and edit properties by going to **Backend -> Settings -> Properties**

![](./../../assets/images/backend-property-1.png ':class=medium-image')

You can change sorting of properties by going to **Backend -> Settings -> Properties -> Reorder records**

![](./../../assets/images/backend-property-2.png ':class=medium-image')

## Import

You can import properties from XML and CSV files.
You can use [events](modules/property/event/event#event-list-property), that allows you to extend import data.
 
> You can learn more about importing from [XML](import/import-from-xml/home.md#import-from-xml) and [CSV](import/import-from-csv/home.md#import-from-csv) files in [section](import/import-from-xml/home.md#import-from-xml).

![](./../../assets/images/backend-property-3.png ':class=medium-image')

#### Import from CSV

You can hide import buttons in "Basic settings".
Go to **Backend -> Settings -> Basic settings -> "Import" tab**

![](./../../assets/images/import-from-csv-settings-3.png ':class=medium-image')

#### Import from XML

For big catalog, you can use queues to reduce server load during import.
You can enable queues in **"Application settings"**.
Go to **Backend -> Settings -> Application settings -> "Import" tab**

![](./../../assets/images/import-from-xml-settings-8.png ':class=medium-image')

You can hide import buttons in "Basic settings".
Go to **Backend -> Settings -> Basic settings -> "Import" tab**

![](./../../assets/images/import-from-xml-settings-9.png ':class=medium-image')
{% endblock %}

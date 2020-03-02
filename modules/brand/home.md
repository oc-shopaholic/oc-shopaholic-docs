{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

The "Brands" module allows you to create manufacturers of products for your site.
You can link one brand to a product.
You can display the list of brands, brand page.
You can filter products by brands.

## Backend

You can create and edit brands by going to **Backend -> Catalog -> Brands**

![](./../../assets/images/backend-brand-1.png)

You can change sorting of brands by going to **Backend -> Catalog -> Brands -> Reorder records**

![](./../../assets/images/backend-brand-5.png)

You can attach one brand to product

![](./../../assets/images/backend-brand-2.png)

## Import

You can import brands from XML and CSV files.
You can use [events](modules/brand/event/event#event-list-brand), that allows you to extend import data.
 
> You can learn more about importing from [XML](import/import-from-xml/home.md#import-from-xml) and [CSV](import/import-from-csv/home.md#import-from-csv) files in [section](import/import-from-xml/home.md#import-from-xml).

![](./../../assets/images/backend-brand-3.png)

#### Import from CSV

You can hide import buttons in "Basic settings".

Go to **Backend -> Settings -> Basic settings -> "Import" tab**
![](./../../assets/images/import-from-csv-settings-3.png)

#### Import from XML

For big catalog, you can use queues to reduce server load during import.
You can enable queues in **"Application settings"**.

Go to **Backend -> Settings -> Application settings -> "Import" tab**
![](./../../assets/images/import-from-xml-settings-8.png)

You can hide import buttons in "Basic settings".

Go to **Backend -> Settings -> Basic settings -> "Import" tab**
![](./../../assets/images/import-from-xml-settings-9.png)

{% endblock %}

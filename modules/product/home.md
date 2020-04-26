{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

## Introduction

Product is main unit of your catalog. For different projects, products may have different view.
```plantuml
@startuml
[Catalog of smartphones]

node "Products" {
    [iPhone X Black]
    [iPhone X White]
}

node "Offres" {
    [iPhone X Black 64Gb]
    [iPhone X Black 128Gb]
    [iPhone X White 64Gb]
    [iPhone X White 128Gb]
}

[Catalog of smartphones] --> [iPhone X Black]
[Catalog of smartphones] --> [iPhone X White]

[iPhone X Black] --> [iPhone X Black 64Gb]
[iPhone X Black] --> [iPhone X Black 128Gb]
[iPhone X White] --> [iPhone X White 64Gb]
[iPhone X White] --> [iPhone X White 128Gb]

note right of [Catalog of smartphones]
  Product is smartphone model.
  Offer is smartphone model
  with different storage capacity.
end note
@enduml
```
```plantuml
@startuml
[Catalog of sneakers]

node "Products" {
    [Downshifter Black]
    [Downshifter White]
}

node "Offres" {
    [Downshifter Black - size 10]
    [Downshifter Black - size 12]
    [Downshifter White - size 10]
    [Downshifter White - size 12]
}

[Catalog of sneakers] --> [Downshifter Black]
[Catalog of sneakers] --> [Downshifter White]

[Downshifter Black] --> [Downshifter Black - size 10]
[Downshifter Black] --> [Downshifter Black - size 12]
[Downshifter White] --> [Downshifter White - size 10]
[Downshifter White] --> [Downshifter White - size 12]

note right of [Catalog of sneakers]
  Product is sneakers model.
  Offer is sneakers model
  with different sizes.
end note
@enduml
```

```plantuml
@startuml
[Catalog of flowers]

node "Products" {
    [Rose Red - 30cm]
    [Rose Red - 50cm]
    [Rose White - 30cm]
    [Rose White - 50cm]
}

node "Offres" {
    [Rose Red - 30]
    [Rose Red - 50]
    [Rose White - 30]
    [Rose White - 50]
}

[Catalog of flowers] --> [Rose Red - 30cm]
[Catalog of flowers] --> [Rose Red - 50cm]
[Catalog of flowers] --> [Rose White - 30cm]
[Catalog of flowers] --> [Rose White - 50cm]

[Rose Red - 30cm] --> [Rose Red - 30]
[Rose Red - 50cm] --> [Rose Red - 50]
[Rose White - 30cm] --> [Rose White - 30]
[Rose White - 50cm] --> [Rose White - 50]

note right of [Catalog of flowers]
  Product is flowers with different colors and height.
  Products have only one offer.
end note
@enduml
```

!> **Attention!**  Designing catalog structure is very important stage before development of our project.
It is very important at this stage to determine what will be product and what will be offer in your catalog.
You can find more information in [section](catalog-structure/catalog-structure.md).

## Backend

You can create and edit products by going to **Backend -> Catalog -> Products**

![](./../../assets/images/backend-product-1.png ':class=medium-image')

## Active products

Often projects require you to hide products that do not have active offers.
You can enable additional check when you get list of active products.
If this setting is enabled, list of active products will contain only those products that have active offers.
Go to **Backend -> Settings -> Basic Settings**

![](./../../assets/images/backend-settings-4.png ':class=medium-image')

## Import

You can import products from XML and CSV files.
You can use [events](modules/product/event/event#event-list-product), that allows you to extend import data.
 
> You can learn more about importing from [XML](import/import-from-xml/home.md#import-from-xml) and [CSV](import/import-from-csv/home.md#import-from-csv) files in [section](import/import-from-xml/home.md#import-from-xml).

![](./../../assets/images/backend-product-2.png ':class=medium-image')

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

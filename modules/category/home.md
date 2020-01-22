[Back to modules](modules/home.md)

Home
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• [Components](modules/category/component/component.md)
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

# Category {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Backend

You can create and edit categories by going to **Backend -> Catalog -> Categories**

![](./../../assets/images/backend-category-1.png)

You can change tree of categories by going to **Backend -> Catalog -> Categories -> Reorder records**

![](./../../assets/images/backend-category-5.png)

You can attach one main category to product

![](./../../assets/images/backend-category-2.png)

You can attach several additional categories to product.

> Using "[category](modules/product/collection/collection.md#categoryicategoryid-bwithchildren-false)" method in [ProductCollection](modules/product/collection/collection.md) class,
you can get all products in which category is attached as main or additional

![](./../../assets/images/backend-category-3.png)

## Import

You can import categories from XML and CSV files.
You can use [events](modules/category/event/event#event-list-category), that allows you to extend import data.
 
> You can learn more about importing from [XML](import/import-from-xml/home.md#import-from-xml) and [CSV](import/import-from-csv/home.md#import-from-csv) files in [section](import/import-from-xml/home.md#import-from-xml).

![](./../../assets/images/backend-category-4.png)

Home
• [Model](modules/category/model/model.md)
• [Item](modules/category/item/item.md)
• [Collection](modules/category/collection/collection.md)
• [Components](modules/category/component/component.md)
• [Events](modules/category/event/event.md)
• [Examples](modules/category/examples/examples.md)
• [Extending](modules/category/extending/extending.md)

[Back to modules](modules/home.md)

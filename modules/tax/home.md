[Back to modules](modules/home.md)

Home
• [Model](modules/tax/model/model.md)
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• [Extending](modules/tax/extending/extending.md)
• [Advanced usage](modules/tax/advanced-usage/home.md)

# Tax {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

## Backend

You can create and edit taxes by going to **Backend -> Settings -> Taxes**

![](./../../assets/images/backend-tax-1.png)

You can attach categories and products to tax that will be applied

![](./../../assets/images/backend-tax-2.png)

You can attach countries and states to tax that will be applied. Available with [RainLab.Location](https://octobercms.com/plugin/rainlab-location) plugin.

![](./../../assets/images/backend-tax-3.png)

## Settings

You can flexibly configure taxes in your project.

Go to **Backend -> Settings -> Basic settings -> "Taxes" tab**
![](./../../assets/images/backend-settings-8.png)

For example: **offer price is 39.99, tax percent is 20**.

||Backend price|Price without tax|Tax|Price with tax|
|---|---|---|---|---|
|Price includes taxes|**39.99**|33.33|6.66|**39.99**|
|Price does not includes taxes|**39.99**|**39.99**|8|47.99|

Example of calculation of discount after applying **coupon -7%**:

1. Price includes taxes

||Backend price|Calculation|Price without tax|Tax|Price with tax|
|---|---|---|---|---|---|
|Discount is deducted from backend price (default)|**39.99**|39.99 - 7% = 37.19|30.99|6.2|37.19|
|Discount is deducted from price without taxes|**39.99**|33.33 - 7% = 31|31|6.2|37.2|
|Discount is deducted from price with taxes|**39.99**|39.99 - 7% = 37.19|30.99|6.2|37.19|

1. Price does not includes taxes

||Backend price|Calculation|Price without tax|Tax|Price with tax|
|---|---|---|---|---|---|
|Discount is deducted from backend price (default)|**39.99**|39.99 - 7% = 37.19|37.19|7.44|44.63|
|Discount is deducted from price without taxes|**39.99**|39.99 - 7% = 37.19|37.19|7.44|44.63|
|Discount is deducted from price with taxes|**39.99**|47.99 - 7% = 44.63|37.19|7.44|44.63|

Home
• [Model](modules/tax/model/model.md)
• [Item](modules/tax/item/item.md)
• [Collection](modules/tax/collection/collection.md)
• [Extending](modules/tax/extending/extending.md)
• [Advanced usage](modules/tax/advanced-usage/home.md)

[Back to modules](modules/home.md)
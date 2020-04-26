{% extends "docs/modules/home-default.md" %}

{% block content %}
{{ parent() }}

"Discounts" module allows you to automatically update "price" and "old_price" fields of offers.
You can set start and end dates of the discount period.
You can start catalog price recalculation manually or automatically with using [shopaholic:discount.update_catalog_price](/artisan-commands/home#shopaholicdiscountupdate_catalog_price) artisan command.

![](./../../assets/images/backend-discount-3.png ':class=medium-image')

If several discounts apply to the same offer, they will not be applied to previously added discounts. The discount applies only if it is greater than the current discount.
For example:

|Offer ID|Current price value|Current old price value|Discounts|New price value|New old price value|Description|
|---|---|---|---|---|---|---|
|1|110|0|1. -5%<br>2. -5|104.5|110|Applied percent discount -5%|
|2|95|0|1. -5%<br>2. -5|90|95|Applied fixed discount -5|
|1|108|110|1. -5%<br>2. -5|104.5|110|Applied percent discount -5%|
|2|93|95|1. -5%<br>2. -5|90|95|Applied fixed discount -5|
|1|100|110|1. -5%<br>2. -5|100|110|The discount is not applied because the discount with a higher value is valid|
|2|88|95|1. -5%<br>2. -5|88|95|The discount is not applied because the discount with a higher value is valid|

## Backend

You can create and edit discounts by going to **Backend -> Promotions -> Discounts**

![](./../../assets/images/backend-discount-1.png ':class=medium-image')

![](./../../assets/images/backend-discount-4.png ':class=medium-image')

You can change sorting of discounts by going to **Backend -> Promotions -> Discounts -> Reorder records**

![](./../../assets/images/backend-discount-2.png ':class=medium-image')
{% endblock %}

## Example {{ i }}: Product page 1

### {{ i }}.1 Task

Create simple product page and render select with offers. Render block with offer price and currency.

### {{ i }}.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/product-page.htm**
end note
:Attach **ProductPage** component;
if (URL page contains brand slug?) then (yes)
    :Attach **BrandPage** component;
else (no)
endif
if (URL page contains categories slug?) then (yes)
    :Attach **CategoryPage** component;
    note left
        You must attach components
        for each level of category tree.
    end note
else (no)
endif
:Get **ProductItem** object
from **ProductPage** component;
:Render product name;
:Get **OfferCollection**
from **ProductItem** object;
:Render offer list;
@enduml
```

### {{ i }}.3 Source code
<!-- tabs:start -->
#### ** Variant 1 **

Simple example of product page. Page URL does not contain category slug.

{{ get_module('offer').example('pages/product-page-1.htm')|raw }}

#### ** Variant 2 **

Simple example of product page. Page URL contains category slug (one level).

{{ get_module('offer').example('pages/product-page-2.htm')|raw }}

#### ** Variant 3 **

Simple example of product page. Page URL contains category slug (two levels).

> {{ get_component('category').link('category-page') }} components must be attached on page so that child categories are higher than parent categories.

{{ get_module('offer').example('pages/product-page-3.htm')|raw }}

#### ** Variant 4 **

Simple example of product page. Page URL contains categories (two levels) and brand slug.

> {{ get_component('category').link('category-page') }} components must be attached on page so that child categories are higher than parent categories.

{{ get_module('offer').example('pages/product-page-4.htm')|raw }}

#### ** Wildcard **

Catalog page with wildcard URL parameter.

{{ get_module('offer').example('pages/product-page-5.htm')|raw }}

<!-- tabs:end -->

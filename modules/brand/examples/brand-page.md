## Example {{ i }}: Brand page

### {{ i }}.1 Task

Create simple brand page and render brand name, preview image, description.

### {{ i }}.2 How can i do it?

> Example uses {{ get_component('brand').link('brand-page') }} component.
Component method returns {{ get_item('brand').link() }} class object.
All available fields and methods of **BrandItem** class you can find in {{ get_item('brand').link('section') }}

```plantuml
@startuml
:Create page file;
note left
For example: **pages/brand-page.htm**
end note
:Attach **BrandPage** component;
:Get **BrandItem** object
from **BrandPage** component;
:Render brand name,
preview_image,
description fields;
@enduml
```

### {{ i }}.3 Source code
{{ get_module('brand').example('pages/brand-page-1.htm')|raw }}
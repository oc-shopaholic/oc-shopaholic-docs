## Example {{ i }}: Brand card

### {{ i }}.1 Task

Create simple brand card and render brand name, preview_image, preview_text fields.
Render link on brand page.

> **"obBrand"** is object of {{ get_item('brand').link() }} class.

### {{ i }}.2 Source code

Simple example of brand card.

{{ get_module('brand').example('partials/brand/brand-card/brand-card-1.htm')|raw }}
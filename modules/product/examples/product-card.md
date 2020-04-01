## Example {{ i }}: Product card

### {{ i }}.1 Task
Create simple product card and render product name, preview_image, preview_text fields.
Render link on product page.

> **"obProduct"** is object of {{ get_item('product').link() }} class.

### {{ i }}.2 Source code

Simple example of product card.

{{ get_module('product').example('partials/product/product-card/product-card-1.htm')|raw }}

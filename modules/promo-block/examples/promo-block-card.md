## Example {{ i }}: Promo block card

### {{ i }}.1 Task

Create simple promo block card and render promo block name, preview_image, preview_text fields.
Render link on promo block page.

> **"obPromoBlock"** is object of {{ get_item('promo-block').link() }} class.

### {{ i }}.2 Source code

Simple example of promoblock card.

{{ get_module('promo-block').example('partials/promo-block/promo-block-card/promo-block-card-1.htm')|raw }}
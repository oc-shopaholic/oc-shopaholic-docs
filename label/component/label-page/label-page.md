# LabelPage component {docsify-ignore-all}
  
!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig
[LabelPage]
slug = "{{ :slug }}"
slug_required = 1
==

{# Get label item #}
{% set obLabel = LabelPage.get() %}
<div data-id="{{ obLabel.id }}">
    <h1>{{ obLabel.name }}</h1>
</div>
```
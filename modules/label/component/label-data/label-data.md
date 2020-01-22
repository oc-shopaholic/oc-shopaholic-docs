# LabelData component {docsify-ignore-all}
     
!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

Usage example:
```twig

{# Get label item with ID = 10 #}
{% set obLabel = LabelData.get(10) %}
{% if obLabel.isNotEmpty() %}
    <div data-id="{{ obLabel.id }}">
        <span>{{ obLabel.name }}</span>
    </div>
{% endif %}
```
# ShippingTypeList component {docsify-ignore-all}
          
!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

Component allows to work with [ProductCollection](modules/product/collection/collection.md) class objects.

### make(_[$arElementIDList = null]_)

**Example:** Get collection of shipping types, apply sorting + filter by flag "active"
```twig
{% set obShippingTypeList = ShippingTypeList.make().sort().active() %}
{% if obShippingTypeList.isNotEmpty() %}
    <ul>
        {% for obShippingType in obShippingTypeList %}
            <li data-id="{{ obShippingType.id }}">
                <div>{{ obShippingType.name }}</div>
                <div>{{ obShippingType.preview_text }}</div>
            </li>
        {% endfor %}
    </ul>
{% endif %}
```
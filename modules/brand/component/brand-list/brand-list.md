# BrandList component {docsify-ignore-all}

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ [Model](modules/brand/model/model.md)
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ Components
/ [Events](modules/brand/event/event.md)
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### make(_[$arElementIDList = null]_)

Method returns new object of [BrandCollection](modules/brand/collection/collection.md) class.

**Example 1:** Get collection of brands, apply sorting + filter by flag "active"
```twig
{% set obBrandList = BrandList.make().sort().active() %}
{% if obBrandList.isNotEmpty() %}
    <ul>
        {% for obBrand in obBrandList %}
            <li>{% partial 'brand/brand-card/brand-card' obBrand=obBrand %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

**Example 2:** Get brand collection, apply sorting + filter by flag "active" + [Pagination](https://github.com/lovata/oc-toolbox-plugin/wiki/Components#pagination) component
```twig

{# Get brand collection #}
{% set obBrandList = BrandList.make().sort().active() %}

{# Get array with pagination buttons #}
{% set iPage = Pagination.getPageFromRequest() %}
{% set arPaginationList = Pagination.get(iPage, obBrandList.count()) %}

{# Apply pagination to brand collection and get array with brand items #}
{% set arBrandList = obBrandList.page(iPage, Pagination.getCountPerPage()) %}

{% if arBrandList is not empty %}
    {# Render brand list #}
    <ul>
        {% for obBrand in arBrandList %}
            <li>{% partial 'brand/brand-card/brand-card' obBrand=obBrand %}</li>
        {% endfor %}
    </ul>
    
    {# Render pagination buttons #}
    {% if arPaginationList is not empty %}
        {% for arPagination in arPaginationList %}
            <a href="?page={{ arPagination.value }}" class="{{ arPagination.class }}" data-page="{{ arPagination.value }}">{{ arPagination.name }}</a>
        {% endfor %}
    {% endif %}
{% endif %}
```

[Back to modules](modules/home.md)
/ [Home](modules/brand/home.md)
/ [Model](modules/brand/model/model.md)
/ [Item](modules/brand/item/item.md)
/ [Collection](modules/brand/collection/collection.md)
/ Components
/ [Events](modules/brand/event/event.md)
/ [Examples](modules/brand/examples/examples.md)
/ [Extending](modules/brand/extending/extending.md)
# PromoBlockList component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Component allows to work with [PromoBlockCollection](promo-block/collection/collection.md) class objects.

### getSorting()

Get active sorting key value.

### make(_[$arElementIDList = null]_)

**Example 1:** Get collection of promo block, apply sorting, filter by flag "active".
```twig
{% set obPromoBlockList = PromoBlockList.make().sort(PromoBlockList.getSorting()).active() %}
{% if obPromoBlockList.isNotEmpty() %}
    <ul>
        {% for obPromoBlock in obPromoBlockList %}
            <li>{% partial 'promo-block/promo-block-card/promo-block-card' obPromoBlock=obPromoBlock %}</li>
        {% endfor %}
    </ul>
{% endif %}
```

**Example 1:** Get collection of promo blocks, apply filter by flag "active" + [Pagination](https://github.com/lovata/oc-toolbox-plugin/wiki/Components#pagination) component.
```twig
{# Get promo block collection #}
{% set obPromoBlockList = PromoBlockList.make().sort(PromoBlockList.getSorting()).active() %}

{# Get array with pagination buttons #}
{% set iPage = Pagination.getPageFromRequest() %}
{% set arPaginationList = Pagination.get(iPage, obPromoBlockList.count()) %}

{# Apply pagination to promo block collection and get array with promo block items #}
{% set arPromoBlockList = obPromoBlockList.page(iPage, Pagination.getCountPerPage()) %}

{% if arPromoBlockList is not empty %}

    {# Render promo block list #}
    <ul>
        {% for obPromoBlock in obPromoBlockList %}
            <li>{% partial 'promo-block/promo-block-card/promo-block-card' obPromoBlock=obPromoBlock %}</li>
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

### onAjaxRequest()

Empty method for ajax request.
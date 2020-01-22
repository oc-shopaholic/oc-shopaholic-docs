# LabelList component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

Component allows to work with [LabelCollection](modules/label/collection/collection.md) class objects.

### make(_[$arElementIDList = null]_)

**Example:** Get collection of labels, apply sorting + filter by flag "active".
```twig
{% set obLabelList = LabelList.make().sort().active() %}
{% if obLabelList.isNotEmpty() %}
    <div class="label-list-wrapper">
        {% for obLabel in obLabelList %}
            <div data-id="{{ obLabel.id }}">
                <span>{{ obLabel.name }}</span>
            </div>
        {% endfor %}
    </div>
{% endif %}
```
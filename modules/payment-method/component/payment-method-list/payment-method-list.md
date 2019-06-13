# PaymentMethodList component {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

Component allows to work with [PaymentMethodCollection](modules/payment-method/collection/collection.md) class objects.

### make(_[$arElementIDList = null]_)

**Example:** Get collection of payment methods, apply sorting + filter by flag "active"
```twig

{% set obPaymentMethodList = PaymentMethodList.make().sort().active() %}
{% if obPaymentMethodList.isNotEmpty() %}
    <div class="payment-method-list-wrapper">
        {% for obPaymentMethod in obPaymentMethodList %}
            <div data-id="{{ obPaymentMethod.id }}">
                <div>{{ obPaymentMethod.name }}</div>
                <div>{{ obPaymentMethod.preview_text }}</div>
            </div>
        {% endfor %}
    </div>
{% endif %}
```
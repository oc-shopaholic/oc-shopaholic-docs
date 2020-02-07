{% extends 'docs/modules/item-default.md' %}

{% block method_list %}
{{ parent() }}

### isAvailable($arData = [])

Method returns true, if payment method are approved via restrictions.
```php
    $obPaymentMethodItem->isAvailable(['state' => 'NY']);
```
{% endblock %}
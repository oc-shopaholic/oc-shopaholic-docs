{% extends 'docs/modules/model-default.md' %}

{% block fields %}
{{ parent() }}

## Temporary storage of fields

You can use 
**billing_address**, **email**, **payment_method_id**, **property**
**shipping_address**, **shipping_type_id**, **user_data** fields
 for temporary storage of data that will be transferred to order.
This can be useful if user making an order in a few steps. 
{% endblock %}
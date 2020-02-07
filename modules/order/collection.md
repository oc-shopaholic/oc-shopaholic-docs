{% extends 'docs/modules/collection-default.md' %}

{% block method_list %}
{{ parent() }}

* [paymentMethod](#paymentmethodipaymentmethodid-iuserid-null)
* [shippingType](#shippingtypeishippingtypeid-iuserid-null)
* [status](#statusistatusid-iuserid-null)
* [user](#useriuserid-null)

### paymentMethod($iPaymentMethodID, _[$iUserID = null]_)
  * $iPaymentMethodID - payment method ID
  * $iUserID - user ID

Method applies filter by payment method ID and user ID.

### shippingType($iShippingTypeID, _[$iUserID = null]_)
  * $iShippingTypeID - shipping type ID
  * $iUserID - user ID

Method applies filter by shipping type ID and user ID.

### status($iStatusID, _[$iUserID = null]_)
  * $iStatusID - status ID
  * $iUserID - user ID

Method applies filter by status ID and user ID.

### user(_[$iUserID = null]_)
  * $iUserID - user ID, by default $iUserID == ID of authorized user

Method applies filter by user ID.
{% endblock %}
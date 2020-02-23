{% extends 'docs/modules/item-default.md' %}

{% block method_list %}
{{ parent() }}

### isDisabled($obProductList, $obOfferList = null)
  *  ({{ get_collection('product').link() }}) $obProductList - filtered product collection
  *  ({{ get_collection('offer').link() }})) $obOfferList - filtered offer collection

Method returns true, if you apply filter with value == $this->slug, then filtered product collection will not be empty.
{% endblock %}
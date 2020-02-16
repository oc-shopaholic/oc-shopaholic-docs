{% extends 'docs/modules/item-default.md' %}

{% block method_list %}
{{ parent() }}

### getPageUrl($sPageCode = 'label'')
  * $sPageCode - page file name

Method returns URL of label page.
Method gets {{ get_component('label').link('label-page') }} component attached on page and compiles parameter :slug to generate page URL.
{% endblock %}
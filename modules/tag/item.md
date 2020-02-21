{% extends 'docs/modules/item-default.md' %}

{% block method_list %}
{{ parent() }}

### getPageUrl(_[$sPageCode = 'tag']_)
  * $sPageCode - page file name

Method returns URL of tag page.
Method gets properties of {{ component.link('tag-page') }} component attached on page and compiles parameter :slug to generate page URL.
{% endblock %}
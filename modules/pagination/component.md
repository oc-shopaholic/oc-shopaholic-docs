{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [Pagination](#pagination)
  * [get](#)
  * [getCountForNextPage](#)
  * [getCountPerPage](#)
  * [getMaxPage](#)
  * [getPageFromRequest](#getpagefromrequest)

## Pagination
The component is used to get a list of pagination buttons and provides flexible settings.
The component uses [oc-pagination](https://github.com/kharanenka/oc-pagination) package.

### get($iPage, $iCount)
  * **iPage** - the current page number
  * **iCount** - available count of elements

The method get allows you to get the array of buttons to display the navigation.

{{ get_module('product').example('partials/product/catalog/catalog-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-1.htm')|raw }}

### getCountForNextPage($iPage, $iCount)
  * **iPage** - the current page number
  * **iCount** - available count of elements

The method allows you to get the count of elements for next page. It is used to display the “Show More” button.

{{ get_module('product').example('partials/product/catalog/catalog-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-2.htm')|raw }}

### getCountPerPage()
The method allows you to get the number of elements on a page from components settings. You can change the value specified in component settings if you send **"limit"** parameter in request.

### getMaxPage($iCount)
  * **iCount** - available count of elements

The method allows you to get the number of the last page. It is used to display the “Show More” button.

{{ get_module('product').example('partials/product/catalog/catalog-1.htm')|raw }}

{{ get_module('pagination').example('partials/pagination/pagination-3.htm')|raw }}

### getPageFromRequest()
The method allows you to get the current page number, if you send the page number as a request parameter with the ‘page’ key.
{% endblock %}

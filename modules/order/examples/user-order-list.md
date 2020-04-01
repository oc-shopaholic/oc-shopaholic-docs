## Example {{ i }}: User order list

### {{ i }}.1 Task

Render table with user order list.

> Block with user order list can be complicated (contain searching, filtering, sorting, pagination).

### {{ i }}.2 How can i do it?

```plantuml
@startuml
:Create page file;
note left
    For example: **pages/order_list.htm**
end note
:Get user object;
:Get OrderCollection object
from user object;
:Render table with orders;
@enduml
```

### {{ i }}.3 Source code

<!-- tabs:start -->
#### ** Lovata.Buddies **

File: **pages/order_list.htm**
{% verbatim %}
```twig
title = "User order list"
url = "/user/order"
layout = "main"
is_hidden = 0

[UserData]

[UserPage]
slug = ""
slug_required = 0
mode = "ajax"
flash_on = 0
redirect_on = 1
redirect_page = "user_profile"
login_page = "login"
==

{# Get user object #}
{% set obUser = UserData.get() %}

{# Get OrderCollection object from user object #}
{% set obOrderList = obUser.order %}
{% if obOrderList.isNotEmpty() %}
  <table>
    <caption>Order list</caption>
    <tr>
      <th>Order number</th>
      <th>Status</th>
      <th>Total price</th>
    </tr>
    {% for obOrder in obOrderList %}
      <tr>
        <td>{{ obOrder.order_number }}</td>
        <td>{{ obOrder.status.name_for_user }}</td>
        <td>{{ obOrder.total_price }} {{ obOrder.currency_symbol }}</td>
      </tr>
    {% endfor %}
    </table>
{% else %}
  <div>You have no orders yet</div>
{% endif %}
```
{% endverbatim %}

#### ** RainLab.User **

File: **pages/order_list.htm**
{% verbatim %}
```twig
title = "Index page"
url = "/"
layout = "main"
is_hidden = 0
==

{% if user %}
  {# Get OrderCollection object from user object #}
  {% set obOrderList = user.order_list %}
  {% if obOrderList.isNotEmpty() %}
    <table>
      <caption>Order list</caption>
      <tr>
        <th>Order number</th>
        <th>Status</th>
        <th>Total price</th>
      </tr>
      {% for obOrder in obOrderList %}
        <tr>
          <td>{{ obOrder.order_number }}</td>
          <td>{{ obOrder.status.name_for_user }}</td>
          <td>{{ obOrder.total_price }} {{ obOrder.currency_symbol }}</td>
        </tr>
      {% endfor %}
      </table>
  {% else %}
    <div>You have no orders yet</div>
  {% endif %}
{% else %}
    <p>Nobody is logged in</p>
{% endif %}
```
{% endverbatim %}
<!-- tabs:end -->

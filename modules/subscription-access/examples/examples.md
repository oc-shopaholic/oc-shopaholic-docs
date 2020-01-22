[Back to modules](modules/home.md)

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• Examples
• [Extending](modules/subscription-access/extending/extending.md)

# Examples: Subscription {docsify-ignore-all}

!> **Attention!** We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

* [Example 1: Check access to subscription](#example-1-check-access-to-subscription)

## Example 1: Check access to subscription

### 1.1 Task

Check user access to subscription.

### 1.2 Source code

<!-- tabs:start -->
#### ** Lovata.Buddies **

File: **pages/index.htm**
```twig
title = "Index page"
url = "/"
layout = "main"
is_hidden = 0

[UserData]
==

{# Get user object #}
{% set obUser = UserData.get() %}

{# Check access to subscription with product ID == 1 #}
{% if obUser.checkAccessToSubscription(1) %}
  <p>User has access</p>
{% else %}
  <p>User hos not access</p>
{% endif %}
```

#### ** RainLab.User **

File: **pages/index.htm**
```twig
title = "Index page"
url = "/"
layout = "main"
is_hidden = 0
==

{% if user %}
    <p>Hello {{ user.name }}</p>
    {# Check access to subscription with product ID == 1 #}
    {% if user.checkAccessToSubscription(1) %}
      <p>User has access</p>
    {% else %}
      <p>User hos not access</p>
    {% endif %}
{% else %}
    <p>Nobody is logged in</p>
{% endif %}
```
<!-- tabs:end -->

[Home](modules/subscription-access/home.md)
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• Examples
• [Extending](modules/subscription-access/extending/extending.md)

[Back to modules](modules/home.md)

[Back to modules](modules/home.md)

Home
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

# Subscription access {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

> Module available with [Subscriptions for Shopaholic](plugins/home#subscriptions-for-shopaholic) plugin.

## Introduction

"Subscription access" module contains list of purchased user subscriptions and will allow you to check user access to subscription products.
Module allows you to renewal user access to their subscription.

You can give access to any custom model (for example "Article" model). This will give you opportunity to give access to paid content, such as an article in paid journal.

## How it works?

```plantuml
@startuml
start
:User adds subscription product to cart;
:User goes to checkout page;
:User adds coupon to cart;
:User fills in their contact details;
:User chooses payment method;
:User makes order;
if (Need redirect to payment gateway?) then (yes)
    :User goes to payment gateway;
    :User pays with using payment gateway;
else (no)
endif
:Redirecting user to "Thank You" page;
:Site sends mails to user and manager;
:Manager changes order status;
:User sees changes of order status
in his account or receiving emails;
if (Subscription access exist?) then (yes)
    :Renewal access;
else (no)
    :Create access;
endif
:User goes to page with paid content;
:User gets access to paid content;
stop
@enduml
```

## Backend

You can view and manage access to subscriptions by going to **Backend -> Users -> User access to subscriptions**.
You can renew your subscription access manually by changing "Access expire at" field.

![](./../../assets/images/backend-subscription-access-1.png)

Home
• [Model](modules/subscription-access/model/model.md)
• [Item](modules/subscription-access/item/item.md)
• [Collection](modules/subscription-access/collection/collection.md)
• [Examples](modules/subscription-access/examples/examples.md)
• [Extending](modules/subscription-access/extending/extending.md)

[Back to modules](modules/home.md)
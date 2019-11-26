# Introduction {docsify-ignore-all}

The development of Shopaholic’s ecosystem is guided by the similar philosophies of October CMS and Unix like operating systems, where the main focus is to create simple microarchitecture solutions that communicate with each other through smart APIs.

On one hand, this approach allows keeping performance, security, and functionality of the code to a high standard. On the other hand, it provides a clean and smooth back-end UI/UX that isn't over-bloated with the features.

```plantuml
@startmindmap
+ Shopaholic
++ Product associations
+++ Accessories
+++ Comparex
+++ Labels
+++ Related products
+++ Tags
+++ Viewed products
+++ Wish list
++ External integrations
+++ Integration with Facebook
+++ Integration with VK Goods
+++ Integration with yandex market
++ Other
+++ Fake data
+++ Reviews
++ Payment gateways
+++ omnipay package
++++ PayPal
++++ Stripe
+++ LiqPay
+++ ROBOKASSA
+++ Sberbank
+++ Uniteller
+++ Yandex Kassa
-- Orders 
-- Catalog
--- Filter
--- Properties
--- Popularity
-- Search
--- Simple search
--- Sphinx search
-- Marketing and promotions
--- Discounts
--- Campaigns
--- Coupons
-- Toolbox plugin
--- Buddies
--- Good news
--- MightySeo
-- Logistic
--- CDEK

@endmindmap
```

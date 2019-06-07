# CampaignCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### promoBlock($iPromoBlockID)
  * $iPromoBlockID - promo block ID

Method applies filter by promo block ID.

```php
    $obList = CampaignCollection::make()->promoBlock(2);
```
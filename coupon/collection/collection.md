# CouponCollection {docsify-ignore-all}

!> **Attention!**  We recommend that you read [Architecture](home.md#architecture), [ElementItem class](item-class/item-class.md),
[ElementCollection class](collection-class/collection-class.md) sections for complete understanding of  project architecture.

### group($iCouponGroupID)
  * $iCouponGroupID - coupon group ID

Method applies filter by coupon group ID.

### hidden()

Method applies filter to field "hidden" = true for elements of collection.

### notHidden()

Method applies filter to field "hidden" = false for elements of collection.

### visibleToUser($iUserID)
  * $iUserID - user ID

Method returns list of coupons visible to user.
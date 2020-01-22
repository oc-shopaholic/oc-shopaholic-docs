# ReviewCollection {docsify-ignore-all}
        
!> **Attention!**  We recommend that you read [Architecture](architecture/architecture), [ElementItem class](architecture/item-class/item-class.md),
[ElementCollection class](architecture/collection-class/collection-class.md) sections for complete understanding of  project architecture.

### active()

Method applies filter to field "active" = true  for elements of collection.

### product($iProductID)
  * $iProductID - product ID

Method returns collection of review for product with ID == $iProductID and sorted by "id" field (desc).

### sort()

Method sorts elements of collection by "id" field (desc).
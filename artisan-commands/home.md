# Artisan commands {docsify-ignore-all}

## Database integrity

### **shopaholic:check.table.integrity**

Command runs migrations that affect integrity of database.
```bash
php artisan shopaholic:check.table.integrity
```

## Discounts

### **shopaholic:discount.update_catalog_price**
The command can be used to automatically update of catalog prices (removes old discounts, sets new discounts)
```bash
php artisan shopaholic:discount.update_catalog_price
```

## Import from XML

### **shopaholic:import_from_xml --import**

Command stars import from XML files.

**--import** option is list of elements to import. Available values: brand, category, property, product, offer, price.
You can set list of elements that need to be comma-separated. If you do not set this option, import will be start on all elements.

```bash
php artisan shopaholic:import_from_xml --import=brand,category,property,product,offer,price
```

### **shopaholic:preconfigure_import_from_xml**

Command fills default settings for import from XML files.
```bash
php artisan shopaholic:preconfigure_import_from_xml
```

## Tasks

### **shopaholic:order.send_manager_notification**
The command can be used to automatically send email notifications to order managers.
```bash
php artisan shopaholic:order.send_manager_notification
```
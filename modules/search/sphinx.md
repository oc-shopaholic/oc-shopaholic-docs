{% extends 'docs/modules/layout.md' %}

{% block page_title %}Sphinx search{% endblock %}

{% block content %}

You can use [Sphinx](http://sphinxsearch.com/) to add full-text search on your site.

> Module available with [Sphinx for Shopaholic](plugins/home#sphinx-for-shopaholic) plugin.

## Installation Guide

1. Install Sphinx
```bash
sudo apt-get install sphinxsearch
```

2. Install composer package in your project.
```bash
composer require sngrl/sphinxsearch
```

3. Configure sphinx.conf. You need to create indexes for products, categories, brand, tags. For example:
  * 'oc_product' - index for default language
  * 'oc_product_ru' - index for language with code ru

```html
source oc_product
{
    ...
    sql_query = SELECT id, name, preview_text, description, search_synonym, search_content FROM lovata_shopaholic_products order by `id` DESC
    ...
}
source oc_product_ru
{
    ...
    sql_query = SELECT product.id, JSON_EXTRACT(lang.attribute_data, '$.name') as name FROM lovata_shopaholic_products as product LEFT JOIN rainlab_translate_attributes as lang ON product.id = lang.model_id WHERE lang.model_type  = 'Lovata\\Shopaholic\\Models\\Product' and lang.locale = 'ru'
    ...
}
```

4. Copy sphinxsearch.php config from plugin folder to project folder.
```bash
cp plugins/lovata/sphinxshopaholic/config/sphinxsearch.php config/sphinxsearch.php
```

5. Configure config/sphinxsearch.php for your project

{% endblock %}

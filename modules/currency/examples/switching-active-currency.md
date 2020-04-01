## Example {{ i }}: Switching active currency

### {{ i }}.1 Task

Switch active currency.

### {{ i }}.2 How can i do it?

You need to send AJAX requests after user switches active currency on frontend.

### {{ i }}.3 Source code

<!-- tabs:start -->

#### ** javascript **

{{ get_module('currency').example('partials/currency/currency-list/currency-list-1.js')|raw }}

#### ** php **

You can find more information about CurrencyHelper class [here](modules/currency/advanced-usage/home.md) 

```php
use Lovata\Shopaholic\Classes\Helper\CurrencyHelper;

CurrencyHelper::instance()->switchActive('usd');
```
<!-- tabs:end -->

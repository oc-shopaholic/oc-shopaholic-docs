/**
 * Switch active currency
 * @param sCurrencyCode - New active currency code (For example: 'usd')
 */
function swirchCurrency(sCurrencyCode) {
  $.request('CurrencyList::onSwitch', {
    data: {currency: sCurrencyCode}
  });
}
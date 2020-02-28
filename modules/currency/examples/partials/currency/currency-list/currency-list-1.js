function swirchCurrency(sCurrencyCode) {
  $.request('CurrencyList::onSwitch', {
    data: {currency: sCurrencyCode}
  });
}
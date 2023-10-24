const defaultNumberFormatOptions: Intl.NumberFormatOptions = {
  style: 'decimal',
};

const defaultCurrencyFormatOptions: Intl.NumberFormatOptions = {
  style: 'currency',
};

export function formatNumber(
  value: number,
  locale = 'en-US',
  options: Intl.NumberFormatOptions = {},
): string {
  const mergedOptions = { ...defaultNumberFormatOptions, ...options };
  return new Intl.NumberFormat(locale, mergedOptions).format(value);
}

export function formatCurrency(
  value: number,
  locale = 'fr-FR',
  options: Intl.NumberFormatOptions = { currency: 'EUR', currencyDisplay: 'code' },
): string {
  const mergedOptions = { ...defaultCurrencyFormatOptions, ...options };
  return new Intl.NumberFormat(locale, mergedOptions).format(value);
}

export function formatPercent(
  value: number,
  locale = 'fr-FR',
  options: Intl.NumberFormatOptions = { style: 'percent' },
) {
  return new Intl.NumberFormat(locale, options).format(value);
}

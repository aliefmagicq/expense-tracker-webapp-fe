type FormatCurruency = {
  amount: number;
  minFracDigits: number;
  locale?: string;
  currency?: string;
};

export const formatCurrency = ({
  amount,
  minFracDigits,
  locale = 'id-ID',
  currency = 'IDR',
}: FormatCurruency): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'code',
    minimumFractionDigits: minFracDigits,
  })
    .format(amount)
    .replace(currency, '')
    .trim();
};

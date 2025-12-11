export const BASE_CATS = [
  'SD02B',
  'Saldo',
  '-',
  'CPM07',
  'Saldo',
  '-',
  'MT09B2',
  'Saldo',
  '-',
  'SD02B',
  'Saldo',
  '-',
  'CPM07',
  'Saldo',
  '-',
  'MT09B2',
  'Saldo',
];
export const MATERIALS = [
  80,
  53,
  '-',
  85,
  32,
  '-',
  53,
  86,
  '-',
  86,
  53,
  '-',
  58,
  58,
  '-',
  53,
  86,
];

export const SALDOS = [
  { value: 1048, name: 'Income' },
  { value: 735, name: 'Expense' },
];

export type DistributionTransactions = {
  name: 'Income' | 'Expense';
  value: number | string;
};

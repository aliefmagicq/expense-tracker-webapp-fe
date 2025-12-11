import CardEchartsSimple from '@/features/shared/components/card-echarts-simple';
import PieEchart from '@/features/shared/components/pie-echart';
import { DistributionTransactions } from '@/features/shared/data/chart-simple';
import { fetchOrganizations } from '../utils/fetch-organizations';

async function PieChartSimpleDashboard() {
  const { data } = await fetchOrganizations();

  /**
   * create data for pie chart
   */
  const createDistributionTransactions = ['Income', 'Expense'].reduce(
    (arr: DistributionTransactions[], curr) => {
      /**
       * reduce two obj expense and income
       */
      const { transactionsExpenseTotal, transactionsIncomeTotal } = data.reduce(
        (obj, curr) => {
          obj.transactionsExpenseTotal += curr.transactions_expense_total;
          obj.transactionsIncomeTotal += curr.transactions_income_total;
          return obj;
        },
        {
          transactionsExpenseTotal: 0,
          transactionsIncomeTotal: 0,
        }
      );

      return [
        ...arr,
        {
          name: curr as DistributionTransactions['name'],
          value:
            curr === 'Expense'
              ? transactionsExpenseTotal
              : transactionsIncomeTotal,
        },
      ];
    },
    []
  );

  return (
    <CardEchartsSimple>
      <CardEchartsSimple.Header>Distribusi Transaksi</CardEchartsSimple.Header>
      <CardEchartsSimple.Main>
        <PieEchart data={createDistributionTransactions} />
      </CardEchartsSimple.Main>
    </CardEchartsSimple>
  );
}

export default PieChartSimpleDashboard;

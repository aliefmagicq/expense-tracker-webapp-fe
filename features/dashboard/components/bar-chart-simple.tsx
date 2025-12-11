import BarEchart from '@/features/shared/components/bar-echart';
import CardEchartsSimple from '@/features/shared/components/card-echarts-simple';
import { BASE_CATS, MATERIALS } from '@/features/shared/data/chart-simple';

function BarChartSimpleDashboard() {
  return (
    <CardEchartsSimple>
      <CardEchartsSimple.Header>Trend Saldo</CardEchartsSimple.Header>
      <CardEchartsSimple.Main>
        <BarEchart baseCats={BASE_CATS} materials={MATERIALS} />
      </CardEchartsSimple.Main>
    </CardEchartsSimple>
  );
}

export default BarChartSimpleDashboard;

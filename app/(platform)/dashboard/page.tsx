import CardSimpleDashboard from '@/features/dashboard/components/card-simple';
import CardSimpleDashboard2 from '@/features/dashboard/components/card-simple2';
import PieChartSimpleDashboard from '@/features/dashboard/components/pie-chart-simple';
import BreadcumsSimple from '../../../features/shared/components/breadcums-simple';
import MainContent from '../../../features/shared/components/main-content';
import BarChartSimpleDashboard from '@/features/dashboard/components/bar-chart-simple';

export default function DashboardPage() {
  return (
    <MainContent>
      <MainContent.Header>
        <BreadcumsSimple />
      </MainContent.Header>

      <MainContent.Main>
        <MainContent.Title />
        <div className="grid grid-cols-4 gap-4">
          <CardSimpleDashboard />
        </div>

        <div className="grid grid-cols-[1fr_450px] gap-4">
          <BarChartSimpleDashboard />
          <PieChartSimpleDashboard />
        </div>

        <div>
          <h5 className="mt-6 mb-4 font-semibold">Organisasi</h5>
          <div className="grid grid-cols-2 gap-4">
            <CardSimpleDashboard2 />
          </div>
        </div>
      </MainContent.Main>
    </MainContent>
  );
}

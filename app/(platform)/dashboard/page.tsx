import { cn } from '@/lib/utils';
import { Building, DollarSign, GitBranch } from 'lucide-react';
import MainContent from '../_compontents/main-content';
import BreadcumsSimple from '../_compontents/ui/breadcums-simple';
import CardEchartsSimple from '../_compontents/ui/card-echarts-simple';
import CardSimple, { CARD_SIMPLES } from '../_compontents/ui/card-simple';
import CardSimple2, { ORGANIZATIONS } from '../_compontents/ui/card-simple-2';
import BarEchart from '../_widget/echarts/bar-echart';
import { BASE_CATS, MATERIALS, SALDOS } from '../_widget/echarts/simple-data';
import PieEchart from '../_widget/echarts/pie-echart';

export default function DashboardPage() {
  return (
    <MainContent>
      <MainContent.Header>
        <BreadcumsSimple />
      </MainContent.Header>

      <MainContent.Main>
        <MainContent.Title />
        <div className="grid grid-cols-4 gap-4">
          {CARD_SIMPLES.map(cardSimple => (
            <CardSimple
              key={cardSimple.label}
              className={cn(
                'border border-border',
                cardSimple.label === 'total saldo'
                  ? 'bg-primary/10'
                  : 'bg-accent/25'
              )}
            >
              <CardSimple.Wrapper>
                <CardSimple.Title>{cardSimple.label}</CardSimple.Title>
                <CardSimple.Content>{cardSimple.content}</CardSimple.Content>
                <CardSimple.Footer className="text-green-500">
                  {cardSimple.footer}
                </CardSimple.Footer>
              </CardSimple.Wrapper>

              <CardSimple.Icon>{cardSimple.icon}</CardSimple.Icon>
            </CardSimple>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_450px] gap-4">
          <CardEchartsSimple>
            <CardEchartsSimple.Header>Trend Saldo</CardEchartsSimple.Header>
            <CardEchartsSimple.Main>
              <BarEchart baseCats={BASE_CATS} materials={MATERIALS} />
            </CardEchartsSimple.Main>
          </CardEchartsSimple>

          <CardEchartsSimple>
            <CardEchartsSimple.Header>Trend Saldo</CardEchartsSimple.Header>
            <CardEchartsSimple.Main>
              <PieEchart saldos={SALDOS} />
            </CardEchartsSimple.Main>
          </CardEchartsSimple>
        </div>

        <div>
          <h5 className="mt-6 mb-4 font-semibold">Organisasi</h5>
          <div className="grid grid-cols-2 gap-4">
            {ORGANIZATIONS.map(organization => (
              <CardSimple2
                key={organization.name}
                href={`/organizations/${organization.name
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`}
              >
                <CardSimple2.Header>
                  <Building className="text-primary w-10 h-10 bg-primary/10 p-2 rounded-lg" />
                  <CardSimple2.Title>
                    <h6>{organization.name}</h6>
                    <p className="text-sm opacity-50">
                      {organization.description}
                    </p>
                  </CardSimple2.Title>
                </CardSimple2.Header>

                <CardSimple2.Main>
                  <p className="text-sm opacity-50">Total Balance</p>
                  <p className="text-sm">{organization.totalBalance}</p>
                </CardSimple2.Main>

                <CardSimple2.Footer>
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 opacity-50" />
                    <p className="text-sm opacity-50">
                      {organization.branch} cabang
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 opacity-50" />
                    <p className="text-sm opacity-50">
                      {organization.transaction} transaksi
                    </p>
                  </div>
                </CardSimple2.Footer>
              </CardSimple2>
            ))}
          </div>
        </div>
      </MainContent.Main>
    </MainContent>
  );
}

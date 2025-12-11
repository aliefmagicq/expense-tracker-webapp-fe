import { cn } from '@/lib/utils';
import MainContent from '../../../../features/shared/components/main-content';
import BreadcumsSimple from '../../../../features/shared/components/breadcums-simple';
import CardSimple, {
  CARD_SIMPLES,
} from '../../../../features/shared/components/card-simple';

export default function SlugPage() {
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
      </MainContent.Main>
    </MainContent>
  );
}

import CardSimple, {
  CARD_SIMPLES,
} from '@/features/shared/components/card-simple';
import { cn } from '@/lib/utils';

async function CardSimpleDashboard() {
  return CARD_SIMPLES.map(cardSimple => (
    <CardSimple
      key={cardSimple.label}
      className={cn(
        'border border-border',
        cardSimple.label === 'total saldo' ? 'bg-primary/10' : 'bg-accent/25'
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
  ));
}

export default CardSimpleDashboard;

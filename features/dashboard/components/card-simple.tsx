import CardSimple from '@/features/shared/components/card-simple';
import { cn } from '@/lib/utils';
import { Building, DollarSign, GitBranch, Wallet } from 'lucide-react';
import { ReactNode } from 'react';
import { fetchInitialBalances } from '../utils/fetch-initialBalance';
import { fetchOrganizations } from '../utils/fetch-organizations';
import { formatCurrency } from '@/features/core/formatter/currency';

type HandleSetContent = {
  label: string | null;
  content: number | null;
  footer: number | null;
  icon: ReactNode | null;
};

async function CardSimpleDashboard() {
  const { data: organizationsData } = await fetchOrganizations();
  const { data: initialBalancesData } = await fetchInitialBalances();

  function handleSetContent(label: string): HandleSetContent {
    switch (label) {
      case 'total saldo': {
        return {
          label,
          content: initialBalancesData.initial_balances.reduce(
            (total, current) => total + current.amount,
            0
          ),
          footer: null,
          icon: (
            <Wallet className="text-primary w-10 h-10 bg-primary/10 p-2 rounded-lg" />
          ),
        };
      }
      case 'organisasi': {
        return {
          label,
          content: organizationsData.length,
          footer: null,
          icon: (
            <Building className="opacity-50 w-10 h-10 bg-accent/50 p-2 rounded-lg" />
          ),
        };
      }
      case 'cabang': {
        return {
          label,
          content: organizationsData.reduce(
            (total, current) => total + current.branches.length,
            0
          ),
          footer: null,
          icon: (
            <GitBranch className="opacity-50 w-10 h-10 bg-accent/50 p-2 rounded-lg" />
          ),
        };
      }
      case 'transaksi': {
        return {
          label,
          content: organizationsData.reduce(
            (total, current) => total + current.transactions_total,
            0
          ),
          footer: null,
          icon: (
            <DollarSign className="opacity-50 w-10 h-10 bg-accent/50 p-2 rounded-lg" />
          ),
        };
      }
      default: {
        return {
          label,
          content: null,
          footer: null,
          icon: null,
        };
      }
    }
  }

  const createCardData = [
    'total saldo',
    'organisasi',
    'cabang',
    'transaksi',
  ].reduce((arr: HandleSetContent[], curr) => {
    arr.push(handleSetContent(curr));
    return arr;
  }, []);

  return createCardData.map(cardSimple => (
    <CardSimple
      key={cardSimple.label}
      className={cn(
        'border border-border',
        cardSimple.label === 'total saldo' ? 'bg-primary/10' : 'bg-accent/25'
      )}
    >
      <CardSimple.Wrapper>
        <CardSimple.Title>{cardSimple.label}</CardSimple.Title>
        <CardSimple.Content>
          {cardSimple.label === 'total saldo'
            ? formatCurrency({
                amount: cardSimple?.content ?? 0,
                minFracDigits: 2,
              })
            : cardSimple.content}
        </CardSimple.Content>
        <CardSimple.Footer className="text-green-500">
          {cardSimple.footer}
        </CardSimple.Footer>
      </CardSimple.Wrapper>

      <CardSimple.Icon>{cardSimple.icon}</CardSimple.Icon>
    </CardSimple>
  ));
}

export default CardSimpleDashboard;

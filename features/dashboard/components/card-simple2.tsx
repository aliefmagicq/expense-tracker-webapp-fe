import CardSimple2, {
  ORGANIZATIONS,
} from '@/features/shared/components/card-simple-2';
import { Building, DollarSign, GitBranch } from 'lucide-react';

function CardSimpleDashboard2() {
  return ORGANIZATIONS.map(organization => (
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
          <p className="text-sm opacity-50">{organization.description}</p>
        </CardSimple2.Title>
      </CardSimple2.Header>

      <CardSimple2.Main>
        <p className="text-sm opacity-50">Total Balance</p>
        <p className="text-sm">{organization.totalBalance}</p>
      </CardSimple2.Main>

      <CardSimple2.Footer>
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 opacity-50" />
          <p className="text-sm opacity-50">{organization.branch} cabang</p>
        </div>

        <div className="flex items-center gap-1">
          <DollarSign className="w-4 opacity-50" />
          <p className="text-sm opacity-50">
            {organization.transaction} transaksi
          </p>
        </div>
      </CardSimple2.Footer>
    </CardSimple2>
  ));
}

export default CardSimpleDashboard2;

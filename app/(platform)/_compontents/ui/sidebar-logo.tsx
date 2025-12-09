import { Wallet } from 'lucide-react';

export default function SidebarLogo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3.5">{children}</div>
    </div>
  );
}

function Logo() {
  return <Wallet className="w-8 h-8" />;
}

function Content() {
  return (
    <div>
      <h5>Expense Tracker</h5>
      <p className="text-sm">Financial Management</p>
    </div>
  );
}

SidebarLogo.Logo = Logo;
SidebarLogo.Content = Content;

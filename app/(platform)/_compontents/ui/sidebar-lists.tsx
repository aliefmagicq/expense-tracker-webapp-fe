import { cn } from '@/lib/utils';
import {
  Building2Icon,
  DollarSign,
  GitBranch,
  LayoutDashboardIcon,
  Settings,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { ComponentProps } from 'react';

export const SIDEBAR_LISTS = [
  {
    href: '/dashboard',
    icon: <LayoutDashboardIcon className="w-5 h-5" />,
    label: 'dashboard',
  },
  {
    href: '/organizations',
    icon: <Building2Icon className="w-5 h-5" />,
    label: 'organizations',
  },
  {
    href: '/branches',
    icon: <GitBranch className="w-5 h-5" />,
    label: 'branches',
  },
  {
    href: '/transactions',
    icon: <DollarSign className="w-5 h-5" />,
    label: 'transactions',
  },
  {
    href: '/users',
    icon: <Users className="w-5 h-5" />,
    label: 'users',
  },
  {
    href: '/settings',
    icon: <Settings className="w-5 h-5" />,
    label: 'settings',
  },
];

export default function SidebarLists({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}

type ItemProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
};

function Item({ href, children, ...props }: ItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'py-3 px-4 flex items-center rounded-lg hover:bg-accent/50 transition-all duration-200',
        props.className
      )}
    >
      {children}
    </Link>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="ml-4 first-text-uppercase">{children}</p>;
}

SidebarLists.Item = Item;
SidebarLists.Icon = Icon;
SidebarLists.Label = Label;

import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
import { Building, DollarSign, GitBranch, Wallet } from 'lucide-react';

export const CARD_SIMPLES = [
  {
    label: 'total saldo',
    content: 'Rp 120.000.000',
    footer: '+12.5% dari bulan lalu',
    icon: (
      <Wallet className="text-primary w-10 h-10 bg-primary/10 p-2 rounded-lg" />
    ),
  },

  {
    label: 'organisasi',
    content: '4',
    footer: '',
    icon: (
      <Building className="opacity-50 w-10 h-10 bg-accent/50 p-2 rounded-lg" />
    ),
  },

  {
    label: 'cabang',
    content: '14',
    footer: '',
    icon: (
      <GitBranch className="opacity-50 w-10 h-10 bg-accent/50 p-2 rounded-lg" />
    ),
  },

  {
    label: 'transaksi',
    content: '564',
    footer: '+8.2% dari bulan lalu',
    icon: (
      <DollarSign className="opacity-50 w-10 h-10 bg-accent/50 p-2 rounded-lg" />
    ),
  },
];

type CardSimple = ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
};

type Title = ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
};

type Content = ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
};

type Footer = ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
};

export default function CardSimple({ children, ...props }: CardSimple) {
  return (
    <div
      className={cn(
        'flex justify-between p-6 rounded-xl hover:border-red-500/25 transition-all duration-200',
        props.className
      )}
    >
      {children}
    </div>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1">{children}</div>;
}

function Title({ children, ...props }: Title) {
  return (
    <p
      className={cn('text-sm opacity-50 first-text-uppercase', props.className)}
      {...props}
    >
      {children}
    </p>
  );
}

function Content({ children, ...props }: Content) {
  return (
    <h4 className={cn('', props.className)} {...props}>
      {children}
    </h4>
  );
}

function Footer({ children, ...props }: Footer) {
  return (
    <p className={cn('text-sm opacity-70', props.className)} {...props}>
      {children}
    </p>
  );
}

function Icon({ children, ...props }: { children: React.ReactNode }) {
  return <div {...props}>{children}</div>;
}

CardSimple.Wrapper = Wrapper;
CardSimple.Title = Title;
CardSimple.Content = Content;
CardSimple.Footer = Footer;
CardSimple.Icon = Icon;

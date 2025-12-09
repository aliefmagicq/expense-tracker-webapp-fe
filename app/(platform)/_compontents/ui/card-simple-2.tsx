import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export const ORGANIZATIONS = [
  {
    name: 'Pt Maju Bersama',
    description: 'Perusahaan retail dan distribusi barang konsumen',
    totalBalance: 'Rp 125.000.000',
    branch: 2,
    transaction: 156,
  },
  {
    name: 'Pt Indo Kencana',
    description: 'Perusahaan distribusi barang konsumen',
    totalBalance: 'Rp 295.000.000',
    branch: 4,
    transaction: 256,
  },
  {
    name: 'CV Jaya Abadi',
    description: 'Distributor makanan beku',
    totalBalance: 'Rp 80.000.000',
    branch: 1,
    transaction: 80,
  },
  {
    name: 'PT Sinar Harapan',
    description: 'Perusahaan manufaktur tekstil',
    totalBalance: 'Rp 500.000.000',
    branch: 3,
    transaction: 300,
  },
];

export default async function CardSimple2({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="border border-border rounded-xl p-6 bg-accent/20
      hover:border-red-500/25 transition-all duration-200 group"
    >
      {children}
    </Link>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center gap-4 pb-4 group-hover:text-primary transition-all duration-200">
        {children}
      </header>
      <Separator />
    </>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center justify-between gap-2 pt-4">
      {children}
    </main>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  return <footer className="flex items-center gap-4 pt-2">{children}</footer>;
}

CardSimple2.Header = Header;
CardSimple2.Title = Title;
CardSimple2.Main = Main;
CardSimple2.Footer = Footer;

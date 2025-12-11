export default function CardEchartsSimple({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-accent/20 border border-border rounded-xl p-6 hover:border-primary/25 transition-all duration-200">
      {children}
    </div>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header>
      <h5 className="mb-4 font-semibold">{children}</h5>
    </header>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

CardEchartsSimple.Header = Header;
CardEchartsSimple.Main = Main;

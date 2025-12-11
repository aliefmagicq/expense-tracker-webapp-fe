import { getServerSidePathname } from '@/features/core/auth/get-server-side-pathname';
import { ROOT_PATH_PLATFORM } from '@/features/core/routes/root-path';

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

function Header({ children }: { children: React.ReactNode }) {
  return <header className="pt-8 pb-6 px-8">{children}</header>;
}

async function Title() {
  const { pathname, pathnames } = await getServerSidePathname();
  const text =
    ROOT_PATH_PLATFORM.filter(
      rootPath => rootPath.path.split('/').pop() === pathnames?.pop()
    ).at(0)?.text ?? '';

  return (
    <div>
      <h3 className="font-semibold first-text-uppercase">
        {pathname?.split('/').pop()}
      </h3>
      <p className="opacity-50">{text}</p>
    </div>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-8 pb-8 space-y-4 create-scroll h-[calc(100vh-80px)]">
      {children}
    </main>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  return <footer>{children}</footer>;
}

MainContent.Header = Header;
MainContent.Title = Title;
MainContent.Main = Main;
MainContent.Footer = Footer;

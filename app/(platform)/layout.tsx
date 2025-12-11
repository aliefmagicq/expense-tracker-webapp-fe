import Sidebar from '../../features/sidebar/components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-w-full min-h-screen grid grid-cols-[300px_1fr] divide-x">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
}

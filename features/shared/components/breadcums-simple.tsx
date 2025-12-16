import { getServerSidePathname } from '@/features/core/auth/get-server-side-pathname';
import { ChevronRight, House } from 'lucide-react';
import Link from 'next/link';

export default async function BreadcumsSimple() {
  const { pathnames } = await getServerSidePathname();

  return (
    <div className="flex items-center gap-2">
      <House className="w-5 h-5 opacity-50" />
      {pathnames?.map((p, i) => (
        <div className="flex items-center gap-2" key={i}>
          <ChevronRight className="w-5 h-5 opacity-50" />
          {i === pathnames.length - 1 ? (
            <span className="first-text-uppercase">{p}</span>
          ) : (
            <Link href={`/${p}`} className="first-text-uppercase">
              {p}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

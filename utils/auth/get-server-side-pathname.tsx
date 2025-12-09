import { headers } from 'next/headers';

export async function getServerSidePathname() {
  const headerList = await headers();
  const pathname = headerList.get('x-current-path');
  const pathnames = pathname?.split('/').filter(p => p !== '');

  return { pathname, pathnames };
}

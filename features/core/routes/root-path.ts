export class RootPathPlatform {
  constructor(private roots: Record<string, string>[] = []) {}

  public getRoots() {
    return this.roots;
  }
}

export const ROOT_PATH_PLATFORM = new RootPathPlatform([
  {
    path: '/dashboard',
    text: 'Kelola Keuangan Organisasi Anda',
  },
  {
    path: '/organization',
    text: 'Kelola Organisasi Anda',
  },
  {
    path: '/branches',
    text: 'Kelola Cabang Anda',
  },
  {
    path: '/transactions',
    text: 'Kelola Transaksi Anda',
  },
  {
    path: '/users',
    text: 'Kelola Pengguna Anda',
  },
  {
    path: '/settings',
    text: 'Pengaturan',
  },
]).getRoots();

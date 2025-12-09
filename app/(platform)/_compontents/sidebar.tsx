'use client';

import { getFirstPathname } from '@/lib/utils';
import SidebarLists, { SIDEBAR_LISTS } from './ui/sidebar-lists';
import SidebarLogo from './ui/sidebar-logo';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const firstPathname = getFirstPathname(pathname);

  return (
    <aside>
      <div className="px-6 py-6">
        <SidebarLogo>
          <SidebarLogo.Logo />
          <SidebarLogo.Content />
        </SidebarLogo>
      </div>

      <div className="px-4 gap-2">
        <SidebarLists>
          {SIDEBAR_LISTS.map((item, i) => (
            <SidebarLists.Item
              href={item.href}
              className={
                firstPathname === getFirstPathname(item.href)
                  ? 'bg-accent/50 text-primary'
                  : ''
              }
              key={i}
            >
              <SidebarLists.Icon>{item.icon}</SidebarLists.Icon>
              <SidebarLists.Label>{item.label}</SidebarLists.Label>
            </SidebarLists.Item>
          ))}
        </SidebarLists>
      </div>
    </aside>
  );
}

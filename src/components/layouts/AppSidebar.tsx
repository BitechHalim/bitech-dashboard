'use client';
import * as React from 'react';
import { Command } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { NavMain } from '@/components/layouts/NavMain';
import { NavUser } from '@/components/layouts/NavUser';
import { menuItems } from '@/components/layouts/data/menuItems';

const data = {
  user: {
    name: 'User',
    email: 'user@example.com',
    avatar: '/avatars/user.jpg',
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Update active states based on current path
  const navMainWithActive = menuItems.map(item => ({
    ...item,
    isActive:
      pathname === item.url ||
      (item.items?.some(subItem => subItem.url === pathname) ?? false),
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Command className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Bitech Company</span>
            <span className="text-xs text-muted-foreground">
              Management Portal
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainWithActive} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

export default AppSidebar;

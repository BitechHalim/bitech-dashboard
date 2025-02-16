'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { menuItems } from '@/components/layouts/data/menuItems';
import CommandSearch from '@/components/layouts/CommandSearch';

const AppNavigationBar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-4 px-4">
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map(item => (
              <NavigationMenuItem key={item.url}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {item.items?.map(subItem => (
                      <li key={subItem.url} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={subItem.url}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {subItem.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <CommandSearch />
        </div>
      </div>
    </div>
  );
};

export default AppNavigationBar;

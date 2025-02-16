import React, { useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { menuItems } from '@/components/layouts/data/menuItems';
import { useRouter } from 'next/navigation';

interface CommandSearchProps {
  className?: string;
  buttonClassName?: string;
}

interface FlatMenuItem {
  title: string;
  url: string;
  parentTitle?: string;
  icon?: React.ComponentType;
}

const CommandSearch = ({ className, buttonClassName }: CommandSearchProps) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  // Flatten menu items for searching
  const flattenedSearchableItems = useMemo(() => {
    const items: FlatMenuItem[] = [];

    menuItems.forEach(item => {
      // Add main menu item
      items.push({
        title: item.title,
        url: item.url,
        icon: item.icon,
      });

      // Add sub-items with parent reference
      item.items?.forEach(subItem => {
        items.push({
          title: subItem.title,
          url: subItem.url,
          parentTitle: item.title,
          icon: item.icon,
        });
      });
    });

    return items;
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setOpen(prev => !prev);
      }
    };
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, []);

  const onSelect = (url: string) => {
    setOpen(false);
    router.push(url);
  };

  function isMatchingSection(
    item: FlatMenuItem,
    sectionTitle: string,
  ): boolean {
    return item.parentTitle === sectionTitle || item.title === sectionTitle;
  }

  return (
    <div className={className}>
      <Button
        variant="outline"
        className={cn(
          'relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2',
          buttonClassName,
        )}
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all pages and commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {menuItems.map(section => (
            <CommandGroup key={section.title} heading={section.title}>
              {flattenedSearchableItems
                .filter(item => isMatchingSection(item, section.title))
                .map(item => {
                  const Icon = item.icon;
                  return (
                    <CommandItem
                      key={Math.random()}
                      value={`${item.title} ${item.parentTitle || ''}`}
                      onSelect={() => onSelect(item.url)}
                    >
                      {Icon && <Icon />}
                      <span>{item.title}</span>
                      {item.parentTitle && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          in {item.parentTitle}
                        </span>
                      )}
                    </CommandItem>
                  );
                })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default CommandSearch;

'use client';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const generateBreadcrumbs = () => {
    return pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(1, index + 2).join('/');
      return (
        <BreadcrumbItem key={href}>
          <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
          {index < pathSegments.length - 2 && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      );
    });
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {generateBreadcrumbs()}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

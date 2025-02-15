import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layouts/AppSidebar';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/ThemeToggle';
import { Breadcrumbs } from '@/components/layouts/Breadcrumbs';
import AppNavigationBar from '@/components/layouts/AppNavigationBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs />

            <div className={`flex flex-1 items-center justify-end`}>
              <AppNavigationBar />
            </div>
            <ModeToggle />
          </header>
          <main className={'p-5'}>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

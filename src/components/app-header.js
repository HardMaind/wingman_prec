// import Link from 'next/link';
import NavigationTabs from '@/components/nav-header';
// import { SidebarTrigger } from '@/components/ui/sidebar';

export function AppHeader() {
  return (
    <header className="flex shrink-0 items-center gap-2 transition-[width,height] ease-linear border-b border-gray-200">
      <div className="flex items-center gap-2 px-4 py-6">
        {/* <SidebarTrigger className="-ml-1" /> */}
        <NavigationTabs />
      </div>
    </header>
  );
}

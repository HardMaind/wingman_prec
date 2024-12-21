'use client';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from '@/components/ui/sidebar';


export function NavProjects({ projects }) {
  return (
    // <SidebarGroup className="group-data-[collapsible=icon]:hidden">
    <SidebarGroup className="px-3">
      {/* <SidebarGroupLabel>Projects</SidebarGroupLabel> */}
      <SidebarMenu className="sidebar-menu">
        {projects.map((item) => {
          const isActive = false;
          // const isActive = item.url == window.location.pathname;
          // const isActive = item.url == router.name;

          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton className="sidebar-menu-btn group" asChild isActive={isActive}>
                <Link href={item.url} passHref>
                  <item.logo />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

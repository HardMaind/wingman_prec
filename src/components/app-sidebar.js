'use client';

import * as React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.png';
import house from '@/components/icons/house';
import chat from '@/components/icons/chat';
import user from '@/components/icons/user';

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  // Frame,
  GalleryVerticalEnd,
  // Map,
  // PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

// import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
// import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'yash borda',
    email: 'me@example.com',
    avatar: null,
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  menu: [
    {
      name: 'Home',
      url: '/',
      logo: house,
      tooltip: 'Home',
    },
    {
      name: 'Chat',
      url: '/chat',
      logo: chat,
      tooltip: 'Chat',
    },
    {
      name: 'User',
      url: '/user',
      logo: user,
      tooltip: 'User',
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="px-3 pt-4">
        {/* <TeamSwitcher teams={data.teams} /> */}
        <Image src={logo} alt="Logo" width={33.2} height={33.2} />
      </SidebarHeader>
      <div className="diver-line"></div>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.menu} />
      </SidebarContent>
      <SidebarFooter className="px-3">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

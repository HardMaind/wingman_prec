'use client';

import { cn } from '@/lib/utils'; 
import { useState } from 'react';
import { ChartPie, Tag, MessageCircle } from 'lucide-react'; 

const tabs = [
  { name: 'Summary', icon: ChartPie, activeColor: 'bg-teal-100 text-black' },
  { name: 'Sales', icon: Tag, activeColor: 'bg-teal-100 text-black' },
  { name: 'Chats', icon: MessageCircle, activeColor: 'bg-teal-100 text-black' },
];

export default function NavigationTabs() {
  const [activeTab, setActiveTab] = useState('Summary');

  return (
    <div className="flex items-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={cn(
            'flex items-center px-4 py-2 rounded-full font-medium transition-colors',
            tab.name === activeTab ? `${tab.activeColor}` : 'text-gray-500 hover:bg-gray-100'
          )}
        >
          <tab.icon
            className={cn('w-4 h-4 mr-2', tab.name === activeTab ? 'text-black' : 'text-gray-400')}
          />
          {tab.name}
        </button>
      ))}
    </div>
  );
}

'use client';

import { cn } from '@/lib/utils'; 
import { useState } from 'react';
import { Leaf, Tag, MessageCircle } from 'lucide-react'; 

const tabs = [
  { name: 'Summary', icon: Leaf, activeColor: 'bg-teal-100 text-black' },
  { name: 'Sales', icon: Tag, activeColor: 'bg-gray-100 text-gray-500' },
  { name: 'Chats', icon: MessageCircle, activeColor: 'bg-gray-100 text-gray-500' },
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
            activeTab === tab.name ? `${tab.activeColor}` : 'text-gray-500 hover:bg-gray-100'
          )}
        >
          {/* <tab.icon
            className={cn('w-4 h-4 mr-2', activeTab === tab.name ? 'text-black' : 'text-gray-400')}
          /> */}
          {tab.name}
        </button>
      ))}
    </div>
  );
}

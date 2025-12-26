import React, { useMemo, useState } from 'react';
import { TEA_CATALOG } from '../constants';
import { TeaCategory, TeaListItem } from '../types';
import { BookOpen, Search } from 'lucide-react';

interface SidebarProps {
  onSelect: (tea: TeaListItem) => void;
  selectedId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelect, selectedId, isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Group teas by category with filter
  const groupedTeas = useMemo(() => {
    const groups: Partial<Record<TeaCategory, TeaListItem[]>> = {};
    
    const filteredCatalog = TEA_CATALOG.filter(tea => 
      tea.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tea.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    Object.values(TeaCategory).forEach(cat => {
      const items = filteredCatalog.filter(t => t.category === cat);
      if (items.length > 0) {
        groups[cat] = items;
      }
    });
    return groups;
  }, [searchTerm]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-30 w-72 bg-tea-800 text-tea-100 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          flex flex-col h-full border-r border-tea-700 shadow-2xl md:shadow-none
        `}
      >
        {/* Brand Header */}
        <div className="p-6 border-b border-tea-700 bg-tea-900 flex items-center gap-3">
            <BookOpen className="text-tea-300" />
            <div>
                <h1 className="text-xl font-serif font-bold tracking-widest text-tea-50">普洱茶谱</h1>
                <p className="text-xs text-tea-400 uppercase tracking-wider">Compendium</p>
            </div>
        </div>

        {/* Search Input */}
        <div className="px-4 py-3 bg-tea-800 border-b border-tea-700">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="搜寻茶品..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-tea-900 text-tea-100 text-sm rounded-md pl-9 pr-3 py-2 border border-tea-700 focus:outline-none focus:border-tea-500 placeholder-tea-600 transition-colors"
                />
                <Search className="absolute left-2.5 top-2.5 text-tea-500" size={16} />
            </div>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {Object.keys(groupedTeas).length === 0 ? (
             <div className="text-center text-tea-500 text-sm py-8">
               未找到相关茶品
             </div>
          ) : (
            Object.entries(groupedTeas).map(([category, items]) => {
              const teaItems = items as TeaListItem[];
              return (
                <div key={category} className="mb-8">
                  <h3 className="text-xs font-bold text-tea-400 uppercase tracking-widest mb-3 px-2 border-l-2 border-tea-500 ml-1">
                    {category}
                  </h3>
                  <ul className="space-y-1">
                    {teaItems.map((tea) => (
                      <li key={tea.id}>
                        <button
                          onClick={() => {
                            onSelect(tea);
                            if (window.innerWidth < 768) onClose();
                          }}
                          className={`
                            w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 flex justify-between items-center group
                            ${selectedId === tea.id 
                              ? 'bg-tea-600 text-white shadow-md' 
                              : 'hover:bg-tea-700 text-tea-200 hover:text-white'}
                          `}
                        >
                          <span className="font-medium truncate">{tea.name}</span>
                          {/* 页码已去掉 */}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-tea-700 bg-tea-900 flex justify-center items-center">
            <span className="text-xs text-tea-500">普洱茶谱集锦 · 离线典藏版</span>
        </div>
      </aside>
    </>
  );
};

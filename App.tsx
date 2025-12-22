import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { TeaDetail } from './components/TeaDetail';
import { TeaListItem, TeaDetailData } from './types';
import { generateTeaDetails } from './services/geminiService';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [selectedTea, setSelectedTea] = useState<TeaListItem | null>(null);
  const [teaDetail, setTeaDetail] = useState<TeaDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Cache generated results to avoid re-fetching (Memory cache)
  const [cache, setCache] = useState<Record<string, TeaDetailData>>({});

  const handleTeaSelect = useCallback(async (tea: TeaListItem) => {
    setSelectedTea(tea);
    setIsSidebarOpen(false); // Close mobile sidebar on select
    
    // Check cache first
    if (cache[tea.id]) {
      setTeaDetail(cache[tea.id]);
      return;
    }

    setLoading(true);
    setTeaDetail(null);

    // Fetch from Local Database
    try {
      // Pass ID instead of name for better lookup in the new service
      const data = await generateTeaDetails(tea.id);
      setTeaDetail(data);
      setCache(prev => ({ ...prev, [tea.id]: data }));
    } catch (error) {
      console.error("Failed to load tea details", error);
    } finally {
      setLoading(false);
    }
  }, [cache]);

  return (
    <div className="flex h-screen w-full bg-tea-50 overflow-hidden font-sans">
      
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-40">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-tea-800 text-white rounded shadow-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      <Sidebar 
        onSelect={handleTeaSelect} 
        selectedId={selectedTea?.id || null} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 h-full overflow-y-auto relative w-full">
        <TeaDetail 
            data={teaDetail} 
            loading={loading} 
            selectedName={selectedTea?.name || ''} 
        />
      </main>

    </div>
  );
};

export default App;
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BottomNav from '../components/BottomNav';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary text-primary font-sans flex flex-col transition-colors duration-200">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="flex-1 flex flex-col min-w-0 pb-24"> {/* Added padding bottom for fixed nav */}
        {/* Content Area - Centered Reader Mode */}
        <div className="flex-1 w-full max-w-6xl mx-auto p-6 md:p-12">
          <Outlet />
        </div>
      </main>

      <BottomNav onMenuClick={() => setSidebarOpen(true)} />
    </div>
  );
};

export default MainLayout;

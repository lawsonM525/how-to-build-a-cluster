import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { navigation } from '../data/navigation';

interface BottomNavProps {
  onMenuClick: () => void;
}

const BottomNav = ({ onMenuClick }: BottomNavProps) => {
  const location = useLocation();
  
  // Flatten navigation for easy traversal
  const flatNav = navigation.flatMap(item => {
    const items = [];
    if (item.path === '/' || item.chapters.length === 0) {
      items.push({ title: item.title, path: item.path });
    }
    
    item.chapters.forEach(chapter => {
      items.push({ title: chapter.title, path: chapter.path });
    });
    
    return items;
  });

  const currentIndex = flatNav.findIndex(item => item.path === location.pathname);
  const prev = currentIndex > 0 ? flatNav[currentIndex - 1] : null;
  const next = currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-white/10 p-4">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        {prev ? (
          <Link 
            to={prev.path}
            className="p-2 text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
            title={`Previous: ${prev.title}`}
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline text-sm font-medium group-hover:underline decoration-white/30 underline-offset-4">{prev.title}</span>
          </Link>
        ) : (
          <div className="w-10" /> // Spacer
        )}

        <button 
          onClick={onMenuClick}
          className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
          title="Open Menu"
        >
          <Menu size={20} />
        </button>

        {next ? (
          <Link 
            to={next.path}
            className="p-2 text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
            title={`Next: ${next.title}`}
          >
            <span className="hidden sm:inline text-sm font-medium group-hover:underline decoration-white/30 underline-offset-4">{next.title}</span>
            <ChevronRight size={20} />
          </Link>
        ) : (
          <div className="w-10" /> // Spacer
        )}
      </div>
    </div>
  );
};

export default BottomNav;

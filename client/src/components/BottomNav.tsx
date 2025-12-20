import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, Sun, Moon, Home } from 'lucide-react';
import { navigation } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';

interface BottomNavProps {
  onMenuClick: () => void;
}

const BottomNav = ({ onMenuClick }: BottomNavProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg-primary p-4 transition-colors duration-200">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        {prev ? (
          <Link 
            to={prev.path}
            className="p-2 text-primary/60 hover:text-primary transition-colors flex items-center gap-2 group"
            title={`Previous: ${prev.title}`}
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline text-sm font-medium group-hover:underline decoration-primary/30 underline-offset-4">{prev.title}</span>
          </Link>
        ) : (
          <div className="w-10" /> // Spacer
        )}

        <div className="flex items-center gap-4">
          <Link 
            to="/"
            className="p-3 rounded-full text-primary hover:bg-bg-secondary transition-all"
            title="Go to Home"
          >
            <Home size={20} />
          </Link>

          <button 
            onClick={toggleTheme}
            className="p-3 rounded-full text-primary hover:bg-bg-secondary transition-all"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={onMenuClick}
            className="p-3 rounded-full text-primary hover:bg-bg-secondary transition-all"
            title="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {next ? (
          <Link 
            to={next.path}
            className="p-2 text-primary/60 hover:text-primary transition-colors flex items-center gap-2 group"
            title={`Next: ${next.title}`}
          >
            <span className="hidden sm:inline text-sm font-medium group-hover:underline decoration-primary/30 underline-offset-4">{next.title}</span>
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

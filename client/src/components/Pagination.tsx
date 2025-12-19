import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { navigation } from '../data/navigation';

const Pagination = () => {
  const location = useLocation();
  
  // Flatten navigation for easy traversal
  const flatNav = navigation.flatMap(item => {
    const items = [];
    // Add the main item if it's a page (has no chapters or is explicitly a page like home)
    if (item.path === '/' || item.chapters.length === 0) {
      items.push({ title: item.title, path: item.path });
    }
    
    // If it has chapters, they are the pages. 
    // Usually section headers with chapters aren't pages themselves in this design, 
    // or they redirect to the first chapter.
    // Based on App.tsx, section paths redirect to the first chapter.
    // So we only include chapters if they exist.
    
    item.chapters.forEach(chapter => {
      items.push({ title: chapter.title, path: chapter.path });
    });
    
    return items;
  });

  const currentIndex = flatNav.findIndex(item => item.path === location.pathname);

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? flatNav[currentIndex - 1] : null;
  const next = currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center mt-16 pt-8 border-t border-base02">
      {prev ? (
        <Link 
          to={prev.path}
          className="group flex flex-col items-start gap-1"
        >
          <span className="text-sm text-base05 group-hover:text-base0D flex items-center gap-1">
            <ChevronLeft size={16} /> Previous
          </span>
          <span className="text-lg font-bold text-base06 group-hover:text-base07 transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div /> /* Spacer */
      )}

      {next ? (
        <Link 
          to={next.path}
          className="group flex flex-col items-end gap-1"
        >
          <span className="text-sm text-base05 group-hover:text-base0D flex items-center gap-1">
            Next <ChevronRight size={16} />
          </span>
          <span className="text-lg font-bold text-base06 group-hover:text-base07 transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div /> /* Spacer */
      )}
    </div>
  );
};

export default Pagination;

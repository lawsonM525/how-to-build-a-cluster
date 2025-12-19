import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, ChevronRight, ChevronDown } from 'lucide-react';
import { navigation } from '../data/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(navigation.map(n => n.title));

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    );
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-base01/90 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 z-50 h-screen w-80 bg-black border-r border-white/20 flex flex-col shadow-2xl"
      >
        <div className="p-6 border-b border-white/20 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-wider">CLUSTER GUIDE</h1>
          <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-black">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path || item.chapters.some(c => location.pathname === c.path);
            const isExpanded = expandedSections.includes(item.title);
            const Icon = item.icon;

            return (
              <div key={item.path} className="mb-2">
                {item.chapters.length > 0 ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleSection(item.title)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                        isActive ? 'text-white font-bold bg-white/10' : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-10 pr-2 py-1 space-y-1 border-l border-white/10 ml-5">
                             <NavLink
                                to={item.path}
                                end
                                className={({ isActive }) =>
                                  `block text-sm py-1.5 px-2 rounded hover:text-white transition-colors ${
                                    isActive ? 'text-white font-bold bg-white/5' : 'text-white/60'
                                  }`
                                }
                                onClick={() => setIsOpen(false)}
                              >
                                Overview
                              </NavLink>
                            {item.chapters.map((chapter) => (
                              <NavLink
                                key={chapter.path}
                                to={chapter.path}
                                className={({ isActive }) =>
                                  `block text-sm py-1.5 px-2 rounded hover:text-white transition-colors ${
                                    isActive ? 'text-white font-bold bg-white/5' : 'text-white/60'
                                  }`
                                }
                                onClick={() => setIsOpen(false)}
                              >
                                {chapter.title}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive ? 'text-white font-bold bg-white/10' : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.title}</span>
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/20 text-xs text-white/40 text-center">
          <p>v1.0.0 • By The Robots</p>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;

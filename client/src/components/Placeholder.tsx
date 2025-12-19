import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const Placeholder = ({ title }: { title?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
      <Construction size={64} className="text-white/20" strokeWidth={1} />
      <h2 className="text-3xl font-bold text-white border-b-0">{title || "Work in Progress"}</h2>
      <p className="text-white/60 max-w-md">
        This section of the guide is currently being written by The Robots. 
        Check back soon for updates.
      </p>
      <Link 
        to="/" 
        className="text-white hover:text-white/80 underline decoration-white/40 decoration-2 underline-offset-4"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default Placeholder;

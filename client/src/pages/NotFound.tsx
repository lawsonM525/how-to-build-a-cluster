import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <AlertTriangle size={64} className="text-white/20" strokeWidth={1} />
      <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
      <p className="text-xl text-white/60 max-w-md">
        The node you are looking for seems to be offline or doesn't exist in this cluster.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 border border-white/40 text-white font-bold rounded hover:bg-white hover:text-black transition-all"
      >
        Return to Safety
      </Link>
    </div>
  );
};

export default NotFound;

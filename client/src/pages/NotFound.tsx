import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <AlertTriangle size={64} className="text-primary/20" strokeWidth={1} />
      <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="text-xl text-primary/60 max-w-md">
        The node you are looking for seems to be offline or doesn't exist in this cluster.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-bg-secondary/30 text-primary font-bold rounded hover:bg-bg-secondary/50 transition-all"
      >
        Return to Safety
      </Link>
    </div>
  );
};

export default NotFound;

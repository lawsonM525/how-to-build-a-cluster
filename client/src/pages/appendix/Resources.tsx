import { Book, Globe, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Appendix
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          Further reading, tools, and a glossary of terms used in this guide.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">Glossary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                { term: 'Node', def: 'A single computer in a cluster.' },
                { term: 'Head Node', def: 'The master computer that manages the cluster.' },
                { term: 'Compute Node', def: 'A worker computer that performs calculations.' },
                { term: 'HPC', def: 'High Performance Computing.' },
                { term: 'Latency', def: 'Time it takes for a single message to travel.' },
                { term: 'Throughput', def: 'Amount of data moved per second.' },
                { term: 'MPI', def: 'Message Passing Interface. Protocol for distributed communication.' },
                { term: 'Scheduler', def: 'Software that assigns jobs to resources (e.g., Slurm).' },
                { term: 'FLOPs', def: 'Floating Point Operations per Second.' },
                { term: 'Core', def: 'A processing unit within a CPU.' }
            ].map((item) => (
                <div key={item.term} className="p-3 border border-border rounded bg-bg-secondary/10">
                    <span className="font-bold block mb-1">{item.term}</span>
                    <span className="text-sm text-primary/80">{item.def}</span>
                </div>
            ))}
        </div>
      </section>
 
      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/perf-sec/security" className="text-primary/60 hover:text-primary">
            ← Previous: Security
         </Link>
         <Link to="/" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Return Home →
         </Link>
      </div>
    </div>
  );
};

export default Resources;

import { Zap, Clock } from 'lucide-react';
import Note from '../../components/Note';
import { Link } from 'react-router-dom';

const Benchmarking = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 11: Benchmarking
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          How do we know if the cluster is fast? We race it.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">11.1 Measuring Performance</h2>
        
        <div className="bg-bg-secondary/20 p-6 rounded border border-border">
            <h3 className="font-bold mb-2">Theoretical Peak FLOPS</h3>
            <p className="text-sm text-primary/80 mb-4">
                The absolute speed limit of your hardware, assuming spherical cows in a vacuum.
            </p>
            <div className="font-mono text-sm bg-bg-primary p-3 rounded border border-border">
                Cores × Clock Speed (Hz) × FLOPs/Cycle = Peak FLOPS
            </div>
        </div>

        <div className="space-y-4 mt-8">
            <h3 className="font-bold flex items-center gap-2"><Zap size={20}/> High-Performance Linpack (HPL)</h3>
            <p className="text-primary/80">
                The benchmark used for the <strong>Top500</strong> list. 
                It solves a dense linear system of equations (Ax = b).
                It stresses the CPU floating point units and memory bandwidth.
            </p>
        </div>

        <div className="space-y-4 mt-8">
            <h3 className="font-bold flex items-center gap-2"><Clock size={20}/> Micro-benchmarks</h3>
            <p className="text-primary/80">
                HPL measures the whole system. Micro-benchmarks test specific parts.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded">
                    <h4 className="font-bold mb-1">OSU Micro-Benchmarks</h4>
                    <p className="text-xs text-primary/60">Measures MPI latency and bandwidth. Crucial for checking your network interconnect.</p>
                </div>
                <div className="p-4 border border-border rounded">
                    <h4 className="font-bold mb-1">Stream</h4>
                    <p className="text-xs text-primary/60">Measures memory bandwidth.</p>
                </div>
            </div>
        </div>

        <Note type="warning" title="Heat Warning">
            Benchmarks run hardware at 100%. Watch your temperatures!
        </Note>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/apps/optimization" className="text-primary/60 hover:text-primary">
            ← Previous: Optimization
         </Link>
         <Link to="/perf-sec/security" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Security →
         </Link>
      </div>
    </div>
  );
};

export default Benchmarking;

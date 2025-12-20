import { Zap, Code, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Optimization = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 11: Optimization and Libraries
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          Writing code is one thing. Writing code that actually uses 100% of your supercomputer is another.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">11.1 Mathematical Libraries</h2>
        <p className="text-primary/80">
            Don't reinvent the wheel. Smart people have spent decades optimizing matrix multiplication. Use their code.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="p-4 border border-border rounded">
                <h3 className="font-bold mb-1 flex items-center gap-2"><Calculator size={18}/> BLAS & LAPACK</h3>
                <p className="text-sm text-primary/80">
                    <strong>Basic Linear Algebra Subprograms</strong>. The building blocks of scientific computing.
                    Implementations: Intel MKL, OpenBLAS, ATLAS.
                </p>
            </div>
            <div className="p-4 border border-border rounded">
                <h3 className="font-bold mb-1 flex items-center gap-2"><Zap size={18}/> FFTW</h3>
                <p className="text-sm text-primary/80">
                    <strong>Fastest Fourier Transform in the West</strong>. Critical for signal processing and physics simulations.
                </p>
            </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">11.2 Compiler Optimization</h2>
        
        <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2"><Code size={20}/> Vectorization (SIMD)</h3>
             <p className="text-primary/80">
                Modern CPUs can do 4, 8, or 16 math operations in a single clock cycle (AVX-512). 
                If your code does them one by one, you are wasting 90% of the CPU.
             </p>
        </div>

        <div className="space-y-4 mt-6">
             <h3 className="font-bold">Compiler Flags (GCC)</h3>
             <div className="grid grid-cols-1 gap-2">
                 <div className="flex items-center justify-between p-3 bg-bg-secondary/10 rounded border border-border">
                    <code className="font-bold">-O0</code>
                    <span className="text-sm text-primary/60">No optimization. Good for debugging.</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-bg-secondary/10 rounded border border-border">
                    <code className="font-bold">-O2</code>
                    <span className="text-sm text-primary/60">Standard optimization. Safe.</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-bg-secondary/10 rounded border border-border">
                    <code className="font-bold">-O3</code>
                    <span className="text-sm text-primary/60">Aggressive optimization. Enables vectorization. <strong className="text-primary">Use this for benchmarks!</strong></span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-bg-secondary/10 rounded border border-border">
                    <code className="font-bold">-Ofast</code>
                    <span className="text-sm text-primary/60">Disregards strict standards for speed. "Fast math". Dangerous? Maybe.</span>
                 </div>
             </div>
        </div>
        
        <h3 className="font-bold mt-6">Algorithmic Optimization</h3>
        <p className="text-primary/80">
            A good compiler can't fix a bad algorithm. This is where algorithmic thinking from your algorithms class comes in. Look through your code to see if it is time efficient and memory efficient.
            Check out: <strong>Cannon’s Algorithm</strong> for distributed matrix multiplication -- minimizes communication between nodes.
        </p>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/apps/gpu" className="text-primary/60 hover:text-primary">
            ← Previous: GPU Programming
         </Link>
         <Link to="/perf-sec/benchmarking" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Benchmarking →
         </Link>
      </div>
    </div>
  );
};

export default Optimization;

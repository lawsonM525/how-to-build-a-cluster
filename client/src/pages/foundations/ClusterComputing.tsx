import { History, Zap, TrendingUp } from 'lucide-react';
import Note from '../../components/Note';

const ClusterComputing = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">The World of Cluster Computing</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          Computing power drives progress. The integrated circuit changed everything.
          We squeeze more components onto silicon every year. Economics dictates this.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <History size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">1.1 The Evolution of Integration</h2>
        </div>
        <p className="text-primary/80">
          Gordon Moore predicted the future in 1965. He saw the unit cost falling as component count rose.
          He predicted 65,000 components on a single chip by 1975. He was right.
        </p>
        <div className="bg-bg-primary border border-border p-6 rounded">
          <h3 className="text-lg font-bold text-primary mt-0">Why Integration Wins</h3>
          <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm mt-4">
            <li><strong>Reliability:</strong> Integrated circuits fail less often than vacuum tubes.</li>
            <li><strong>Speed:</strong> Smaller structures operate faster. Signals travel shorter distances.</li>
            <li><strong>Cost:</strong> You print the circuit. You do not wire it by hand.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <TrendingUp size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">1.2 The Rise of the GPU</h2>
        </div>
        <p className="text-primary/80">
          CPUs hit a wall. Clock speeds plateaued. Parallelism became the new path.
          The GPU evolved from a fixed graphics toy to a general-purpose beast.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-primary border border-border p-6 rounded">
            <h3 className="text-lg font-bold text-primary mt-0">CPU vs GPU</h3>
            <p className="text-primary/70 text-sm">
              The CPU optimizes for latency. It wants to finish one task fast.
              The GPU optimizes for throughput. It wants to finish a billion tasks eventually.
            </p>
          </div>
          <div className="bg-bg-primary border border-border p-6 rounded">
            <h3 className="text-lg font-bold text-primary mt-0">The Latency Gap</h3>
            <p className="text-primary/70 text-sm">
              Visual systems work in milliseconds. Processors work in nanoseconds.
              The GPU hides latency with massive parallelism. It keeps thousands of primitives in flight.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Zap size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">1.3 Modern Architectures</h2>
        </div>
        <p className="text-primary/80">
          Today's GPU is a programmable engine. It has peak arithmetic bandwidth that dwarfs the CPU.
          We use it for game physics. We use it for protein folding. We use it to solve problems that were impossible ten years ago.
        </p>
        <Note type="info" title="The Unified Shader">
          Old GPUs had separate units for vertices and fragments. 
          New GPUs use unified shaders. They load balance automatically. 
          Your compute job runs on the same cores as your graphics job.
        </Note>
      </section>
    </div>
  );
};

export default ClusterComputing;

import { Cpu, HardDrive, Network, Zap, Server } from 'lucide-react';
import Note from '../../components/Note';
import { Link } from 'react-router-dom';

const Design = () => {
  return (
    <div className="space-y-12 w-full">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 2: Designing the Frame
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          The foundation of any cluster is its hardware. You need to balance performance, power efficiency, and cost. 
          Let's select the right components for your "Beowulf".
        </p>
      </div>

      {/* 2.1 Compute Nodes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">2.1 Compute Nodes</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Cpu size={20} /> Processor (CPU)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-primary/80">
              <li><strong>Core Count:</strong> More cores = more parallelism (MIMD).</li>
              <li><strong>Clock Speed:</strong> Faster individual tasks.</li>
              <li><strong>Architecture:</strong> x86_64 is standard. ARM (Raspberry Pi) is efficient.</li>
            </ul>
            <Note type="info" title="AI & Simulation?">
               If you are interested in AI or heavy simulations, you might want to consider <Link to="/apps/optimization" className="underline">Accelerators (GPUs)</Link>.
            </Note>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Zap size={20} /> Memory (RAM)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-primary/80">
                <li><strong>Capacity:</strong> Aim for at least 2GB per core.</li>
                <li><strong>Bandwidth:</strong> Dual-channel is a must for performance.</li>
                <li><strong>ECC (Error Correcting Code):</strong> Critical for long-running scientific jobs to prevent bit rot.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-bold mt-6">Form Factors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded bg-bg-secondary/10">
                <div className="font-bold mb-1">Raspberry Pi</div>
                <div className="text-xs text-primary/60">Low power, low cost, huge community. Great for learning.</div>
            </div>
            <div className="p-4 border border-border rounded bg-bg-secondary/10 border-l-4 border-l-primary">
                <div className="font-bold mb-1">Mini PCs (TinyMiniMicro)</div>
                <div className="text-xs text-primary/60">Best balance of power/space. x86 compatibility. (Recommended)</div>
            </div>
             <div className="p-4 border border-border rounded bg-bg-secondary/10">
                <div className="font-bold mb-1">Enterprise Racks</div>
                <div className="text-xs text-primary/60">Loud, power-hungry, extremely powerful. For dedicated labs.</div>
            </div>
        </div>
      </section>

      {/* 2.2 Network */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">2.2 How it all connects</h2>
        <p className="text-primary/80">
            In a cluster, the network is often the bottleneck. 
        </p>

        <div className="bg-bg-secondary/20 p-6 rounded-lg border border-border">
            <h3 className="font-bold flex items-center gap-2 mb-4"><Network size={20}/> Latency vs. Bandwidth</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-bold text-sm uppercase text-primary/60">Bandwidth</h4>
                    <p className="text-sm">How <em>much</em> data can move at once (e.g., streaming video).</p>
                    <div className="w-full bg-border h-2 mt-2 rounded-full overflow-hidden">
                        <div className="bg-primary w-3/4 h-full" />
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase text-primary/60">Latency</h4>
                    <p className="text-sm">How <em>fast</em> a single message arrives (e.g., gaming, MPI messages).</p>
                     <div className="w-full bg-border h-2 mt-2 rounded-full overflow-hidden">
                        <div className="bg-primary w-1/4 h-full" />
                    </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div>
                <h3 className="font-bold mb-2">The Standard: Ethernet</h3>
                <ul className="text-sm space-y-1 text-primary/80">
                    <li><strong>1GbE:</strong> Cheap, ubiquitous. Okay for learning.</li>
                    <li><strong>10GbE:</strong> The sweet spot for home labs. Requires DAC or Fiber.</li>
                </ul>
            </div>
             <div>
                <h3 className="font-bold mb-2">The Pro: InfiniBand</h3>
                <ul className="text-sm space-y-1 text-primary/80">
                    <li>Extremely low latency.</li>
                    <li>Uses RDMA (Remote Direct Memory Access) to skip the CPU.</li>
                    <li>Expensive and complex to set up.</li>
                </ul>
            </div>
        </div>
      </section>

      {/* 2.3 Storage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">2.3 Storage Infrastructure</h2>
        
        <div className="flex flex-col items-center py-6">
             <div className="w-64 space-y-1">
                <div className="text-center text-xs font-bold mb-2">The Storage Pyramid</div>
                <div className="w-16 mx-auto bg-primary h-4 rounded-t-sm" title="Registers" />
                <div className="w-24 mx-auto bg-primary/80 h-6" title="L1/L2/L3 Cache" />
                <div className="w-32 mx-auto bg-primary/60 h-8 flex items-center justify-center text-bg-primary text-xs font-bold" >RAM</div>
                <div className="w-48 mx-auto bg-primary/40 h-10 flex items-center justify-center text-xs font-bold">SSD (NVMe/SATA)</div>
                <div className="w-64 mx-auto bg-primary/20 h-12 rounded-b-sm flex items-center justify-center text-xs font-bold">HDD / Tape</div>
             </div>
             <p className="text-xs text-primary/60 mt-4 text-center max-w-sm">
                Fast & Small (Top) vs. Slow & Huge (Bottom)
             </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded">
                <h4 className="font-bold mb-1"><HardDrive className="inline mr-2" size={16}/> OS & Scratch</h4>
                <p className="text-sm text-primary/80">Use <strong>NVMe SSDs</strong>. When a node is crunching numbers, it needs fast temporary space (scratch).</p>
            </div>
            <div className="p-4 border border-border rounded">
                 <h4 className="font-bold mb-1"><Server className="inline mr-2" size={16}/> Bulk Storage</h4>
                <p className="text-sm text-primary/80">Use <strong>HDDs</strong> in a NAS or Head Node. Good for datasets that don't need instant access.</p>
            </div>
        </div>
      </section>

      {/* 2.4 Accelerators */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">2.4 Accelerators</h2>
        <p>
            Sometimes a CPU isn't enough.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
                <h3 className="font-bold">CPU</h3>
                <p className="text-sm">Low latency. Good at complex logic and branching. A few very smart cores.</p>
            </div>
             <div className="space-y-2">
                <h3 className="font-bold">GPU</h3>
                <p className="text-sm">High throughput. Good at doing the same math operation on a million pixels at once. Thousands of dumb cores.</p>
            </div>
        </div>
        <Note type="info" title="CUDA">
            If you plan to use NVIDIA GPUs, you'll be working with <strong>CUDA</strong>. Check the <Link to="/apps/optimization" className="underline">Optimization</Link> chapter for libraries.
        </Note>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/foundations/intro" className="text-primary/60 hover:text-primary">
            ← Previous: Foundations
         </Link>
         <Link to="/software-setup/os" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: OS Selection →
         </Link>
      </div>
    </div>
  );
};

export default Design;

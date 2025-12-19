import { Cpu, HardDrive, Network, Zap } from 'lucide-react';
import Note from '../../components/Note';

const HardwareComponents = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Designing the Iron</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          The hardware defines the cluster. You must balance performance, power efficiency, and cost. 
          Do not overbuild. Do not underbuild. Design for your specific workload.
        </p>
      </div>

      <Note type="warning" title="Power Efficiency Matters">
        Clusters run 24/7. A difference of 10W per node adds up. 
        In a 4-node cluster, that is ~350kWh per year. 
        Select efficient CPUs. Use Platinum-rated power supplies.
      </Note>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Cpu size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">2.1 Compute Nodes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-primary border border-border p-6 rounded">
            <h3 className="text-lg font-bold text-primary mt-0">Selecting CPUs</h3>
            <p className="text-primary/70 text-sm">
              Core count drives parallelism. Clock speed drives single-thread performance.
              Know your workload. Simulation needs clock speed. Rendering needs cores.
            </p>
            <ul className="list-disc list-inside space-y-1 text-primary/80 text-sm mt-4">
              <li>Check the core count.</li>
              <li>Verify the clock speed.</li>
              <li>Understand the binning process.</li>
            </ul>
          </div>
          <div className="bg-bg-primary border border-border p-6 rounded">
            <h3 className="text-lg font-bold text-primary mt-0">Memory Hierarchy</h3>
            <p className="text-primary/70 text-sm">
              Feed the CPU. Latency kills performance. Bandwidth allows scale.
              ECC RAM prevents data corruption. Use it for long-running jobs.
            </p>
            <ul className="list-disc list-inside space-y-1 text-primary/80 text-sm mt-4">
              <li>Prioritize low latency.</li>
              <li>Maximize memory channels.</li>
              <li>Require ECC for stability.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Network size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">2.2 The Nervous System</h2>
        </div>
        <p className="text-primary/80">
          The network is the bottleneck. You must maximize bandwidth and minimize diameter.
          Low diameter reduces latency. It reduces the number of routers and cables.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-primary">Topology Matters</h3>
            <p className="text-primary/70 text-sm">
              Standard topologies like Fat Tree are expensive. They use many routers.
              The <strong>Slim Fly</strong> topology optimizes for diameter 2. It approaches the Moore Bound.
              It uses 25% fewer routers than Dragonfly. It consumes 26% less power.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-primary">Cabling Infrastructure</h3>
            <p className="text-primary/70 text-sm">
              Use DAC for short runs. It is cheap and low latency.
              Use Fiber (OM4) for runs over 5 meters. 
              Match transceivers to your switch.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <HardDrive size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">2.3 Storage Infrastructure</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-primary/80">
          <li><strong>Registers & Cache:</strong> Instant access. Managed by CPU.</li>
          <li><strong>RAM:</strong> Fast temporary storage. Volatile.</li>
          <li><strong>SSD (NVMe):</strong> High IOPS. Essential for OS and scratch space.</li>
          <li><strong>HDD:</strong> Cheap bulk storage. Slow. Use for archives.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Zap size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">2.4 Accelerators</h2>
        </div>
        <p className="text-primary/80">
          The GPU is no longer just for graphics. It is a parallel compute engine.
          Modern GPUs use a <strong>Unified Shader Architecture</strong>. All units can run vertex, fragment, or compute tasks.
        </p>
        <div className="bg-bg-secondary/20 p-6 rounded border border-border mt-4">
          <h3 className="text-lg font-bold text-primary mt-0">The SPMD Model</h3>
          <p className="text-primary/80">
            <strong>Single Program, Multiple Data.</strong> You write one program. The GPU runs it on thousands of threads.
            Threads group into blocks. Blocks map to Streaming Multiprocessors (SMs).
            The hardware handles scheduling. It hides memory latency by switching threads.
          </p>
        </div>
      </section>

      <section className="pt-6 border-t border-border">
        <h2 className="text-2xl font-bold text-primary mb-6">Recommended Bill of Materials</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-bg-secondary/50">
              <tr>
                <th className="p-3 font-semibold text-primary">Component</th>
                <th className="p-3 font-semibold text-primary">Specification</th>
                <th className="p-3 font-semibold text-primary">Reasoning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-bg-secondary/30">
                <td className="p-3 text-primary/80">Nodes (x3)</td>
                <td className="p-3 text-primary/60 font-mono">Lenovo ThinkCentre M720q</td>
                <td className="p-3 text-primary/60">i5-8500T. 6 Cores. Low power. Cheap.</td>
              </tr>
              <tr className="hover:bg-bg-secondary/30">
                <td className="p-3 text-primary/80">Switch</td>
                <td className="p-3 text-primary/60 font-mono">MikroTik CRS305</td>
                <td className="p-3 text-primary/60">4x 10GbE SFP+ ports. Fanless.</td>
              </tr>
              <tr className="hover:bg-bg-secondary/30">
                <td className="p-3 text-primary/80">Storage</td>
                <td className="p-3 text-primary/60 font-mono">Lexar NM790 1TB</td>
                <td className="p-3 text-primary/60">High endurance. Fast HMB.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default HardwareComponents;

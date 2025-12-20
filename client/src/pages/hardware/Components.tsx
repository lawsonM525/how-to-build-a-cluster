import { Cpu, HardDrive } from 'lucide-react';
import Note from '../../components/Note';

const HardwareComponents = () => {
  return (
    <div className="space-y-8 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Choosing Components</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          The foundation of any cluster is its hardware. For a home or small business cluster, 
          we need to balance performance, power efficiency, and cost.
        </p>
      </div>

      <Note type="warning" title="Power Efficiency Matters">
        A cluster runs 24/7. A difference of 10W per node in a 4-node cluster adds up to 
        ~350kWh per year. Choose efficient CPUs and power supplies.
      </Note>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <div className="bg-bg-primary border border-border p-6 rounded">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <Cpu size={24} strokeWidth={1.5} />
            <h3 className="text-xl font-bold m-0 text-primary">Compute (CPU/RAM)</h3>
          </div>
          <p className="text-primary/60 mb-4">
            Small form factor PCs (NUCs, TinyMinis) or ARM boards (Raspberry Pi 5, Orange Pi) are ideal.
          </p>
          <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm">
            <li>Minimum: 4 Cores, 8GB RAM per node</li>
            <li>Recommended: 6+ Cores, 16GB+ RAM</li>
            <li>Architecture: x86_64 preferred for compatibility</li>
          </ul>
        </div>

        <div className="bg-bg-primary border border-border p-6 rounded">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <HardDrive size={24} strokeWidth={1.5} />
            <h3 className="text-xl font-bold m-0 text-primary">Storage</h3>
          </div>
          <p className="text-primary/60 mb-4">
            NVMe SSDs are essential for etcd performance in Kubernetes.
          </p>
          <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm">
            <li>Boot: 256GB+ NVMe SSD</li>
            <li>Data: SATA SSDs or NAS for bulk storage</li>
            <li>Avoid SD cards for OS (reliability issues)</li>
          </ul>
        </div>
      </div>

      <section className="space-y-6 pt-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">Recommended Bill of Materials</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-bg-secondary/50">
              <tr>
                <th className="p-3 font-semibold text-primary">Component</th>
                <th className="p-3 font-semibold text-primary">Specification</th>
                <th className="p-3 font-semibold text-primary">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-bg-secondary/30">
                <td className="p-3 text-primary/80">Nodes (x3)</td>
                <td className="p-3 text-primary/60 font-mono">Lenovo ThinkCentre M720q</td>
                <td className="p-3 text-primary/60">i5-8500T, 16GB RAM, cheap on eBay</td>
              </tr>
              <tr className="hover:bg-bg-secondary/30">
                <td className="p-3 text-primary/80">Switch</td>
                <td className="p-3 text-primary/60 font-mono">MikroTik CRS305</td>
                <td className="p-3 text-primary/60">10GbE support, reliable</td>
              </tr>
              <tr className="hover:bg-bg-secondary/30">
                <td className="p-3 text-primary/80">Storage</td>
                <td className="p-3 text-primary/60 font-mono">Lexar NM790 1TB</td>
                <td className="p-3 text-primary/60">Good endurance, DRAM-less but fast HMB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default HardwareComponents;

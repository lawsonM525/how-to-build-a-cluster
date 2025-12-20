import { Link } from 'react-router-dom';
import CodeBlock from '../../components/CodeBlock';
import Note from '../../components/Note';

const SharedStorage = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 5: Shared Storage
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          A cluster isn't very useful if your data is trapped on one node. We need a way to share files across the network.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">5.1 Network File System (NFS)</h2>
        <p className="text-primary/80">
            NFS is the standard way to share directories in Unix. The Head Node exports a folder, and Compute Nodes mount it.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="p-4 border border-border rounded bg-bg-secondary/10">
                <h3 className="font-bold mb-2">NFS Server (Head Node)</h3>
                <p className="text-sm text-primary/80 mb-2">Edits <code>/etc/exports</code> to define what to share.</p>
                <CodeBlock 
                    language="bash"
                    filename="/etc/exports"
                    code="/home/cluster *(rw,sync,no_root_squash,no_subtree_check)"
                />
            </div>
             <div className="p-4 border border-border rounded bg-bg-secondary/10">
                <h3 className="font-bold mb-2">NFS Client (Compute Nodes)</h3>
                <p className="text-sm text-primary/80 mb-2">Edits <code>/etc/fstab</code> to mount on boot.</p>
                <CodeBlock 
                    language="bash"
                    filename="/etc/fstab"
                    code="head-node:/home/cluster /home/cluster nfs defaults 0 0"
                />
            </div>
        </div>

        <h3 className="font-bold mt-6">Export Options</h3>
        <ul className="list-disc list-inside space-y-2 text-primary/80">
            <li><strong>rw:</strong> Read/Write access.</li>
            <li><strong>sync:</strong> Confirm data is written before replying (safer, slower).</li>
            <li><strong>no_root_squash:</strong> Allow root on client to be root on server (dangerous but often needed for administration).</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">5.2 Advanced Distributed Filesystems</h2>
        <p className="text-primary/80">
            NFS works well for small clusters, but it has a single point of failure (the head node) and limited bandwidth.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 border border-border rounded">
                <h3 className="font-bold mb-1">Lustre</h3>
                <p className="text-xs text-primary/60">The HPC heavyweight. Complex, blazing fast parallel IO.</p>
            </div>
            <div className="p-4 border border-border rounded">
                <h3 className="font-bold mb-1">Ceph</h3>
                <p className="text-xs text-primary/60">Object, Block, and File storage. Self-healing, highly scalable.</p>
            </div>
            <div className="p-4 border border-border rounded">
                <h3 className="font-bold mb-1">GlusterFS</h3>
                <p className="text-xs text-primary/60">Easier to set up than Ceph/Lustre. Aggregates disk bricks into volumes.</p>
            </div>
        </div>

        <Note type="info" title="Performance Comparison">
            <p><strong>NFS</strong> sends all traffic to one drive on one node.</p>
            <p><strong>Parallel Filesystems</strong> stripe data across many drives on many nodes, multiplying throughput.</p>
        </Note>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/software-setup/network" className="text-primary/60 hover:text-primary">
            ← Previous: Network Config
         </Link>
         <Link to="/infrastructure/users" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: User Management →
         </Link>
      </div>
    </div>
  );
};

export default SharedStorage;

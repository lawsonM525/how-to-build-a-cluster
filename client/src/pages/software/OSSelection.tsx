import { Shield, CheckCircle } from 'lucide-react';
import Note from '../../components/Note';
import { Link } from 'react-router-dom';

const OSSelection = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 3: Operating System Selection
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          The software foundation. While Linux is the obvious choice, *which* Linux matters.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">3.1 Linux Distributions Overview</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="font-bold text-lg">Debian-based (The .deb Family)</h3>
                <p className="text-sm text-primary/80">
                    Includes <strong>Ubuntu</strong> and <strong>Debian</strong>. Known for massive package repositories (`apt`) and huge community support. Great for beginners and AI/ML workloads.
                </p>
            </div>
             <div className="space-y-4">
                <h3 className="font-bold text-lg">RPM-based (The Enterprise Family)</h3>
                <p className="text-sm text-primary/80">
                    Includes <strong>RHEL</strong>, <strong>Rocky Linux</strong>, <strong>AlmaLinux</strong>, and <strong>Fedora</strong>. Standard in HPC centers and corporate environments. Uses `dnf`/`yum`.
                </p>
            </div>
        </div>

        <div className="bg-bg-secondary/20 p-6 rounded border border-border mt-6">
            <h3 className="font-bold flex items-center gap-2 mb-2"><Shield size={20}/> Enterprise vs. Community</h3>
            <p className="text-primary/80 mb-4">
                <strong>RHEL (Red Hat Enterprise Linux)</strong> requires a subscription (free for developers). 
                <strong>Rocky</strong> and <strong>Alma</strong> are binary-compatible free clones. 
                <strong>Fedora</strong> is the upstream bleeding edge.
            </p>
            <p className="text-sm italic">
                Recommendation: Use <strong>Rocky Linux</strong> or <strong>Ubuntu LTS</strong> for stability.
            </p>
        </div>

        <Note type="info" title="Single System Image (SSI)">
            The goal is consistency. Every node should look and behave exactly the same. 
            If you run `python --version` on Node 1, it should match Node 100.
        </Note>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">3.2 Installation & Base Config</h2>
        <p className="text-primary/80">
            For this guide, we will assume a Debian-based system (like Ubuntu Server), but the concepts apply everywhere.
        </p>
        
        <div className="space-y-4">
            <h3 className="font-bold">The Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-primary/80 ml-4">
                <li><strong>Head Node:</strong> Manual installation via USB/ISO.</li>
                <li><strong>Compute Nodes:</strong> Automated installation via PXE (Network Boot).</li>
                <li><strong>Post-Install:</strong> Configuration management (Ansible).</li>
            </ol>
        </div>

        <div className="p-4 border border-border rounded bg-bg-primary mt-4">
             <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle size={16}/> Document Everything</h4>
             <p className="text-sm text-primary/80">
                Never just run a command and forget it. Write it down. Better yet, write an Ansible playbook.
             </p>
        </div>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/hardware/design" className="text-primary/60 hover:text-primary">
            ← Previous: Hardware
         </Link>
         <Link to="/software-setup/network" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Network Configuration →
         </Link>
      </div>
    </div>
  );
};

export default OSSelection;

import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Security = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 12: Security and Hardening
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          High Performance Computing is a target. Compute power is valuable for mining crypto or cracking passwords. Protect your cluster.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">12.1 Hardening the Cluster</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
                <h3 className="font-bold flex items-center gap-2"><Shield size={18}/> Firewalls</h3>
                <p className="text-sm text-primary/80">
                    Use <strong>iptables</strong> or <strong>firewalld</strong>. 
                    <br/><br/>
                    <strong>Head Node:</strong> Strict rules. Only allow SSH (22) from trusted IPs.
                    <br/>
                    <strong>Compute Nodes:</strong> Trust traffic from the Head Node, block everything else.
                </p>
            </div>
             <div className="space-y-2">
                <h3 className="font-bold flex items-center gap-2"><Lock size={18}/> SSH Hardening</h3>
                <ul className="text-sm list-disc list-inside text-primary/80">
                    <li>Disable Root Login (`PermitRootLogin no`)</li>
                    <li>Disable Password Auth (`PasswordAuthentication no`)</li>
                    <li>Use fail2ban to block brute force attacks.</li>
                </ul>
            </div>
             <div className="space-y-2">
                <h3 className="font-bold flex items-center gap-2"><AlertTriangle size={18}/> MACs</h3>
                <p className="text-sm text-primary/80">
                    <strong>SELinux</strong> or <strong>AppArmor</strong>. 
                    Mandatory Access Controls limit what programs can do, even if they are hacked.
                </p>
            </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">12.2 Security Auditing</h2>
        <p className="text-primary/80">
            You can't fix what you don't see.
        </p>

        <div className="space-y-4 mt-4">
             <h3 className="font-bold flex items-center gap-2"><Eye size={20}/> Logging</h3>
             <p className="text-sm text-primary/80">
                Centralize your logs. If a node is compromised, the attacker might delete the local logs. 
                Ship them to the head node (or a separate log server) using <strong>rsyslog</strong>.
             </p>
        </div>

        <div className="space-y-4 mt-4">
             <h3 className="font-bold">Vulnerability Scanning</h3>
             <p className="text-sm text-primary/80">
                Tools like <strong>Lynis</strong> and <strong>OpenSCAP</strong> scan your system and give you a security score + fix recommendations.
             </p>
        </div>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/perf-sec/benchmarking" className="text-primary/60 hover:text-primary">
            ← Previous: Benchmarking
         </Link>
         <Link to="/appendix/resources" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Appendix →
         </Link>
      </div>
    </div>
  );
};

export default Security;

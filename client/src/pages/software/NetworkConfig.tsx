import { Network, Globe, Key } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import Terminal from '../../components/Terminal';
import Note from '../../components/Note';
import { Link } from 'react-router-dom';

const NetworkConfig = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 4: Network Configuration
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          Networking is the nervous system of the cluster. If it fails, the cluster is just a pile of noisy heaters.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">4.1 IP Addressing & Routing</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-bold mb-2 flex items-center gap-2"><Globe size={18}/> Public Interface</h3>
                <p className="text-sm text-primary/80 mb-2">Connected to the internet/LAN. Only the Head Node usually needs this.</p>
                <code className="text-xs">eth0: 192.168.1.50 (DHCP)</code>
            </div>
             <div>
                <h3 className="font-bold mb-2 flex items-center gap-2"><Network size={18}/> Private Interface</h3>
                <p className="text-sm text-primary/80 mb-2">Internal cluster traffic (MPI, NFS). High speed, no internet.</p>
                <code className="text-xs">eth1: 10.0.0.1 (Static)</code>
            </div>
        </div>

        <h3 className="font-bold mt-6">Static IPs vs DHCP</h3>
        <p className="text-primary/80">
            Compute nodes should have predictable addresses. You can configure this manually on each node (painful) or use <strong>DHCP Reservation</strong> on the head node.
        </p>

        <h3 className="font-bold mt-6">DNS & /etc/hosts</h3>
        <p className="text-primary/80">
            Computers like numbers (IPs), humans like names. Edit <code>/etc/hosts</code> so you can type `node01` instead of `10.0.0.51`.
        </p>
        
        <CodeBlock 
            language="bash" 
            filename="/etc/hosts"
            code={`127.0.0.1 localhost
10.0.0.1  head-node
10.0.0.51 node01
10.0.0.52 node02
10.0.0.53 node03`} 
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">4.2 Seamless Access</h2>
        <p className="text-primary/80">
            Managing a cluster requires jumping between nodes constantly. Typing passwords every time is not an option.
        </p>

        <h3 className="font-bold flex items-center gap-2"><Key size={20}/> Passwordless SSH</h3>
        <p className="text-primary/80">
            Generate an RSA key pair on the head node and share the public key with all compute nodes.
        </p>

        <Terminal title="head-node:~">
            <div className="space-y-2">
                <div className="flex gap-2">
                    <span className="text-green-500">user@head:~$</span>
                    <span className="text-primary">ssh-keygen -t rsa</span>
                </div>
                <div className="text-primary/60">
                    Generating public/private rsa key pair...<br/>
                    Your public key has been saved in /home/user/.ssh/id_rsa.pub.
                </div>
                <div className="flex gap-2">
                    <span className="text-green-500">user@head:~$</span>
                    <span className="text-primary">ssh-copy-id node01</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-green-500">user@head:~$</span>
                    <span className="text-primary">ssh node01</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-green-500">user@node01:~$</span>
                    <span className="text-primary"># We are in!</span>
                </div>
            </div>
        </Terminal>

        <Note type="warning" title="Security">
            <p className="mb-2">Permissions for <code>.ssh</code> directories are strict. If they are wrong, SSH will fail silently.</p>
            <ul className="list-disc list-inside text-sm font-mono">
                <li>chmod 700 ~/.ssh</li>
                <li>chmod 600 ~/.ssh/authorized_keys</li>
            </ul>
        </Note>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/software-setup/os" className="text-primary/60 hover:text-primary">
            ← Previous: OS Selection
         </Link>
         <Link to="/infrastructure/storage" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Shared Storage →
         </Link>
      </div>
    </div>
  );
};

export default NetworkConfig;

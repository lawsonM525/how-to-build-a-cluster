import { Network, Globe, Key, GitBranch } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import Terminal from '../../components/Terminal';
import Note from '../../components/Note';
import { Link } from 'react-router-dom';
import topologiesImg from '../../assets/topologies.webp';

const NetworkConfig = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 4: Network Configuration
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          The network is what allows each node in the cluster to communicate with every other node, including and most importantly, the head node. So it's very important that it's up, running, and well maintained.
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
            Compute nodes should have predictable addresses. You can configure this manually on each node (easier if you're working with a team) or use <strong>DHCP Reservation</strong> on the head node.
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
            <p className="mb-2">Permissions for <code>.ssh</code> directories are strict. If they are wrong, SSH will fail.</p>
            <ul className="list-disc list-inside text-sm font-mono">
                <li>chmod 700 ~/.ssh</li>
                <li>chmod 600 ~/.ssh/authorized_keys</li>
            </ul>
        </Note>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">4.3 Network Topology</h2>
        <p className="text-primary/80">
          How you wire up your cluster matters a lot more than you might think. The <strong>topology</strong>—the arrangement of nodes and cables—determines how fast data can move, how much it costs, and how resilient your network is to failures.
        </p>

        <div className="my-6">
          <img 
            src={topologiesImg} 
            alt="Various network topologies including torus, fat tree, dragonfly, and more" 
            className="w-full rounded-lg border border-border"
          />
          <p className="text-xs text-primary/60 mt-2 text-center">Different network topologies you can choose from for your cluster</p>
        </div>

        <div className="bg-bg-secondary/10 p-6 rounded-lg border border-border/50">
          <h3 className="font-bold mb-3 flex items-center gap-2"><GitBranch size={18}/> Why Topology Matters</h3>
          <p className="text-sm text-primary/80 mb-3">
            Networks can account for up to <strong>33% of total system cost</strong> and <strong>50% of energy consumption</strong>. 
            The right topology can dramatically reduce both while improving performance.
          </p>
          <p className="text-sm text-primary/80">
            The key metric is <strong>network diameter</strong>—the maximum number of hops a message needs to travel between any two nodes. 
            Lower diameter means lower latency, less energy (fewer switches to traverse), and often lower cost.
          </p>
        </div>

        <h3 className="font-bold mt-6">Common Topologies</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-bg-secondary/10 rounded border border-border">
            <h4 className="font-bold mb-2">Fat Tree</h4>
            <p className="text-xs text-primary/70">
              The classic choice. Packets go up the tree to a core router, then back down to the destination. 
              Provides high bandwidth but requires many hops. Used in systems like Tianhe-2.
            </p>
          </div>
          
          <div className="p-4 bg-bg-secondary/10 rounded border border-border">
            <h4 className="font-bold mb-2">Torus (3D/5D)</h4>
            <p className="text-xs text-primary/70">
              Nodes arranged in a grid with wraparound connections. Simple and cheap, but diameter grows with network size. 
              Used in Cray Gemini and IBM BlueGene/Q.
            </p>
          </div>
          
          <div className="p-4 bg-bg-secondary/10 rounded border border-border">
            <h4 className="font-bold mb-2">Dragonfly</h4>
            <p className="text-xs text-primary/70">
              Groups of routers connected by global links. Reduces diameter to 3 hops. 
              Used in IBM PERCS systems. Good balance of cost and performance.
            </p>
          </div>
          
          <div className="p-4 bg-bg-secondary/10 rounded border border-border">
            <h4 className="font-bold mb-2">Slim Fly</h4>
            <p className="text-xs text-primary/70">
              A newer design that approaches the theoretical optimum. Diameter of just 2 hops for networks with 100K+ endpoints. 
              Uses fewer cables and routers while being more resilient to failures.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="font-bold">Choosing the Right Topology</h3>
          <p className="text-primary/80">
            For a small home or lab cluster (under 100 nodes), a simple <strong>flat switched network</strong> is usually fine—just plug everything into a switch. 
            But as you scale up, topology becomes critical.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-3 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-bold text-sm mb-1">High Bandwidth</h4>
              <p className="text-xs text-primary/70">Fat trees excel at all-to-all communication patterns common in many HPC workloads.</p>
            </div>
            <div className="p-3 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-bold text-sm mb-1">Low Latency</h4>
              <p className="text-xs text-primary/70">Dragonfly and Slim Fly minimize hops, crucial for latency-sensitive applications like trading systems.</p>
            </div>
            <div className="p-3 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-bold text-sm mb-1">Cost Efficiency</h4>
              <p className="text-xs text-primary/70">Torus networks are simple and cheap to build, good for budget-conscious clusters.</p>
            </div>
          </div>
        </div>

        <Note type="info" title="For Small Clusters">
          If you're building a cluster with fewer than 50 nodes, don't overthink topology. 
          A good managed switch with enough ports will do the job. Focus on getting reliable Gigabit or 10GbE connections between all nodes.
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

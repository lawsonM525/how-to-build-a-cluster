import { ArrowRight, Server, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Terminal from '../components/Terminal';
import Note from '../components/Note';

const Home = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Building Your Own Cluster
        </h1>
        <p className="text-xl text-white/80 leading-relaxed">
          A comprehensive, interactive guide to building a high-availability compute cluster 
          from scratch. From selecting hardware to deploying Kubernetes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="p-6 rounded border border-white/20 bg-black hover:border-white transition-colors group">
          <Server className="text-white mb-4 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
          <h3 className="text-lg font-bold text-white mb-2 mt-0">Hardware</h3>
          <p className="text-white/60 text-sm mb-0">Component selection, assembly, and power management for your nodes.</p>
        </div>
        <div className="p-6 rounded border border-white/20 bg-black hover:border-white transition-colors group">
          <Globe className="text-white mb-4 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
          <h3 className="text-lg font-bold text-white mb-2 mt-0">Networking</h3>
          <p className="text-white/60 text-sm mb-0">VLANs, subnets, DNS, DHCP, and load balancing configurations.</p>
        </div>
        <div className="p-6 rounded border border-white/20 bg-black hover:border-white transition-colors group">
          <Zap className="text-white mb-4 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
          <h3 className="text-lg font-bold text-white mb-2 mt-0">Software</h3>
          <p className="text-white/60 text-sm mb-0">Automated OS provisioning, Kubernetes setup, and monitoring.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2>Why build a cluster?</h2>
        <p>
          Building a home lab or small business cluster is the best way to learn distributed systems, 
          cloud-native technologies, and DevOps practices. This guide covers everything you need to know, 
          opinionated but flexible.
        </p>
        
        <Note type="info" title="Prerequisites">
          You should be comfortable with the Linux command line and basic networking concepts. 
          We'll handle the advanced stuff together.
        </Note>

        <h3>Quick Start</h3>
        <p>
          If you have your hardware ready, we can start by bootstrapping the management node.
        </p>

        <Terminal title="management-node:~">
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="text-green-500">user@manage:~$</span>
              <span className="text-white">git clone https://github.com/the-robots/cluster-bootstrap.git</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">user@manage:~$</span>
              <span className="text-white">cd cluster-bootstrap</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">user@manage:~/cluster-bootstrap$</span>
              <span className="text-white">./init.sh --dry-run</span>
            </div>
            <div className="text-white/60 mt-2">
              [INFO] Checking prerequisites...<br/>
              [INFO] Validating network configuration...<br/>
              [SUCCESS] Ready to bootstrap!
            </div>
          </div>
        </Terminal>
      </section>

      <div className="flex justify-end mt-12">
        <Link 
          to="/hardware" 
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-bold rounded hover:bg-white hover:text-black transition-all"
        >
          Start the Guide <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Home;

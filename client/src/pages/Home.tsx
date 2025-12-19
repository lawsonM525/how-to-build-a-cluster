import { ArrowRight, BookOpen, Server, Terminal, Database, Layers, Cpu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sections = [
    {
      title: "Part I: Conceptual Foundations",
      icon: BookOpen,
      desc: "Define the cluster. Understand HPC vs HA. Learn the history from Beowulf to Top500.",
      chapters: ["The World of Cluster Computing"]
    },
    {
      title: "Part II: Hardware Engineering",
      icon: Server,
      desc: "Design the iron. Select CPUs and memory. Build the nervous system with high-speed interconnects.",
      chapters: ["Designing the Iron"]
    },
    {
      title: "Part III: The Software Foundation",
      icon: Terminal,
      desc: "Select the OS. Automate installation. Configure the network for seamless access.",
      chapters: ["Operating System Selection", "Network Configuration"]
    },
    {
      title: "Part IV: Infrastructure Services",
      icon: Database,
      desc: "Mount shared storage. Manage users centrally. Automate drift with Ansible.",
      chapters: ["Shared Storage & Filesystems", "User Management", "Cluster Management"]
    },
    {
      title: "Part V: The Workload Manager",
      icon: Layers,
      desc: "Arbitrate resources. Queue jobs. Master Slurm commands and submission scripts.",
      chapters: ["Job Schedulers"]
    },
    {
      title: "Part VI: Parallel Programming",
      icon: Cpu,
      desc: "Code for distributed systems. Use MPI and CUDA. Optimize with math libraries.",
      chapters: ["Parallel Frameworks", "Optimization & Libraries"]
    },
    {
      title: "Part VII: Validation & Security",
      icon: Shield,
      desc: "Benchmark performance. Harden the cluster. Audit security and track vulnerabilities.",
      chapters: ["Benchmarking", "Security & Hardening"]
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-primary tracking-tight">
          Build Your Own Cluster
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed max-w-3xl">
          A comprehensive guide to building high-performance compute clusters. 
          From commodity hardware to distributed parallel programming. 
          No fluff. Just engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className="p-6 rounded border border-border bg-bg-primary hover:border-primary transition-colors group flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="text-primary group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-primary m-0">{section.title}</h3>
            </div>
            
            <p className="text-primary/70 text-sm mb-6 flex-grow">
              {section.desc}
            </p>

            <div className="space-y-2">
              {section.chapters.map((chapter, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2 text-sm text-primary/90 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {chapter}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-8">
        <Link 
          to="/foundations/cluster-computing" 
          className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-bg-primary transition-all text-lg"
        >
          Start Reading <ArrowRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Home;

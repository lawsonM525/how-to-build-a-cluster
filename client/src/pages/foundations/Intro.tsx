import { motion } from 'framer-motion';
import Note from '../../components/Note';
import { Server, Cpu, Share2, Lock, Unlock, Zap, History, Network, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="space-y-12 w-full">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 1: Intro to Cluster Computing
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          Welcome to the world of High Performance Computing (HPC)! 
         </p>
        <p className="text-lg text-primary/70 leading-relaxed">
         Our goal is to understand how multiple computers can work together effeciently as one powerful system, the history behind this technological evolution, and how you can harness this power yourself.
        </p>
      </div>

      {/* 1.1 What is a Cluster? */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Network className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-primary pb-2">1.1 What even is a Cluster?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              Think about how we tackle big projects in everyday life. When faced with cleaning an entire house, a family might divide rooms among themselves. 
              When building a skyscraper, hundreds of workers specialize in different tasks to get things done, and/or get it done faster. Computing follows the same principle.
            </p>
            <p>
              A <strong>computer cluster</strong> is simply a set of connected computers that work together 
              to accomplish tasks that would be too large, too slow, or too complex for a single machine.
            </p>
            <p>
              The goal is <strong>High Performance Computing (HPC)</strong>: using many compute resources together 
              (cpus, gpus, memory, networks, and power)
              to solve problems that are too big, too slow, or too complex for a single machine to handle in a reasonable time.
            </p>
          </div>
          
          {/* Cluster Animation */}
          <div className="bg-bg-secondary/30 rounded-xl overflow-hidden relative h-96 w-full mb-8 border border-primary/10">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ 
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', 
                    backgroundSize: '24px 24px' 
                 }} 
            />

            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <path d="M0,0 L10,5 L0,10" fill="currentColor" className="text-primary/30" />
                </marker>
              </defs>
              {[20, 50, 80].map((x, i) => (
                <g key={i}>
                  <line 
                    x1="50%" y1="20%" 
                    x2={`${x}%`} y2="80%" 
                    className="text-primary/20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                  />
                </g>
              ))}
            </svg>

            {/* Head Node (Master) */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
              <motion.div 
                className="bg-bg-primary p-4 rounded-xl border-2 border-primary shadow-[0_0_30px_rgba(var(--primary),0.2)]"
                animate={{ 
                  boxShadow: ["0 0 30px rgba(var(--primary),0.2)", "0 0 50px rgba(var(--primary),0.4)", "0 0 30px rgba(var(--primary),0.2)"],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Server size={40} className="text-primary" />
              </motion.div>
              <div className="bg-bg-primary/90 px-3 py-1 rounded border border-primary/30 text-xs font-mono text-primary font-bold backdrop-blur-sm">
                HEAD NODE
              </div>
            </div>

            {/* Compute Nodes (Workers) */}
            {[20, 50, 80].map((x, i) => (
              <div 
                key={i}
                className="absolute bottom-[20%] -translate-x-1/2 translate-y-1/2 z-10 flex flex-col items-center gap-2"
                style={{ left: `${x}%` }}
              >
                <div className="relative">
                    {/* Processing Indicator */}
                    <motion.div 
                        className="absolute -top-3 -right-3 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-bg-primary z-20"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1, 1, 0] }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.8 + 1, // Sync with packet arrival
                            times: [0, 0.1, 0.8, 1]
                        }}
                    >
                        <div className="w-1.5 h-1.5 bg-black rounded-full animate-spin" />
                    </motion.div>

                    <motion.div 
                      className="bg-bg-primary p-3 rounded-lg border border-primary/40 shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i }}
                    >
                      <Server size={28} className="text-primary/80" />
                    </motion.div>
                </div>
                <div className="bg-bg-primary/90 px-2 py-0.5 rounded border border-primary/20 text-[10px] font-mono text-primary/70 backdrop-blur-sm">
                  NODE 0{i + 1}
                </div>
              </div>
            ))}

            {/* Data Packets Animation */}
            {[20, 50, 80].map((x, i) => (
                <div key={`packets-${i}`}>
                    {/* Request Packet (Head -> Node) */}
                    <motion.div
                        className="absolute w-3 h-3 bg-primary rounded-sm shadow-[0_0_10px_rgba(var(--primary),1)] z-20"
                        initial={{ top: '20%', left: '50%', opacity: 0, scale: 0 }}
                        animate={{
                            top: ['20%', '80%'],
                            left: ['50%', `${x}%`],
                            opacity: [1, 1, 0], // Disappear on arrival
                            scale: [1, 1, 0.5]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.8,
                            repeatDelay: 1, // Wait for return trip
                            ease: "easeInOut"
                        }}
                    />

                    {/* Result Packet (Node -> Head) */}
                    <motion.div
                        className="absolute w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)] z-20"
                        initial={{ top: '80%', left: `${x}%`, opacity: 0 }}
                        animate={{
                            top: ['80%', '20%'],
                            left: [`${x}%`, '50%'],
                            opacity: [0, 1, 0], // Appear on depart, fade on arrival
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.8 + 1, // Start after processing
                            repeatDelay: 1,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            ))}

            {/* Labels */}
            <div className="absolute top-4 left-4 font-mono text-xs text-primary/40 leading-relaxed">
                <p>{'>'} init_cluster_comms</p>
                <p>{'>'} dispatching_jobs...</p>
                <p>{'>'} aggregating_results</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="bg-bg-secondary/10 p-4 rounded-lg border-l-4 border-primary/30">
            <p className="italic text-primary/70">
              "Individually, we are one drop. Together, we are an ocean." — Ryunosuke Satoro
            </p>
            <p className="text-xs mt-2 text-primary/50">
              This philosophy perfectly captures the essence of cluster computing: many small parts creating something greater than their sum.
            </p>
          </div>

          <h3 className="text-lg font-bold flex items-center gap-2"><Users size={18} /> The "Beowulf" Concept</h3>
          <p>
            The most common type of cluster for home labs and research is a <strong>Beowulf cluster</strong>. 
            It's built from commodity hardware (ordinary PCs) and runs open-source software (usually Linux).
            No custom supercomputer chips required.
          </p>
          <p>
            This democratization of supercomputing power is what makes our project possible—we can build something powerful without specialized equipment or corporate budgets.
          </p>

          <h3 className="text-lg font-bold flex items-center gap-2"><Cpu size={18} /> Flynn's Taxonomy</h3>
          <p>But how exactly do computers work together? In 1966, Michael Flynn created a framework that still helps us understand parallel computing today:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded bg-bg-secondary/10">
              <div className="font-mono font-bold mb-2">SISD</div>
              <div className="text-sm">Single Instruction, Single Data</div>
              <div className="text-xs text-primary/60 mt-1">Your standard laptop CPU core.</div>
            </div>
            <div className="p-4 rounded bg-bg-secondary/10">
              <div className="font-mono font-bold mb-2">SIMD</div>
              <div className="text-sm">Single Instruction, Multiple Data</div>
              <div className="text-xs text-primary/60 mt-1">GPUs! One command, lots of pixels.</div>
            </div>
            <div className="p-4 rounded bg-bg-secondary/10 border-l-4 border-l-primary">
              <div className="font-mono font-bold mb-2">MIMD</div>
              <div className="text-sm">Multiple Instruction, Multiple Data</div>
              <div className="text-xs text-primary/60 mt-1">Clusters! Different nodes doing different things.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.2 History */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <History className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-primary pb-2">1.2 How did this all start?</h2>
        </div>
        
        <p>
          The story of cluster computing is a fascinating journey through human ingenuity and our never-ending quest to solve bigger problems.
        </p>
        <p>
          It begins with "human computers"—rooms full of people performing calculations by hand for scientific and military applications in the early 20th century. As electronic computers emerged, the limitations of single machines quickly became apparent.
        </p>
        <p>
          The watershed moment came in 1994 when NASA built the first Beowulf cluster, connecting 16 off-the-shelf computers with Linux to create an affordable supercomputer. This democratized high-performance computing, proving you didn't need million-dollar budgets to access serious computational power.
        </p>

        <div className="bg-bg-secondary/20 p-6 rounded-lg">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Zap size={20} /> Moore's Law & Its Limits
          </h3>
          <p className="mb-4">
            <em>"The number of transistors on a microchip doubles about every two years."</em>
          </p>
          <p className="text-sm text-primary/80">
            For decades, this observation by Intel co-founder Gordon Moore in 1965 drove computing forward. Each new processor generation was significantly faster than the last, solving our need for speed through sheer transistor density.
          </p>
          <p className="text-sm text-primary/80 mt-2">
            But by the early 2000s, we began hitting fundamental physical limits—heat dissipation, quantum effects, and the speed of light itself. The industry's answer? Stop trying to make single processors exponentially faster and instead use <strong>multi-core</strong> and <strong>distributed systems</strong> to keep scaling up.
          </p>
          <p className="text-sm text-primary/80 mt-2">
            This paradigm shift is why cluster computing has moved from niche supercomputing centers to becoming essential technology for any organization dealing with significant data processing needs.
          </p>
          <div className="mt-4">
            <a 
              href="https://en.wikipedia.org/wiki/Moore%27s_law" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm underline decoration-primary/30 hover:decoration-primary"
            >
              Read the original paper (Context)
            </a>
          </div>
        </div>

        <Note type="info" title="The Top500 List">
          <p>
            The <a href="https://top500.org" className="underline">Top500</a> list ranks the world's most powerful non-distributed computer systems. 
            Spoiler: They almost all run Linux.
          </p>
          <p className="mt-2 text-sm">
            Want to know how they measure this? <Link to="/perf-sec/benchmarking" className="underline font-bold">Skip to Chapter 11: Benchmarking</Link>.
          </p>
        </Note>
      </section>

      {/* 1.3 Architecture */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Share2 className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-primary pb-2">1.3 Architectural Models</h2>
        </div>
        <p>
          Now that we understand what clusters are and why they evolved, let's explore <em>how</em> they're designed. The architecture of a cluster determines how its components communicate and share resources—a critical factor in its performance and capabilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-bold">Shared Memory</h3>
            <p className="text-sm text-primary/80">
              Think of shared memory systems like a team working from a single whiteboard. Multiple processors access the same memory space—fast communication, but limited by how many can effectively use the board at once.
            </p>
            <p className="text-xs text-primary/60 italic">
              Examples: Multi-processor workstations, high-end servers with many CPU cores.
            </p>
            <div className="h-32 bg-bg-secondary/30 rounded flex items-center justify-center p-4">
              <div className="flex gap-2 items-end">
                <div className="w-8 h-8 border border-primary bg-bg-primary flex items-center justify-center text-xs">P1</div>
                <div className="w-8 h-8 border border-primary bg-bg-primary flex items-center justify-center text-xs">P2</div>
                <div className="w-full h-2 bg-primary mt-2"></div>
                <div className="w-16 h-8 border border-primary/60 bg-bg-secondary flex items-center justify-center text-xs">RAM</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Distributed Memory</h3>
            <p className="text-sm text-primary/80">
              Distributed memory is like team members working on individual notepads, sending messages when they need to share information. Each processor has its own memory and communicates via a network. This approach scales to thousands of machines.
            </p>
            <p className="text-xs text-primary/60 italic">
              Examples: Beowulf clusters, cloud computing platforms, the cluster we're building in this guide.
            </p>
            <div className="h-32 bg-bg-secondary/30 rounded flex items-center justify-center p-4">
               <div className="flex gap-4 items-center">
                <div className="border border-primary p-1">
                    <div className="w-6 h-6 border border-primary/50 text-[10px] flex items-center justify-center">P1</div>
                    <div className="w-6 h-4 bg-primary/20 mt-1 text-[8px] text-center">Mem</div>
                </div>
                <Share2 size={16} />
                <div className="border border-primary p-1">
                    <div className="w-6 h-6 border border-primary/50 text-[10px] flex items-center justify-center">P2</div>
                    <div className="w-6 h-4 bg-primary/20 mt-1 text-[8px] text-center">Mem</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold mt-8">Cluster Topology</h3>
        <p>
            For our journey, we'll implement the classic <strong>Master/Slave</strong> (or Head Node/Compute Node) topology—a proven design pattern that balances simplicity with effectiveness.
        </p>
        <p className="mb-2">
            This architecture mirrors many real-world organizational structures, where coordination flows from a central authority to specialized workers:
        </p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Head Node (Master):</strong> Manages the cluster, schedules jobs, hosts the filesystem. Like a project manager, it doesn't do the heavy calculations itself but ensures everything runs smoothly.</li>
            <li><strong>Compute Nodes (Workers):</strong> Do the heavy lifting (calculations, rendering). These are your specialized workers focused on processing their assigned tasks efficiently.</li>
        </ul>
        <p className="mt-2 text-sm text-primary/70">
            This separation of concerns makes the system both easier to manage and more resilient—if a compute node fails, the cluster continues operating with reduced capacity rather than complete failure.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 rounded bg-bg-secondary/20">
                <h4 className="font-bold flex items-center gap-2 mb-2"><Unlock size={16} /> Open Cluster</h4>
                <p className="text-sm">Nodes are accessible from the outside world. Easier access, harder security.</p>
                <p className="text-xs text-primary/60 mt-2">Like a university campus where anyone can enter any building directly.</p>
            </div>
            <div className="p-4 rounded bg-bg-secondary/20">
                <h4 className="font-bold flex items-center gap-2 mb-2"><Lock size={16} /> Closed Cluster</h4>
                <p className="text-sm">Nodes are hidden behind the head node (acting as a gateway). Standard for HPC.</p>
                <p className="text-xs text-primary/60 mt-2">Like a secure facility where visitors must check in at reception before being escorted to their destination.</p>
            </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Zap className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-primary pb-2">1.4 Why Build Your Own?</h2>
        </div>
        
        <p>
          With cloud computing so prevalent, you might wonder why anyone would build a physical cluster today. There are compelling reasons:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-bg-secondary/10 rounded-lg">
            <h3 className="font-bold mb-2">Learning</h3>
            <p className="text-sm">Building a cluster teaches you about hardware, networking, distributed systems, and parallel programming—foundational knowledge for any computing career.</p>
          </div>
          <div className="p-4 bg-bg-secondary/10 rounded-lg">
            <h3 className="font-bold mb-2">Cost Control</h3>
            <p className="text-sm">While cloud has ongoing costs, a home cluster has primarily upfront expenses. For consistent workloads, this can be more economical long-term.</p>
          </div>
          <div className="p-4 bg-bg-secondary/10 rounded-lg">
            <h3 className="font-bold mb-2">Data Sovereignty</h3>
            <p className="text-sm">Your data stays physically under your control—important for sensitive information or when internet connectivity is unreliable.</p>
          </div>
        </div>
        
        <Note type="info" title="Real-World Applications">
          <p>
            Home clusters aren't just academic exercises. They're used for rendering 3D animations, training machine learning models, hosting game servers, and even contributing to scientific research through distributed computing projects like Folding@home.
          </p>
        </Note>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-primary/10">
         <Link to="/" className="text-primary/60 hover:text-primary">
            ← Home
         </Link>
         <Link to="/hardware/design" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Designing the Frame →
         </Link>
      </div>
    </div>
  );
};

export default Intro;

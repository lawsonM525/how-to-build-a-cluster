import { motion } from 'framer-motion';
import Note from '../../components/Note';
import { Server, Cpu, Share2, Lock, Unlock } from 'lucide-react';
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
          Welcome to the world of High Performance Computing (HPC)!! 
          Let's break down what a cluster is, where it came from, and how it works.
        </p>
      </div>

      {/* 1.1 What is a Cluster? */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary pb-2">1.1 What even is a Cluster?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-xl text-primary/80 leading-relaxed">
              At some point, even the fastest single computer becomes too slow, too small, or too expensive.
              High Performance Computing exists because we kept hitting that wall.
            </p>
            <p>
              A <strong>computer cluster</strong> is what happens when we stop trying to build one bigger computer
              and instead connect many smaller ones to work together.
            </p>
            <p>
              Once computers are connected this way, we unlock <strong>High Performance Computing (HPC)</strong>.
              HPC is not a single machine — it’s a strategy. It uses many compute resources together 
              (cpus, gpus, memory, networks, and power) to solve problems that are too big for a single machine.
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
          <h3 className="text-lg font-bold">The Beowulf Insight</h3>
          <p>
            Researchers realized they didn’t need exotic supercomputers.
            They could take ordinary machines, connect them with a fast network,
            and let software do the coordination.
          </p>
          <p className="text-sm text-primary/80">
            This is the origin of the <strong>Beowulf cluster</strong>: built from commodity hardware (ordinary PCs) and running open-source software (usually Linux).
            No custom chips required.
          </p>

          <Note type="info" title="Mental Model">
            <p>
              Think of a cluster as a factory: the <strong>head node</strong> is management, 
              <strong>compute nodes</strong> are workers, the <strong>network</strong> is the hallway, 
              and <strong>memory</strong> is never shared unless messages are sent.
            </p>
          </Note>

          <h3 className="text-lg font-bold pt-4">Flynn’s Taxonomy</h3>
          <p>
            Once we connect computers, the next question becomes:
            <em>how do instructions and data flow through the system?</em>
          </p>
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
          <p className="text-sm text-primary/80 mt-4">
            Clusters fall under <strong>MIMD</strong>, which means every node can run different code
            on different data at the same time — powerful, but harder to coordinate.
          </p>
        </div>
      </section>

      {/* 1.2 History */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary pb-2">1.2 How did this all start?</h2>
        
        <p>
          From "human computers" to the first Beowulf cluster at NASA in 1994, the quest has always been for more power.
        </p>

        <div className="bg-bg-secondary/20 p-6 rounded-lg">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Cpu size={20} /> Moore's Law
          </h3>
          <p className="mb-4">
            <em>"The number of transistors on a microchip doubles about every two years."</em>
          </p>
          <p className="text-sm text-primary/80">
            Moore’s Law worked until heat, power, and physics got in the way.
            When faster single cores stopped scaling, parallelism became the only path forward.
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
        <h2 className="text-2xl font-bold text-primary pb-2">1.3 Architectural Models</h2>
        
        <p>
          Once we accept distributed systems, a new problem appears:
          <strong>how do processors see and share memory?</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-bold">Shared Memory</h3>
            <p className="text-sm text-primary/80">
              Multiple processors access the same memory space. Fast, but hard to scale (e.g., a single large server).
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
              Each processor has its own memory. They communicate via a network (message passing). Scales massively (e.g., a cluster).
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
          Because nodes don’t share memory and communicate over a network,
          clusters need a clear structure for control, scheduling, and access.
        </p>
        <p className="mt-2">
            We will use the classic <strong>Master/Slave</strong> (or Head Node/Compute Node) topology.
        </p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Head Node (Master):</strong> Manages the cluster, schedules jobs, hosts the filesystem.</li>
            <li><strong>Compute Nodes (Workers):</strong> Do the heavy lifting (calculations, rendering).</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 rounded bg-bg-secondary/20">
                <h4 className="font-bold flex items-center gap-2 mb-2"><Unlock size={16} /> Open Cluster</h4>
                <p className="text-sm">Nodes are accessible from the outside world. Easier access, harder security.</p>
            </div>
            <div className="p-4 rounded bg-bg-secondary/20">
                <h4 className="font-bold flex items-center gap-2 mb-2"><Lock size={16} /> Closed Cluster</h4>
                <p className="text-sm">Nodes are hidden behind the head node (acting as a gateway). Standard for HPC.</p>
            </div>
        </div>
      </section>

      <div className="flex justify-between mt-12 pt-8">
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

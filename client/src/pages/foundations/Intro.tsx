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
          Welcome to the world of High Performance Computing (HPC). 
          Let's break down what a cluster is, where it came from, and how it works.
        </p>
      </div>

      {/* 1.1 What is a Cluster? */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary pb-2">1.1 What even is a Cluster?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              A <strong>computer cluster</strong> is simply a set of loosely or tightly connected computers that work together 
              so that, in many respects, they can be viewed as a single system.
            </p>
            <p>
              The goal is <strong>High Performance Computing (HPC)</strong>: aggregating computing power to solve 
              problems that are too large for a standard computer.
            </p>
          </div>
          
          {/* Cluster Animation */}
          <div className="bg-bg-secondary/30 p-8 rounded-lg flex justify-center items-center h-48">
            <div className="relative">
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-32 h-32 bg-primary/5 rounded-full" />
              </motion.div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-bg-primary p-2 rounded shadow-sm"
                  >
                    <Server size={20} className="text-primary" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-bold">The "Beowulf" Concept</h3>
          <p>
            The most common type of cluster for home labs and research is a <strong>Beowulf cluster</strong>. 
            It's built from commodity hardware (ordinary PCs) and runs open-source software (usually Linux).
            No custom supercomputer chips required.
          </p>

          <h3 className="text-lg font-bold">Flynn’s Taxonomy</h3>
          <p>How do computers handle data? Michael Flynn categorized them in 1966:</p>
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
            This observation drove single-core performance for decades. But as physics limits hit, 
            we transitioned to <strong>multi-core</strong> and <strong>distributed systems</strong> to keep scaling up.
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

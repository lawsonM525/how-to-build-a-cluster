import { Activity, List } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import Terminal from '../../components/Terminal';
import { Link } from 'react-router-dom';

const Slurm = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 8: Job Schedulers
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          The brain of the cluster. The scheduler decides who runs what, where, and when.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">8.1 The Role of the Scheduler</h2>
        <ul className="list-disc list-inside space-y-2 text-primary/80">
            <li><strong>Arbitrate Resources:</strong> "I need 40 cores and 200GB RAM."</li>
            <li><strong>Queue Jobs:</strong> "Wait your turn, Alice is running a simulation."</li>
            <li><strong>Enforce Fair Share:</strong> "Bob has used 90% of the cluster this week, lower his priority."</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 border border-border rounded bg-bg-secondary/10">
                <h3 className="font-bold mb-1">Slurm</h3>
                <p className="text-xs text-primary/60">Simple Linux Utility for Resource Management. The standard for HPC.</p>
            </div>
            <div className="p-4 border border-border rounded bg-bg-secondary/10">
                <h3 className="font-bold mb-1">Kubernetes</h3>
                <p className="text-xs text-primary/60">Container orchestration. Standard for web apps and microservices.</p>
            </div>
            <div className="p-4 border border-border rounded bg-bg-secondary/10">
                <h3 className="font-bold mb-1">Torque/PBS</h3>
                <p className="text-xs text-primary/60">Legacy systems, still found in some academic labs.</p>
            </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">8.2 Slurm Workload Manager</h2>
        
        <div className="space-y-4">
            <h3 className="font-bold flex items-center gap-2"><Activity size={20}/> Architecture</h3>
            <p className="text-sm text-primary/80">
                <strong>slurmctld</strong> (Controller) runs on the Head Node.<br/>
                <strong>slurmd</strong> (Daemon) runs on every Compute Node.
            </p>
        </div>

        <div className="space-y-4 mt-6">
            <h3 className="font-bold">Key Commands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="font-mono text-sm bg-bg-secondary/20 p-2 rounded">
                    <span className="font-bold">sinfo</span><br/>
                    <span className="text-primary/60">View node state (Idle, Alloc, Mix, Down)</span>
                </div>
                <div className="font-mono text-sm bg-bg-secondary/20 p-2 rounded">
                    <span className="font-bold">squeue</span><br/>
                    <span className="text-primary/60">View the job queue</span>
                </div>
                <div className="font-mono text-sm bg-bg-secondary/20 p-2 rounded">
                    <span className="font-bold">sbatch</span><br/>
                    <span className="text-primary/60">Submit a job script</span>
                </div>
                <div className="font-mono text-sm bg-bg-secondary/20 p-2 rounded">
                    <span className="font-bold">scancel</span><br/>
                    <span className="text-primary/60">Kill a job</span>
                </div>
            </div>
        </div>

        <div className="space-y-4 mt-6">
             <h3 className="font-bold flex items-center gap-2"><List size={20}/> Submission Scripts (SBATCH)</h3>
             <p className="text-sm text-primary/80">
                You define resources using <code>#SBATCH</code> comments at the top of a script.
             </p>
             <CodeBlock 
                language="bash"
                filename="job.sh"
                code={`#!/bin/bash
#SBATCH --job-name=my_simulation
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=4
#SBATCH --time=01:00:00
#SBATCH --partition=compute

module load openmpi
mpirun ./my_app`}
            />
        </div>

        <Terminal title="head-node:~">
            <div className="space-y-2">
                <div className="flex gap-2">
                    <span className="text-green-500">user@head:~$</span>
                    <span className="text-primary">sbatch job.sh</span>
                </div>
                <div className="text-primary/60">
                    Submitted batch job 1042
                </div>
                <div className="flex gap-2">
                    <span className="text-green-500">user@head:~$</span>
                    <span className="text-primary">squeue</span>
                </div>
                <div className="text-primary/60 whitespace-pre">
JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)<br/>
 1042   compute my_simul    alice  R       0:05      2 node[01-02]
                </div>
            </div>
        </Terminal>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">8.3 SLURM vs. Kubernetes: Choosing Your Scheduler</h2>
        
        <div className="bg-bg-secondary/10 p-6 rounded-lg border border-border/50 mb-6">
          <h3 className="font-bold mb-3">What Do We Mean By "Scheduler"?</h3>
          <p className="text-sm text-primary/80">
            When people say "scheduler," they might mean different things:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-3 bg-bg-secondary/20 rounded border border-border">
              <h4 className="font-bold text-sm">Cluster/Resource Scheduler</h4>
              <p className="text-xs text-primary/70 mt-1">Decides where work runs (which nodes) and when it starts, based on CPU/GPU/memory constraints.</p>
            </div>
            <div className="p-3 bg-bg-secondary/20 rounded border border-border">
              <h4 className="font-bold text-sm">Orchestrator</h4>
              <p className="text-xs text-primary/70 mt-1">Does scheduling plus lifecycle management, networking, service discovery, rollouts, and configuration.</p>
            </div>
            <div className="p-3 bg-bg-secondary/20 rounded border border-border">
              <h4 className="font-bold text-sm">Workflow Scheduler</h4>
              <p className="text-xs text-primary/70 mt-1">Orders multi-step pipelines and triggers work, but usually delegates compute placement to a cluster scheduler.</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">SLURM</h3>
            <p className="text-sm">
              SLURM is primarily a <strong>workload manager + batch scheduler</strong> built for High-Performance Computing (HPC).
            </p>
            
            <div className="bg-bg-secondary/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Core Concepts</h4>
              <p className="text-xs text-primary/80 mb-2">
                You submit <strong>jobs</strong> into <strong>partitions</strong> (queues) with resource/time requests.
              </p>
              <p className="text-xs text-primary/80">
                SLURM focuses on allocating nodes/cores and launching job steps, commonly for tightly-coupled parallel workloads.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold">Strengths</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>HPC-first scheduling with backfill (maximizes utilization)</li>
                <li>Job arrays for submitting many similar jobs efficiently</li>
                <li>Reservations for time windows (workshops, deadlines)</li>
                <li>Strong fairness policies and prioritization</li>
                <li>Preemption support (high-priority jobs can interrupt lower ones)</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold">Limitations</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Not a full application platform (no service discovery, load-balancing)</li>
                <li>Less suited for "always-on" microservices</li>
                <li>HPC-flavored concepts can be unfamiliar to cloud-native teams</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">Kubernetes</h3>
            <p className="text-sm">
              Kubernetes is a <strong>container orchestrator</strong> with a scheduler at its core.
            </p>
            
            <div className="bg-bg-secondary/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Core Concepts</h4>
              <p className="text-xs text-primary/80 mb-2">
                You declare desired state of <strong>Pods</strong> and controllers (Deployments/Jobs). The scheduler binds Pods to nodes based on requests/constraints.
              </p>
              <p className="text-xs text-primary/80">
                Kubernetes includes a pluggable scheduling framework for extending scheduling behavior.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold">Strengths</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Best-in-class container orchestration (deployments, rollouts, health checks)</li>
                <li>Strong scheduling primitives (resource requests, taints/tolerations, affinity)</li>
                <li>Support for batch workloads via Jobs and CronJobs</li>
                <li>Highly extensible ecosystem</li>
                <li>Evolving support for accelerators like GPUs</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold">Limitations</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Default scheduling not optimized for classic HPC patterns (though this is changing)</li>
                <li>Higher operational complexity</li>
                <li>Advanced batch fairness/quotas often need additional components</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-bg-secondary/20 p-6 rounded-lg border border-border">
          <h3 className="font-bold mb-4">When to Choose What?</h3>
          
          <div className="space-y-4">
            <div className="p-3 bg-bg-secondary/10 rounded border-l-4 border-primary border">
              <h4 className="font-bold">Choose SLURM when:</h4>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Running HPC-style batch workloads (MPI, multi-node GPU training)</li>
                <li>You need predictable performance on dedicated clusters</li>
                <li>You want strong control over reservations and job priorities</li>
                <li>You're in a research/academic environment with traditional HPC workflows</li>
              </ul>
            </div>
            
            <div className="p-3 bg-bg-secondary/10 rounded border-l-4 border-primary border">
              <h4 className="font-bold">Choose Kubernetes when:</h4>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Running containerized services and microservices</li>
                <li>You want a full platform (rollouts, service discovery, autoscaling)</li>
                <li>You need multi-tenancy controls for many teams</li>
                <li>Your workloads include APIs, web services, and event-driven applications</li>
              </ul>
            </div>
            
            <div className="p-3 bg-bg-secondary/10 rounded border-l-4 border-border border">
              <h4 className="font-bold">Common Hybrid Approach:</h4>
              <p className="text-sm mt-2">
                Many organizations use both: Kubernetes for services and APIs, SLURM for heavy HPC batch jobs, with a workflow layer (like Airflow or Nextflow) coordinating between them.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-bold">Extensions and Alternatives</h3>
          <p className="text-sm mb-4">
            The scheduler ecosystem is rich with options for specific needs:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-bold text-sm">Kubernetes + Batch Extensions</h4>
              <p className="text-xs text-primary/70 mt-1">Projects like Volcano and Kueue add HPC-style batch scheduling to Kubernetes (gang scheduling, queues, quotas).</p>
            </div>
            
            <div className="p-3 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-bold text-sm">HTCondor</h4>
              <p className="text-xs text-primary/70 mt-1">Great for high-throughput computing with thousands of independent jobs across distributed resources.</p>
            </div>
            
            <div className="p-3 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-bold text-sm">PBS/OpenPBS/LSF</h4>
              <p className="text-xs text-primary/70 mt-1">Alternative HPC schedulers with similar concepts to SLURM, often chosen when organizations are already invested in them.</p>
            </div>
            
            <div className="p-3 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-bold text-sm">Cloud-Managed Options</h4>
              <p className="text-xs text-primary/70 mt-1">AWS Batch and Google Cloud Batch offer managed batch scheduling without operating the cluster yourself.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/infrastructure/management" className="text-primary/60 hover:text-primary">
            ← Previous: Cluster Management
         </Link>
         <Link to="/apps/mpi" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Parallel Frameworks →
         </Link>
      </div>
    </div>
  );
};

export default Slurm;

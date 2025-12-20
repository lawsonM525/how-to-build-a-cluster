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

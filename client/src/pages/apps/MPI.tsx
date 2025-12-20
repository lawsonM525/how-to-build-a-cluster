import { Share2, Box, Cpu } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import { Link } from 'react-router-dom';

const MPI = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 9: Parallel Computing Frameworks
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          Hardware is useless without software that can use it. How do we write programs that run on 100 computers at once?
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">9.1 Message Passing Interface (MPI)</h2>
        <p className="text-primary/80">
            MPI is the de facto standard for distributed memory systems. It's a specification (not a program) implemented by libraries like <strong>OpenMPI</strong> and <strong>MPICH</strong>.
        </p>
        
        <div className="space-y-4 mt-6">
            <h3 className="font-bold flex items-center gap-2"><Share2 size={20}/> Core Concepts</h3>
            <p className="text-sm text-primary/80">
                Processes have <strong>Ranks</strong> (IDs). Rank 0 is usually the "master" that coordinates work.
                They communicate by sending messages (packets) over the network.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Init</code>
                    <p className="text-xs mt-1">Start the MPI environment.</p>
                </div>
                 <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Finalize</code>
                    <p className="text-xs mt-1">Clean up and exit.</p>
                </div>
                 <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Send</code>
                    <p className="text-xs mt-1">Throw data to another rank.</p>
                </div>
                 <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Recv</code>
                    <p className="text-xs mt-1">Catch data from another rank.</p>
                </div>
            </div>
        </div>

        <div className="space-y-4 mt-6">
             <h3 className="font-bold">Hello World (C)</h3>
             <CodeBlock 
                language="c"
                filename="hello.c"
                code={`#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(NULL, NULL);

    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);

    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    printf("Hello from rank %d out of %d processors\\n", world_rank, world_size);

    MPI_Finalize();
}`}
            />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">9.2 GPU Programming</h2>
        <p className="text-primary/80">
            Accelerators require different thinking. Instead of "do this, then that", you think "do this to every pixel at once".
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="space-y-2">
                <h3 className="font-bold flex items-center gap-2"><Box size={20}/> CUDA</h3>
                <p className="text-sm text-primary/80">
                    NVIDIA's proprietary framework. Dominates AI and HPC.
                    Concepts: <strong>Host</strong> (CPU) vs <strong>Device</strong> (GPU) memory. You must copy data back and forth (expensive!).
                </p>
            </div>
             <div className="space-y-2">
                <h3 className="font-bold flex items-center gap-2"><Cpu size={20}/> OpenMP / OpenCL</h3>
                <p className="text-sm text-primary/80">
                    <strong>OpenMP</strong> supports "offloading" directives (`#pragma omp target`). Easier than CUDA, but sometimes slower. 
                    <strong>OpenCL</strong> is the open standard alternative to CUDA.
                </p>
            </div>
        </div>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/scheduler/slurm" className="text-primary/60 hover:text-primary">
            ← Previous: Job Schedulers
         </Link>
         <Link to="/apps/optimization" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Optimization →
         </Link>
      </div>
    </div>
  );
};

export default MPI;

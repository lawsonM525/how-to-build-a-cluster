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
        
        <div className="bg-bg-secondary/10 p-6 rounded-lg border border-border/50 mt-4">
          <h3 className="font-bold mb-3">MPI Origins</h3>
          <p className="text-sm text-primary/80">
            The message-passing model emerged as an expressive and efficient paradigm for parallel computing. Before MPI, each vendor had their own incompatible message-passing library. The MPI Forum formed in 1992 to create a standard, with version 1.0 completed in May 1994.
          </p>
          <p className="text-sm text-primary/80 mt-2">
            MPICH, one of the first implementations, was developed alongside the standard itself. This allowed immediate testing of the specification and quick adoption by both researchers and vendors.
          </p>
        </div>
        
        <div className="space-y-4 mt-6">
            <h3 className="font-bold flex items-center gap-2"><Share2 size={20}/> Core Concepts</h3>
            <p className="text-sm text-primary/80">
                MPI provides abstractions for processes at two levels. First, processes have <strong>Ranks</strong> (IDs) within a group. Rank 0 is usually the "master" that coordinates work.
                Second, <strong>virtual topologies</strong> allow for graph or Cartesian naming of processes to match application semantics.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Init</code>
                    <p className="text-xs mt-1">Start the MPI environment.</p>
                </div>
                <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Finalize</code>
                    <p className="text-xs mt-1">Clean up and exit.</p>
                </div>
                <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Comm_rank</code>
                    <p className="text-xs mt-1">Get this process's rank.</p>
                </div>
                <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Send</code>
                    <p className="text-xs mt-1">Throw data to another rank.</p>
                </div>
                <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Recv</code>
                    <p className="text-xs mt-1">Catch data from another rank.</p>
                </div>
                <div className="bg-bg-secondary/10 p-3 rounded border border-border">
                    <code className="text-sm font-bold">MPI_Bcast</code>
                    <p className="text-xs mt-1">Send same data to all processes.</p>
                </div>
            </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <h3 className="font-bold">Communication Protocols</h3>
          <p className="text-sm text-primary/80">
            MPI implementations use different protocols to transfer data between processes, balancing performance and reliability:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-mono font-bold mb-2">Eager Protocol</h4>
              <p className="text-xs text-primary/70">Data is sent immediately, even if destination isn't ready. Highest performance but can exhaust memory if many large messages are sent.</p>
            </div>
            <div className="p-4 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-mono font-bold mb-2">Rendezvous Protocol</h4>
              <p className="text-xs text-primary/70">Data is sent only when requested by receiver. More robust but potentially slower due to handshaking.</p>
            </div>
            <div className="p-4 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-mono font-bold mb-2">Get Protocol</h4>
              <p className="text-xs text-primary/70">Receiver directly reads data from sender's memory. Requires special hardware support like shared memory or RDMA.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="font-bold">MPI Architecture & Implementations</h3>
          <p className="text-sm text-primary/80">
            MPI implementations like MPICH use a layered architecture to balance portability with performance. Key components include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-mono font-bold mb-2">Abstract Device Interface (ADI)</h4>
              <p className="text-xs text-primary/70">A middle layer that allows MPI functions to be implemented once but run efficiently on many platforms. Vendors can optimize just this layer for their hardware.</p>
            </div>
            <div className="p-4 bg-bg-secondary/10 rounded border border-border">
              <h4 className="font-mono font-bold mb-2">Channel Interface</h4>
              <p className="text-xs text-primary/70">A minimal set of functions (as few as five) that handle the actual data transfer between processes. This makes porting to new systems quick and straightforward.</p>
            </div>
          </div>
          
          <div className="mt-4 p-5 bg-bg-secondary/20 rounded-lg border border-border">
            <h4 className="font-bold mb-2">Performance Considerations</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-bold text-xs uppercase text-primary/60">Latency</h5>
                <p className="text-xs mt-1">Time for a minimal message to travel from source to destination. Critical for applications with many small messages.</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="text-xs font-mono">1-10 μs</div>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '80%' }}></div>
                  </div>
                  <div className="text-xs font-mono">Shared Memory</div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="text-xs font-mono">10-100 μs</div>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="text-xs font-mono">High-speed Network</div>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-xs uppercase text-primary/60">Bandwidth</h5>
                <p className="text-xs mt-1">Maximum data throughput. Critical for applications with large messages or data transfers.</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="text-xs font-mono">10+ GB/s</div>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '90%' }}></div>
                  </div>
                  <div className="text-xs font-mono">Shared Memory</div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="text-xs font-mono">1-10 GB/s</div>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '50%' }}></div>
                  </div>
                  <div className="text-xs font-mono">InfiniBand/Omni-Path</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-8">
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
            Accelerators require different thinking. Instead of "do this, then that", you think "do this to every pixel/element at once".
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
        
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-primary">Programming with CUDA</h3>
          <p className="text-primary/80">
            CUDA C++ lets you harness the massive parallelism of NVIDIA GPUs using familiar C++ syntax. 
            Let's explore how CUDA's programming model can help you write better GPU code.
          </p>
          
          <div className="bg-bg-secondary/10 p-6 rounded-lg space-y-4">
            <h4 className="font-bold">Key CUDA Concepts</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-bg-secondary/20 p-4 rounded border border-border">
                <h5 className="font-mono font-bold mb-2">Kernels</h5>
                <p className="text-sm">Functions that run on the GPU, declared with <code>__global__</code> specifier.</p>
                <p className="text-xs text-primary/60 mt-1">Called with special syntax: <code>kernel&#123;&#123;&#123;blocks, threads&#125;&#125;&#125;(args);</code></p>
              </div>
              
              <div className="bg-bg-secondary/20 p-4 rounded border border-border">
                <h5 className="font-mono font-bold mb-2">Thread Hierarchy</h5>
                <p className="text-sm">Threads are organized into blocks, blocks form a grid.</p>
                <p className="text-xs text-primary/60 mt-1">Access with: <code>threadIdx.x</code>, <code>blockIdx.x</code>, <code>blockDim.x</code></p>
              </div>
              
              <div className="bg-bg-secondary/20 p-4 rounded border border-border">
                <h5 className="font-mono font-bold mb-2">Memory Management</h5>
                <p className="text-sm">Modern CUDA uses Unified Memory for easier programming.</p>
                <p className="text-xs text-primary/60 mt-1"><code>cudaMallocManaged(&ptr, size)</code> allocates memory accessible by both CPU and GPU.</p>
              </div>
              
              <div className="bg-bg-secondary/20 p-4 rounded border border-border">
                <h5 className="font-mono font-bold mb-2">Execution Model</h5>
                <p className="text-sm">GPUs have many Streaming Multiprocessors (SMs) that run thread blocks in parallel.</p>
                <p className="text-xs text-primary/60 mt-1">Each SM can run multiple blocks concurrently.</p>
              </div>
            </div>
          </div>
          
          <h4 className="font-bold mt-6">From CPU to GPU: A Simple Example</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm mb-2 font-bold">CPU Version (Sequential)</p>
              <CodeBlock 
                language="cpp"
                filename="add_cpu.cpp"
                code={`void add(int n, float *x, float *y) {
  for (int i = 0; i < n; i++) {
    y[i] = x[i] + y[i];
  }
}`}
              />
              <p className="text-xs text-primary/60 mt-1">Single thread processes elements one at a time.</p>
            </div>
            
            <div>
              <p className="text-sm mb-2 font-bold">GPU Version (Parallel)</p>
              <CodeBlock 
                language="cpp"
                filename="add_gpu.cu"
                code={`__global__
void add(int n, float *x, float *y) {
  int index = blockIdx.x * blockDim.x + threadIdx.x;
  int stride = blockDim.x * gridDim.x;
  
  for (int i = index; i < n; i += stride) {
    y[i] = x[i] + y[i];
  }
}`}
              />
              <p className="text-xs text-primary/60 mt-1">Thousands of threads process elements in parallel.</p>
            </div>
          </div>
          
          <h4 className="font-bold mt-6">Why CUDA Makes GPU Programming Better</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-primary text-bg-primary rounded-full w-6 h-6 flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
              <div>
                <p className="font-bold">Thread Management Abstraction</p>
                <p className="text-sm text-primary/80">CUDA handles the complex task of scheduling thousands of threads across multiple processing units. You just specify how many blocks and threads to use.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary text-bg-primary rounded-full w-6 h-6 flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
              <div>
                <p className="font-bold">Memory Management Simplification</p>
                <p className="text-sm text-primary/80">Unified Memory automatically migrates data between CPU and GPU memory as needed. For better performance, you can explicitly prefetch data with <code>cudaMemPrefetchAsync()</code>.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary text-bg-primary rounded-full w-6 h-6 flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
              <div>
                <p className="font-bold">Grid-Stride Loop Pattern</p>
                <p className="text-sm text-primary/80">The pattern shown in the example (<code>for (int i = index; i &lt; n; i += stride)</code>) is a powerful idiom that lets each thread process multiple elements, ensuring good utilization regardless of array size.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary text-bg-primary rounded-full w-6 h-6 flex items-center justify-center font-bold shrink-0 mt-0.5">4</div>
              <div>
                <p className="font-bold">Performance Visibility</p>
                <p className="text-sm text-primary/80">CUDA provides profiling tools like Nsight Systems that give you detailed insights into kernel execution, memory transfers, and bottlenecks.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-bg-secondary/20 p-4 rounded-lg mt-6">
            <h4 className="font-bold">Real-World Performance Impact</h4>
            <p className="text-sm mt-2">
              A simple vector addition that takes 90+ milliseconds on a CPU can run in under 50 <em>microseconds</em> on a modern GPU—a speedup of 1900x! 
              More complex algorithms with higher compute-to-memory ratios can see even greater benefits.
            </p>
            <p className="text-sm mt-2">
              Modern GPUs can achieve memory bandwidth of 265+ GB/s, compared to 50-60 GB/s for high-end CPUs, 
              making them ideal for data-parallel workloads like scientific simulations, AI training, and data processing.
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

import { Box, Cpu } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import { Link } from 'react-router-dom';

const GPU = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 10: GPU Programming
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          Accelerators require different thinking. Instead of "do this, then that", you think "do this to every pixel/element at once".
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">10.1 Why GPUs Matter</h2>
        
        <div className="bg-bg-secondary/10 p-6 rounded-lg border border-border/50 mt-4">
          <h3 className="font-bold mb-3">The GPU Revolution</h3>
          <p className="text-sm text-primary/80">
            Modern GPUs aren't just for graphics anymore. They've evolved into powerful general-purpose processors with:
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-primary/80">
            <li>Massive parallelism (thousands of cores)</li>
            <li>Incredible compute power (300+ GFLOPS on a single GPU)</li>
            <li>High memory bandwidth (80+ GB/s)</li>
          </ul>
          <p className="text-sm text-primary/80 mt-2">
            This makes GPUs perfect for problems where you need to do the same operation on lots of data at once.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="font-bold mb-3">CPU vs GPU: Different Philosophies</h3>
            <div className="space-y-3">
              <div className="p-3 bg-bg-secondary/10 rounded border border-border">
                <h4 className="font-bold text-sm">CPU Design</h4>
                <p className="text-xs text-primary/70 mt-1">Optimized for <strong>latency</strong> - getting a single task done quickly. Has a few powerful cores with complex control logic and large caches.</p>
              </div>
              <div className="p-3 bg-bg-secondary/10 rounded border border-border">
                <h4 className="font-bold text-sm">GPU Design</h4>
                <p className="text-xs text-primary/70 mt-1">Optimized for <strong>throughput</strong> - processing huge amounts of data. Has many simple cores that work best when all doing the same thing.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">When to Use GPUs</h3>
            <div className="p-3 bg-bg-secondary/10 rounded border border-border h-full">
              <p className="text-sm text-primary/80">GPUs excel when your problem has:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1 text-xs text-primary/70">
                <li><strong>Data parallelism</strong> - same operation on many elements</li>
                <li><strong>High arithmetic intensity</strong> - lots of math per memory access</li>
                <li><strong>Throughput &gt; Latency</strong> - you care more about total work done than how fast a single calculation finishes</li>
                <li><strong>Regular memory access</strong> - predictable patterns work best</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">10.2 Programming Frameworks</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
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
        
        <div className="mt-8 bg-bg-secondary/10 p-6 rounded-lg border border-border/50">
          <h3 className="font-bold mb-3">GPU Programming Models</h3>
          <p className="text-sm text-primary/80">
            GPUs use a programming model called SPMD (Single Program, Multiple Data), where many parallel elements run the same code but on different data.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-3 bg-bg-secondary/20 rounded border border-border">
              <h4 className="font-bold text-sm">Map</h4>
              <p className="text-xs text-primary/70 mt-1">Apply the same operation to every element in a collection. Instead of a sequential for-loop, the GPU processes many elements at once.</p>
            </div>
            <div className="p-3 bg-bg-secondary/20 rounded border border-border">
              <h4 className="font-bold text-sm">Reduce</h4>
              <p className="text-xs text-primary/70 mt-1">Combine all elements in a collection (like finding a sum or maximum). GPUs do this by working on smaller chunks in parallel, then combining results.</p>
            </div>
            <div className="p-3 bg-bg-secondary/20 rounded border border-border">
              <h4 className="font-bold text-sm">Scatter/Gather</h4>
              <p className="text-xs text-primary/70 mt-1">Reading from (gather) or writing to (scatter) computed memory locations. Modern GPUs can do both, but gather is generally more efficient.</p>
            </div>
            <div className="p-3 bg-bg-secondary/20 rounded border border-border">
              <h4 className="font-bold text-sm">Scan</h4>
              <p className="text-xs text-primary/70 mt-1">Also called parallel-prefix-sum, this builds an array where each element is a running total of all previous elements. A powerful building block for many algorithms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">10.3 Real-World Applications</h2>
        
        <p className="text-primary/80">
          GPUs have revolutionized many fields by delivering 10-100x speedups over CPU-only solutions:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-bg-secondary/10 rounded border border-border">
            <h4 className="font-bold mb-2">Scientific Computing</h4>
            <ul className="list-disc ml-4 text-xs text-primary/70 space-y-1">
              <li>Molecular dynamics simulations</li>
              <li>Weather forecasting</li>
              <li>Quantum chemistry</li>
              <li>Fluid dynamics</li>
            </ul>
          </div>
          
          <div className="p-4 bg-bg-secondary/10 rounded border border-border">
            <h4 className="font-bold mb-2">Artificial Intelligence</h4>
            <ul className="list-disc ml-4 text-xs text-primary/70 space-y-1">
              <li>Deep learning training</li>
              <li>Neural network inference</li>
              <li>Computer vision</li>
              <li>Natural language processing</li>
            </ul>
          </div>
          
          <div className="p-4 bg-bg-secondary/10 rounded border border-border">
            <h4 className="font-bold mb-2">Industry Applications</h4>
            <ul className="list-disc ml-4 text-xs text-primary/70 space-y-1">
              <li>Financial modeling</li>
              <li>Medical imaging</li>
              <li>Oil & gas exploration</li>
              <li>Game physics simulation</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-bg-secondary/20 p-4 rounded-lg border border-border mt-4">
          <h4 className="font-bold mb-2">Case Study: Folding@Home</h4>
          <p className="text-xs text-primary/80">
            This distributed protein folding project achieved over 1 petaFLOP of computing power by using GPUs. A single GPU provides about 60x the performance of an average CPU for their molecular dynamics simulations, allowing scientists to study how proteins fold and potentially develop new drugs.
          </p>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">10.4 Programming with CUDA</h2>
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
              <p className="text-xs text-primary/60 mt-1"><code>cudaMallocManaged(&amp;ptr, size)</code> allocates memory accessible by both CPU and GPU.</p>
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
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/apps/mpi" className="text-primary/60 hover:text-primary">
            ← Previous: Parallel Frameworks
         </Link>
         <Link to="/apps/optimization" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Optimization →
         </Link>
      </div>
    </div>
  );
};

export default GPU;
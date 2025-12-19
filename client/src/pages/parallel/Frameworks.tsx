import { Terminal, Code, Cpu, Zap } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import Note from '../../components/Note';

const ParallelFrameworks = () => {
  const cudaKernelCode = `// Kernel function to add elements
__global__
void add(int n, float *x, float *y)
{
  int index = blockIdx.x * blockDim.x + threadIdx.x;
  int stride = blockDim.x * gridDim.x;
  for (int i = index; i < n; i += stride)
    y[i] = x[i] + y[i];
}`;

  const executionCode = `int blockSize = 256;
int numBlocks = (N + blockSize - 1) / blockSize;
add<<<numBlocks, blockSize>>>(N, x, y);`;

  const memoryCode = `// Allocate Unified Memory
cudaMallocManaged(&x, N*sizeof(float));
cudaMallocManaged(&y, N*sizeof(float));

// Prefetch to GPU to avoid page faults
cudaMemPrefetchAsync(x, N*sizeof(float), 0, 0);
cudaMemPrefetchAsync(y, N*sizeof(float), 0, 0);`;

  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Parallel Frameworks</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          The GPU is a massively parallel beast. To tame it, you need the right tools.
          CUDA C++ is the standard. It exposes the GPU's power through standard C++.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Terminal size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">9.1 The CUDA Programming Model</h2>
        </div>
        <p className="text-primary/80">
          You define <strong>kernels</strong>. These are functions that run on the GPU.
          Use the <code>__global__</code> specifier. Call them from the CPU.
        </p>
        <div className="bg-bg-primary border border-border p-6 rounded">
          <h3 className="text-lg font-bold text-primary mt-0">Grid-Stride Loops</h3>
          <p className="text-primary/70 text-sm mb-4">
            Do not assume one thread per element. Your data might be larger than your grid.
            Use a grid-stride loop. It makes your kernel flexible and scalable.
          </p>
          <CodeBlock 
            language="cpp" 
            code={cudaKernelCode} 
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Cpu size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">9.2 Execution Configuration</h2>
        </div>
        <p className="text-primary/80">
          You must tell the GPU how to launch your kernel.
          Use the triple angle bracket syntax: <code>&lt;&lt;&lt;numBlocks, threadsPerBlock&gt;&gt;&gt;</code>.
        </p>
        <ul className="list-disc list-inside space-y-2 text-primary/80">
          <li><strong>Blocks:</strong> Groups of threads. They run on Streaming Multiprocessors (SMs).</li>
          <li><strong>Threads:</strong> The fundamental unit of execution. Multiples of 32 (warps).</li>
          <li><strong>Grids:</strong> The collection of all blocks for a kernel launch.</li>
        </ul>
        <CodeBlock 
          language="cpp" 
          code={executionCode} 
        />
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Zap size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">9.3 Unified Memory</h2>
        </div>
        <p className="text-primary/80">
          Memory management used to be hard. You had to <code>cudaMalloc</code> and <code>cudaMemcpy</code>.
          Now we use Unified Memory. The system migrates pages for you.
        </p>
        <Note type="warning" title="Performance Tip">
          Page faults are expensive. They stall threads.
          Use <code>cudaMemPrefetchAsync</code> to move data to the GPU <em>before</em> the kernel runs.
        </Note>
        <CodeBlock 
          language="cpp" 
          code={memoryCode} 
        />
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Code size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">9.4 Profiling</h2>
        </div>
        <p className="text-primary/80">
          Do not guess. Measure.
          Use <strong>Nsight Systems</strong> (<code>nsys</code>) to visualize application performance.
          Identify bottlenecks. Optimize memory transfers. Increase occupancy.
        </p>
      </section>
    </div>
  );
};

export default ParallelFrameworks;

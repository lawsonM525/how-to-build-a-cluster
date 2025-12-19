import { BookOpen, FileText, Link as LinkIcon, MapPin } from 'lucide-react';

const Sources = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Sources & References</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          The content of this guide is grounded in technical research. 
          We cite our sources below. We indicate where they are used.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-bg-primary border border-border p-6 rounded flex flex-col md:flex-row gap-6">
          <div className="text-primary shrink-0">
            <BookOpen size={32} strokeWidth={1.5} />
          </div>
          <div className="space-y-4 flex-grow">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary m-0">An Even Easier Introduction to CUDA (Updated)</h3>
              <p className="text-primary/70 text-sm">
                <strong>Author:</strong> Mark Harris<br/>
                <strong>Source:</strong> NVIDIA Technical Blog (May 2025)
              </p>
            </div>
            
            <div className="bg-bg-secondary/20 p-4 rounded text-sm text-primary/80">
              <div className="flex items-center gap-2 font-bold mb-2">
                <MapPin size={14} /> Used In:
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Chapter 9: Parallel Frameworks</strong> (Kernel definitions, Grid-Stride Loops)</li>
                <li><strong>Chapter 9: Optimization</strong> (Unified Memory, Prefetching)</li>
              </ul>
            </div>

            <a href="https://developer.nvidia.com/blog/even-easier-introduction-cuda/" className="inline-flex items-center gap-2 text-xs font-bold text-primary border border-primary px-3 py-1.5 rounded hover:bg-primary hover:text-bg-primary transition-colors">
              <LinkIcon size={12} /> Read Article
            </a>
          </div>
        </div>

        <div className="bg-bg-primary border border-border p-6 rounded flex flex-col md:flex-row gap-6">
          <div className="text-primary shrink-0">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <div className="space-y-4 flex-grow">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary m-0">GPU Computing</h3>
              <p className="text-primary/70 text-sm">
                <strong>Authors:</strong> Owens et al.<br/>
                <strong>Source:</strong> Proceedings of the IEEE (May 2008)
              </p>
            </div>

            <div className="bg-bg-secondary/20 p-4 rounded text-sm text-primary/80">
              <div className="flex items-center gap-2 font-bold mb-2">
                <MapPin size={14} /> Used In:
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Chapter 1: The World of Cluster Computing</strong> (Latency vs Throughput, History)</li>
                <li><strong>Chapter 2: Designing the Iron</strong> (Unified Shader Architecture, SPMD Model)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-bg-primary border border-border p-6 rounded flex flex-col md:flex-row gap-6">
          <div className="text-primary shrink-0">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <div className="space-y-4 flex-grow">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary m-0">Slim Fly: A Cost Effective Low-Diameter Network Topology</h3>
              <p className="text-primary/70 text-sm">
                <strong>Authors:</strong> Besta & Hoefler<br/>
                <strong>Source:</strong> SC '14 Proceedings (Nov 2014)
              </p>
            </div>

            <div className="bg-bg-secondary/20 p-4 rounded text-sm text-primary/80">
              <div className="flex items-center gap-2 font-bold mb-2">
                <MapPin size={14} /> Used In:
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Chapter 2: Designing the Iron</strong> (Network Topology section)</li>
                <li><strong>Network Configuration</strong> (Diameter optimization, Cost/Power analysis)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-bg-primary border border-border p-6 rounded flex flex-col md:flex-row gap-6">
          <div className="text-primary shrink-0">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <div className="space-y-4 flex-grow">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary m-0">Cramming more components onto integrated circuits</h3>
              <p className="text-primary/70 text-sm">
                <strong>Author:</strong> Gordon E. Moore<br/>
                <strong>Source:</strong> Electronics, Volume 38, Number 8 (April 1965)
              </p>
            </div>

            <div className="bg-bg-secondary/20 p-4 rounded text-sm text-primary/80">
              <div className="flex items-center gap-2 font-bold mb-2">
                <MapPin size={14} /> Used In:
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Chapter 1: The World of Cluster Computing</strong> (Evolution of Integration)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-bg-primary border border-border p-6 rounded flex flex-col md:flex-row gap-6">
          <div className="text-primary shrink-0">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <div className="space-y-4 flex-grow">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary m-0">CSC 352 Install Tracker</h3>
              <p className="text-primary/70 text-sm">
                <strong>Source:</strong> CSC 352 Fall 2025 Course Materials
              </p>
            </div>

            <div className="bg-bg-secondary/20 p-4 rounded text-sm text-primary/80">
              <div className="flex items-center gap-2 font-bold mb-2">
                <MapPin size={14} /> Used In:
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Chapter 3: OS Selection</strong> (Debian Install Instructions)</li>
                <li><strong>Chapter 4: Network Configuration</strong> (Static IP, DNS, Repos)</li>
                <li><strong>Chapter 6: User Management</strong> (SSH, Sudo, Keys)</li>
                <li><strong>Chapter 12: Security & Hardening</strong> (Unattended Upgrades)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;

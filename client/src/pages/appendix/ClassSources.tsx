import { FileText, Book } from 'lucide-react';

const ClassSources = () => {
  const sources = [
    {
      category: "Class Readings",
      items: [
        { 
            title: "GPU Computing", 
            desc: "Owens et al. - A comprehensive overview of General-Purpose computing on Graphics Processing Units (GPGPU), discussing architecture, programming models, and applications.",
            filename: "GPU_Computing.pdf"
        },
        { 
            title: "Version Control with Git", 
            desc: "Summary and Setup guide for using Git in collaborative environments, emphasizing its role as the 'lab notebook' of the digital world.",
            filename: "Version Control with Git_ Summary and Setup.pdf" 
        },
        { 
            title: "Cramming more components onto integrated circuits", 
            desc: "Gordon E. Moore (1965) - The seminal paper establishing 'Moore's Law', predicting the exponential growth of component density on integrated circuits.",
            filename: "moore-crammingmorecomponents.pdf" 
        },
        { 
            title: "A high-performance, portable implementation of the MPI message passing interface standard", 
            desc: "Gropp, Lusk, & Skjellum (1996) - Introduction to MPICH, discussing the practical aspects and experiences of implementing the MPI standard.",
            filename: "mpi performance (1).pdf" 
        },
        { 
            title: "Slim Fly: A Cost Effective Low-Diameter Network Topology", 
            desc: "Besta & Hoefler (SC '14) - Proposal for a high-performance network topology that approaches theoretically optimal diameter, offering advantages in latency and cost.",
            filename: "sf_sc_2014 (3).pdf" 
        },
        {
            title: "Debian Wiki (CSC 352 Copy)",
            desc: "Class-specific mirror of Debian installation guides, networking setup, and troubleshooting steps used during the cluster build.",
            filename: "csc352-wiki.txt"
        },
        {
            title: "An Even Easier Introduction to CUDA",
            desc: "NVIDIA Technical Blog - A hands-on introduction to writing CUDA C++ code, covering memory allocation, kernel launches, and thread hierarchy.",
            filename: "An Even Easier Introduction to CUDA (Updated) _ NVIDIA Technical Blog.pdf"
        }
      ]
    }
  ];

  return (
    <div className="space-y-12 w-full max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Class Sources
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          Primary readings and reference materials assigned during the course.
        </p>
      </div>

      <div className="grid gap-12">
        {sources.map((section, idx) => (
          <section key={idx} className="space-y-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3 border-b border-border pb-2">
              <Book className="text-primary" size={24} />
              {section.category}
            </h2>
            <div className="grid gap-4">
              {section.items.map((item, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-lg border border-border bg-bg-secondary/10 hover:bg-bg-secondary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary/60 mt-1 shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-primary/70 mb-2">{item.desc}</p>
                      <span className="text-xs font-mono text-primary/40 bg-bg-secondary/30 px-2 py-1 rounded">
                        {item.filename}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ClassSources;

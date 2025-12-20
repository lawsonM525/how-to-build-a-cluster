import { FileText, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClassSources = () => {
  const sources = [
    {
      category: "Class Readings",
      items: [
        { 
            title: "GPU Computing", 
            usedIn: [
              { path: "/apps/gpu", section: "GPU Programming" }
            ]
        }, 
        { 
            title: "Cramming more components onto integrated circuits", 
            usedIn: [
              { path: "/foundations/intro", section: "Moore's Law & Its Limits" }
            ] 
        },
        { 
            title: "A high-performance, portable implementation of the MPI message passing interface standard", 
            usedIn: [
              { path: "/apps/mpi", section: "Message Passing Interface (MPI)" }
            ] 
        },
        { 
            title: "Slim Fly: A Cost Effective Low-Diameter Network Topology", 
            usedIn: [
              { path: "/software-setup/network", section: "Network Topology" }
            ] 
        }, 
        {
            title: "An Even Easier Introduction to CUDA",
            usedIn: [
              { path: "/apps/gpu", section: "Programming with CUDA" }
            ]
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
                    <div className="w-full">
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      
                      {item.usedIn && item.usedIn.length > 0 && (
                        <div className="space-y-2">
                          {item.usedIn.map((reference, idx) => (
                            <Link 
                              key={idx}
                              to={reference.path}
                              className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary hover:underline"
                            >
                              <ArrowRight size={14} />
                              <span>{reference.section}</span>
                            </Link>
                          ))}
                        </div>
                      )}
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

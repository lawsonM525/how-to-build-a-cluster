import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';

const Home = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-6xl font-extrabold text-primary mb-4 tracking-tight">
          Cluster Guide
        </h1>
        <div className="space-y-2">
          <p className="text-2xl text-primary/80 font-light">
            Author: <span className="font-semibold text-primary">Michelle Lawson, Prof. Michael Robson</span>
          </p>
          <p className="text-sm text-primary/60 italic">
            Content adapted from CSC 251 by Prof. Michael Robson (https://mprobson.github.io)
          </p>
        </div>
        <p className="text-xl text-primary/80 leading-relaxed max-w-3xl mt-8">
          A comprehensive, interactive guide to building a high-availability compute cluster 
          from scratch. From foundations to performance optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 my-16">
        {navigation.map((part) => (
          <div key={part.path} className="space-y-4">
            <h2 className="text-2xl font-bold text-primary pb-2 mt-0">
              {part.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {part.chapters.map((chapter) => (
                <Link 
                  key={chapter.path} 
                  to={chapter.path}
                  className="group p-6 rounded bg-bg-primary hover:bg-bg-secondary/20 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-primary mt-0 group-hover:underline decoration-primary/30 underline-offset-4">
                      {chapter.title}
                    </h3>
                  </div>
                  <p className="text-sm text-primary/60 mb-0">
                    Click to explore {chapter.title.toLowerCase()}.
                  </p>
                </Link>
              ))}
              {part.chapters.length === 0 && (
                <p className="text-primary/40 italic px-2">No chapters available yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

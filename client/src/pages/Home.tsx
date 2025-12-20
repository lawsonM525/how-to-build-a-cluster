import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100
    }
  }
};

const Home = () => {
  return (
    <div className="space-y-12 w-full">
      <motion.div 
        className="space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-extrabold text-primary mb-4 tracking-tight">
          How to Build a Cluster
        </h1>
        <div className="space-y-2">
          <p className="text-2xl text-primary/80 font-light">
            Author: <span className="font-semibold text-primary">Michelle Lawson</span>
          </p>
          <p className="text-sm text-primary/60 italic">
            Content adapted from the CSC 251 course by <a href="https://mprobson.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">Prof. Michael Robson</a>
          </p>
        </div>
        <p className="text-xl text-primary/80 leading-relaxed max-w-3xl mt-8">
          An interactive guide to building a high-availability compute cluster 
          from "scratch" - no prior experience required. From foundations to performance optimization.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 my-16">
        {navigation.map((part) => (
          <motion.div 
            key={part.path} 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <h2 className="text-2xl font-bold text-primary pb-2 mt-0">
              {part.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {part.chapters.map((chapter) => (
                <motion.div 
                  key={chapter.path} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link 
                    to={chapter.path}
                    className="group p-6 rounded bg-bg-primary hover:bg-bg-secondary/20 transition-colors block h-full border border-transparent hover:border-primary/10 hover:shadow-xl"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-primary mt-0 group-hover:underline decoration-primary/30 underline-offset-4">
                        {chapter.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
              {part.chapters.length === 0 && (
                <p className="text-primary/40 italic px-2">No chapters available yet.</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;

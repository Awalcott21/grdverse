
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "SZN Studios",
    description: "A modern web agency specializing in creating stunning digital experiences for forward-thinking businesses and startups.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    liveUrl: "https://szn.dev",
    tags: ["Web Design", "Branding", "Development"]
  }
];

const Showroom = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="showroom" className="min-h-screen py-32 container-padding bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.span 
              variants={itemVariants}
              className="text-sm text-accent tracking-tight"
            >
              // Our Work
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-2"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-neutral-400 mt-4 max-w-2xl mx-auto"
            >
              Explore our portfolio of custom-designed websites and digital experiences that have helped businesses succeed online.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 mb-6">
                      {project.description}
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-accent hover:bg-accent/90 px-6 py-3 rounded-lg transition-colors"
                    >
                      View Live Site
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Blueprint Grid Overlay */}
                <div className="absolute inset-0 -z-10 blueprint-grid rounded-xl opacity-25" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants}
            className="glass-card p-6"
          >
            <h3 className="text-white text-lg font-medium mb-2">Professional Design</h3>
            <p className="text-neutral-400 text-sm">
              Clean, modern designs tailored to your brand and optimized for all devices.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="glass-card p-6"
          >
            <h3 className="text-white text-lg font-medium mb-2">Quick Delivery</h3>
            <p className="text-neutral-400 text-sm">
              Fast turnaround times with most projects completed within 5-14 days.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="glass-card p-6"
          >
            <h3 className="text-white text-lg font-medium mb-2">Complete Solution</h3>
            <p className="text-neutral-400 text-sm">
              Everything included: domain, hosting, maintenance, and technical support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;

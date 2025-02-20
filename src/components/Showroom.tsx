
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="showroom" className="min-h-screen pt-32 pb-16 container-padding bg-neutral-900 relative">
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
              // Your Brand, Your Universe
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-2"
            >
              Designed to Stand Out
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-neutral-400 mt-6 max-w-2xl mx-auto text-lg"
            >
              Transform your digital presence with our cutting-edge web development solutions.
            </motion.p>
          </div>

          {/* Featured Project */}
          <motion.div 
            variants={itemVariants}
            className="mb-24"
          >
            <div className="text-sm text-neutral-500 mb-8">Featured Project</div>
            <div className="glass-card p-8 relative overflow-hidden group">
              <a 
                href="https://sznstudio.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                    alt="SZN Studios Website Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-4 right-4 bg-accent text-white px-4 py-2 text-sm tracking-tight flex items-center gap-2">
                  Visit SZN Studios™
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Showroom;

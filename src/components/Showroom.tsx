
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
              // Coming Soon
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
              Our portfolio of custom-designed websites and digital experiences is coming soon. Check back for updates!
            </motion.p>
          </div>

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
        </motion.div>
      </div>
    </section>
  );
};

export default Showroom;

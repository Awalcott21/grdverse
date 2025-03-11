
import { motion } from "framer-motion";

const ConsultationHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Curious? Let's Explore AI Together.</h1>
      <p className="text-xl text-neutral-400">
        Your website should work as hard as you do. Let's make that happen.
      </p>
    </motion.div>
  );
};

export default ConsultationHeader;

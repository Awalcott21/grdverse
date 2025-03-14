
import { motion } from "framer-motion";

const ConsultationHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
        <span className="block text-lg md:text-xl text-accent mb-4 font-normal">
          {"// Find Your Perfect AI Website in 30 Seconds"}
        </span>
        Your Website Should Work as Hard as You Do.
      </h1>
      <p className="text-xl text-neutral-400">
        Book a free consultation to explore how an AI-powered website can transform your business.
      </p>
    </motion.div>
  );
};

export default ConsultationHeader;

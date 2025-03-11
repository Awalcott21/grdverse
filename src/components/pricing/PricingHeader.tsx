
import { motion } from "framer-motion";

const PricingHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Launch Your AI Website in Just 5 Days</h1>
      <p className="text-xl text-neutral-400">
        Choose your package and get started with a website that works 24/7, answers customer questions instantly, and grows your business automatically.
      </p>
    </motion.div>
  );
};

export default PricingHeader;

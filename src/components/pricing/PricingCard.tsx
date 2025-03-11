
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Package } from "./types";

interface PricingCardProps {
  pkg: Package;
  index: number;
}

const PricingCard = ({ pkg, index }: PricingCardProps) => {
  const Icon = pkg.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card p-8 rounded-xl relative flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-accent/10 p-3 rounded-lg">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold">{pkg.title}</h3>
      </div>
      
      <div className="flex items-baseline gap-2 mb-2">
        <div className="text-3xl font-mono text-white">{pkg.price}</div>
        <div className="text-sm text-neutral-500">| {pkg.timeline}</div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-neutral-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        to={pkg.ctaLink}
        className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mt-auto"
      >
        {pkg.cta}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

export default PricingCard;

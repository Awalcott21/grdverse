
import { motion } from "framer-motion";
import { Laptop, Calendar, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultationBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-semibold mb-6">How We Can Help</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-accent/10 p-3 rounded-lg shrink-0">
            <Laptop className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium mb-1">AI-Powered Web Solutions</h3>
            <p className="text-neutral-400">Create intelligent websites that learn from user behavior and optimize for conversions.</p>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-none mt-8 border-white/10">
        <h3 className="font-medium mb-4">Not ready for a call yet?</h3>
        <p className="text-neutral-400 mb-6">Try our 30-second quiz to find the perfect AI solution for your business.</p>
        <Link 
          to="/quiz"
          className="bg-white text-neutral-900 px-6 py-3 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium flex items-center justify-center gap-2 group text-base w-full"
        >
          Take the 30-Second Quiz
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="glass-card p-6 rounded-none border-white/10">
        <div className="flex items-start gap-4">
          <Calendar className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h3 className="font-medium mb-1">Schedule a Call</h3>
            <p className="text-neutral-400 mb-4">Book a 30-minute call to discuss how AI can transform your business.</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Mail className="w-6 h-6 text-accent shrink-0" />
        <div>
          <h3 className="font-medium mb-1">Email Us</h3>
          <p className="text-neutral-400">
            <a href="mailto:hello@grdverse.com" className="text-accent hover:underline">
              hello@grdverse.com
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultationBenefits;

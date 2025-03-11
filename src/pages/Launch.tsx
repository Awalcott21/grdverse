
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhyAI from "../components/WhyAI";

interface Package {
  id: number;
  title: string;
  description: string;
  price: string;
  timeline: string;
  features: string[];
}

const packages: Package[] = [
  {
    id: 1,
    title: "AI Starter Website",
    description: "Perfect for small businesses looking to make a professional online debut with essential AI tools.",
    price: "$800",
    timeline: "5-7 days",
    features: [
      "Clean, modern design with AI-powered UX",
      "Mobile-responsive for all devices",
      "AI Chatbot for lead generation",
      "AI-Powered SEO optimization",
      "Domain name + 1-year hosting",
      "AI Content Generation"
    ]
  },
  {
    id: 2,
    title: "AI Professional Website",
    description: "A comprehensive solution for growing businesses who need AI to streamline and automate processes.",
    price: "$1,200",
    timeline: "7-10 days",
    features: [
      "3 custom pages with AI-driven design",
      "Advanced AI chatbot with sales automation",
      "AI-powered content creation & SEO",
      "3 months of AI performance tracking",
      "Email marketing automation",
      "Unlimited revisions"
    ]
  },
  {
    id: 3,
    title: "AI Enterprise Solution",
    description: "For established businesses needing advanced features and extensive AI capabilities for growth.",
    price: "$1,800",
    timeline: "10-14 days",
    features: [
      "5+ custom pages with advanced AI design",
      "Complete AI marketing suite integration",
      "AI-driven analytics and optimization",
      "6 months of maintenance & support",
      "Custom AI automation workflows",
      "Priority 24/7 support"
    ]
  }
];

const Launch = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="container-padding py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Done-for-You AI Websites – Just Pick & Go</h1>
            <p className="text-xl text-neutral-400">
              Choose from our three simple packages and get your AI-powered website up and running fast.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 rounded-xl relative flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
                <div className="text-3xl font-mono text-white mb-2">{pkg.price}</div>
                <div className="text-sm text-neutral-500 mb-4">Timeline: {pkg.timeline}</div>
                <p className="text-neutral-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/consultation"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mt-auto"
                >
                  Launch My Website
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-neutral-400 mb-4">
              Not sure which package is right for you?
            </p>
            <Link 
              to="/quiz"
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 text-lg hover:bg-neutral-200"
            >
              Find Your Perfect AI Website in 30 Seconds
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        
        <WhyAI />
      </main>
      <Footer />
    </div>
  );
};

export default Launch;

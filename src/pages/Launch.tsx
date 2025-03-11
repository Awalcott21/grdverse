
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Rocket, Bot, Laptop, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhyAI from "../components/WhyAI";
import PricingHeader from "../components/pricing/PricingHeader";
import PricingCard from "../components/pricing/PricingCard";
import { Package } from "../components/pricing/types";
import { motion } from "framer-motion";

const packages: Package[] = [
  {
    id: 1,
    title: "AI Starter Website",
    icon: Rocket,
    price: "$800",
    timeline: "5-7 days",
    cta: "Launch My Website",
    ctaLink: "/get-started?package=basic",
    features: [
      "AI-optimized design & SEO",
      "AI chatbot for lead capture",
      "Mobile-friendly & fast",
      "Free domain + 1-year hosting",
      "Free AI strategy session"
    ]
  },
  {
    id: 2,
    title: "AI Growth Website",
    icon: Bot,
    price: "$1,200",
    timeline: "7-10 days",
    cta: "Scale My Business",
    ctaLink: "/get-started?package=standard",
    features: [
      "AI-enhanced UX & lead capture",
      "AI chatbot for 24/7 support",
      "AI-generated content",
      "3 months of AI performance tracking",
      "Free AI strategy session"
    ]
  },
  {
    id: 3,
    title: "AI Sales Machine",
    icon: Laptop,
    price: "$1,800",
    timeline: "10-14 days",
    cta: "Automate My Sales",
    ctaLink: "/get-started?package=premium",
    features: [
      "AI-powered UI & automation",
      "AI SEO for high traffic",
      "AI chatbot + email marketing automation",
      "6 months of AI maintenance",
      "Free AI strategy session"
    ]
  }
];

const Launch = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="container-padding py-16">
          <PricingHeader />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <PricingCard key={pkg.id} pkg={pkg} index={index} />
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

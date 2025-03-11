
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Rocket, TrendingUp, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import WhyAI from "../components/WhyAI";

interface Package {
  id: number;
  title: string;
  icon: React.ElementType;
  price: string;
  timeline: string;
  cta: string;
  ctaLink: string;
  features: string[];
}

const packages: Package[] = [
  {
    id: 1,
    title: "AI Starter Website",
    icon: Rocket,
    price: "$800",
    timeline: "5-7 days",
    cta: "Launch My Website",
    ctaLink: "/consultation",
    features: [
      "AI-optimized design & SEO",
      "AI chatbot for lead capture",
      "Mobile-friendly & fast",
      "Free domain + 1-year hosting"
    ]
  },
  {
    id: 2,
    title: "AI Growth Website",
    icon: TrendingUp,
    price: "$1,200",
    timeline: "7-10 days",
    cta: "Scale My Business",
    ctaLink: "/consultation",
    features: [
      "AI-enhanced UX & lead capture",
      "AI chatbot for 24/7 support",
      "AI-generated content",
      "3 months of AI performance tracking"
    ]
  },
  {
    id: 3,
    title: "AI Sales Machine",
    icon: Flame,
    price: "$1,800",
    timeline: "10-14 days",
    cta: "Automate My Sales",
    ctaLink: "/consultation",
    features: [
      "AI-powered UI & automation",
      "AI SEO for high traffic",
      "AI chatbot + email marketing automation",
      "6 months of AI maintenance"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Websites That Work for You—Not Against You.</h1>
            <p className="text-xl text-neutral-400">
              No more guessing. No more complex setups. Pick a package and launch your AI-powered website in days.
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <pkg.icon className="w-5 h-5 text-accent" />
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
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-neutral-400 mb-4">
              Every package includes a free AI strategy session.
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

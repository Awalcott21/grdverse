import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import WebsiteComparison from "../components/WebsiteComparison";

interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  price: string;
  timeline: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: "Basic Package",
    description: "Perfect for small businesses looking to establish their online presence with a professional one-page website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "One-Page Website",
    features: [
      "Clean, modern design",
      "Mobile-responsive layout",
      "Domain name included",
      "1 year web hosting",
      "Basic contact form"
    ],
    price: "$600",
    timeline: "5-7 days"
  },
  {
    id: 2,
    title: "Standard Package",
    description: "Comprehensive 3-page website with essential features for growing businesses",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "3-Page Website",
    features: [
      "3 custom pages",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "3 months maintenance",
      "Domain & hosting included"
    ],
    price: "$1,000",
    timeline: "7-10 days"
  },
  {
    id: 3,
    title: "Premium Package",
    description: "Full-featured 5-page website with advanced features and extended support",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "5-Page Website",
    features: [
      "5 custom pages",
      "Custom branding",
      "Advanced SEO",
      "Google Analytics",
      "6 months maintenance"
    ],
    price: "$1,500",
    timeline: "10-14 days"
  },
  {
    id: 4,
    title: "Wix Website Package (Standard)",
    description: "An affordable and user-friendly solution for those looking for a simple website with easy management (+ $23/month Wix subscription)",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "Wix One-Page Website",
    features: [
      "Custom 1-page website built on Wix",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Domain & hosting included",
      "Wix platform makes it easy to maintain and update"
    ],
    price: "$500",
    timeline: "5-7 days"
  },
  {
    id: 5,
    title: "Wix 3-Page Website Package",
    description: "A flexible 3-page website perfect for businesses that need more content and want an easy-to-manage solution with Wix (+ $23/month Wix subscription)",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "Wix 3-Page Website",
    features: [
      "3 custom pages",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Wix platform integration for easy management",
      "Domain & hosting included"
    ],
    price: "$900",
    timeline: "7-10 days"
  },
  {
    id: 6,
    title: "Wix 5-Page Website Package",
    description: "For businesses looking to expand and manage their online presence seamlessly with Wix (+ $23/month Wix subscription)",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Wix 5-Page Website",
    features: [
      "5 custom pages",
      "Custom branding",
      "Advanced SEO",
      "Google Analytics integration",
      "Wix platform allows for easy ongoing updates",
      "Domain & hosting included"
    ],
    price: "$1,400",
    timeline: "10-14 days"
  }
];

const Launch = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedTemplate = searchParams.get('template');

  const getTemplatePackages = (templateId: string | null) => {
    if (templateId?.startsWith('business')) {
      return templates.slice(0, 3); // Show business-focused packages
    } else if (templateId?.startsWith('ecommerce')) {
      return templates.slice(2, 5); // Show e-commerce focused packages
    }
    return templates; // Show all packages by default
  };

  const displayedTemplates = getTemplatePackages(selectedTemplate);

  const handleGetStarted = (packageName: string) => {
    const packageType = packageName.toLowerCase().split(' ')[0]; // Get "basic", "standard", or "premium"
    navigate(`/get-started?package=${packageType}`);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Launch Your Digital Project</h1>
            <p className="text-xl text-neutral-400">
              Choose the package that best fits your needs and let's build something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayedTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 rounded-xl relative group"
              >
                <span className="text-accent text-sm tracking-tight">{template.category}</span>
                <h3 className="text-2xl font-semibold mt-2 mb-2">{template.title}</h3>
                <div className="text-3xl font-mono text-white mb-4">{template.price}</div>
                <p className="text-neutral-400 mb-6">{template.description}</p>
                <div className="text-sm text-neutral-500 mb-6">Estimated Timeline: {template.timeline}</div>
                <ul className="space-y-3 mb-8">
                  {template.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleGetStarted(template.title)}
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        <WebsiteComparison />
      </main>
      <Footer />
    </div>
  );
};

export default Launch;

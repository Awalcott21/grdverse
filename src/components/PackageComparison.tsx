
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const packages = [
  {
    id: 1,
    title: "Basic Package",
    description: "Perfect for small businesses looking to establish their online presence",
    category: "Custom One-Page Website",
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
    description: "Comprehensive solution for growing businesses",
    category: "Custom 3-Page Website",
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
    description: "Full-featured website with advanced functionality",
    category: "Custom 5-Page Website",
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
    title: "Wix Basic",
    description: "Simple and effective Wix-based solution",
    category: "Wix One-Page Website",
    features: [
      "Custom 1-page Wix website",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Domain & hosting included",
      "Easy content management"
    ],
    price: "$500",
    timeline: "5-7 days"
  },
  {
    id: 5,
    title: "Wix Standard",
    description: "Professional Wix website for growing businesses",
    category: "Wix 3-Page Website",
    features: [
      "3 custom pages",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Easy content management",
      "Domain & hosting included"
    ],
    price: "$900",
    timeline: "7-10 days"
  },
  {
    id: 6,
    title: "Wix Premium",
    description: "Comprehensive Wix solution with advanced features",
    category: "Wix 5-Page Website",
    features: [
      "5 custom pages",
      "Custom branding",
      "Advanced SEO",
      "Google Analytics",
      "Easy content management"
    ],
    price: "$1,400",
    timeline: "10-14 days"
  }
];

const PackageComparison = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleGetStarted = () => {
    if (!selectedPackage) return;
    const packageType = selectedPackage.toLowerCase().split(' ')[0];
    navigate(`/get-started?package=${packageType}`);
  };

  return (
    <section className="py-32 container-padding bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-accent tracking-tight">// Package Comparison</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Compare Our Packages
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Review all our packages side by side to find the perfect solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="glass-card p-8 flex flex-col h-full hover:scale-[1.02] transition-all duration-300 hover:ring-2 hover:ring-accent/50"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-accent text-sm tracking-tight">{pkg.category}</span>
                  <h3 className="text-white text-2xl font-medium mt-1">{pkg.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-white font-mono bg-accent px-3 py-1.5 text-sm block mb-1 rounded">
                    {pkg.price}
                  </span>
                  <span className="text-neutral-400 text-xs">
                    {pkg.timeline}
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-neutral-300 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent mr-2 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto text-center">
          <Select
            value={selectedPackage}
            onValueChange={setSelectedPackage}
          >
            <SelectTrigger className="w-full bg-neutral-800 border-neutral-700 text-white mb-6">
              <SelectValue placeholder="Select your package" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-800 border-neutral-700">
              {packages.map((pkg) => (
                <SelectItem 
                  key={pkg.id} 
                  value={pkg.title}
                  className="text-white hover:bg-neutral-700"
                >
                  {pkg.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <button 
            onClick={handleGetStarted}
            disabled={!selectedPackage}
            className={`w-full bg-accent hover:bg-accent/90 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group ${!selectedPackage ? 'opacity-50' : ''}`}
          >
            Get Started with {selectedPackage || "Your Package"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;


import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

const addOns = [
  {
    id: 7,
    title: "SEO Package",
    description: "Boost your website's visibility with comprehensive SEO optimization",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c",
    category: "Add-On",
    features: [
      "Keyword research",
      "Content optimization",
      "Meta descriptions",
      "3 months updates",
      "Performance tracking"
    ],
    price: "$300",
    timeline: "Ongoing"
  },
  {
    id: 8,
    title: "E-commerce Add-on",
    description: "Transform your website into an online store with full e-commerce capabilities",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "Add-On",
    features: [
      "Up to 10 products",
      "Secure checkout",
      "Inventory management",
      "Payment integration",
      "Order tracking"
    ],
    price: "$500",
    timeline: "Additional 7 days"
  },
  {
    id: 9,
    title: "Maintenance Plan",
    description: "Keep your website secure and up-to-date with regular maintenance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "Add-On",
    features: [
      "Regular updates",
      "Security patches",
      "Daily backups",
      "Minor tweaks",
      "Technical support"
    ],
    price: "$150/month",
    timeline: "Monthly"
  }
];

const packages = [
  {
    id: 1,
    title: "Basic Package",
    description: "Perfect for small businesses looking to establish their online presence with a professional one-page website",
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

const allOptions = [...packages, ...addOns];

const PackageComparison = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleGetStarted = () => {
    if (!selectedPackage) return;
    const selected = allOptions.find(opt => opt.title === selectedPackage);
    const packageType = selected ? selected.title.toLowerCase().split(' ')[0] : '';
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

        {/* Add-ons Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Enhance Your Website with Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div 
                key={addon.id}
                className="glass-card p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-accent text-sm tracking-tight">{addon.category}</span>
                    <h4 className="text-white text-xl font-medium mt-1">{addon.title}</h4>
                  </div>
                  <span className="text-white font-mono bg-accent px-3 py-1.5 text-sm rounded">
                    {addon.price}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-4">{addon.description}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {addon.features.map((feature, index) => (
                    <li key={index} className="text-neutral-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent mr-2 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              <SelectGroup>
                <SelectLabel>Packages</SelectLabel>
                {packages.map((pkg) => (
                  <SelectItem 
                    key={pkg.id} 
                    value={pkg.title}
                    className="text-white hover:bg-neutral-700"
                  >
                    {pkg.title}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Add-ons</SelectLabel>
                {addOns.map((addon) => (
                  <SelectItem 
                    key={addon.id} 
                    value={addon.title}
                    className="text-white hover:bg-neutral-700"
                  >
                    {addon.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <button 
            onClick={handleGetStarted}
            disabled={!selectedPackage}
            className={`w-full bg-accent hover:bg-accent/90 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group ${!selectedPackage ? 'opacity-50' : ''}`}
          >
            Let's Get You on The Grid
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;

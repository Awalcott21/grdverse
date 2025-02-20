
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
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handlePackageSelect = (value: string) => {
    // If selecting a package, ensure it's not an add-on
    if (!addOns.some(addon => addon.title === value)) {
      setSelectedPackage(value);
    }
  };

  const handleAddOnSelect = (value: string) => {
    // If selecting an add-on
    if (addOns.some(addon => addon.title === value)) {
      setSelectedAddOns(prev => {
        if (prev.includes(value)) {
          return prev.filter(item => item !== value);
        }
        return [...prev, value];
      });
    }
  };

  const handleGetStarted = () => {
    if (!selectedPackage) return;
    const selections = {
      package: selectedPackage,
      addons: selectedAddOns
    };
    navigate(`/get-started?package=${encodeURIComponent(JSON.stringify(selections))}`);
  };

  // Calculate total price
  const calculateTotal = () => {
    const packagePrice = packages.find(pkg => pkg.title === selectedPackage)?.price || "$0";
    const addOnsTotal = selectedAddOns.reduce((total, addon) => {
      const addonPrice = addOns.find(a => a.title === addon)?.price || "$0";
      return total + parseInt(addonPrice.replace(/[^0-9]/g, ''));
    }, 0);
    const packageBasePrice = parseInt(packagePrice.replace(/[^0-9]/g, ''));
    return `$${packageBasePrice + addOnsTotal}`;
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
          <div className="space-y-6">
            {/* Package Selection */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2 text-left">
                Choose Your Website Package
              </label>
              <Select
                value={selectedPackage}
                onValueChange={handlePackageSelect}
              >
                <SelectTrigger className="w-full bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue placeholder="Select your website package" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectGroup>
                    <SelectLabel>Website Packages</SelectLabel>
                    {packages.map((pkg) => (
                      <SelectItem 
                        key={pkg.id} 
                        value={pkg.title}
                        className="text-white hover:bg-neutral-700"
                      >
                        {pkg.title} - {pkg.price}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Add-ons Selection */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2 text-left">
                Add Optional Services
              </label>
              {addOns.map((addon) => (
                <div 
                  key={addon.id}
                  className="flex items-center justify-between p-3 mb-2 rounded-lg bg-neutral-800 border border-neutral-700 cursor-pointer hover:border-accent"
                  onClick={() => handleAddOnSelect(addon.title)}
                >
                  <div className="flex items-center">
                    <div 
                      className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center
                        ${selectedAddOns.includes(addon.title) ? 'border-accent bg-accent' : 'border-neutral-600'}`}
                    >
                      {selectedAddOns.includes(addon.title) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-white">{addon.title}</span>
                  </div>
                  <span className="text-accent">{addon.price}</span>
                </div>
              ))}
            </div>

            {/* Total Price Display */}
            {selectedPackage && (
              <div className="text-right mb-6">
                <span className="text-neutral-400">Total:</span>
                <span className="text-white text-xl ml-2 font-mono">{calculateTotal()}</span>
              </div>
            )}

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
      </div>
    </section>
  );
};

export default PackageComparison;

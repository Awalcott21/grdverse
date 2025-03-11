import { Globe, Brain, Bot, BarChart, ShoppingCart, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
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

const packages = [
  {
    title: "AI-Powered One-Page Website",
    description: "Perfect for small businesses looking to make a professional online debut with AI tools to enhance engagement and performance.",
    price: "$800",
    timeline: "5-7 days",
    icon: Brain,
    features: [
      "Clean, modern design with AI-powered layout suggestions",
      "Mobile-responsive, with AI-optimized UX for conversions",
      "AI Chatbot integrated for lead generation and customer support",
      "AI-Powered SEO to boost search engine rankings from the start",
      "Domain name included + 1-year web hosting",
      "AI Content Generation for homepage copy"
    ]
  },
  {
    title: "AI-Enhanced 3-Page Website",
    description: "A more comprehensive solution for growing businesses who need AI to streamline and automate processes.",
    price: "$1,200",
    timeline: "7-10 days",
    icon: MessageSquare,
    features: [
      "3 custom pages with AI-driven design and UX suggestions",
      "AI-Powered SEO for increased organic traffic",
      "AI Chatbot for seamless customer support and sales conversion",
      "AI-Generated Content for additional pages",
      "3 months of AI-driven website performance tracking",
      "Mobile-responsive design with AI optimizations"
    ]
  },
  {
    title: "AI-Optimized 5-Page Website",
    description: "For businesses needing advanced features, enhanced AI capabilities, and extensive support for long-term growth.",
    price: "$1,800",
    timeline: "10-14 days",
    icon: Globe,
    features: [
      "5 custom pages with AI-powered UX/UI design for higher conversion rates",
      "Advanced AI SEO to drive sustainable search rankings",
      "Integration of AI-powered product/service recommendations",
      "AI Chatbot for automatic customer interaction and lead capture",
      "AI Content Creation for engaging and on-brand copy across pages",
      "6 months of ongoing AI-based maintenance and support"
    ]
  },
  {
    title: "AI-Powered E-Commerce Website",
    price: "$2,000",
    timeline: "14-20 days",
    description: "For businesses looking to build a full-fledged e-commerce site with AI tools that drive conversions and enhance user experience.",
    icon: ShoppingCart,
    features: [
      "Full-featured online store with AI-driven product recommendations",
      "AI-powered secure checkout process with fraud detection",
      "AI Chatbot to guide users through their shopping journey",
      "Integration with AI inventory management tools",
      "Mobile-responsive design with AI-based user behavior tracking",
      "AI SEO for optimized product descriptions and keywords"
    ]
  }
];

const addOns = [
  {
    title: "AI Chatbot Integration Package",
    description: "Custom AI-powered chatbot tailored to your business. 24/7 customer support to handle inquiries and assist customers in real-time. Lead qualification and automated responses based on predefined rules.",
    price: "$300/month",
    icon: MessageSquare,
    benefits: [
      "Automate customer service, reducing the need for constant human oversight",
      "Capture leads around the clock and nurture them efficiently",
      "Improve customer satisfaction and conversion rates"
    ]
  }
];

const Features = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handlePackageSelect = (value: string) => {
    setSelectedPackage(value);
  };

  const handleAddOnSelect = (value: string) => {
    setSelectedAddOns(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      }
      return [...prev, value];
    });
  };

  const calculateTotal = () => {
    const packagePrice = packages.find(pkg => pkg.title === selectedPackage)?.price || "$0";
    const addOnsTotal = selectedAddOns.reduce((total, addon) => {
      const addonPrice = addOns.find(a => a.title === addon)?.price || "$0";
      const priceMatch = addonPrice.match(/\$(\d+)/);
      return total + (priceMatch ? parseInt(priceMatch[1]) : 0);
    }, 0);
    const packageBasePrice = parseInt(packagePrice.replace(/[^\d]/g, ''));
    return `$${packageBasePrice + addOnsTotal}`;
  };

  return (
    <section id="features" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm text-accent tracking-tight">// AI Website Packages</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Transform Your Business with AI-Powered Websites
        </h2>
        <p className="text-neutral-400 mb-12 max-w-3xl">
          At Gridverse, we build cutting-edge websites enhanced with AI capabilities that drive engagement, automate tasks, and optimize performance. Our AI-powered websites help your business stand out, connect with customers, and scale efficiently.
        </p>
        
        {/* Website Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <pkg.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl text-white">{pkg.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono bg-accent px-3 py-1 rounded text-sm">
                    {pkg.price}
                  </div>
                  <div className="text-neutral-500 text-xs mt-1">
                    {pkg.timeline}
                  </div>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-neutral-300">
                    <span className="text-accent mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Add-ons Section - Updated with only the AI Chatbot package */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">AI-Powered Add-Ons</h3>
          <div className="grid md:grid-cols-1 gap-6 mb-10">
            {addOns.map((addon, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <addon.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-white">{addon.title}</h4>
                </div>
                <p className="text-neutral-400 text-sm mb-3">{addon.description}</p>
                <div className="text-white font-mono bg-accent/20 px-3 py-1 rounded text-sm inline-block mb-3">
                  {addon.price}
                </div>
                {addon.benefits && (
                  <ul className="space-y-1 mt-2">
                    {addon.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-xs text-neutral-300">
                        <span className="text-accent mr-1 text-xs">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Package Builder */}
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto mt-12 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Build Your Custom AI Website Package</h3>
            
            {/* Package Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Choose Your AI Website Package
              </label>
              <Select value={selectedPackage} onValueChange={handlePackageSelect}>
                <SelectTrigger className="w-full bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue placeholder="Select an AI website package" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                  <SelectGroup>
                    <SelectLabel className="text-accent">AI Website Packages</SelectLabel>
                    {packages.map((pkg, index) => (
                      <SelectItem 
                        key={index} 
                        value={pkg.title}
                        className="text-white hover:bg-neutral-700 focus:bg-neutral-700"
                      >
                        {pkg.title} - {pkg.price}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel className="text-accent">AI Add-On Packages</SelectLabel>
                    {addOns.map((addon, index) => (
                      <SelectItem 
                        key={`addon-${index}`} 
                        value={addon.title}
                        className="text-white hover:bg-neutral-700 focus:bg-neutral-700"
                      >
                        {addon.title} - {addon.price}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            {/* Add-ons Selection */}
            {selectedPackage && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Enhance Your AI Website with Add-ons
                </label>
                {addOns.map((addon, index) => (
                  <div 
                    key={index}
                    onClick={() => handleAddOnSelect(addon.title)}
                    className={`flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                      selectedAddOns.includes(addon.title) 
                        ? 'bg-accent/20 border border-accent/30' 
                        : 'bg-neutral-800 border border-neutral-700 hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          selectedAddOns.includes(addon.title) 
                            ? 'bg-accent border-accent' 
                            : 'border-neutral-600'
                        }`}
                      >
                        {selectedAddOns.includes(addon.title) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-white">{addon.title}</span>
                    </div>
                    <span className="text-accent text-sm">{addon.price}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Total Price and CTA */}
            {selectedPackage && (
              <>
                <div className="flex justify-between items-center mb-6 p-4 bg-neutral-800 rounded-lg">
                  <span className="text-neutral-300 font-medium">Estimated Total:</span>
                  <span className="text-white text-xl font-mono">{calculateTotal()}</span>
                </div>
                
                <Link
                  to="/consultation"
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded flex items-center justify-center gap-2 group font-medium"
                >
                  Schedule Your AI Consultation
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </>
            )}
          </div>
          
          <div className="text-center">
            <Link 
              to="/launch" 
              className="bg-white text-neutral-900 px-8 py-3 rounded hover:bg-neutral-200 transition-colors tracking-tight font-medium inline-block"
            >
              View All AI Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

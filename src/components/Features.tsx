
import { Rocket, Bot, Laptop, ArrowRight } from "lucide-react";
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
    title: "AI Starter Website",
    description: "Perfect for small businesses looking to make a professional online debut with AI tools to enhance engagement and performance.",
    price: "$800",
    timeline: "5-7 days",
    icon: Rocket,
    features: [
      "AI-optimized design & SEO",
      "AI chatbot for lead capture",
      "Mobile-friendly & fast",
      "Free domain + 1-year hosting",
      "Free AI strategy session"
    ]
  },
  {
    title: "AI Growth Website",
    description: "A comprehensive solution for growing businesses who need AI to streamline and automate processes.",
    price: "$1,200",
    timeline: "7-10 days",
    icon: Bot,
    features: [
      "AI-enhanced UX & lead capture",
      "AI chatbot for 24/7 support",
      "AI-generated content",
      "3 months of AI performance tracking",
      "Free AI strategy session"
    ]
  },
  {
    title: "AI Sales Machine",
    description: "For businesses needing advanced features, enhanced AI capabilities, and extensive support for long-term growth.",
    price: "$1,800",
    timeline: "10-14 days",
    icon: Laptop,
    features: [
      "AI-powered UI & automation",
      "AI SEO for high traffic",
      "AI chatbot + email marketing automation",
      "6 months of AI maintenance",
      "Free AI strategy session"
    ]
  }
];

const Features = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handlePackageSelect = (value: string) => {
    setSelectedPackage(value);
  };

  const calculateTotal = () => {
    const packagePrice = packages.find(pkg => pkg.title === selectedPackage)?.price || "$0";
    const packageBasePrice = parseInt(packagePrice.replace(/[^\d]/g, ''));
    return `$${packageBasePrice}`;
  };

  return (
    <section id="features" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm text-accent tracking-tight">// AI Website Packages</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Transform Your Business with AI-Powered Websites
        </h2>
        <p className="text-neutral-400 mb-12 max-w-3xl">
          At Gridverse, we build cutting-edge websites enhanced with AI capabilities that drive engagement, answer customer questions, and optimize performance. Our AI-powered websites help your business stand out, connect with customers, and scale efficiently.
        </p>
        
        {/* Website Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              {/* Removed "Contact us about this package" link */}
            </div>
          ))}
        </div>
        
        {/* Package Builder */}
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
              </SelectContent>
            </Select>
          </div>
          
          {/* Total Price and CTA */}
          {selectedPackage && (
            <>
              <div className="flex justify-between items-center mb-6 p-4 bg-neutral-800 rounded-lg">
                <span className="text-neutral-300 font-medium">Estimated Total:</span>
                <span className="text-white text-xl font-mono">{calculateTotal()}</span>
              </div>
              
              <div className="space-y-3">
                <Link
                  to={`/get-started?package=${selectedPackage}`}
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded flex items-center justify-center gap-2 group font-medium"
                >
                  Get Started With This Package
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/consultation"
                  className="w-full border border-white/20 text-white px-6 py-3 rounded flex items-center justify-center gap-2 group font-medium hover:bg-white/10"
                >
                  Schedule Your AI Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </>
          )}
        </div>
        
        <div className="text-center">
          <Link
            to="/consultation"
            className="bg-white text-neutral-900 px-8 py-3 rounded hover:bg-neutral-200 transition-colors tracking-tight font-medium inline-block"
          >
            Schedule an AI Website Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;

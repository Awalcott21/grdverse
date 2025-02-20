import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const mainPackages = [
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

const Showroom = () => {
  const navigate = useNavigate();

  const handleGetStarted = (packageName: string) => {
    const packageType = packageName.toLowerCase().split(' ')[0];
    navigate(`/get-started?package=${packageType}`);
  };

  return (
    <section id="showroom" className="min-h-screen py-32 container-padding bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-accent tracking-tight">// Our Packages</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Choose Your Perfect Package
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl">
            From simple one-page websites to full-featured business solutions. Select the package that best fits your needs, with optional add-ons for enhanced functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainPackages.map((template) => (
            <div 
              key={template.id}
              className="glass-card p-8 flex flex-col h-full transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-accent text-sm tracking-tight">{template.category}</span>
                  <h3 className="text-white text-2xl font-medium mt-1">{template.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-white font-mono bg-accent px-3 py-1.5 text-sm block mb-1 rounded">
                    {template.price}
                  </span>
                  <span className="text-neutral-400 text-xs">
                    {template.timeline}
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm mb-6">{template.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {template.features.map((feature, index) => (
                  <li key={index} className="text-neutral-300 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent mr-2 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleGetStarted(template.title)}
                className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group mt-auto"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Enhance Your Website with Add-ons</h3>
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
              {addOns.map((addon) => (
                <div 
                  key={addon.id}
                  className="glass-card p-6 flex-none w-[300px] flex flex-col"
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
                  <button 
                    onClick={() => handleGetStarted(addon.title)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group"
                  >
                    Add to Package
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Professional Design</h3>
            <p className="text-neutral-400 text-sm">
              Clean, modern designs tailored to your brand and optimized for all devices.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Quick Delivery</h3>
            <p className="text-neutral-400 text-sm">
              Fast turnaround times with most projects completed within 5-14 days.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Complete Solution</h3>
            <p className="text-neutral-400 text-sm">
              Everything included: domain, hosting, maintenance, and technical support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;

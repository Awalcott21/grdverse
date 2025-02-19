
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  price: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: "Freelance Portfolio",
    description: "A minimal, dark-themed portfolio perfect for freelancers and digital creators",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", // Placeholder - replace with actual template preview
    category: "Portfolio",
    features: [
      "Project showcase grid",
      "About & Services sections",
      "Contact form integration",
      "Blog ready",
      "Social media integration"
    ],
    price: "$299"
  },
  {
    id: 2,
    title: "Digital Consultant",
    description: "Professional consulting website template with booking capabilities",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // Placeholder - replace with actual template preview
    category: "Service",
    features: [
      "Booking system",
      "Service packages",
      "Client testimonials",
      "Case studies section",
      "Newsletter integration"
    ],
    price: "$399"
  },
  {
    id: 3,
    title: "Startup Launch",
    description: "High-converting landing page for SaaS and digital products",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", // Placeholder - replace with actual template preview
    category: "Startup",
    features: [
      "Feature showcase",
      "Pricing tables",
      "Integration section",
      "FAQ accordion",
      "Analytics ready"
    ],
    price: "$499"
  },
  {
    id: 4,
    title: "Digital Agency",
    description: "Full-featured agency website with portfolio and team sections",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", // Placeholder - replace with actual template preview
    category: "Agency",
    features: [
      "Work portfolio",
      "Team profiles",
      "Service overview",
      "Client logos",
      "Multi-page setup"
    ],
    price: "$599"
  }
];

const Showroom = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTemplate = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const prevTemplate = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  return (
    <section id="showroom" className="min-h-screen py-32 container-padding bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-accent tracking-tight">// Our Templates</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Launch Your Digital Presence
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl">
            Premium website templates designed specifically for entrepreneurs and digital professionals. Each template is optimized for conversion and growth.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTemplate}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 backdrop-blur-sm transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTemplate}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 backdrop-blur-sm transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Template Display */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {templates.map((template) => (
                <div 
                  key={template.id}
                  className="w-full flex-shrink-0 relative group"
                >
                  <div className="relative">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full aspect-[16/9] object-cover"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <button className="bg-white text-black px-6 py-3 hover:bg-neutral-200 transition-colors">
                          View Template
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Template Info */}
                  <div className="absolute -bottom-4 left-4 bg-neutral-900 border border-neutral-800 p-4 max-w-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-accent text-sm tracking-tight">{template.category}</span>
                        <h3 className="text-white text-xl font-medium mt-1">{template.title}</h3>
                      </div>
                      <span className="text-white font-mono bg-accent px-2 py-1 text-sm">
                        {template.price}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mb-3">{template.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {template.features.map((feature, index) => (
                        <li key={index} className="text-neutral-300 text-xs flex items-center">
                          <span className="w-1 h-1 bg-accent mr-2 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Grid Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1.5 text-sm tracking-tight">
                    Grdiverse™
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Template Counter */}
        <div className="mt-8 text-center text-neutral-500">
          <span className="font-mono">{currentIndex + 1}</span>
          <span className="mx-2">/</span>
          <span className="font-mono">{templates.length}</span>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Conversion Optimized</h3>
            <p className="text-neutral-400 text-sm">
              Built with clear call-to-actions and user journey mapping for maximum engagement.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Mobile First</h3>
            <p className="text-neutral-400 text-sm">
              Responsive designs that look professional on all devices and screen sizes.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">SEO Ready</h3>
            <p className="text-neutral-400 text-sm">
              Optimized structure and performance to help you rank better in search results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;

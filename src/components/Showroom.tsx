
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: "Modern Agency",
    description: "Clean, minimalist design for creative agencies",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "Agency",
  },
  {
    id: 2,
    title: "Tech Startup",
    description: "Bold, innovative layout for tech companies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Technology",
  },
  {
    id: 3,
    title: "Digital Studio",
    description: "Creative portfolio for design studios",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Creative",
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
            Showroom
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl">
            Explore our collection of premium website templates. Each design is crafted with precision and purpose.
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
                  <div className="absolute -bottom-4 left-4 bg-neutral-900 border border-neutral-800 p-4">
                    <span className="text-accent text-sm tracking-tight">{template.category}</span>
                    <h3 className="text-white text-xl font-medium mt-1">{template.title}</h3>
                    <p className="text-neutral-400 text-sm mt-1">{template.description}</p>
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
      </div>
    </section>
  );
};

export default Showroom;

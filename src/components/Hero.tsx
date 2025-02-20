
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 container-padding bg-neutral-900 text-white relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-r border-white/20" />
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute -top-8 left-0 text-sm text-neutral-500 tracking-tight">
          Where Vision Meets the Digital Grid
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
          <span className="block text-lg md:text-xl text-accent mb-4 font-normal">
            {"// Your Brand, Your Universe"}
          </span>
          Designed to Stand Out
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed tracking-tight">
          We Build the Grid, You Own the Verse. Transform your digital presence with our cutting-edge web development solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/launch"
            className="bg-white text-neutral-900 px-8 py-4 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium flex items-center justify-center gap-2 group"
          >
            Launch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/consultation"
            className="border border-white/20 text-white px-8 py-4 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium"
          >
            Free Consultation
          </Link>
        </div>
        
        <div className="mt-24 glass-card rounded-none border border-white/10 p-8 bg-white/5">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Website Preview"
            className="rounded-none w-full"
          />
          <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 text-sm tracking-tight">
            Latest Project™
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

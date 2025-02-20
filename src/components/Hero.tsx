
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
        
        <h1 className="text-6xl md:text-8xl font-bold mb-12 tracking-tight leading-[1.1]">
          <span className="block text-xl md:text-2xl text-accent mb-6 font-normal">
            {"// Your Brand, Your Universe"}
          </span>
          Designed to Stand Out
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-400 mb-16 max-w-3xl leading-relaxed tracking-tight">
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
      </div>
    </section>
  );
};

export default Hero;

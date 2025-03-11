
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
          Your AI Website is 5 Days Away
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
          <span className="block text-lg md:text-xl text-accent mb-4 font-normal">
            {"// AI Handles Customer Questions While You Sleep"}
          </span>
          Your Website Should Work as Hard as You Do. Ours Actually Do.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl leading-relaxed tracking-tight">
          Launch a website that works 24/7, automatically engages customers, and grows your business while you focus on what matters.
        </p>
        
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-10 text-neutral-300 text-sm md:text-base">
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>AI answers customer questions instantly</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>24/7 lead generation on autopilot</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Smart content that sells for you</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Automated personalization for visitors</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Your business growth on autopilot</span>
          </li>
        </ul>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/quiz"
            className="bg-white text-neutral-900 px-6 py-3 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium flex items-center justify-center gap-2 group text-base"
          >
            Find Your Perfect AI Website in 30 Seconds
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/launch"
            className="border border-white/20 text-white px-6 py-3 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium text-base"
          >
            Pick a Package & Launch Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

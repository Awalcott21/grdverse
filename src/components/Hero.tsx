
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
          AI-Powered Web Development
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
          <span className="block text-lg md:text-xl text-accent mb-4 font-normal">
            {"// Transform Your Website with Cutting-Edge AI Solutions"}
          </span>
          AI-Powered Web Development Services Tailored to Your Business Needs
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl leading-relaxed tracking-tight">
          Future-proof your business with AI technologies that transform websites, enhance user engagement, automate processes, and increase conversions.
        </p>
        
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-10 text-neutral-300 text-sm md:text-base">
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Fully automated, AI-driven websites</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Smart lead generation through AI chatbots</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Personalized user experiences using AI</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>AI-enhanced SEO and analytics</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Future-proof your business with AI solutions</span>
          </li>
        </ul>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/consultation"
            className="bg-white text-neutral-900 px-6 py-3 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium flex items-center justify-center gap-2 group text-base"
          >
            Unlock the Power of AI For Your Website
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/launch"
            className="border border-white/20 text-white px-6 py-3 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium text-base"
          >
            Explore AI Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

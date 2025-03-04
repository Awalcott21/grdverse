
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
          AI-Powered Business Solutions
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-12 tracking-tight leading-[1.1]">
          <span className="block text-xl md:text-2xl text-accent mb-6 font-normal">
            {"// The Future of Business is Here"}
          </span>
          Unlock the Future of Your Business with AI-Powered Solutions
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-400 mb-16 max-w-3xl leading-relaxed tracking-tight">
          Automate. Scale. Succeed. Harness the power of AI to create optimized content, automate workflows, and future-proof your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/consultation"
            className="bg-white text-neutral-900 px-8 py-4 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium flex items-center justify-center gap-2 group"
          >
            Book Your Free AI Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/launch"
            className="border border-white/20 text-white px-8 py-4 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium"
          >
            Explore AI Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import WhyAI from "../components/WhyAI";

// src/components/Hero.tsx
const Hero = () => {
  return (
    <section id="hero" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        GridVerse Security
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
        Discover risks across Google/Microsoft, GitHub, and AWS — then <strong>autofix</strong> them and export
        <strong> audit-ready evidence</strong>. Outcomes, not alerts.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {/* Primary CTA → existing page so it always works */}
        <a
          href="/consultation"
          className="inline-flex items-center rounded-md bg-teal-500 px-5 py-3 font-medium text-white hover:opacity-90"
        >
          Get a Free Security Health Check
        </a>
        {/* Secondary CTA → scrolls to Features on this page */}
        <a
          href="#features"
          className="inline-flex items-center rounded-md border px-5 py-3 font-medium hover:bg-slate-50"
        >
          How it works
        </a>
      </div>
    </section>
  );
};

export default Hero;


export default Index;

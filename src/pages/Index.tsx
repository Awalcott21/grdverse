import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import WhyAI from "../components/WhyAI";
import { SecurityScout } from "@/components/SecurityScout";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Stats />

      {/* 🔐 GridVerse AI Security Scout Widget */}
      <section id="security-scout" className="bg-white py-16 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">🧠 Try GridVerse Security Scout</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Simulated AI-powered vulnerability scanner with instant autofix suggestions. This is where real cyber automation begins.
          </p>
        </div>
        <SecurityScout />
      </section>

      <WhyAI />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default Index;


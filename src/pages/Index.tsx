
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import WhyAI from "../components/WhyAI";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <WhyAI />
        <Stats />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

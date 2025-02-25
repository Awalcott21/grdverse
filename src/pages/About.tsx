
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleFeatureClick = () => {
    navigate('/#features');
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="container-padding py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About GRIDVERSE</h1>
            <p className="text-lg text-neutral-400 mb-12">
              At GRIDVERSE, we believe every brand deserves a digital home that truly reflects its spirit. We're not just a web development agency—we're your creative partners, dedicated to crafting digital experiences that empower, inspire, and elevate your business.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-400">
                We exist to help you get your story onto the digital grid. In 2025, personal branding is more important than ever, and your online presence is key to standing out. Our mission is to empower businesses with innovative, tailor-made web solutions that spark growth and forge genuine connections. Every project we undertake is fueled by our passion for excellence and our unwavering belief in the transformative power of technology.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">Innovation: We embrace challenges as opportunities to create breakthrough solutions that push boundaries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">Quality: We are devoted to the highest standards in every detail, ensuring every project we deliver is a work of art.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">Collaboration: We work hand-in-hand with you to understand your vision, ensuring your digital presence is as unique as your story.</span>
                </li>
              </ul>
            </section>

            <p className="text-lg text-neutral-400 mb-16">
              At GRIDVERSE, we're committed to building more than just websites—we create digital experiences that capture the heart and soul of your brand and showcase the essence of your personal story to the world.
            </p>

            <div className="text-center">
              <button
                onClick={handleFeatureClick}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2 group"
              >
                What We Build
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

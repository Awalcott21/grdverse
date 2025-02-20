import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

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
            <p className="text-lg text-neutral-400 mb-8">
              GRIDVERSE is a cutting-edge web development agency dedicated to crafting exceptional digital experiences. We specialize in creating bespoke websites and applications that drive growth and engagement for our clients.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-400">
                Our mission is to empower businesses with innovative and effective web solutions. We believe in the power of technology to transform ideas into reality, and we are committed to delivering excellence in every project we undertake.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">Innovation: We embrace creativity and constantly seek new and better ways to solve problems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">Quality: We are committed to delivering the highest standards of quality in our work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">Collaboration: We work closely with our clients to understand their needs and achieve their goals.</span>
                </li>
              </ul>
            </section>

            <div className="mt-16 text-center">
              <button
                onClick={() => navigate("/consultation")}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2 group"
              >
                Let's Get You on The Grid
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

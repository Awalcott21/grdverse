
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Bot, Laptop } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <div className="absolute -top-8 left-0 text-sm text-neutral-500 tracking-tight">
              Your AI Website is 5 Days Away
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About GRIDVERSE</h1>
            <p className="text-lg text-neutral-400 mb-12">
              At GRIDVERSE, we're not just another digital agency. We're an AI-powered business accelerator dedicated to helping small and medium businesses harness the power of artificial intelligence to automate processes, create optimized content, and scale faster than ever before.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-400">
                In a world where digital landscapes are evolving rapidly, GRIDVERSE empowers you to stay ahead. Most businesses are still wasting time on manual processes—whether it's creating content, handling customer inquiries, or managing marketing efforts. With AI, you can unlock new levels of efficiency and growth. Our mission is to provide AI solutions that simplify tasks, enhance customer experiences, and accelerate your business trajectory—without the need for a large development team.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="glass-card p-6 rounded-xl">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
                  <p className="text-neutral-400">We combine deep technical knowledge with strategic business acumen to deliver AI solutions that drive real results.</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <Bot className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Automation Focus</h3>
                  <p className="text-neutral-400">We identify and automate repetitive tasks in your business, freeing you and your team to focus on strategic growth.</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <Laptop className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                  <p className="text-neutral-400">Our success is measured by your business outcomes—increased efficiency, reduced costs, and accelerated growth.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
              <p className="text-lg text-neutral-400 mb-6">
                We believe that AI should be accessible to businesses of all sizes. Our approach combines cutting-edge technology with practical business solutions:
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We audit your current processes to identify opportunities for AI-powered automation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We develop custom AI solutions tailored to your specific business needs and goals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We implement, train, and optimize your AI systems to ensure they deliver maximum value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We provide ongoing support and refinement as your business and AI technology evolve.</span>
                </li>
              </ul>
            </section>

            <p className="text-lg text-neutral-400 mb-12">
              At GRIDVERSE, we're committed to making AI accessible, practical, and transformative for your business. We believe that with the right AI solutions, even small businesses can compete at the highest levels and achieve extraordinary growth.
            </p>

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
                className="border border-white/20 text-white px-6 py-3 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium text-base text-center"
              >
                Pick a Package & Launch Today
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

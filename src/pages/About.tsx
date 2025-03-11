
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
              At GRIDVERSE, we build AI-powered websites that work 24/7, automatically engage with customers, and grow your business while you focus on what matters. We're not just another digital agency - we're dedicated to creating websites that work as hard as you do.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-400">
                In a rapidly evolving digital landscape, GRIDVERSE empowers businesses to stay ahead with websites that never sleep. Most businesses are still using static websites that do nothing but display information. With our AI-powered websites, you can unlock new levels of customer engagement and business growth. Our mission is to provide intelligent websites that answer customer questions instantly, generate leads on autopilot, and accelerate your business growth—without requiring your constant attention.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="glass-card p-6 rounded-xl">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Customer Engagement</h3>
                  <p className="text-neutral-400">Our AI answers customer questions instantly, even when you're asleep, ensuring you never miss an opportunity.</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <Bot className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Automated Lead Generation</h3>
                  <p className="text-neutral-400">Your website actively converts visitors into leads around the clock, building your pipeline while you focus on closing deals.</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <Laptop className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Content</h3>
                  <p className="text-neutral-400">Our websites feature intelligent content that personalizes the experience for each visitor, increasing engagement and conversions.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
              <p className="text-lg text-neutral-400 mb-6">
                We believe that AI-powered websites should be accessible to businesses of all sizes. Our approach combines cutting-edge technology with practical business solutions:
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We analyze your business needs to create a website strategy that drives results 24/7.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We develop AI-powered websites that engage customers and generate leads automatically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We implement smart content that personalizes the experience for each visitor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">We provide ongoing optimization to ensure your website consistently delivers business growth.</span>
                </li>
              </ul>
            </section>

            <p className="text-lg text-neutral-400 mb-12">
              At GRIDVERSE, we're committed to creating websites that work as hard as you do. We believe that with the right AI-powered website, businesses of all sizes can compete at the highest levels and achieve extraordinary growth while you focus on what matters most.
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

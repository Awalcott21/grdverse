
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Custom Website Development",
    description: "Tailored web solutions built with modern technologies.",
    features: [
      "Responsive design for all devices",
      "Custom functionality and features",
      "SEO optimization",
      "Performance optimization"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store setup and management.",
    features: [
      "Secure payment integration",
      "Inventory management",
      "Order processing system",
      "Customer account management"
    ]
  },
  {
    title: "Web Application Development",
    description: "Complex web applications for your business needs.",
    features: [
      "User authentication",
      "Real-time updates",
      "Database integration",
      "API development"
    ]
  }
];

const Launch = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="container-padding py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Launch Your Digital Project</h1>
            <p className="text-xl text-neutral-400">
              Choose the service that best fits your needs and let's build something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-neutral-400 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Launch;

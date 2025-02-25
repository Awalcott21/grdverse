
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Briefcase, Image, ShoppingCart, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Template {
  id: string;
  title: string;
  category: "business" | "portfolio" | "ecommerce" | "blog";
  description: string;
  image: string;
  features: string[];
}

const templates: Template[] = [
  {
    id: "business-1",
    title: "Corporate Pro",
    category: "business",
    description: "Modern and professional template perfect for corporate websites with a clean, minimalist design.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    features: ["Responsive design", "Contact forms", "Service showcase", "Team section"]
  },
  {
    id: "portfolio-1",
    title: "Creative Portfolio",
    category: "portfolio",
    description: "Showcase your work with this elegant portfolio template designed for creatives.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    features: ["Project gallery", "About section", "Skills showcase", "Contact form"]
  },
  {
    id: "ecommerce-1",
    title: "Shop Modern",
    category: "ecommerce",
    description: "A modern e-commerce template with everything you need to start selling online.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    features: ["Product catalog", "Shopping cart", "Secure checkout", "Order tracking"]
  },
  {
    id: "blog-1",
    title: "Blog Minimalist",
    category: "blog",
    description: "Clean and focused blog template that puts your content first.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    features: ["Category filtering", "Search functionality", "Related posts", "Newsletter signup"]
  },
];

const categories = [
  { name: "Business", icon: Briefcase },
  { name: "Portfolio", icon: Image },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Blog", icon: BookOpen },
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Website Templates</h1>
            <p className="text-xl text-neutral-400">
              Choose from our collection of professional, responsive templates
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <category.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="text-white font-medium">{category.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-accent text-sm tracking-tight capitalize">{template.category}</span>
                  <h3 className="text-2xl font-semibold text-white mt-2 mb-3">{template.title}</h3>
                  <p className="text-neutral-400 mb-6">{template.description}</p>
                  <ul className="space-y-2 mb-8">
                    {template.features.map((feature, i) => (
                      <li key={i} className="text-neutral-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/launch?template=${template.id}`}
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors group/link"
                  >
                    Use This Template
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;

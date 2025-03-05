
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MessageSquare, FileText, Mail, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import WhyAI from "../components/WhyAI";

interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  price: string;
  timeline: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: "AI-Powered One-Page Website",
    description: "Perfect for small businesses looking to make a professional online debut with AI tools to enhance engagement and performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "AI One-Page Website",
    features: [
      "Clean, modern design with AI-powered layout suggestions",
      "Mobile-responsive, with AI-optimized UX for conversions",
      "AI Chatbot integrated for lead generation and customer support",
      "AI-Powered SEO to boost search engine rankings from the start",
      "Domain name included + 1-year web hosting",
      "AI Content Generation for homepage copy"
    ],
    price: "$800",
    timeline: "5-7 days"
  },
  {
    id: 2,
    title: "AI-Enhanced 3-Page Website",
    description: "A more comprehensive solution for growing businesses who need AI to streamline and automate processes.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "AI 3-Page Website",
    features: [
      "3 custom pages with AI-driven design and UX suggestions",
      "AI-Powered SEO for increased organic traffic",
      "AI Chatbot for seamless customer support and sales conversion",
      "AI-Generated Content for additional pages",
      "3 months of AI-driven website performance tracking",
      "Mobile-responsive design with AI optimizations"
    ],
    price: "$1,200",
    timeline: "7-10 days"
  },
  {
    id: 3,
    title: "AI-Optimized 5-Page Website",
    description: "For businesses needing advanced features, enhanced AI capabilities, and extensive support for long-term growth.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "AI 5-Page Website",
    features: [
      "5 custom pages with AI-powered UX/UI design for higher conversion rates",
      "Advanced AI SEO to drive sustainable search rankings",
      "Integration of AI-powered product/service recommendations",
      "AI Chatbot for automatic customer interaction and lead capture",
      "AI Content Creation for engaging and on-brand copy across pages",
      "6 months of ongoing AI-based maintenance and support"
    ],
    price: "$1,800",
    timeline: "10-14 days"
  },
  {
    id: 4,
    title: "AI-Powered E-Commerce Website",
    description: "For businesses looking to build a full-fledged e-commerce site with AI tools that drive conversions and enhance user experience.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "AI E-Commerce Website",
    features: [
      "Full-featured online store with AI-driven product recommendations",
      "AI-powered secure checkout process with fraud detection",
      "AI Chatbot to guide users through their shopping journey",
      "Integration with AI inventory management tools",
      "Mobile-responsive design with AI-based user behavior tracking",
      "AI SEO for optimized product descriptions and keywords"
    ],
    price: "$2,000",
    timeline: "14-20 days"
  },
  {
    id: 5,
    title: "AI Chatbot Integration Package",
    description: "Custom AI-powered chatbot tailored to your business. 24/7 customer support to handle inquiries and assist customers in real-time. Lead qualification and automated responses based on predefined rules.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "AI Add-On Service",
    features: [
      "Custom AI-powered chatbot tailored to your business",
      "24/7 customer support to handle inquiries in real-time",
      "Lead qualification and automated responses",
      "Easy integration into your website or app",
      "Automate customer service, reducing manual oversight",
      "Improve customer satisfaction and conversion rates"
    ],
    price: "$350 setup + $120/month",
    timeline: "Ongoing"
  },
  {
    id: 6,
    title: "AI Content Creation Package",
    description: "Monthly blog posts, product descriptions, and landing page copy generated by AI. SEO optimization to boost content visibility and improve search engine rankings. Engaging audience-centric writing.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "AI Add-On Service",
    features: [
      "Monthly blog posts, product descriptions, and landing page copy",
      "SEO optimization to boost content visibility",
      "Engaging audience-centric writing",
      "Content tailored to your business niche",
      "Consistent content flow without hiring a full-time writer",
      "Boost your content marketing strategy and brand authority"
    ],
    price: "$500/month",
    timeline: "Ongoing"
  },
  {
    id: 7,
    title: "AI Marketing Automation Package",
    description: "Automated email marketing campaigns tailored to your customer base. Segmentation and lead nurturing to move prospects through the sales funnel. Personalized messaging with dynamic content.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "AI Add-On Service",
    features: [
      "Automated email marketing campaigns",
      "Segmentation and lead nurturing through the sales funnel",
      "Personalized messaging with dynamic content",
      "AI-driven performance tracking for better conversions",
      "Increase customer engagement with personalized emails",
      "Drive higher conversions with effective lead nurturing"
    ],
    price: "$600 setup + $150/month",
    timeline: "Ongoing"
  },
  {
    id: 8,
    title: "All-in-One AI Automation Package",
    description: "Everything from the AI Chatbot Integration, AI Content Creation, and AI Marketing Automation packages. Complete automation to enhance customer service, content marketing, and lead nurturing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "AI Add-On Service",
    features: [
      "Complete AI chatbot, content, and marketing automation",
      "24/7 customer support and lead generation",
      "Monthly SEO-optimized content creation",
      "Automated email marketing and lead nurturing",
      "Comprehensive solution for all business automation needs",
      "Maximize efficiency and customer satisfaction"
    ],
    price: "$950 setup + $370/month",
    timeline: "Ongoing"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Website Solutions</h1>
            <p className="text-xl text-neutral-400">
              Choose the AI package that best fits your needs and transform your online presence with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 rounded-xl relative group"
              >
                <span className="text-accent text-sm tracking-tight">{template.category}</span>
                <h3 className="text-2xl font-semibold mt-2 mb-2">{template.title}</h3>
                <div className="text-3xl font-mono text-white mb-4">{template.price}</div>
                <p className="text-neutral-400 mb-6">{template.description}</p>
                <div className="text-sm text-neutral-500 mb-6">Estimated Timeline: {template.timeline}</div>
                <ul className="space-y-3 mb-8">
                  {template.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Consolidated CTA button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link 
              to="/consultation"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              Schedule Your AI Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-neutral-400 mt-4">
              Get a free personalized assessment for your business needs
            </p>
          </motion.div>
        </div>
        
        <WhyAI />
      </main>
      <Footer />
    </div>
  );
};

export default Launch;

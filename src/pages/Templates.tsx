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
  demoUrl: string;
  screenshots: {
    desktop: string;
    mobile: string;
  }[];
}

const templates: Template[] = [
  {
    id: "business-1",
    title: "Corporate Pro",
    category: "business",
    description: "Modern and professional template perfect for corporate websites with a clean, minimalist design.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    features: [
      "Responsive hero section with call-to-action",
      "Team members showcase",
      "Services grid layout",
      "Testimonials carousel",
      "Contact form with validation",
      "Interactive pricing tables",
      "Blog section with featured posts",
      "Newsletter subscription"
    ],
    demoUrl: "/launch?template=business-1",
    screenshots: [
      {
        desktop: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        mobile: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764"
      }
    ]
  },
  {
    id: "portfolio-1",
    title: "Creative Portfolio",
    category: "portfolio",
    description: "Showcase your work with this elegant portfolio template designed for creatives and professionals.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    features: [
      "Masonry grid project gallery",
      "Project detail pages with carousel",
      "Filterable portfolio categories",
      "Skills progress bars",
      "Resume/CV section",
      "Client testimonials",
      "Contact form with file upload",
      "Social media integration"
    ],
    demoUrl: "/launch?template=portfolio-1",
    screenshots: [
      {
        desktop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        mobile: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      }
    ]
  },
  {
    id: "blog-1",
    title: "Blog Minimalist",
    category: "blog",
    description: "Clean and focused blog template that puts your content first.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    features: [
      "Featured posts slider",
      "Category-based navigation",
      "Author profiles",
      "Comments system",
      "Related posts",
      "Search functionality",
      "Newsletter integration",
      "Social sharing buttons"
    ],
    demoUrl: "/launch?template=blog-1",
    screenshots: [
      {
        desktop: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        mobile: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      }
    ]
  }
];

const categories = [
  { name: "Business", icon: Briefcase },
  { name: "Portfolio", icon: Image },
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
                  <div className="relative h-full">
                    {/* Desktop preview */}
                    <img 
                      src={template.screenshots[0].desktop} 
                      alt={`${template.title} desktop preview`}
                      className="w-full h-full object-cover"
                    />
                    {/* Mobile preview overlay */}
                    <div className="absolute bottom-4 right-4 w-24 h-48 overflow-hidden rounded-lg border-4 border-white/10">
                      <img 
                        src={template.screenshots[0].mobile} 
                        alt={`${template.title} mobile preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-accent text-sm tracking-tight capitalize">{template.category}</span>
                  <h3 className="text-2xl font-semibold text-white mt-2 mb-3">{template.title}</h3>
                  <p className="text-neutral-400 mb-6">{template.description}</p>
                  <ul className="space-y-2 mb-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {template.features.map((feature, i) => (
                      <li key={i} className="text-neutral-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <Link 
                      to={`/launch?template=${template.id}`}
                      className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors group/link"
                    >
                      Use This Template
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <Link 
                      to={template.demoUrl}
                      className="text-neutral-400 hover:text-white transition-colors"
                      target="_blank"
                    >
                      View Demo
                    </Link>
                  </div>
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

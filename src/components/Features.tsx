
import { Globe, Brain, RefreshCw, BarChart, Bot, Laptop } from "lucide-react";

const features = [
  {
    title: "AI-Powered Web Development",
    description: "Get a beautiful, responsive website powered by AI—faster development, better performance, and easier maintenance. Our AI-driven approach creates websites that adapt to your users' needs.",
    icon: Laptop,
  },
  {
    title: "AI Content Creation",
    description: "Don't let content creation bog you down. Our AI tools automatically generate high-quality blog posts, landing pages, and more—tailored to your audience and optimized for conversion.",
    icon: Brain,
  },
  {
    title: "AI Automation & Workflow",
    description: "Streamline your operations with AI-powered workflows. From automated email responses to customer inquiries to marketing automations, focus on scaling, not tasks.",
    icon: Bot,
  },
  {
    title: "AI-Enhanced SEO",
    description: "Our AI analyzes search patterns and content performance to optimize your website's visibility. Get discovered by the right audience at the right time with AI-driven SEO strategies.",
    icon: Globe,
  },
  {
    title: "Automated Data Analysis",
    description: "Transform your business data into actionable insights. Our AI tools analyze customer behavior, sales patterns, and market trends to help you make informed decisions faster.",
    icon: BarChart,
  },
  {
    title: "Business Process Optimization",
    description: "Identify and eliminate bottlenecks in your business with AI-powered process analysis. Streamline operations, reduce costs, and scale more efficiently with intelligent automation.",
    icon: RefreshCw,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm text-accent tracking-tight">// AI Business Solutions</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Transform Your Business with AI
        </h2>
        <p className="text-neutral-400 mb-12 max-w-2xl">
          At Gridverse, we leverage cutting-edge AI technologies to automate tasks, generate optimized content, and help your business scale faster. Our AI solutions are designed to give you a competitive edge while saving you time and resources.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl text-white">{feature.title}</h3>
              </div>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

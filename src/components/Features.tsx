
import { Globe, Shield, Search, Mail, RefreshCw, BarChart, Share2, Laptop } from "lucide-react";

const features = [
  {
    title: "A Website That Works for You",
    description: "Your website will not only look great but also function seamlessly across all devices. Optimized for speed, mobile-friendly, and user-centric—everything is built to help you attract and retain customers.",
    icon: Laptop,
  },
  {
    title: "Custom Domain Name",
    description: "Your business deserves its own unique identity. We'll help you choose and secure a domain name that reflects your brand and gives your business credibility.",
    icon: Globe,
  },
  {
    title: "Hosting and Security",
    description: "We provide reliable hosting with top-notch security to ensure that your website stays online and safe from any potential threats. You can rest easy knowing your site is protected and always accessible.",
    icon: Shield,
  },
  {
    title: "SEO Optimization",
    description: "A beautiful website is useless if no one can find it. We ensure your site is SEO-friendly so you can rank higher in search engines and get noticed by the people who need you most.",
    icon: Search,
  },
  {
    title: "Business Email Setup",
    description: "Professionalism starts with a professional email. We'll set up an email account for your business using your new domain, allowing you to communicate seamlessly with clients.",
    icon: Mail,
  },
  {
    title: "Ongoing Maintenance & Updates",
    description: "Your business is always evolving, and so should your website. We offer ongoing support and updates to ensure that your site remains fresh, functional, and up-to-date with the latest features.",
    icon: RefreshCw,
  },
  {
    title: "Analytics & Performance Tracking",
    description: "We provide tools to track your site's performance, so you can make informed decisions about how to grow and improve your online presence.",
    icon: BarChart,
  },
  {
    title: "Social Media Integration",
    description: "We make it easy for your customers to connect with you on social media by integrating links to your accounts directly on your website, so you can extend your digital reach and build a strong online community.",
    icon: Share2,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything You Need to Run Your Business
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          At Gridverse, we believe that a successful business goes beyond just a website—it's about building a complete online presence that drives growth and customer engagement. That's why, with every website we create, we offer essential tools and services to help you thrive in the digital world.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
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


import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const addOns = [
  {
    id: 7,
    title: "SEO Package",
    description: "Boost your website's visibility with comprehensive SEO optimization",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c",
    category: "Add-On",
    features: [
      "Keyword research",
      "Content optimization",
      "Meta descriptions",
      "3 months updates",
      "Performance tracking"
    ],
    price: "$300",
    timeline: "Ongoing"
  },
  {
    id: 8,
    title: "E-commerce Add-on",
    description: "Transform your website into an online store with full e-commerce capabilities",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "Add-On",
    features: [
      "Up to 10 products",
      "Secure checkout",
      "Inventory management",
      "Payment integration",
      "Order tracking"
    ],
    price: "$500",
    timeline: "Additional 7 days"
  },
  {
    id: 9,
    title: "Maintenance Plan",
    description: "Keep your website secure and up-to-date with regular maintenance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "Add-On",
    features: [
      "Regular updates",
      "Security patches",
      "Daily backups",
      "Minor tweaks",
      "Technical support"
    ],
    price: "$150/month",
    timeline: "Monthly"
  }
];

const Showroom = () => {
  const navigate = useNavigate();

  const handleGetStarted = (packageName: string) => {
    const packageType = packageName.toLowerCase().split(' ')[0];
    navigate(`/get-started?package=${packageType}`);
  };

  return (
    <section id="showroom" className="py-32 container-padding bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Professional Design</h3>
            <p className="text-neutral-400 text-sm">
              Clean, modern designs tailored to your brand and optimized for all devices.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Quick Delivery</h3>
            <p className="text-neutral-400 text-sm">
              Fast turnaround times with most projects completed within 5-14 days.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-medium mb-2">Complete Solution</h3>
            <p className="text-neutral-400 text-sm">
              Everything included: domain, hosting, maintenance, and technical support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;

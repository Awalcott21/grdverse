
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    // Construct mailto link with form data
    const subject = encodeURIComponent(`New Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:hello@grdverse.com?subject=${subject}&body=${body}`;
    
    // Open the user's email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Email Client Opening",
      description: "Your email client should open with your message. Please press send to complete your consultation request.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Book a Free Consultation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-none focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-none focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
            Tell Us About Your Business
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-none focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="What processes would you like to automate? What content do you need? How can AI help your business grow?"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-white hover:bg-neutral-200 text-neutral-900 px-6 py-3 rounded-none font-medium transition-colors flex items-center justify-center gap-2 group"
        >
          Book a Free Consultation
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </motion.div>
  );
};

export default ConsultationForm;

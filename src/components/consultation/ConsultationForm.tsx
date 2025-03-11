
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form to:", `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-form`);
      
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: "consultation",
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response data:", result);
      
      if (result.success) {
        toast({
          title: "Form Submitted!",
          description: "We've received your consultation request and will contact you soon.",
        });
        
        // Reset form data
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your form. Please try again or email us directly at hello@grdverse.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
          className={`w-full bg-white hover:bg-neutral-200 text-neutral-900 px-6 py-3 rounded-none font-medium transition-colors flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Book a Free Consultation'}
          {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <a 
          href="mailto:hello@grdverse.com" 
          className="text-accent hover:underline"
        >
          Or email us directly: hello@grdverse.com
        </a>
      </div>
    </motion.div>
  );
};

export default ConsultationForm;

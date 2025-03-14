
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formspreeState, handleSubmit] = useForm("mpwpwzqw"); // Formspree form ID
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Consultation Request",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Show success toast after successful submission
  if (formspreeState.succeeded) {
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset form data after successful submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "New Consultation Request",
        message: ""
      });
    }, 1000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Book a Free Consultation</h2>
      
      {formspreeState.succeeded ? (
        <div className="bg-green-400/10 border border-green-400/20 p-6 text-center rounded-none">
          <p className="text-green-400 font-medium">✅ Your message has been sent successfully!</p>
          <p className="mt-2 text-neutral-300 text-sm">We'll be in touch with you shortly.</p>
        </div>
      ) : (
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
            <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="text-sm text-red-500 mt-1" />
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
            <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-sm text-red-500 mt-1" />
          </div>
          
          <input type="hidden" name="subject" value={formData.subject} />
          
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
            <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="text-sm text-red-500 mt-1" />
          </div>
          
          <button 
            type="submit"
            disabled={formspreeState.submitting}
            className={`w-full bg-white hover:bg-neutral-200 text-neutral-900 px-6 py-3 rounded-none font-medium transition-colors flex items-center justify-center gap-2 group ${formspreeState.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {formspreeState.submitting ? 'Sending...' : 'Book a Free Consultation'}
            {!formspreeState.submitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ConsultationForm;

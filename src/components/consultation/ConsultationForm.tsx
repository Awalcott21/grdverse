
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Copy, CheckCircle } from "lucide-react";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const emailBodyRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    // Construct mailto link with form data
    const subject = `New Consultation Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    // Encode the mailto link parameters
    const mailtoLink = `mailto:hello@grdverse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open the user's email client
    try {
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Email Client Opening",
        description: "If your email client doesn't open automatically, you can copy the message and send it manually.",
      });
    } catch (error) {
      console.error("Failed to open email client:", error);
      toast({
        title: "Email Client Issue",
        description: "There was a problem opening your email client. You can copy the message below and send it manually.",
        variant: "destructive"
      });
    }
  };

  const copyToClipboard = () => {
    if (!emailBodyRef.current) return;
    
    const content = `
To: hello@grdverse.com
Subject: New Consultation Request from ${formData.name}

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "You can now paste this into your email client.",
      });
      
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      toast({
        title: "Copy failed",
        description: "Please select and copy the text manually.",
        variant: "destructive"
      });
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

      {/* Hidden preview for copying */}
      <div className="sr-only" ref={emailBodyRef}>
        To: hello@grdverse.com
        Subject: New Consultation Request from {formData.name}

        Name: {formData.name}
        Email: {formData.email}

        Message:
        {formData.message}
      </div>
      
      <div className="mt-6">
        <div className="text-sm text-neutral-400 mb-2">Alternative options:</div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-none transition-colors"
          >
            {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy Email Content"}
          </button>
          <a 
            href="mailto:hello@grdverse.com" 
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-none transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Directly
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultationForm;

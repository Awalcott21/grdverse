
import { motion } from "framer-motion";
import { Brain, Bot, Laptop, Calendar, Mail } from "lucide-react";

const ConsultationBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-semibold mb-6">How We Can Help</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-accent/10 p-3 rounded-lg shrink-0">
            <Brain className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium mb-1">AI Content Creation</h3>
            <p className="text-neutral-400">Generate SEO-optimized blogs, social media content, and marketing materials with AI.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-accent/10 p-3 rounded-lg shrink-0">
            <Bot className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Business Automation</h3>
            <p className="text-neutral-400">Automate customer service, email marketing, lead generation, and more with AI tools.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-accent/10 p-3 rounded-lg shrink-0">
            <Laptop className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium mb-1">AI-Powered Web Solutions</h3>
            <p className="text-neutral-400">Create intelligent websites that learn from user behavior and optimize for conversions.</p>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mt-8">
        <div className="flex items-start gap-4">
          <Calendar className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h3 className="font-medium mb-1">Schedule a Call</h3>
            <p className="text-neutral-400 mb-4">Book a 30-minute call to discuss how AI can transform your business.</p>
            <div className="aspect-video w-full">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=hello%40grdverse.com&ctz=America%2FNew_York"
                style={{ border: 0 }}
                className="w-full h-[400px] rounded-lg"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Mail className="w-6 h-6 text-accent shrink-0" />
        <div>
          <h3 className="font-medium mb-1">Email Us</h3>
          <p className="text-neutral-400">Send us an email at hello@grdverse.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultationBenefits;

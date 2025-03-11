
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calendar, Mail, Brain, Bot, Laptop } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Consultation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const formValues = {
        formType: "consultation",
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      };
      
      // Call the submit-form edge function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Form Submitted!",
          description: "We've received your consultation request and will contact you soon.",
        });
        
        // Reset the form
        e.currentTarget.reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="container-padding py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Need Answers? Let's Talk. No Pressure.</h1>
              <p className="text-xl text-neutral-400">
                Get clear insights on how AI can transform your business operations in a 30-minute chat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Get Your AI Audit</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
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
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
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
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="What processes would you like to automate? What content do you need? How can AI help your business grow?"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Find Your Perfect AI Website in 30 Seconds'}
                  </button>
                </form>
              </motion.div>

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
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;


import { useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useState } from "react";

const GetStarted = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedPackage = searchParams.get("package");

  // Capitalize the package name for display and handle full package names
  const formatPackageName = (pkg: string | null) => {
    if (!pkg) return "Not Selected";
    
    // Handle full package names that might come from the dropdown
    if (pkg.includes("Package")) {
      return pkg;
    }
    
    // Map short package names to their full names
    const packageMap: { [key: string]: string } = {
      'basic': 'Basic Package',
      'standard': 'Standard Package',
      'premium': 'Premium Package',
      'wix': 'Wix Website Package (Standard)',
      'seo': 'SEO Package',
      'ecommerce': 'E-commerce Add-on',
      'maintenance': 'Maintenance Plan',
      'ai-one-page': 'AI-Powered One-Page Website',
      'ai-three-page': 'AI-Enhanced 3-Page Website',
      'ai-five-page': 'AI-Optimized 5-Page Website',
      'ai-ecommerce': 'AI-Powered E-Commerce Website',
      'ai-chatbot': 'AI Chatbot Integration Package',
      'ai-content': 'AI Content Creation Package',
      'ai-marketing': 'AI Marketing Automation Package',
      'ai-all-in-one': 'All-in-One AI Automation Package'
    };
    
    return packageMap[pkg.toLowerCase()] || pkg.charAt(0).toUpperCase() + pkg.slice(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const formValues = {
        formType: "getStarted",
        name: formData.get("name"),
        email: formData.get("email"),
        package: formData.get("package"),
        details: formData.get("details")
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
          title: "Project Request Submitted!",
          description: "We've received your project details and will contact you soon.",
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
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Let's Build Something Amazing
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-neutral-400"
              >
                {selectedPackage 
                  ? `You've selected our ${formatPackageName(selectedPackage)}. Fill in your details below to get started.`
                  : "Select a package and fill in your details to begin your journey with us."}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-neutral-300 mb-2">
                    Selected Package
                  </label>
                  <input
                    type="text"
                    id="package"
                    name="package"
                    readOnly
                    value={formatPackageName(selectedPackage)}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-neutral-400 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-neutral-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Tell us about your project and any specific requirements you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Let\'s Get Started'}
                  <Rocket className={`w-5 h-5 ${isSubmitting ? '' : 'group-hover:translate-x-1 transition-transform'}`} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;

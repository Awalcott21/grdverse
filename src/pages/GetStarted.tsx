
import { useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const GetStarted = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [formspreeState, handleSubmit] = useForm("mpwpwzqw"); // Using the same Formspree ID
  const [showSuccess, setShowSuccess] = useState(false);
  const selectedPackage = searchParams.get("package");

  const formatPackageName = (pkg: string | null) => {
    if (!pkg) return "Not Selected";
    
    if (pkg.includes("Package")) {
      return pkg;
    }
    
    const packageMap: { [key: string]: string } = {
      'basic': 'AI Starter Website',
      'standard': 'AI Growth Website',
      'premium': 'AI Sales Machine',
      'custom': 'Custom AI Website'
    };
    
    return packageMap[pkg.toLowerCase()] || pkg.charAt(0).toUpperCase() + pkg.slice(1);
  };

  // Use useEffect to handle the success state
  useEffect(() => {
    if (formspreeState.succeeded) {
      setShowSuccess(true);
      
      toast({
        title: "Project Request Submitted!",
        description: "We've received your project details and will contact you soon.",
      });
      
      // Optionally open email client after successful submission
      const formValues = {
        name: document.getElementById("name") ? (document.getElementById("name") as HTMLInputElement).value : '',
        email: document.getElementById("email") ? (document.getElementById("email") as HTMLInputElement).value : '',
        package: document.getElementById("package") ? (document.getElementById("package") as HTMLInputElement).value : '',
        details: document.getElementById("details") ? (document.getElementById("details") as HTMLTextAreaElement).value : ''
      };
      
      setTimeout(() => {
        window.open(
          `mailto:hello@grdverse.com?subject=New Project Inquiry - ${formValues.package}&body=Name: ${formValues.name}%0D%0AEmail: ${formValues.email}%0D%0APackage: ${formValues.package}%0D%0AProject Details: ${formValues.details}`,
          '_blank'
        );
      }, 1000);
    }
  }, [formspreeState.succeeded, toast]);

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
                Launch Your AI Website in 5 Days
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-neutral-400"
              >
                {selectedPackage 
                  ? `You've selected our ${formatPackageName(selectedPackage)}. Fill in your details below to get started with a website that works 24/7.`
                  : "Select a package and fill in your details to begin your journey with an AI-powered website that works around the clock."}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-none border-white/10"
            >
              {showSuccess ? (
                <div className="bg-green-400/10 border border-green-400/20 p-6 text-center rounded-none">
                  <p className="text-green-400 font-medium">✅ Your project request has been sent successfully!</p>
                  <p className="mt-2 text-neutral-300 text-sm">We'll be in touch with you shortly to discuss your AI website project.</p>
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
                      required
                      className="w-full px-4 py-3 rounded-none bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
                      required
                      className="w-full px-4 py-3 rounded-none bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-sm text-red-500 mt-1" />
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
                      className="w-full px-4 py-3 rounded-none bg-neutral-800/50 border border-neutral-700 text-neutral-400 cursor-not-allowed"
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
                      className="w-full px-4 py-3 rounded-none bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="What kind of website do you need? What key features would you like your AI website to have?"
                    />
                    <ValidationError prefix="Details" field="details" errors={formspreeState.errors} className="text-sm text-red-500 mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={formspreeState.submitting}
                    className={`w-full bg-white hover:bg-neutral-200 text-neutral-900 px-6 py-3 rounded-none font-medium transition-colors flex items-center justify-center gap-2 group ${formspreeState.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formspreeState.submitting ? 'Submitting...' : 'Launch My AI Website'}
                    {!formspreeState.submitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
              
              <div className="mt-4 text-center">
                <a 
                  href="mailto:hello@grdverse.com" 
                  className="text-accent hover:underline"
                >
                  Or email us directly: hello@grdverse.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;


import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Create email content
    const mailtoLink = `mailto:hello@grdverse.com?subject=Consultation Request - ${formData.get("name")}&body=
Name: ${formData.get("name")}%0D%0A
Email: ${formData.get("email")}%0D%0A
Project Details:%0D%0A${formData.get("message")}`;

    // Open default email client
    window.location.href = mailtoLink;

    toast({
      title: "Form Submitted!",
      description: "Opening your email client to send your consultation request.",
    });
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Free Consultation</h1>
              <p className="text-xl text-neutral-400">
                Let's discuss your project and find the perfect solution for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
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
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-semibold mb-6">Schedule a Call</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Book a Meeting</h3>
                      <p className="text-neutral-400 mb-4">Schedule a 30-minute call to discuss your project in detail.</p>
                      <div className="aspect-video w-full">
                        <iframe
                          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0_vE_zWO_F3GxiVFoQCWQYKi8JA9vZytxNn7g95S5cqdDj0Yw53UDAFsmCOvGcypWOCEDI_xhD"
                          style={{ border: 0 }}
                          className="w-full h-[400px] rounded-lg"
                          frameBorder="0"
                        ></iframe>
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

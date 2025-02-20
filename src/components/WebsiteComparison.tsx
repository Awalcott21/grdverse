
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteComparison = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Need Help Deciding Between Wix and Custom Websites?
          </h2>
          <p className="text-neutral-400 text-center mb-16 max-w-3xl mx-auto">
            We understand that choosing the right type of website for your business can be a tough decision. 
            Let us help you weigh the options:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Custom Website Column */}
            <div className="glass-card p-8 border border-purple-500/20 bg-purple-500/5">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                Choose a Custom Website (Built with Loveable.dev) If:
              </h3>
              <ul className="space-y-4">
                {[
                  "You need complete flexibility and want a website that's uniquely designed for your brand.",
                  "You plan to scale your website as your business grows and need advanced features.",
                  "You want to integrate custom solutions and need control over SEO and analytics.",
                  "You want a website that can grow with your business, with ongoing support."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wix Website Column */}
            <div className="glass-card p-8 border border-blue-500/20 bg-blue-500/5">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Choose a Wix Website If:
              </h3>
              <ul className="space-y-4">
                {[
                  "You need a quick, affordable solution that's easy to manage and maintain.",
                  "You prefer a drag-and-drop interface and don't want to worry about complex back-end work.",
                  "You're looking for a simple, user-friendly website with the ability to easily make updates without technical knowledge.",
                  "You want cost-effective options with reliable hosting and a straightforward design."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Still Unsure Section */}
          <div className="text-center glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Still Unsure?</h3>
            <p className="text-neutral-400 mb-6">
              Feel free to contact us for a free consultation, and we'll help you choose the best option for your business.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteComparison;

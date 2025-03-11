
import { Brain, Zap, PieChart, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const WhyAI = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Why Choose AI-Powered Websites?
          </h2>
          <p className="text-neutral-400 text-center mb-16 max-w-3xl mx-auto">
            Traditional websites are static and passive. AI-powered websites are dynamic and proactive, 
            continuously learning and adapting to provide better experiences for your visitors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* SEO Benefits */}
            <div className="glass-card p-8 border border-purple-500/20 bg-purple-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-purple-400">
                  Intelligent SEO
                </h3>
              </div>
              <p className="text-neutral-300 mb-6">
                AI-powered SEO continuously analyzes search patterns and adjusts your website's content 
                to maximize visibility and organic traffic.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated keyword optimization",
                  "Content recommendations that rank higher",
                  "Real-time search trend adaptation",
                  "Competitor analysis and positioning"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chatbots */}
            <div className="glass-card p-8 border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400">
                  24/7 AI Chatbots
                </h3>
              </div>
              <p className="text-neutral-300 mb-6">
                AI chatbots provide instant support, qualify leads, and guide visitors through 
                your website, even when you're not available.
              </p>
              <ul className="space-y-3">
                {[
                  "Instant customer service at any hour",
                  "Lead qualification and capture",
                  "Personalized product recommendations",
                  "Seamless handoff to human support when needed"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced UI/UX */}
            <div className="glass-card p-8 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Advanced UI/UX
                </h3>
              </div>
              <p className="text-neutral-300 mb-6">
                Create websites with intuitive interfaces that adapt to user behavior and provide 
                personalized experiences that drive conversions.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized user journeys based on behavior",
                  "Intelligent navigation that guides visitors",
                  "Dynamic content that adapts to user interests",
                  "Conversion-optimized design elements"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Insights */}
            <div className="glass-card p-8 border border-rose-500/20 bg-rose-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-500/20 p-3 rounded-lg">
                  <PieChart className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-xl font-semibold text-rose-400">
                  Actionable Insights
                </h3>
              </div>
              <p className="text-neutral-300 mb-6">
                AI analytics provide deep insights into visitor behavior, helping you make data-driven 
                decisions to improve conversion rates.
              </p>
              <ul className="space-y-3">
                {[
                  "User behavior analysis and predictions",
                  "Conversion optimization recommendations",
                  "A/B testing with AI-driven insights",
                  "Customer journey mapping and improvements"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Optimization */}
            <div className="glass-card p-8 border border-amber-500/20 bg-amber-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-amber-400">
                  Mobile Optimization
                </h3>
              </div>
              <p className="text-neutral-300 mb-6">
                Create responsive websites that deliver exceptional experiences across all devices, 
                with AI-powered performance optimization.
              </p>
              <ul className="space-y-3">
                {[
                  "Responsive designs that adapt to any screen",
                  "Fast loading speeds on mobile networks",
                  "Touch-optimized interfaces for mobile users",
                  "Simplified mobile checkout processes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitive Edge */}
            <div className="glass-card p-8 border border-cyan-500/20 bg-cyan-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">
                  Competitive Edge
                </h3>
              </div>
              <p className="text-neutral-300 mb-6">
                Stay ahead of competitors with cutting-edge AI technology that continually evolves to 
                meet your business goals and market demands.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized user experiences based on behavior",
                  "Adaptive website that evolves with your business",
                  "Predictive analytics to anticipate market trends",
                  "Faster implementation of new features and content"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Transform Your Website with AI?</h3>
            <p className="text-neutral-400 mb-6">
              Choose a package that fits your business needs and launch your AI-powered website in as little as 5 days.
            </p>
            <Link
              to="/launch"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              View Pricing & Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAI;

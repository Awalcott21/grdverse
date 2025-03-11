
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    businessType: "",
    features: "",
    timeline: ""
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleStepComplete = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    if (step === 3) {
      // Determine recommendation based on answers
      determineRecommendation();
    } else {
      setStep(step + 1);
    }
  };

  const determineRecommendation = () => {
    const { businessType, features, timeline } = answers;
    
    // Simple logic for package recommendation
    if (businessType === "small" && features === "basic") {
      setRecommendation("starter");
    } else if (businessType === "growing" || features === "advanced" || timeline === "1-2 weeks") {
      setRecommendation("professional");
    } else {
      setRecommendation("enterprise");
    }
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <div className="quiz-question">
            <h2 className="text-2xl font-semibold mb-6">What best describes your business?</h2>
            <div className="grid gap-4">
              <QuizOption 
                label="Small Business / Startup" 
                description="Just getting started or have a small established presence"
                onClick={() => handleStepComplete("businessType", "small")}
              />
              <QuizOption 
                label="Growing Business" 
                description="Expanding operations and looking to scale online"
                onClick={() => handleStepComplete("businessType", "growing")}
              />
              <QuizOption 
                label="Established Business" 
                description="Well-established with complex online needs"
                onClick={() => handleStepComplete("businessType", "established")}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="quiz-question">
            <h2 className="text-2xl font-semibold mb-6">What features do you need?</h2>
            <div className="grid gap-4">
              <QuizOption 
                label="Basic AI Website" 
                description="Simple design, AI chatbot, basic SEO"
                onClick={() => handleStepComplete("features", "basic")}
              />
              <QuizOption 
                label="Advanced AI Features" 
                description="Content creation, lead generation, marketing automation"
                onClick={() => handleStepComplete("features", "advanced")}
              />
              <QuizOption 
                label="Full AI Business Suite" 
                description="Complete website with all AI features and integrations"
                onClick={() => handleStepComplete("features", "complete")}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="quiz-question">
            <h2 className="text-2xl font-semibold mb-6">When do you need your website?</h2>
            <div className="grid gap-4">
              <QuizOption 
                label="ASAP (5-7 days)" 
                description="I need my website up and running quickly"
                onClick={() => handleStepComplete("timeline", "ASAP")}
              />
              <QuizOption 
                label="1-2 weeks" 
                description="I have a little flexibility on timing"
                onClick={() => handleStepComplete("timeline", "1-2 weeks")}
              />
              <QuizOption 
                label="2+ weeks" 
                description="I'm planning ahead and can wait"
                onClick={() => handleStepComplete("timeline", "2+ weeks")}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderRecommendation = () => {
    let title, price, timeline, features;

    switch (recommendation) {
      case "starter":
        title = "AI Starter Website";
        price = "$800";
        timeline = "5-7 days";
        features = [
          "AI-optimized design & SEO",
          "AI chatbot for lead capture",
          "Mobile-friendly & fast",
          "Free domain + 1-year hosting"
        ];
        break;
      case "professional":
        title = "AI Professional Website";
        price = "$1,200";
        timeline = "7-10 days";
        features = [
          "3 custom pages with AI-driven design",
          "Advanced AI chatbot with sales automation",
          "AI-generated content for all pages",
          "3 months of AI support & maintenance"
        ];
        break;
      case "enterprise":
        title = "AI Enterprise Solution";
        price = "$1,800";
        timeline = "10-14 days";
        features = [
          "5+ custom pages with advanced AI integrations",
          "Complete AI marketing automation suite",
          "AI-driven analytics and optimization",
          "6 months of AI support & maintenance"
        ];
        break;
      default:
        title = "AI Starter Website";
        price = "$800";
        timeline = "5-7 days";
        features = [
          "AI-optimized design & SEO",
          "AI chatbot for lead capture",
          "Mobile-friendly & fast",
          "Free domain + 1-year hosting"
        ];
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="recommendation-result text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Your Perfect AI Website</h2>
        <div className="glass-card p-8 rounded-xl mb-8 max-w-lg mx-auto">
          <div className="text-accent text-lg font-medium mb-2">Recommended Package</div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-3xl font-mono">{price}</span>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-400">{timeline}</span>
          </div>
          
          <ul className="text-left space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            to="/launch"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 w-full"
          >
            Launch My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-neutral-400 mb-4">
          Not quite what you're looking for?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/launch"
            className="border border-white/20 text-white px-6 py-3 rounded hover:bg-white/10 transition-colors tracking-tight font-medium"
          >
            See All Packages
          </Link>
          <Link 
            to="/consultation"
            className="text-neutral-400 hover:text-white transition-colors tracking-tight font-medium"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.div>
    );
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
            {recommendation ? (
              renderRecommendation()
            ) : (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold mb-4">Find Your Perfect AI Website in 30 Seconds</h1>
                  <p className="text-xl text-neutral-400">
                    Answer 3 quick questions to get a tailored recommendation
                  </p>
                </div>
                
                <div className="quiz-progress mb-10">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-neutral-400">Question {step} of 3</span>
                    <span className="text-sm text-neutral-400">{Math.round((step / 3) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-accent h-full transition-all duration-300 ease-in-out"
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {renderQuestion()}
              </>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const QuizOption = ({ 
  label, 
  description, 
  onClick 
}: { 
  label: string; 
  description: string; 
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-left p-6 border border-neutral-700 rounded-lg hover:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <h3 className="text-lg font-medium mb-1">{label}</h3>
      <p className="text-neutral-400 text-sm">{description}</p>
    </button>
  );
};

export default Quiz;

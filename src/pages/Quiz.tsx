
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    hasWebsite: "",
    biggestStruggle: "",
    launchTimeline: ""
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStepComplete = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    if (step === 3) {
      determineRecommendation();
    } else {
      setStep(step + 1);
    }
  };

  const determineRecommendation = () => {
    const { hasWebsite, biggestStruggle, launchTimeline } = answers;
    
    if (launchTimeline === "ASAP" || (!hasWebsite && biggestStruggle === "Website is outdated")) {
      setRecommendation("starter");
    } else if (biggestStruggle === "No traffic" || biggestStruggle === "No leads") {
      setRecommendation("growth");
    } else {
      setRecommendation("sales");
    }
  };
  
  const submitQuizResults = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email to receive your results",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    let packageInfo = "";
    let packageTitle = "";
    
    switch (recommendation) {
      case "starter":
        packageTitle = "AI Starter Website";
        packageInfo = "AI Starter Website ($800, 5-7 days)";
        break;
      case "growth":
        packageTitle = "AI Growth Website";
        packageInfo = "AI Growth Website ($1,200, 7-10 days)";
        break;
      case "sales":
        packageTitle = "AI Sales Machine";
        packageInfo = "AI Sales Machine ($1,800, 10-14 days)";
        break;
    }
    
    try {
      // Send to edge function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: "quiz",
          name: name,
          email: email,
          answers: answers,
          recommendedPackage: packageTitle
        })
      });
      
      // Also send direct email
      window.location.href = `mailto:hello@grdverse.com?subject=Quiz Results - ${packageTitle}&body=Name: ${name || 'Not provided'}%0D%0AEmail: ${email}%0D%0A%0D%0AQuiz Answers:%0D%0A- Has Website: ${answers.hasWebsite}%0D%0A- Biggest Struggle: ${answers.biggestStruggle}%0D%0A- Launch Timeline: ${answers.launchTimeline}%0D%0A%0D%0ARecommended Package: ${packageInfo}`;
      
      toast({
        title: "Results Sent!",
        description: "We've sent your quiz results to hello@grdverse.com. We'll be in touch soon!",
      });
    } catch (error) {
      console.error("Failed to submit quiz results:", error);
      // Always default to direct email if API fails
      window.location.href = `mailto:hello@grdverse.com?subject=Quiz Results - ${packageTitle}&body=Name: ${name || 'Not provided'}%0D%0AEmail: ${email}%0D%0A%0D%0AQuiz Answers:%0D%0A- Has Website: ${answers.hasWebsite}%0D%0A- Biggest Struggle: ${answers.biggestStruggle}%0D%0A- Launch Timeline: ${answers.launchTimeline}%0D%0A%0D%0ARecommended Package: ${packageInfo}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <div className="quiz-question">
            <h2 className="text-2xl font-semibold mb-6">Do you have a website?</h2>
            <div className="grid gap-4">
              <QuizOption 
                label="Yes" 
                description="I already have a website but want to improve it"
                onClick={() => handleStepComplete("hasWebsite", "Yes")}
              />
              <QuizOption 
                label="No" 
                description="I need a new website from scratch"
                onClick={() => handleStepComplete("hasWebsite", "No")}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="quiz-question">
            <h2 className="text-2xl font-semibold mb-6">What's your biggest struggle?</h2>
            <div className="grid gap-4">
              <QuizOption 
                label="No traffic" 
                description="My website doesn't get enough visitors"
                onClick={() => handleStepComplete("biggestStruggle", "No traffic")}
              />
              <QuizOption 
                label="No leads" 
                description="I get traffic but not enough leads or inquiries"
                onClick={() => handleStepComplete("biggestStruggle", "No leads")}
              />
              <QuizOption 
                label="No conversions" 
                description="I get leads but they don't convert to sales"
                onClick={() => handleStepComplete("biggestStruggle", "No conversions")}
              />
              <QuizOption 
                label="Website is outdated" 
                description="My website looks old or doesn't perform well"
                onClick={() => handleStepComplete("biggestStruggle", "Website is outdated")}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="quiz-question">
            <h2 className="text-2xl font-semibold mb-6">How soon do you want to launch?</h2>
            <div className="grid gap-4">
              <QuizOption 
                label="ASAP (5-7 days)" 
                description="I need my website up and running quickly"
                onClick={() => handleStepComplete("launchTimeline", "ASAP")}
              />
              <QuizOption 
                label="30 Days" 
                description="I have some flexibility on timing"
                onClick={() => handleStepComplete("launchTimeline", "30 Days")}
              />
              <QuizOption 
                label="Not Sure" 
                description="I'm still in the planning phase"
                onClick={() => handleStepComplete("launchTimeline", "Not Sure")}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderRecommendation = () => {
    let title, price, timeline, features, packageParam;

    switch (recommendation) {
      case "starter":
        title = "AI Starter Website";
        price = "$800";
        timeline = "5-7 days";
        packageParam = "basic";
        features = [
          "AI-optimized design & SEO",
          "AI chatbot for lead capture",
          "Mobile-friendly & fast",
          "Free domain + 1-year hosting",
          "Free AI strategy session"
        ];
        break;
      case "growth":
        title = "AI Growth Website";
        price = "$1,200";
        timeline = "7-10 days";
        packageParam = "standard";
        features = [
          "AI-enhanced UX & lead capture",
          "AI chatbot for 24/7 support",
          "AI-generated content",
          "3 months of AI performance tracking",
          "Free AI strategy session"
        ];
        break;
      case "sales":
        title = "AI Sales Machine";
        price = "$1,800";
        timeline = "10-14 days";
        packageParam = "premium";
        features = [
          "AI-powered UI & automation",
          "AI SEO for high traffic",
          "AI chatbot + email marketing automation",
          "6 months of AI maintenance",
          "Free AI strategy session"
        ];
        break;
      default:
        title = "AI Starter Website";
        price = "$800";
        timeline = "5-7 days";
        packageParam = "basic";
        features = [
          "AI-optimized design & SEO",
          "AI chatbot for lead capture",
          "Mobile-friendly & fast",
          "Free domain + 1-year hosting",
          "Free AI strategy session"
        ];
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="recommendation-result text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Your Perfect AI Website Package</h2>
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
          
          <div className="space-y-5">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white"
              />
              <input
                type="email"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white"
              />
            </div>
            
            <button 
              onClick={submitQuizResults}
              disabled={isSubmitting || !email}
              className={`w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${isSubmitting || !email ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Email My Results'}
              {!isSubmitting && <Mail className="w-4 h-4" />}
            </button>
            
            <Link 
              to={`/get-started?package=${packageParam}`}
              className="bg-white hover:bg-neutral-200 text-neutral-900 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 w-full"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
          <a 
            href="mailto:hello@grdverse.com?subject=AI Website Inquiry"
            className="text-neutral-400 hover:text-white transition-colors tracking-tight font-medium"
          >
            Email Us Directly
          </a>
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
                  <h1 className="text-4xl font-bold mb-4">Not Sure What You Need? Find Out in 30 Seconds</h1>
                  <p className="text-xl text-neutral-400">
                    Skip the guesswork. Answer 3 quick questions and get matched with the perfect website solution.
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

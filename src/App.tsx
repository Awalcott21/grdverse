
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Launch from "./pages/Launch";
import Consultation from "./pages/Consultation";
import GetStarted from "./pages/GetStarted";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/launch" element={<Launch />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

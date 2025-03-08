
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleFeatureClick = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800">
      <nav className="container-padding mx-auto flex h-24 items-center justify-between">
        <Logo variant="full" />
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" onClick={() => {
            const element = document.getElementById('showroom');
            element?.scrollIntoView({ behavior: 'smooth' });
          }} className="text-neutral-400 hover:text-white transition-colors tracking-tight">
            Showroom
          </Link>
          <button onClick={handleFeatureClick} className="text-neutral-400 hover:text-white transition-colors tracking-tight">
            What We Build
          </button>
          <Link to="/about" className="text-neutral-400 hover:text-white transition-colors tracking-tight">
            About
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/launch" className="bg-white text-neutral-900 px-6 py-2.5 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium">
              Launch
            </Link>
            <Link to="/consultation" className="border border-white/20 text-white px-6 py-2.5 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium">
              Free Consultation
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-neutral-900 border-b border-neutral-800">
          <div className="container-padding py-6 flex flex-col gap-6">
            <Link 
              to="/"
              onClick={() => {
                const element = document.getElementById('showroom');
                element?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="text-neutral-400 hover:text-white transition-colors tracking-tight"
            >
              Showroom
            </Link>
            <button 
              onClick={() => {
                handleFeatureClick();
                setIsMenuOpen(false);
              }} 
              className="text-neutral-400 hover:text-white transition-colors tracking-tight text-left"
            >
              What We Build
            </button>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors tracking-tight"
            >
              About
            </Link>
            <div className="flex flex-col gap-4">
              <Link 
                to="/launch"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-neutral-900 px-6 py-2.5 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium text-center"
              >
                Launch
              </Link>
              <Link 
                to="/consultation"
                onClick={() => setIsMenuOpen(false)}
                className="border border-white/20 text-white px-6 py-2.5 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium text-center"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

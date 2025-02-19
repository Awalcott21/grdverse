
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800">
      <nav className="container-padding mx-auto flex h-20 items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          GRIDVERSE
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#showroom" className="text-neutral-400 hover:text-white transition-colors tracking-tight">
            Showroom
          </Link>
          <Link to="/#features" className="text-neutral-400 hover:text-white transition-colors tracking-tight">
            What We Build
          </Link>
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
            <Link to="/#showroom" className="text-neutral-400 hover:text-white transition-colors tracking-tight">
              Showroom
            </Link>
            <Link to="/#features" className="text-neutral-400 hover:text-white transition-colors tracking-tight">
              What We Build
            </Link>
            <Link to="/about" className="text-neutral-400 hover:text-white transition-colors tracking-tight">
              About
            </Link>
            <div className="flex flex-col gap-4">
              <Link to="/launch" className="bg-white text-neutral-900 px-6 py-2.5 rounded-none hover:bg-neutral-200 transition-colors tracking-tight font-medium text-center">
                Launch
              </Link>
              <Link to="/consultation" className="border border-white/20 text-white px-6 py-2.5 rounded-none hover:bg-white/10 transition-colors tracking-tight font-medium text-center">
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

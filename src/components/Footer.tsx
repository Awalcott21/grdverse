
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const handleFeatureClick = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <Logo className="mb-6" />
            <div className="flex gap-4">
              <a href="https://twitter.com/gridverse" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-accent transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com/gridverse" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-accent transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com/gridverse" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-accent transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/gridverse" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-accent transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('showroom')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Showroom
                  </a>
                </li>
                <li><button onClick={handleFeatureClick} className="text-neutral-300 hover:text-white transition-colors">What We Build</button></li>
                <li><a href="/about" className="text-neutral-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <ul className="space-y-2">
                <li><a href="/launch" className="text-neutral-300 hover:text-white transition-colors">Launch</a></li>
                <li><a href="/consultation" className="text-neutral-300 hover:text-white transition-colors">Free Consultation</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800">
            <p className="text-neutral-400 text-center">
              © 2024 GRIDVERSE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

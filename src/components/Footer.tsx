
const Footer = () => {
  const handleFeatureClick = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
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
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-neutral-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-center">
            © 2024 GRIDVERSE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

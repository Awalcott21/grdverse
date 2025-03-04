
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <span className="sr-only">GRIDVERSE</span>
      <img 
        src="/lovable-uploads/71a61040-ce62-455c-9327-323b879a70d4.png" 
        alt="GRIDVERSE Logo" 
        className="h-8 w-auto" 
      />
    </Link>
  );
};

export default Logo;

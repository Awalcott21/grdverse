
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "full" | "short";
}

const Logo = ({ className = "", variant = "full" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <span className="sr-only">GRIDVERSE</span>
      {variant === "full" ? (
        <img 
          src="/lovable-uploads/a4e887fc-7754-40c5-8e75-5bbfd7c23e51.png" 
          alt="GRIDVERSE Logo" 
          className="h-10 w-auto" 
        />
      ) : (
        <img 
          src="/lovable-uploads/7531169a-4b59-4379-bcab-b5da36b7872f.png" 
          alt="GRIDVERSE Logo" 
          className="h-10 w-auto" 
        />
      )}
    </Link>
  );
};

export default Logo;

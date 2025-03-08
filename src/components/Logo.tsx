
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
          src="/lovable-uploads/28188f67-d2d6-45e7-9385-e099504e215d.png" 
          alt="GRIDVERSE Logo" 
          className="h-10 w-auto" 
        />
      ) : (
        <img 
          src="/lovable-uploads/1598348a-fda7-4849-8fc7-3c5c1c29be5d.png" 
          alt="GRIDVERSE Logo" 
          className="h-10 w-auto" 
        />
      )}
    </Link>
  );
};

export default Logo;

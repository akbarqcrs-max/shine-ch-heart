import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({
  className = "",
  showText = true
}: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <img
        src="/logo.png"
        alt="CH Centre Thrissur"
        className={`${showText ? "h-14 md:h-16" : "h-10"} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </Link>
  );
};

export default Logo;
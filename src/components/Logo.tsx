import { Link } from "react-router-dom";
interface LogoProps {
  className?: string;
  showText?: boolean;
}
const Logo = ({
  className = "",
  showText = true
}: LogoProps) => {
  return <Link to="/" className={`flex items-center gap-1.5 group ${className}`}>
      {/* Logo Icon - Triangle with gradient like IVOS */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Triangle shape */}
          <path d="M20 4L36 32H4L20 4Z" fill="url(#triangle-gradient)" />
          <defs>
            <linearGradient id="triangle-gradient" x1="4" y1="32" x2="36" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="50%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Logo Text - Two-tone like IVOS */}
      {showText && <span className="font-heading font-bold text-2xl tracking-tight">
          <span className="bg-clip-text text-transparent" style={{
        backgroundImage: 'linear-gradient(90deg, #0891b2 0%, #0d9488 100%)'
      }}>
            CH
          </span>
          <span className="bg-clip-text text-transparent" style={{
        backgroundImage: 'linear-gradient(90deg, #0d9488 0%, #22c55e 100%)'
      }}>
            ​ CENTER 
          </span>
        </span>}
    </Link>;
};
export default Logo;
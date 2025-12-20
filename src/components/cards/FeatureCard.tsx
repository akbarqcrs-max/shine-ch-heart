import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  linkText?: string;
  index?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  linkText = "Learn more",
  index = 0 
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link
        to={href}
        className="block feature-card h-full bg-section-dark text-primary-foreground p-8 rounded-xl border border-border/10 hover:border-primary/30 transition-all duration-300"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>

        {/* Content */}
        <h3 className="font-heading text-xl font-semibold mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Link */}
        <div className="flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all">
          <ArrowRight className="w-4 h-4 text-[#22c55e]" />
          <span className="text-gradient-primary">{linkText}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;

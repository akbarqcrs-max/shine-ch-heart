import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href: string;
  index?: number;
}

const ServiceCard = ({ title, description, icon: Icon, image, href, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={href}
        className="group block service-card h-full"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

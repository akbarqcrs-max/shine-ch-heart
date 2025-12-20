import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime?: string;
  href: string;
  featured?: boolean;
  index?: number;
}

const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  date, 
  category, 
  readTime = "5 min read",
  href,
  featured = false,
  index = 0 
}: NewsCardProps) => {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group"
      >
        <Link to={href} className="block news-card h-full lg:grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 lg:h-full overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <h3 className="font-heading text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {excerpt}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium">
              <span>Read full story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={href} className="block news-card h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;

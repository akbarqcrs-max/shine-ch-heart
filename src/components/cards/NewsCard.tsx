import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime?: string;
  href: string;
  featured?: boolean;
  index?: number;
  onClick?: () => void;
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
  index = 0,
  onClick
}: NewsCardProps) => {
  const CardWrapper = onClick ? 'div' : Link;
  const wrapperProps = onClick ? { onClick, className: "cursor-pointer" } : { to: href };

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group h-full"
      >
        <CardWrapper {...wrapperProps} className="block news-card h-full lg:grid lg:grid-cols-2 gap-0 border border-border/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-card">
          {/* Image */}
          <div className="relative h-64 lg:h-auto overflow-hidden bg-black/5">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-sm">
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-10 flex flex-col justify-center">
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

            <h3 className="font-heading text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
              {excerpt}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium mt-auto">
              <span>Read full story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardWrapper>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <CardWrapper {...wrapperProps} className="block news-card h-full bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-black/5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
            {excerpt}
          </p>

          <div className="mt-auto flex items-center text-primary text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Read more <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </CardWrapper>
    </motion.article>
  );
};

export default NewsCard;

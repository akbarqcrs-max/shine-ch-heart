import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { name: string; href?: string }[];
  image?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, description, breadcrumbs, image, children }: PageHeaderProps) => {
  return (
    <section className="page-header pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            {/* Breadcrumbs */}
            {breadcrumbs && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
              >
                <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {crumb.href ? (
                      <Link to={crumb.href} className="hover:text-primary transition-colors">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-primary font-medium">{crumb.name}</span>
                    )}
                  </div>
                ))}
              </motion.nav>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                {description}
              </motion.p>
            )}

            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8"
              >
                {children}
              </motion.div>
            )}
          </div>

          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

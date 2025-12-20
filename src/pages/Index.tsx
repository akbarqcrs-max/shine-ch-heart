import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  HandHeart, 
  BookOpen, 
  Sparkles, 
  Newspaper, 
  MessageCircle,
  Phone,
  ArrowRight,
  Play,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/cards/ServiceCard";

// Import images
import heroImage from "@/assets/hero-image.jpg";
import whoWeAreImg from "@/assets/who-we-are.jpg";
import whatWeDoImg from "@/assets/what-we-do.jpg";
import aboutCancerImg from "@/assets/about-cancer.jpg";
import storiesHopeImg from "@/assets/stories-hope.jpg";
import newsUpdatesImg from "@/assets/news-updates.jpg";
import contactImg from "@/assets/contact.jpg";

const services = [
  {
    title: "Who We Are",
    description: "Learn about our mission, vision, and the dedicated team working tirelessly to support those affected by cancer.",
    icon: Users,
    image: whoWeAreImg,
    href: "/who-we-are",
  },
  {
    title: "What We Do",
    description: "Discover our comprehensive range of services including patient support, counseling, financial assistance, and community programs.",
    icon: HandHeart,
    image: whatWeDoImg,
    href: "/what-we-do",
  },
  {
    title: "All About Cancer",
    description: "Access valuable information about cancer types, prevention, treatment options, and resources to help you understand and fight cancer.",
    icon: BookOpen,
    image: aboutCancerImg,
    href: "/about-cancer",
  },
  {
    title: "Stories of Hope",
    description: "Read inspiring stories from cancer survivors and their families. Their journeys of courage and resilience will inspire you.",
    icon: Sparkles,
    image: storiesHopeImg,
    href: "/stories-of-hope",
  },
  {
    title: "News & Updates",
    description: "Stay informed with the latest news, events, research breakthroughs, and updates from CH Center and the cancer community.",
    icon: Newspaper,
    image: newsUpdatesImg,
    href: "/news-updates",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team. We're here to help, answer questions, and provide the support you need.",
    icon: MessageCircle,
    image: contactImg,
    href: "/contact",
  },
];

const stats = [
  { number: "10,000+", label: "Patients Supported" },
  { number: "15+", label: "Years of Service" },
  { number: "500+", label: "Volunteers" },
  { number: "50+", label: "Programs" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center pt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                <Heart className="w-4 h-4 fill-primary" />
                Serving the community since 2009
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-foreground">Caring for families with a </span>
                <span className="text-gradient-primary">community of support</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                When someone faces cancer, family stays. And we stay with them. 
                CH Center provides comprehensive support, care, and hope to those 
                affected by cancer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="gap-2">
                  Get Support
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Play className="w-4 h-4" />
                  Watch Our Story
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Certified Non-Profit</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main circular image like reference */}
                <div className="aspect-square max-w-md mx-auto lg:max-w-none lg:aspect-[4/5] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Caring healthcare professional with patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-3xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-section-dark">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Everything you need for </span>
              <span className="text-gradient-primary">hope and healing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Comprehensive support services designed to help patients and families 
              navigate their cancer journey with dignity and hope.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Join Us in Making a Difference
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/90 text-lg mb-8"
            >
              Your support can change lives. Whether through donations, volunteering, 
              or spreading awareness, every contribution matters.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" variant="secondary" className="gap-2">
                <Heart className="w-4 h-4" />
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
                Become a Volunteer
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

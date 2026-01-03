import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Users, HandHeart, BookOpen, Sparkles, Newspaper, MessageCircle, Phone, ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/cards/ServiceCard";
import BuildingHub from "@/components/sections/BuildingHub";

// Import images
import heroImage from "@/assets/hero-image.jpg";
import whoWeAreImg from "@/assets/who-we-are.jpg";
import whatWeDoImg from "@/assets/what-we-do.jpg";
import aboutCancerImg from "@/assets/about-cancer.jpg";
import storiesHopeImg from "@/assets/stories-hope.jpg";
import newsUpdatesImg from "@/assets/news-updates.jpg";
import contactImg from "@/assets/contact.jpg";
import luluLogo from "@/assets/partners/lulu.png";
const services = [{
  title: "Who We Are",
  description: "Learn about our mission, vision, and the dedicated team working tirelessly to support those affected by cancer.",
  icon: Users,
  image: whoWeAreImg,
  href: "/who-we-are"
}, {
  title: "What We Do",
  description: "Discover our comprehensive range of services including patient support, counseling, financial assistance, and community programs.",
  icon: HandHeart,
  image: whatWeDoImg,
  href: "/what-we-do"
}, {
  title: "All About Cancer",
  description: "Access valuable information about cancer types, prevention, treatment options, and resources to help you understand and fight cancer.",
  icon: BookOpen,
  image: aboutCancerImg,
  href: "/about-cancer"
}];
const stats = [{
  number: "10,000+",
  label: "Patients Supported"
}, {
  number: "15+",
  label: "Years of Service"
}, {
  number: "500+",
  label: "Volunteers"
}, {
  number: "50+",
  label: "Programs"
}];
const Index = () => {
  const navigate = useNavigate();

  return <Layout>
    {/* Hero Section */}
    <section className="hero-section min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Heart className="w-4 h-4 fill-primary" />
              Serving the community since 2009
            </motion.div>

            <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Caring for families with a </span>
              <span className="text-gradient-primary">community of support</span>
            </motion.h1>

            <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              When someone faces cancer, family stays. And we stay with them.
              CH Center provides comprehensive support, care, and hope to those
              affected by cancer.
            </motion.p>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="flex flex-wrap gap-4">
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
            <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="flex items-center gap-6 pt-4">
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
          <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative">
            <div className="relative">
              {/* Main circular image like reference */}
              <div className="aspect-square max-w-md mx-auto lg:max-w-none lg:aspect-[4/5] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Caring healthcare professional with patient" className="w-full h-full object-cover" />
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
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="text-center">
            <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-primary-foreground/80 text-sm">
              {stat.label}
            </div>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Building Details Section */}
    <BuildingHub />

    {/* Services Section */}
    <section className="py-20 lg:py-[3px]">
      <div className="container-custom py-[55px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </motion.span>
          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Everything you need for </span>
            <span className="text-gradient-primary">hope and healing</span>
          </motion.h2>
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-muted-foreground text-lg">
            Comprehensive support services designed to help patients and families
            navigate their cancer journey with dignity and hope.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
        </div>
      </div>
    </section>

    {/* Stories of Hope Section */}
    <section className="py-20 bg-section-alt lg:py-[3px]">
      <div className="container-custom py-[55px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Inspiration
          </motion.span>
          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Stories of </span>
            <span className="text-gradient-primary">Hope</span>
          </motion.h2>
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-muted-foreground text-lg">
            Real stories from real people. Witness the strength, resilience, and courage of our community.
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: "Finding Light in Darkness",
            desc: "Sarah's journey through treatment and how she found strength in community support.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop"
          }, {
            title: "A Second Chance",
            desc: "After a difficult diagnosis, Michael focused on what matters most: family and faith.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop"
          }, {
            title: "Stronger Together",
            desc: "The Roberts family shares their experience of navigating care as a united front.",
            image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop"
          }].map((story, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} onClick={() => navigate('/stories-of-hope')} className="group relative overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-3">
                  Survivor Story
                </span>
                <h3 className="font-heading text-xl font-bold text-white mb-2 line-clamp-2">
                  {story.title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {story.desc}
              </p>
              <Button variant="link" className="p-0 h-auto gap-2 group/btn">
                Read Full Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Risk, Prevention and Screening Section */}
    <section className="py-20 lg:py-[55px]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Prevention
          </motion.span>
          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Risk, Prevention </span>
            <span className="text-gradient-primary">& Screening</span>
          </motion.h2>
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-muted-foreground text-lg">
            Early detection saves lives. Learn about risk factors and the importance of regular screenings.
          </motion.p>
        </div>

        {/* Risk & Prevention Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: "Cancer Screenings",
            desc: "Regular screenings can detect cancer early when it's most treatable. Find out which screenings are right for you.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
            icon: CheckCircle
          }, {
            title: "Risk Factors",
            desc: "Understand the genetic, environmental, and lifestyle factors that may increase your risk of developing cancer.",
            image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?w=800&h=600&fit=crop",
            icon: Users
          }, {
            title: "Prevention Tips",
            desc: "Simple lifestyle changes can make a big difference. Explore actionable tips for a healthier, cancer-free life.",
            image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
            icon: Heart
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group relative overflow-hidden rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="aspect-video overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <Button variant="link" className="p-0 h-auto gap-2 text-primary group-hover:text-primary/80">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-20 lg:py-[55px]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground block">Our</span>
              <span className="text-gradient-primary block">partners</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Over 80 partners drive long-term and measurable changes in cancer control for the benefit of the global cancer community.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View all partners
            </Button>
          </div>

          {/* Right Logos */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[{
                name: "LuLu",
                logo: luluLogo
              }].map((partner) => (
                <div key={partner.name} className="flex justify-center items-center h-32 px-4 bg-muted/30 rounded-lg border border-border/50">
                  <img src={partner.logo} alt={partner.name} className="max-h-24 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Us in Making a Difference
          </motion.h2>
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="text-primary-foreground/90 text-lg mb-8">
            Your support can change lives. Whether through donations, volunteering,
            or spreading awareness, every contribution matters.
          </motion.p>
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="flex flex-wrap justify-center gap-4">
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
  </Layout>;
};
export default Index;
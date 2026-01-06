import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Users, HandHeart, BookOpen, Sparkles, Newspaper, MessageCircle, Phone, ArrowRight, Play, CheckCircle, Stethoscope, Ambulance, Cross, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/cards/ServiceCard";
import BuildingHub from "@/components/sections/BuildingHub";
import NewsCarousel from "@/components/sections/NewsCarousel";

// Import images
import heroImage from "@/assets/hero-main.jpg";
import whoWeAreImg from "@/assets/who-we-are.jpg";
import whatWeDoImg from "@/assets/what-we-do.jpg";
import aboutCancerImg from "@/assets/about-cancer.jpg";
import storiesHopeImg from "@/assets/stories-hope.jpg";
import newsUpdatesImg from "@/assets/news-updates.jpg";
import contactImg from "@/assets/contact.jpg";
import luluLogo from "@/assets/partners/lulu.png";
import riskFactorsImg from "@/assets/risk-factors.jpg";
import serviceMedical from "@/assets/service-medical.jpg";
import serviceAmbulance from "@/assets/service-ambulance.jpg";
import serviceFuneral from "@/assets/service-funeral.jpg";
import serviceVolunteering from "@/assets/service-volunteering.jpg";
const services = [{
  title: "Medical Assistance",
  description: "Comprehensive medical support including consultations, medications, and treatment coordination for those in need.",
  icon: Stethoscope,
  image: serviceMedical,
  href: "/what-we-do"
}, {
  title: "Ambulance Services",
  description: "24/7 emergency ambulance services ensuring swift medical transportation when every second counts.",
  icon: Ambulance,
  image: serviceAmbulance,
  href: "/what-we-do"
}, {
  title: "Funeral Services",
  description: "Dignified funeral arrangements and support for families during their most difficult times.",
  icon: Cross,
  image: serviceFuneral,
  href: "/what-we-do"
}, {
  title: "Volunteering",
  description: "Join our community of dedicated volunteers making a real difference in people's lives.",
  icon: HandHeart,
  image: serviceVolunteering,
  href: "/what-we-do"
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
const Counter = ({
  value
}: {
  value: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  // Parse numeric value and suffix
  const numericPart = value.replace(/[,+]/g, "");
  const suffix = value.match(/[+]$/) ? "+" : "";
  const target = parseInt(numericPart, 10);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => {
    return Math.floor(latest).toLocaleString() + suffix;
  });
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, target, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
};
import sadiqAliThangalImg from "@/assets/testimonials/sadiq-ali-thangal.png";
import pkKunhalikuttyImg from "@/assets/testimonials/pk-kunhalikutty.png";
import drMkMuneerImg from "@/assets/testimonials/dr-mk-muneer.png";

const testimonials = [{
  name: "Sayyid Sadiq Ali Shihab Thangal",
  role: "Panakkad",
  text: "നിർധന രോഗികളെ സഹായിക്കുന്നതിൽ അതുല്യ മാതൃകയാണ് സി.എച്ച് സെന്റർ. റീജിയണൽ കാൻസർ സെന്റർ, ഗവൺമെൻ്റ് മെഡിക്കൽ കോളേജുകൾ ഉൾപ്പെടെ പ്രധാന ആശുപത്രികളിൽ ചികിത്സ തേടി എത്തുന്ന നിർധന രോഗികളുടെ അഭയകേന്ദ്രങ്ങളായി അവ മാറിക്കഴിഞ്ഞു. തൃശൂർ ഗവൺമെൻ്റ് മെഡിക്കൽ കോളേജിനെ ആശ്രയിക്കുന്ന കാൻസർ രോഗികൾക്ക് സൗജന്യ താമസവും ഭക്ഷണവും ഉൾപ്പെടെയുള്ള സൗകര്യങ്ങൾ ഏർപ്പെടുത്തുന്നതിനായി മെഡിക്കൽ കോളേജിന് സമീപം ഒരുക്കുന്ന തൃശൂർ സി.എച്ച് സെൻ്ററിന്റെ നിർമ്മാണം അവസാന ഘട്ടത്തിലാണ്. രോഗങ്ങൾ മൂലം ദുരിതമനുഭവിക്കുന്ന പതിനായിരങ്ങൾക്ക് തണലേകുന്ന ഈ നന്മയിൽ അംഗമാകുവാൻ പ്രത്യേകം താല്പര്യപ്പെടുന്നു.",
  image: sadiqAliThangalImg
}, {
  name: "P.K. Kunhalikutty",
  role: "MLA & National General Secretary, IUML",
  text: "ജീവകാരുണ്യ പ്രവർത്തന രംഗത്ത് മികച്ച സേവനങ്ങളാണ് സി.എച്ച് സെന്ററുകൾ നിർവ്വഹിച്ച് കൊണ്ടിരിക്കുന്നത്. രോഗികൾക്ക് ചികിത്സ, താമസം, മരുന്ന്, ആംബുലൻസ് സൗകര്യങ്ങൾ തുടങ്ങി നിരവധി മേഖലകളിലേക്കാണ് സി.എച്ച് സെന്ററുകൾ വ്യാപിച്ചിട്ടുള്ളത്. ഗവ. മെഡിക്കൽ കോളേജുകൾ ഉൾപ്പെടെയുള്ള പ്രധാന ആശുപത്രികളിൽ ചികിത്സക്കായി എത്തുന്ന രോഗികൾക്ക് ഇത്തരം സഹായങ്ങൾ വലിയ ആശ്വാസം നൽകുന്നുണ്ട്. തൃശൂർ ഗവ. മെഡിക്കൽ കോളേജിനു സമീപം നിർമ്മാണം ആരംഭിച്ച സി.എച്ച് സെന്റർ പണികൾ പൂർത്തിയാകാൻ ഇനി ഏതാനും മാസങ്ങൾ മാത്രം. പാവം കാൻസർ രോഗികൾക്ക് അഭയമാകാനുള്ള സി.എച്ച് സെന്റർ പ്രവർത്തനങ്ങളിൽ എല്ലാവരും പങ്കാളികളാകണമെന്ന് സ്നേഹപൂർവ്വം താൽപ്പര്യപ്പെടുന്നു.",
  image: pkKunhalikuttyImg


}, {
  name: "Dr. M.K. Muneer",
  role: "MLA",
  text: "മെഡിക്കൽ കോളജുകളിലും അതോടൊപ്പം പ്രധാന ആശുപത്രികളിലും എത്തുന്ന നിരാലംബരും നിരാശ്രയരുമായ രോഗികൾക്ക് കാരുണ്യസ്പർശമായി മാറുക എന്ന കർമ്മമാണ് സി.എച്ച് സെന്ററുകൾ കേരളത്തിൽ ഉടനീളം നിർവഹിക്കുന്നത്. തൃശൂരിൽ ആരംഭിച്ചിട്ടുള്ള സി.എച്ച് സെൻ്റർ ഗവൺമെൻ്റ് മെഡിക്കൽ കോളജ് കേന്ദ്രമായി പ്രവർത്തിക്കാനാണ് ലക്ഷ്യമിട്ടിരിക്കുന്നത്. അതോടൊപ്പം മറ്റു ആശുപത്രികളിലെത്തുന്ന രോഗികൾക്ക് സഹായമാവുക എന്നത് കടമയും കർത്തവ്യവുമാണ്. തൃശൂർ മെഡിക്കൽ കോളജിന് സമീപം നിർമ്മാണത്തിലിരിക്കുന്ന സി.എച്ച് സെൻ്റർ ഡിസംബറിൽ പൂർത്തിയാകും. ഇത് എന്നെന്നും പാവപ്പെട്ട രോഗികൾക്ക് ഒരു അത്താണിയായി മാറും എന്ന കാര്യത്തിൽ സംശയമില്ല. മെമ്പർഷിപ്പ് ക്യാമ്പയിനിലൂടെയാണ് ഫണ്ട് സമാഹരിക്കുന്നത്. മെമ്പർഷിപ്പ് എന്ന് പറഞ്ഞാൽ നാം നമ്മുടേതായ ധാർമ്മിക ഉത്തരവാദിത്വ‍ം നിർവഹിക്കുന്നുവെന്ന് മാത്രമാണ്. അതുകൊണ്ട് താങ്കളും പങ്കാളികളാകണമെന്ന് സ്നേഹത്തോടെ താൽപ്പര്യപ്പെടുന്നു.",
  image: drMkMuneerImg
}];
const Index = () => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const previousTestimonial = () => {
    setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, activeTestimonial]);
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
              <div className="aspect-square max-w-md mx-auto lg:max-w-md lg:aspect-[4/5] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Caring healthcare professional with patient" className="w-full h-full object-cover" style={{
                  objectPosition: "center top"
                }} />
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
              <Counter value={stat.number} />
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            title: "HPV Prevention ",
            desc: "Human Papillomavirus can cause 6 types of cancer. But preventing it-and the cancers it causes-is simple.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
            icon: CheckCircle
          }, {
            title: "Stay Away From Tobacco",
            desc: "Let the Great American Smokeout event be your day to start your journey toward a smoke-free life.",
            image: riskFactorsImg,
            icon: Users
          }, {
            title: "Eat Healthy and Get Active",
            desc: "Learn about the benefits of good nutrition, regular physical activity, and staying at a healthy weight.",
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

    {/* Testimonials Section */}
    <section className="py-12 bg-section-alt lg:py-16">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
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
            <span className="text-foreground">What Our </span>
            <span className="text-gradient-primary">Community Says</span>
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
          }} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from those whose lives have been touched by our care and support.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto py-[10px]">
          {/* Left: Rotating Card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-xs mx-auto">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl" style={{
                transform: 'rotate(6deg)'
              }} />

              {/* Main image card */}
              <motion.div key={activeTestimonial} initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} className="relative w-full h-full" style={{
                transform: 'rotate(-6deg)'
              }}>
                <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover rounded-3xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
              </motion.div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <motion.div key={`content-${activeTestimonial}`} initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }}>
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonials[activeTestimonial].text}"
              </p>

              {/* Author Info */}
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-heading text-xl font-bold text-foreground">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button onClick={previousTestimonial} className="w-12 h-12 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2 ml-4">
                {testimonials.map((_, index) => <button key={index} onClick={() => setActiveTestimonial(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* News Carousel */}
    <NewsCarousel />

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
              }].map(partner => <div key={partner.name} className="flex justify-center items-center h-32 px-4 bg-muted/30 rounded-lg border border-border/50">
                <img src={partner.logo} alt={partner.name} className="max-h-24 w-auto object-contain" />
              </div>)}
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
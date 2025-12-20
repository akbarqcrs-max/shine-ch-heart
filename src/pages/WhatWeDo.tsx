import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Wallet, 
  Home, 
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  Megaphone,
  Ambulance,
  Cross,
  UtensilsCrossed,
  Moon,
  HandHeart
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import FeatureCard from "@/components/cards/FeatureCard";
import { Button } from "@/components/ui/button";
import whatWeDoImg from "@/assets/what-we-do.jpg";
import serviceMedical from "@/assets/service-medical.jpg";
import serviceAmbulance from "@/assets/service-ambulance.jpg";
import serviceFuneral from "@/assets/service-funeral.jpg";
import serviceIftar from "@/assets/service-iftar.jpg";
import serviceEid from "@/assets/service-eid.jpg";
import serviceVolunteering from "@/assets/service-volunteering.jpg";

const mainServices = [
  {
    icon: Globe,
    title: "Connect Globally",
    description: "Connect globally through our signature events, community gatherings, and support networks that bring together patients, families, and healthcare professionals.",
    href: "#connect",
    linkText: "Learn more",
  },
  {
    icon: Lightbulb,
    title: "Strengthen Your Knowledge",
    description: "Have a bigger impact in understanding cancer by strengthening your knowledge with our educational resources, workshops, and expert-led seminars.",
    href: "#knowledge",
    linkText: "Learn more",
  },
  {
    icon: Megaphone,
    title: "Amplify Your Voice",
    description: "Amplify your voice in the cancer awareness movement and help advocate for better research funding, patient rights, and healthcare policies.",
    href: "#advocacy",
    linkText: "Learn more",
  },
];

const services = [
  {
    icon: Heart,
    title: "Patient Support Services",
    description: "Comprehensive emotional and practical support for cancer patients throughout their treatment journey.",
    features: ["24/7 Support Hotline", "One-on-One Counseling", "Support Groups", "Care Coordination"],
  },
  {
    icon: Users,
    title: "Family Support Programs",
    description: "Helping families cope with the challenges of a loved one's cancer diagnosis.",
    features: ["Family Counseling", "Caregiver Training", "Children's Programs", "Respite Care"],
  },
  {
    icon: GraduationCap,
    title: "Education & Awareness",
    description: "Empowering communities with knowledge about cancer prevention, early detection, and treatment.",
    features: ["Community Workshops", "School Programs", "Online Resources", "Prevention Campaigns"],
  },
  {
    icon: Wallet,
    title: "Financial Assistance",
    description: "Helping patients and families manage the financial burden of cancer treatment.",
    features: ["Treatment Funding", "Travel Assistance", "Medication Support", "Emergency Aid"],
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Providing comfortable stays for patients traveling for treatment.",
    features: ["Patient Housing", "Family Lodging", "Transport Services", "Meal Programs"],
  },
  {
    icon: Stethoscope,
    title: "Research Initiatives",
    description: "Supporting groundbreaking cancer research to find better treatments and cures.",
    features: ["Research Grants", "Clinical Trials", "Data Collection", "Publication Support"],
  },
];

const memberBenefits = [
  "Access to exclusive events and workshops",
  "Priority enrollment in support programs",
  "Quarterly newsletter with updates and resources",
  "Voting rights in organizational decisions",
  "Network with other members and survivors",
  "Free access to educational materials",
];

const communityServices = [
  {
    title: "Medical Assistance",
    description: "Comprehensive medical support including consultations, medications, and treatment coordination for those in need.",
    image: serviceMedical,
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Ambulance Services",
    description: "24/7 emergency ambulance services ensuring swift medical transportation when every second counts.",
    image: serviceAmbulance,
    icon: Ambulance,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Funeral Services",
    description: "Dignified funeral arrangements and support for families during their most difficult times.",
    image: serviceFuneral,
    icon: Cross,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Iftar Meal",
    description: "Providing nutritious Iftar meals during Ramadan to those fasting, fostering community spirit.",
    image: serviceIftar,
    icon: Moon,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Eid Meal",
    description: "Celebrating Eid with festive meals for families, ensuring everyone can partake in the joy.",
    image: serviceEid,
    icon: UtensilsCrossed,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Volunteering",
    description: "Join our community of dedicated volunteers making a real difference in people's lives.",
    image: serviceVolunteering,
    icon: HandHeart,
    color: "from-pink-500 to-rose-500",
  },
];

const WhatWeDo = () => {
  return (
    <Layout>
      <PageHeader
        title="What We Do"
        description="CH Center provides comprehensive services and programs designed to support cancer patients and their families throughout their journey."
        breadcrumbs={[{ name: "What We Do" }]}
        image={whatWeDoImg}
      />

      {/* Main Services - UICC Style */}
      <section className="py-20 bg-section-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <FeatureCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Community Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
            >
              How We Serve Our Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              From medical emergencies to community celebrations, we're here to support you every step of the way.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group/link cursor-pointer">
                    <span className="group-hover/link:underline">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Gradient Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Benefits
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold mb-6"
            >
              Membership Benefits at a Glance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Join our community and gain access to exclusive resources, support networks, and programs designed to help you on your journey.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {memberBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-section-alt"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 lg:p-10 text-center"
            >
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                Become a Member Today
              </h3>
              <p className="text-primary-foreground/90 mb-8">
                Join thousands of supporters and patients who have found hope and healing through CH Center.
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                Join Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-section-alt">
        <div className="container-custom">
          <div className="text-center mb-16">
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
              className="font-heading text-3xl md:text-4xl font-bold"
            >
              Comprehensive Care & Support
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-10 lg:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Need Support? We're Here for You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8"
            >
              Whether you're a patient, caregiver, or family member, our team is ready to help you find the support you need.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" variant="secondary" className="gap-2">
                Contact Our Support Team
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;

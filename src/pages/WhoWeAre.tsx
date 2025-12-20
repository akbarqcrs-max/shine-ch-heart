import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Briefcase, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import whoWeAreImg from "@/assets/who-we-are.jpg";
import chMuhammadKoyaImg from "@/assets/ch-muhammad-koya.png";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every individual with empathy, understanding, and genuine care.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network where no one faces cancer alone.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to providing the highest quality of care and support services.",
  },
  {
    icon: Briefcase,
    title: "Integrity",
    description: "Operating with transparency, honesty, and accountability in all we do.",
  },
];

const team = [
  { name: "Dr. Sarah Ahmed", role: "Executive Director", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop" },
  { name: "Mohammed Al-Rashid", role: "Medical Director", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop" },
  { name: "Fatima Hassan", role: "Patient Services Lead", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop" },
  { name: "Ahmed Khan", role: "Community Outreach", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
];

const journeyMilestones = [
  { year: "2010", description: "C.H. Centre established in memory of C.H. Muhammad Koya Sahib, beginning operations in Kerala and Thrissur." },
  { year: "2012", description: "Expanded services including free medicines, food assistance, and medical support for underprivileged patients." },
  { year: "2015", description: "Launched ambulance services and blood donation programs to support the community." },
  { year: "2018", description: "Introduced free dialysis, ultrasound scans, and lab tests for patients in need." },
  { year: "2021", description: "Expanded funeral care services and volunteer programs across Kerala." },
  { year: "2024", description: "Began construction of C.H. Centre near Thrissur Medical College for cancer patient accommodation." },
  { year: "2025", description: "Continuing to expand facilities and services for cancer patients and their caregivers." },
];

const WhoWeAre = () => {
  return (
    <Layout>
      <PageHeader
        title="Let's Unite for the C.H. Centre"
        description="C.H. Centre is a charitable organization established in memory of C.H. Muhammad Koya Sahib, serving underprivileged patients since 2010."
        breadcrumbs={[{ name: "Who We Are" }]}
        image={whoWeAreImg}
      />

      {/* Mission, Vision & Core Values Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-section-alt rounded-2xl p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive support and essential services to underprivileged patients 
                and their families, including free medicines, food, medical assistance, ambulance service, 
                blood donation, funeral care, free dialysis, ultrasound scans, lab tests, and 
                accommodation facilities for cancer patients coming for treatment.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-2xl p-8 lg:p-10 text-primary-foreground"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                A community where every underprivileged patient has access to quality healthcare, 
                essential services, and the support they need. With our new C.H. Centre near 
                Thrissur Medical College, we envision providing accommodation and facilities 
                for cancer patients and their caregivers coming for treatment.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-section-alt rounded-2xl p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Core Values</h2>
              <p className="text-muted-foreground leading-relaxed">
                Compassion, community, excellence, and integrity guide everything we do. 
                We approach every individual with empathy and genuine care, building a supportive 
                network where no one faces hardship alone, committed to the highest quality 
                of service with transparency and accountability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline Section */}
      <section className="py-20 lg:py-28 bg-section-alt overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="text-gradient-heading">Our Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Serving communities in Kerala since 2010
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2 origin-top hidden md:block"
            />

            <div className="space-y-12 md:space-y-0">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-background rounded-xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow cursor-pointer group"
                    >
                      <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                        <span className="text-gradient-primary">{milestone.year}</span>
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
                  >
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute w-4 h-4 rounded-full bg-primary/30"
                    />
                  </motion.div>

                  {/* Empty space for opposite side */}
                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-gradient-heading">In Memory of C.H. Muhammad Koya Sahib</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed space-y-4"
            >
              <p>
                C.H. Centre is a charitable organization established in memory of C.H. Muhammad Koya Sahib. 
                Operating in different parts of Kerala and in Thrissur since 2010, we have been dedicated 
                to serving underprivileged patients and their families.
              </p>
              <p>
                We provide numerous services including free medicines, food, medical assistance, 
                volunteer services, ambulance service, blood donation, funeral care, free dialysis, 
                ultrasound scans, lab tests, and much more for those in need.
              </p>
              <p>
                Currently, our construction work is progressing for the C.H. Centre near Thrissur 
                Medical College, aimed at providing accommodation and other essential facilities 
                for cancer patients and their caregivers coming for treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About CH Muhammad Koya Sahib Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image with styled background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <motion.div 
                className="relative group"
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Soft floating orbs effect - mint/cyan tones */}
                <motion.div 
                  className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-cyan-300/40 to-teal-200/30 rounded-full blur-3xl"
                  animate={{ 
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tr from-teal-200/40 to-cyan-300/30 rounded-full blur-3xl"
                  animate={{ 
                    x: [0, -12, 0],
                    y: [0, 8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-1/3 -left-16 w-24 h-24 bg-gradient-to-bl from-green-200/30 to-cyan-200/20 rounded-full blur-2xl"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Main image with clean circular crop */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-2xl scale-125" />
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[3px] border-cyan-400/50 shadow-xl shadow-cyan-200/30 bg-gradient-to-br from-white via-cyan-50 to-teal-50">
                    <img
                      src={chMuhammadKoyaImg}
                      alt="C.H. Muhammad Koya Sahib - Ex-Chief Minister of Kerala"
                      className="w-full h-full object-cover object-top scale-110 transition-transform duration-500 group-hover:scale-115"
                    />
                  </div>
                  
                  {/* Subtle ring effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-cyan-300/40"
                    animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                In Loving Memory
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient-heading">About C.H. Muhammad Koya Sahib</span>
              </h2>
              <p className="text-primary font-medium text-lg mb-6">
                Ex-Chief Minister of Kerala | Served as Home Minister and Education Minister
              </p>
              
              {/* Quote */}
              <div className="relative bg-section-alt rounded-2xl p-6 md:p-8 border border-border/50">
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
                <p className="text-muted-foreground leading-relaxed italic pl-8">
                  "One unmistakable mark of a Great Man," it has been said, "is the power of making 
                  durable impression upon people he meets; a second is to have handled matters in 
                  such a manner that the course of events is continually influenced by what he did."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold"
            >
              What Guides Us Every Day
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-section-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground"
            >
              Meet the People Behind CH Center
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;

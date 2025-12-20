import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import whoWeAreImg from "@/assets/who-we-are.jpg";

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
  { year: "2009", description: "CH Center established in Dubai, UAE with a vision to support cancer patients and their families." },
  { year: "2012", description: "Launched comprehensive patient support programs and expanded community outreach initiatives." },
  { year: "2015", description: "Opened new facilities and introduced specialized counseling services for families." },
  { year: "2018", description: "Received Excellence in Healthcare Support Award for outstanding community service." },
  { year: "2021", description: "Expanded digital services and launched virtual support groups during the pandemic." },
  { year: "2024", description: "Celebrating 15 years of hope, serving over 50,000 patients and families." },
];

const WhoWeAre = () => {
  return (
    <Layout>
      <PageHeader
        title="Who We Are"
        description="CH Center is a dedicated charity organization committed to supporting cancer patients and their families through every step of their journey."
        breadcrumbs={[{ name: "Who We Are" }]}
        image={whoWeAreImg}
      />

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
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
                To provide comprehensive support, care, and resources to individuals and families 
                affected by cancer, empowering them with hope and helping them navigate their 
                journey with dignity. We believe that no one should face cancer alone, and we 
                are committed to being there every step of the way.
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
                A world where every cancer patient has access to quality care, emotional support, 
                and the resources they need to live their best life. We envision a future where 
                cancer no longer means facing uncertainty alone, and where communities come 
                together to support those in need.
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
              Building hope and support since 2009
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
              <span className="text-gradient-heading">Founded on Hope, Built on Compassion</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed space-y-4"
            >
              <p>
                CH Center was established in 2009 by a group of healthcare professionals and 
                cancer survivors who recognized the need for comprehensive support services 
                beyond medical treatment.
              </p>
              <p>
                What started as a small support group has grown into a full-service charity 
                center serving thousands of patients and families across the region. Our 
                journey has been marked by countless stories of courage, resilience, and hope.
              </p>
              <p>
                Today, we continue to expand our services and reach, always guided by our 
                founding principle: that no one should face cancer alone.
              </p>
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

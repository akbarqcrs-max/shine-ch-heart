import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { serviceDetails, getServiceBySlug } from "@/data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/what-we-do">Back to What We Do</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;
  const related = serviceDetails.filter((s) => s.slug !== service.slug).slice(0, 3);
  const isEmail = service.contact.includes("@");

  return (
    <Layout>
      <PageHeader
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { name: "What We Do", href: "/what-we-do" },
          { name: service.title },
        ]}
        image={service.image}
      />

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white shadow-lg`}>
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{service.title}</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              About this service
            </h2>
            {service.longDescription.map((p, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Contact card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg h-fit sticky top-28"
          >
            <h3 className="font-heading text-xl font-bold mb-4">Get in touch</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Reach out anytime — our team is ready to help.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 mb-4">
              {isEmail ? <Mail className="w-5 h-5 text-primary" /> : <Phone className="w-5 h-5 text-primary" />}
              <span className="font-medium">{service.contact}</span>
            </div>
            <Button asChild className="w-full gap-2">
              <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.aside>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-section-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {service.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-md"
              >
                <div className={`font-heading text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights + Process */}
      <section className="py-20">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">What we offer</h3>
            <ul className="space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">How it works</h3>
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-6">
              {service.process.map((p, i) => (
                <div key={p.step} className="relative">
                  <div className={`absolute -left-[42px] w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-sm font-bold ring-4 ring-background`}>
                    {i + 1}
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-1">{p.step}</h4>
                  <p className="text-muted-foreground text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-section-alt">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">Other services</h2>
            <Link to="/what-we-do" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((s, i) => {
              const RIcon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    className="block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all group"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                        <RIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{s.shortDescription}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
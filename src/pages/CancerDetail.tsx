import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Shield, Activity, Stethoscope, Pill } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { cancerDetails, getCancerBySlug } from "@/data/cancerData";

const Section = ({
  icon: Icon,
  title,
  items,
  delay = 0,
}: {
  icon: typeof Shield;
  title: string;
  items: string[];
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const CancerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cancer = slug ? getCancerBySlug(slug) : undefined;

  if (!cancer) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Cancer type not found</h1>
          <Button asChild>
            <Link to="/about-cancer">Back to All About Cancer</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = cancerDetails.filter((c) => c.slug !== cancer.slug).slice(0, 3);

  return (
    <Layout>
      <PageHeader
        title={cancer.name}
        description={cancer.tagline}
        breadcrumbs={[
          { name: "All About Cancer", href: "/about-cancer" },
          { name: cancer.name },
        ]}
        image={cancer.image}
      />

      {/* Overview + Stats */}
      <section className="py-16">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Overview
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Understanding {cancer.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{cancer.overview}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {cancer.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="font-heading text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="py-16 bg-section-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            <Section icon={AlertCircle} title="Symptoms to Watch" items={cancer.symptoms} delay={0} />
            <Section icon={Activity} title="Risk Factors" items={cancer.riskFactors} delay={0.1} />
            <Section icon={Shield} title="Prevention" items={cancer.prevention} delay={0.15} />
            <Section icon={Stethoscope} title="Screening & Detection" items={cancer.screening} delay={0.2} />
            <Section icon={Pill} title="Treatment Options" items={cancer.treatment} delay={0.25} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Explore Other Cancer Types
            </h2>
            <Link to="/about-cancer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/about-cancer/${c.slug}`}
                  className="block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{c.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need guidance? Talk to our team
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Our specialists can help you understand your options and connect you with the right support.
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CancerDetail;
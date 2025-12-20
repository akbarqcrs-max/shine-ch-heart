import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Search, 
  BookOpen, 
  Brain, 
  Heart, 
  Stethoscope, 
  ShieldCheck,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import aboutCancerImg from "@/assets/about-cancer.jpg";

const cancerTypes = [
  "Breast Cancer",
  "Lung Cancer",
  "Prostate Cancer",
  "Colorectal Cancer",
  "Skin Cancer",
  "Leukemia",
  "Lymphoma",
  "Pancreatic Cancer",
  "Ovarian Cancer",
  "Thyroid Cancer",
];

const commonCancers = [
  { name: "Breast Cancer", count: "Most common in women" },
  { name: "Lung Cancer", count: "Leading cause of cancer deaths" },
  { name: "Prostate Cancer", count: "Most common in men" },
  { name: "Colorectal Cancer", count: "Highly preventable" },
  { name: "Skin Cancer", count: "Most preventable" },
];

const resources = [
  {
    icon: BookOpen,
    title: "What Is Cancer?",
    description: "Cancer starts when cells begin to grow out of control. Learn how and why to help you better understand cancer.",
    href: "#what-is-cancer",
  },
  {
    icon: Brain,
    title: "Cancer Causes & Risk Factors",
    description: "Explore the collection of factors that can increase your risk and learn about prevention strategies.",
    href: "#causes",
  },
  {
    icon: Stethoscope,
    title: "Screening & Early Detection",
    description: "Learn about recommended screening tests that can detect cancer early when it's most treatable.",
    href: "#screening",
  },
  {
    icon: Heart,
    title: "Treatment Options",
    description: "Understand the different types of cancer treatments including surgery, chemotherapy, radiation, and more.",
    href: "#treatment",
  },
  {
    icon: ShieldCheck,
    title: "Prevention & Wellness",
    description: "Discover lifestyle changes and preventive measures that can reduce your cancer risk.",
    href: "#prevention",
  },
];

const faqItems = [
  {
    question: "What are the early warning signs of cancer?",
    answer: "Common warning signs include unexplained weight loss, unusual lumps, persistent fatigue, changes in bowel or bladder habits, and wounds that don't heal. However, many cancers have no early symptoms, making regular screening important.",
  },
  {
    question: "How can I reduce my risk of cancer?",
    answer: "You can reduce your risk by not smoking, maintaining a healthy weight, eating a balanced diet, exercising regularly, limiting alcohol, protecting yourself from the sun, and getting recommended vaccinations and screenings.",
  },
  {
    question: "What are the most common types of cancer?",
    answer: "The most common types include breast cancer, lung cancer, prostate cancer, colorectal cancer, and skin cancer. However, cancer can develop in almost any organ or tissue in the body.",
  },
  {
    question: "What should I do if I'm diagnosed with cancer?",
    answer: "Take time to understand your diagnosis, seek a second opinion if needed, learn about your treatment options, and build a support team. CH Center is here to help you every step of the way.",
  },
];

const AboutCancer = () => {
  const [selectedCancer, setSelectedCancer] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <Layout>
      <PageHeader
        title="All About Cancer"
        description="Access comprehensive information about cancer types, prevention, treatment options, and resources to help you understand and fight cancer."
        breadcrumbs={[{ name: "All About Cancer" }]}
        image={aboutCancerImg}
      />

      {/* Cancer Type Finder */}
      <section className="py-16 bg-section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg"
            >
              <h2 className="font-heading text-2xl font-bold mb-4">Find Your Cancer Type</h2>
              <p className="text-muted-foreground mb-6">
                Select a cancer type to learn more about symptoms, treatment options, and support resources.
              </p>
              <div className="space-y-4">
                <Select value={selectedCancer} onValueChange={setSelectedCancer}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Cancer Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {cancerTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(" ", "-")}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="w-full gap-2">
                  Explore Cancer Types
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Most Common */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-6">Most Common Cancers</h2>
              <div className="space-y-3">
                {commonCancers.map((cancer, index) => (
                  <motion.button
                    key={cancer.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full flex items-center justify-between p-4 bg-card rounded-lg hover:bg-primary/5 transition-colors text-left group"
                  >
                    <div>
                      <span className="font-medium text-primary group-hover:underline">{cancer.name}</span>
                      <p className="text-sm text-muted-foreground">{cancer.count}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding Cancer Resources */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Resources
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold mb-6"
            >
              Understanding Cancer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive resources to help you understand cancer, its causes, and how to prevent and treat it.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <resource.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary group-hover:underline">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-3xl md:text-4xl font-bold mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                Find answers to common questions about cancer.
              </motion.p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Have Questions? We're Here to Help
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8"
            >
              Our team of experts is available to answer your questions and provide guidance on your cancer journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" variant="secondary" className="gap-2">
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call Our Helpline
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutCancer;

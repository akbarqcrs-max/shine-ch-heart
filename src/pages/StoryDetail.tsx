import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, Heart, ArrowRight, Facebook, Twitter, Linkedin, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { stories, getStoryBySlug } from "@/data/storiesData";

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? getStoryBySlug(slug) : undefined;

  if (!story) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Story not found</h1>
          <Button asChild>
            <Link to="/stories-of-hope">Back to Stories of Hope</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <Layout>
      <PageHeader
        title={story.title}
        description={story.excerpt}
        breadcrumbs={[
          { name: "Stories of Hope", href: "/stories-of-hope" },
          { name: story.title },
        ]}
      />

      {/* Hero image + meta */}
      <section className="pb-12">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-10"
          >
            <div className="aspect-[16/9]">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Published</p>
                <p className="font-medium text-sm">{story.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Cancer Type</p>
                <p className="font-medium text-sm">{story.cancerType}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium text-sm">{story.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Age at Diagnosis</p>
                <p className="font-medium text-sm">{story.age} years</p>
              </div>
            </div>
          </div>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl mb-12"
          >
            <Quote className="absolute top-4 right-6 w-10 h-10 text-primary/20" />
            <p className="font-heading text-xl md:text-2xl italic leading-relaxed text-foreground">
              "{story.quote}"
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">— {story.title.split(":")[0]}</footer>
          </motion.blockquote>

          {/* Body */}
          <div className="prose prose-lg max-w-none">
            {story.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-muted-foreground text-lg leading-relaxed mb-6"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Milestones */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold mb-8">Journey Milestones</h3>
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              {story.milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[39px] w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  <div className="font-heading font-bold text-primary text-lg">{m.year}</div>
                  <p className="text-muted-foreground">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-16 pt-10 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Share this story:</span>
              <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
            <Button asChild variant="outline">
              <Link to="/stories-of-hope">Back to All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related stories */}
      <section className="py-20 bg-section-alt">
        <div className="container-custom">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10">More Stories of Hope</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/stories-of-hope/${s.slug}`}
                  className="block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground mb-2">{s.date}</p>
                    <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {s.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Read more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StoryDetail;
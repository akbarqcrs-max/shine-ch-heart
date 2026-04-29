import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import StoryCard from "@/components/cards/StoryCard";
import { Button } from "@/components/ui/button";
import storiesHopeImg from "@/assets/stories-hope.jpg";
import { Link } from "react-router-dom";
import { stories as allStories } from "@/data/storiesData";

const featuredStory = allStories[0];
const stories = allStories.slice(1).map((s) => ({
  title: s.title,
  excerpt: s.excerpt,
  image: s.image,
  date: s.date,
  href: `/stories-of-hope/${s.slug}`,
}));

const StoriesOfHope = () => {
  return (
    <Layout>
      <PageHeader
        title="Stories of Hope"
        description="Read inspiring stories from cancer survivors and their families. Their journeys of courage and resilience will inspire and encourage you."
        breadcrumbs={[{ name: "Stories of Hope" }]}
      />

      {/* Featured Story */}
      <section className="py-20">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Featured Story
              </span>
              <p className="text-muted-foreground text-sm mb-2">{featuredStory.date}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {featuredStory.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredStory.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <Button asChild className="gap-2">
                  <Link to={`/stories-of-hope/${featuredStory.slug}`}>Read Full Story</Link>
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-20 bg-section-alt">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold"
            >
              More Inspiring Stories
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={story.title} {...story} index={index} />
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Share Your Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8"
            >
              Your journey could inspire others facing similar challenges. Share your story of hope and healing with our community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" variant="secondary" className="gap-2">
                <Share2 className="w-4 h-4" />
                Submit Your Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StoriesOfHope;

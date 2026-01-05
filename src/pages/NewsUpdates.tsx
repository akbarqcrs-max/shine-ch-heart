import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import NewsCard, { NewsCardProps } from "@/components/cards/NewsCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { featuredNews, news } from "@/data/newsData";
import newsUpdatesImg from "@/assets/news-updates.jpg";

const categories = [
  { id: "all", label: "All" },
  { id: "news", label: "News" },
  { id: "blog", label: "Blog Articles" },
  { id: "events", label: "Events" },
  { id: "resources", label: "Resources" },
];

const upcomingEvents = [
  {
    title: "Annual Charity Gala 2025",
    date: "January 15, 2025",
    location: "Grand Ballroom, Dubai",
    description: "Join us for an evening of celebration and fundraising.",
  },
  {
    title: "Patient Support Group Meeting",
    date: "Every Wednesday",
    location: "CH Center Main Hall",
    description: "Weekly support group for patients and families.",
  },
  {
    title: "Cancer Prevention Workshop",
    date: "January 22, 2025",
    location: "Community Center",
    description: "Learn about lifestyle changes that can reduce cancer risk.",
  },
];

const NewsUpdates = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedNews, setSelectedNews] = useState<NewsCardProps | null>(null);

  const filteredNews = activeCategory === "all"
    ? news
    : news.filter(item => item.category.toLowerCase() === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="News & Updates"
        description="Find all the latest news, blogs, resources, and updates from CH Center and the cancer community."
        breadcrumbs={[{ name: "News & Updates" }]}
        image={newsUpdatesImg}
      />

      {/* Tab Navigation */}
      <section className="py-8 border-b border-border bg-section-alt sticky top-16 z-40">
        <div className="container-custom">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-transparent gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-10"
          >
            Spotlight
          </motion.h2>

          <NewsCard
            {...featuredNews}
            featured
            onClick={() => setSelectedNews(featuredNews)}
          />
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-section-alt">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-10"
          >
            {activeCategory === "all" ? "Latest Updates" : categories.find(c => c.id === activeCategory)?.label}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <NewsCard
                key={item.title}
                {...item}
                index={index}
                onClick={() => setSelectedNews(item)}
              />
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
              Load More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Calendar
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold"
            >
              Upcoming Events
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                <p className="text-sm text-muted-foreground">📍 {event.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/90 text-lg mb-8"
            >
              Subscribe to our newsletter for the latest news, events, and resources delivered to your inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground w-full sm:w-80"
              />
              <Button size="lg" variant="secondary" className="gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      <Dialog open={!!selectedNews} onOpenChange={(open) => !open && setSelectedNews(null)}>
        <DialogContent className="max-w-4xl w-[95vw] overflow-y-auto max-h-[90vh] p-0 gap-0">
          {selectedNews && (
            <>
              <div className="relative w-full overflow-hidden bg-black/5">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-md">
                    {selectedNews.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <DialogHeader>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedNews.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{selectedNews.readTime}</span>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-heading font-bold leading-tight text-left">
                    {selectedNews.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {selectedNews.excerpt}
                  </p>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-muted-foreground">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className="flex justify-end pt-4 border-t border-border">
                  <Button onClick={() => setSelectedNews(null)}>Close</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default NewsUpdates;

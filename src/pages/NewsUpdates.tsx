import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import NewsCard from "@/components/cards/NewsCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import newsUpdatesImg from "@/assets/news-updates.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import whatWeDoImg from "@/assets/what-we-do.jpg";

const categories = [
  { id: "all", label: "All" },
  { id: "news", label: "News" },
  { id: "blog", label: "Blog Articles" },
  { id: "events", label: "Events" },
  { id: "resources", label: "Resources" },
];

const featuredNews = {
  title: "CH Center Launches New Patient Support Initiative",
  excerpt: "We are excited to announce a comprehensive new program designed to provide enhanced support services for cancer patients and their families across the region.",
  image: newsUpdatesImg,
  date: "December 16, 2024",
  category: "News",
  readTime: "5 min read",
  href: "/news-updates/new-initiative",
};

const news = [
  {
    title: "Bridging the Gap: Financing Cancer Care",
    excerpt: "New research highlights the importance of accessible financing options for cancer treatment and how CH Center is helping families.",
    image: whatWeDoImg,
    date: "December 11, 2024",
    category: "Blog",
    readTime: "4 min read",
    href: "/news-updates/financing-cancer-care",
  },
  {
    title: "Community Awareness Walk Success",
    excerpt: "Over 5,000 participants joined our annual cancer awareness walk, raising over $500,000 for patient support programs.",
    image: story4,
    date: "December 7, 2024",
    category: "Events",
    readTime: "3 min read",
    href: "/news-updates/awareness-walk",
  },
  {
    title: "New Research Grant Announcement",
    excerpt: "CH Center awards $1 million in research grants to support innovative cancer treatment studies at local universities.",
    image: story1,
    date: "November 25, 2024",
    category: "News",
    readTime: "5 min read",
    href: "/news-updates/research-grant",
  },
  {
    title: "Volunteer Training Program Begins",
    excerpt: "New volunteer training sessions are now open for registration. Join our team and make a difference in patients' lives.",
    image: story2,
    date: "November 18, 2024",
    category: "Events",
    readTime: "2 min read",
    href: "/news-updates/volunteer-training",
  },
  {
    title: "Understanding Immunotherapy: A Guide",
    excerpt: "A comprehensive guide to understanding immunotherapy treatments and how they're changing cancer care.",
    image: story3,
    date: "November 10, 2024",
    category: "Resources",
    readTime: "8 min read",
    href: "/news-updates/immunotherapy-guide",
  },
  {
    title: "Mental Health Support for Cancer Patients",
    excerpt: "New study emphasizes the importance of mental health support during cancer treatment. Here's what you need to know.",
    image: story4,
    date: "October 28, 2024",
    category: "Blog",
    readTime: "6 min read",
    href: "/news-updates/mental-health-support",
  },
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

          <NewsCard {...featuredNews} featured />
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
              <NewsCard key={item.title} {...item} index={index} />
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
    </Layout>
  );
};

export default NewsUpdates;

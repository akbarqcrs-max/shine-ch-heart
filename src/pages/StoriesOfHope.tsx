import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import StoryCard from "@/components/cards/StoryCard";
import { Button } from "@/components/ui/button";
import storiesHopeImg from "@/assets/stories-hope.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

const featuredStory = {
  title: "Huda's Journey: From Diagnosis to Victory",
  excerpt: "Huda Karam's inspiring journey through her cancer treatment shows the power of community support. Through the support of CH Center's programs, Huda gained the strength and confidence to not only overcome her illness but to become an advocate for other patients.",
  image: story1,
  date: "December 14, 2024",
  author: "CH Center Team",
  fullContent: `
    When Huda Karam was diagnosed with breast cancer in 2022, she felt her world crumbling around her. As a mother of two young children, the diagnosis was not just about her own health – it was about her family's future.

    "The day I received my diagnosis, I couldn't stop thinking about my children," Huda recalls. "Would I be there for their graduations? Their weddings? Those thoughts kept me up at night."

    That's when Huda discovered CH Center. Through our patient support programs, she found a community that understood her fears and provided practical help during her treatment journey.

    Today, Huda is cancer-free and has become a volunteer at CH Center, helping other patients navigate their own journeys with hope and courage.
  `,
};

const stories = [
  {
    title: "Little Maryam Rings the Victory Bell",
    excerpt: "After 18 months of treatment, 6-year-old Maryam rang the victory bell at the hospital, surrounded by the nurses and doctors who helped her fight leukemia.",
    image: story2,
    date: "November 28, 2024",
    href: "/stories-of-hope/maryam",
  },
  {
    title: "A Grandmother's Strength: Fatima's Story",
    excerpt: "At 68, Fatima was diagnosed with colorectal cancer. With the support of her grandchildren and CH Center, she fought back and now enjoys time with her growing family.",
    image: story3,
    date: "October 15, 2024",
    href: "/stories-of-hope/fatima",
  },
  {
    title: "From Patient to Marathon Runner",
    excerpt: "Ahmed completed his first marathon just two years after finishing cancer treatment. His journey from hospital bed to finish line inspires everyone at CH Center.",
    image: story4,
    date: "September 22, 2024",
    href: "/stories-of-hope/ahmed",
  },
  {
    title: "The Power of Community: Sarah's Network",
    excerpt: "When Sarah was diagnosed with ovarian cancer, she found strength in the support group at CH Center. Now she leads the group, helping other women find hope.",
    image: storiesHopeImg,
    date: "August 10, 2024",
    href: "/stories-of-hope/sarah",
  },
  {
    title: "Young Survivor Becomes Cancer Researcher",
    excerpt: "Diagnosed with lymphoma at 15, Omar survived and dedicated his life to cancer research. Now a PhD candidate, he's working on breakthrough treatments.",
    image: story1,
    date: "July 5, 2024",
    href: "/stories-of-hope/omar",
  },
  {
    title: "Mother and Daughter: Fighting Together",
    excerpt: "When both Layla and her daughter were diagnosed with breast cancer within months of each other, they fought side by side with CH Center's support.",
    image: story2,
    date: "June 18, 2024",
    href: "/stories-of-hope/layla",
  },
];

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
                <Button className="gap-2">
                  Read Full Story
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

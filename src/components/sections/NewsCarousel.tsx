import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/newsData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsCarousel = () => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    return (
        <section className="py-20 lg:py-[55px] bg-section-alt">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                        Latest News
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    >
                        <span className="text-foreground">Updates from our </span>
                        <span className="text-gradient-primary">Community</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Stay informed about the latest events, success stories, and announcements from CH Center.
                    </motion.p>
                </div>

                {/* Carousel */}
                <div className="relative px-4 md:px-12">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-4">
                            {news.slice(0, 9).map((item, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                                    <div className="h-full">
                                        <NewsCard
                                            {...item}
                                            index={index}
                                            // Override href to always point to news page as requested
                                            href="/news-updates"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
                        <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
                    </Carousel>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link to="/news-updates">
                        <Button size="lg" variant="outline">
                            View All News
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsCarousel;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import chCenterNightView from "@/assets/ch-center-night-view.jpg";
import chCenterInteriorRoom from "@/assets/ch-center-interior-room.png";
import chCenterExterior2 from "@/assets/ch-center-exterior-2.jpg";
import chCenterExteriorMain from "@/assets/ch-center-exterior-main.jpg";
import chCenterExterior3 from "@/assets/ch-center-exterior-3.jpg";
import chCenterExterior4 from "@/assets/ch-center-exterior-4.jpg";

// Using placeholder images for now, can be replaced with actual building photos
const buildingImages = {
    interior: [
        chCenterInteriorRoom, // Main interior photo
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop", // Hospital hallway/interior
        "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=800&h=600&fit=crop", // Modern room
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=800&fit=crop", // Lobby area
        "https://images.unsplash.com/photo-1516549655169-df83a25883ef?w=800&h=600&fit=crop", // Medical equipment
        "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?w=800&h=600&fit=crop", // Care center
        "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=600&fit=crop", // Window view
    ],
    exterior: [
        chCenterExterior3, // New exterior photo 1
        chCenterExterior4, // New exterior photo 2
    ],
    playrooms: [
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=600&fit=crop", // Kids play area
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=600&fit=crop", // Toys
    ],
    dining: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", // Cafeteria
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop", // Dining table
    ],
    common: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop", // Lounge
        "https://images.unsplash.com/photo-1600508774662-81145260faae?w=800&h=600&fit=crop", // Meeting area
    ],
};

const allImages = [
    ...buildingImages.exterior,
    ...buildingImages.interior,
    ...buildingImages.playrooms,
    ...buildingImages.dining,
    ...buildingImages.common,
];

const galleryData: Record<string, string[]> = {
    all: allImages,
    ...buildingImages,
};

const tabs = [
    { id: "all", label: "ALL", count: allImages.length },
    { id: "exterior", label: "EXTERIOR", count: buildingImages.exterior.length },
    { id: "interior", label: "INTERIOR", count: buildingImages.interior.length },
    { id: "playrooms", label: "PLAYROOMS", count: buildingImages.playrooms.length },
    { id: "dining", label: "DINING AREAS", count: buildingImages.dining.length },
    { id: "common", label: "COMMON AREAS", count: buildingImages.common.length },
];

const BuildingHub = () => {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <section className="py-20 bg-section-alt">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                        Virtual Tour
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    >
                        <span className="text-foreground">Explore our </span>
                        <span className="text-gradient-primary">facilities</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Take a look inside the C.H. Centre. We've designed every space with comfort, healing, and community in mind.
                    </motion.p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-border/50 pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-2 py-1 text-sm md:text-base font-bold uppercase tracking-wider transition-colors ${activeTab === tab.id
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {tab.label}
                            <sup className="ml-1 text-xs">{tab.count}</sup>
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-[17px] left-0 right-0 h-1 bg-primary"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Gallery Content */}
                <div className="min-h-[400px]"> {/* Min height to prevent huge layout shifts */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {galleryData[activeTab].map((img, index) => (
                                <motion.div
                                    key={`${activeTab}-${index}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    className="group relative overflow-hidden rounded-2xl bg-card p-2 shadow-md ring-1 ring-border/50 hover:shadow-2xl hover:ring-primary/30 transition-all duration-500 hover:-translate-y-1"
                                >
                                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                                        <img
                                            src={img}
                                            alt={`${activeTab} view ${index + 1}`}
                                            loading="lazy"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer CTA */}
                <div className="mt-12 text-center">
                    <Button variant="outline" className="gap-2">
                        View Full Gallery <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BuildingHub;

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import eventAwarenessWalk from "@/assets/event-awareness-walk.jpg";
import eventIftarGathering from "@/assets/event-iftar-gathering.jpg";
import eventEidCelebration from "@/assets/event-eid-celebration.jpg";
import eventFundraisingGala from "@/assets/event-fundraising-gala.jpg";
import eventFoodDistribution from "@/assets/event-food-distribution.jpg";

const events = [
  {
    title: "Cancer Awareness Walk",
    description: "Annual community walk raising awareness and funds for cancer research and patient support. Join us for a meaningful morning of solidarity and hope.",
    image: eventAwarenessWalk,
    date: "March 15, 2024",
    time: "7:00 AM - 11:00 AM",
    location: "City Park, Main Entrance",
    category: "Awareness",
  },
  {
    title: "Community Iftar Gathering",
    description: "Bringing our community together during Ramadan to share blessings and strengthen bonds. A special evening of reflection, prayer, and delicious food.",
    image: eventIftarGathering,
    date: "April 5, 2024",
    time: "6:30 PM - 9:00 PM",
    location: "Community Center Hall",
    category: "Community",
  },
  {
    title: "Eid Celebration",
    description: "Joyful festivities celebrating Eid with families, featuring food, activities, and entertainment for all ages.",
    image: eventEidCelebration,
    date: "April 10, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Grand Celebration Grounds",
    category: "Celebration",
  },
  {
    title: "Fundraising Gala",
    description: "Annual charity gala bringing supporters together to raise funds for our programs. An elegant evening of entertainment and giving.",
    image: eventFundraisingGala,
    date: "May 20, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Royal Banquet Hall",
    category: "Fundraising",
  },
  {
    title: "Food Distribution Drive",
    description: "Volunteers distributing essential food packages to families in need across the community. Help us spread kindness.",
    image: eventFoodDistribution,
    date: "Every Saturday",
    time: "9:00 AM - 1:00 PM",
    location: "Various Locations",
    category: "Outreach",
  },
];

const Events = () => {
  return (
    <Layout>
      <PageHeader
        title="Events"
        description="Join us at our community events and be part of the change. Together, we create moments of hope, healing, and celebration."
        image={eventFundraisingGala}
      />

      {/* Events Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Upcoming & Ongoing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From awareness campaigns to community celebrations, our events bring people together for meaningful causes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-muted-foreground mb-8">
              Partner with us to organize community events that make a difference. We welcome collaborations with individuals, organizations, and businesses.
            </p>
            <Button size="lg" className="gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

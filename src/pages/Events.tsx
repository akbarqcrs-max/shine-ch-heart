import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Grid3X3, CalendarDays, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EventsCalendar from "@/components/EventsCalendar";
import eventAwarenessWalk from "@/assets/event-awareness-walk.jpg";
import eventIftarGathering from "@/assets/event-iftar-gathering.jpg";
import eventEidCelebration from "@/assets/event-eid-celebration.jpg";
import eventFundraisingGala from "@/assets/event-fundraising-gala.jpg";
import eventFoodDistribution from "@/assets/event-food-distribution.jpg";
import thrissurEvent1 from "@/assets/events/thrissur-event-1.jpg";
import thrissurEvent2 from "@/assets/events/thrissur-event-2.jpg";
import thrissurEvent3 from "@/assets/events/thrissur-event-3.jpg";
import thrissurEvent4 from "@/assets/events/thrissur-event-4.jpg";
import thrissurEvent5 from "@/assets/events/thrissur-event-5.jpg";
import thrissurEvent6 from "@/assets/events/thrissur-event-6.jpg";
import thrissurEvent7 from "@/assets/events/thrissur-event-7.jpg";
import thrissurEvent8 from "@/assets/events/thrissur-event-8.jpg";
import thrissurEvent9 from "@/assets/events/thrissur-event-9.jpg";
import thrissurEvent10 from "@/assets/events/thrissur-event-10.jpg";
import thrissurEvent11 from "@/assets/events/thrissur-event-11.jpg";
import thrissurEvent12 from "@/assets/events/thrissur-event-12.jpg";
import thrissurEvent13 from "@/assets/events/thrissur-event-13.jpg";
import thrissurEvent14 from "@/assets/events/thrissur-event-14.jpg";
import thrissurEvent15 from "@/assets/events/thrissur-event-15.jpg";
import thrissurEvent16 from "@/assets/events/thrissur-event-16.jpg";
import thrissurEvent17 from "@/assets/events/thrissur-event-17.jpg";
import thrissurEvent18 from "@/assets/events/thrissur-event-18.jpg";
import thrissurEvent19 from "@/assets/events/thrissur-event-19.jpg";
import thrissurEvent20 from "@/assets/events/thrissur-event-20.jpg";
import thrissurEvent21 from "@/assets/events/thrissur-event-21.jpg";
import thrissurEvent22 from "@/assets/events/thrissur-event-22.jpg";
import thrissurEvent23 from "@/assets/events/thrissur-event-23.jpg";
import thrissurEvent24 from "@/assets/events/thrissur-event-24.jpg";
import thrissurEvent25 from "@/assets/events/thrissur-event-25.jpg";
import thrissurEvent26 from "@/assets/events/thrissur-event-26.jpg";
import thrissurEvent27 from "@/assets/events/thrissur-event-27.jpg";
import thrissurEvent28 from "@/assets/events/thrissur-event-28.jpg";
import thrissurEvent29 from "@/assets/events/thrissur-event-29.jpg";
import thrissurEvent30 from "@/assets/events/thrissur-event-30.jpg";
import thrissurEvent31 from "@/assets/events/thrissur-event-31.jpg";
import thrissurEvent32 from "@/assets/events/thrissur-event-32.jpg";
import thrissurEvent33 from "@/assets/events/thrissur-event-33.jpg";
import thrissurEvent34 from "@/assets/events/thrissur-event-34.jpg";
import thrissurEvent35 from "@/assets/events/thrissur-event-35.jpg";
import thrissurEvent36 from "@/assets/events/thrissur-event-36.jpg";
import thrissurEvent37 from "@/assets/events/thrissur-event-37.jpg";


const countries = [
  { value: "all", label: "All Countries" },
  // India
  { value: "india", label: "India" },
  { value: "kerala", label: "Kerala (India)" },
  { value: "tamilnadu", label: "Tamil Nadu (India)" },
  { value: "karnataka", label: "Karnataka (India)" },
  { value: "maharashtra", label: "Maharashtra (India)" },
  { value: "delhi", label: "Delhi (India)" },
  // GCC
  { value: "gcc", label: "GCC" },
  { value: "saudi", label: "Saudi Arabia" },
  { value: "qatar", label: "Qatar" },
  { value: "oman", label: "Oman" },
  { value: "kuwait", label: "Kuwait" },
  { value: "bahrain", label: "Bahrain" },
  // UAE
  { value: "uae", label: "UAE" },
  { value: "abudhabi", label: "Abu Dhabi (UAE)" },
  { value: "dubai", label: "Dubai (UAE)" },
  { value: "sharjah", label: "Sharjah (UAE)" },
  { value: "ajman", label: "Ajman (UAE)" },
  { value: "umm-al-quwain", label: "Umm Al Quwain (UAE)" },
  { value: "ras-al-khaimah", label: "Ras Al Khaimah (UAE)" },
  { value: "fujairah", label: "Fujairah (UAE)" },
];
const events = [
  {
    title: "Cancer Awareness Walk",
    description: "Annual community walk raising awareness and funds for cancer research and patient support. Join us for a meaningful morning of solidarity and hope.",
    image: eventAwarenessWalk,
    date: "March 15, 2024",
    time: "7:00 AM - 11:00 AM",
    location: "City Park, Main Entrance",
    category: "Awareness",
    region: "north",
  },
  {
    title: "Community Iftar Gathering",
    description: "Bringing our community together during Ramadan to share blessings and strengthen bonds. A special evening of reflection, prayer, and delicious food.",
    image: eventIftarGathering,
    date: "April 5, 2024",
    time: "6:30 PM - 9:00 PM",
    location: "Community Center Hall",
    category: "Community",
    region: "central",
  },
  {
    title: "Eid Celebration",
    description: "Joyful festivities celebrating Eid with families, featuring food, activities, and entertainment for all ages.",
    image: eventEidCelebration,
    date: "April 10, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Grand Celebration Grounds",
    category: "Celebration",
    region: "south",
  },
  {
    title: "Fundraising Gala",
    description: "Annual charity gala bringing supporters together to raise funds for our programs. An elegant evening of entertainment and giving.",
    image: eventFundraisingGala,
    date: "May 20, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Royal Banquet Hall",
    category: "Fundraising",
    region: "east",
  },
  {
    title: "Food Distribution Drive",
    description: "Volunteers distributing essential food packages to families in need across the community. Help us spread kindness.",
    image: eventFoodDistribution,
    date: "Every Saturday",
    time: "9:00 AM - 1:00 PM",
    location: "Various Locations",
    category: "Outreach",
    region: "west",
  },
  {
    title: "തൃശ്ശൂർ സി എച്ച് സെന്റർ ഒത്തുചേരൽ",
    description: `കാൻസർ ബാധിച്ച് കീമോതെറാപ്പിയും 
റേഡിയേഷനും നിർവഹിക്കുന്നതിന് വേണ്ടി 
തൃശ്ശൂർ ഗവൺമെന്റ് 
മെഡിക്കൽ കോളജിനെ ആശ്രയിക്കുന്ന 
നിർധനരായ രോഗികൾക്ക് 
സൗജന്യ താമസവും ഭക്ഷണവും നൽകി 
അഭയമാകുന്നതിന് 
മെഡിക്കൽ കോളേജിന് സമീപം 
നിർമ്മാണം നടന്നുകൊണ്ടിരിക്കുന്ന 
സി എച്ച് സെന്റർ  നേരിൽ കാണുന്നതിനും 
മനസ്സ് പങ്കുവെക്കുന്നതിനും 
തൃശ്ശൂർ സി എച്ച് സെന്റർ 
പേട്രൺ അംഗങ്ങൾ ഉൾപ്പെടെ ഏതാനും പേർ 
നിർമ്മാണം പുരോഗമിക്കുന്നകെട്ടിടത്തിൽ
ഒത്തുകൂടിയിരുന്നു.

സി എച്ച് സെന്ററിന് എല്ലാ അർത്ഥത്തിലുമുള്ള 
പിന്തുണ നൽകുന്ന ഫ്ലോറ ഗ്രൂപ്പ് ഡയറക്ടറും 
പേട്രൺ മെമ്പറുമായ ഫിറോസ് കലാം 
ഒത്തുചേരൽ ഉദ്ഘാടനം ചെയ്തു.
ഗ്രൂപ്പ് ഡയറക്ടർമാരായ 
വികെ അബ്ദുൽ ഗഫൂർ,വി കെ അബ്ദുൽസലാം
ഹാഫിള് മുഈനുദ്ദീൻ ബിൻ അബുഹാജി
ലൈഫ് മെമ്പർ വി സനൽകുമാർ 
സി എച്ച് സെന്റർ ജനറൽ സെക്രട്ടറി
പി എം അമീർ, ട്രഷറർ ആർ വി അബ്ദുൽ റഹീം
സെക്രട്ടറിമാരായ പി കെ ഷാഹുൽഹമീദ്
കെ എ ഹാറൂൺ റഷീദ്,
മുസ്ലിം ലീഗ് ജില്ലാ വൈസ് പ്രസിഡണ്ട് 
ആർ എ അബ്ദുൽ മനാഫ്
മുസ്ലിം യൂത്ത് ലീഗ് ജില്ലാ സെക്രട്ടറി
പിജെ ജെഫിക്
എം എസ് എഫ് ജില്ലാ പ്രസിഡണ്ട് 
ആരിഫ് പാലയൂർ എന്നിവർ സംസാരിച്ചു.

മെഡിക്കൽ കോളേജിന് സമീപം 
നാം വില  കൊടുത്തു വാങ്ങിയ 
40 സെന്റ് ഭൂമിയിൽ ആദ്യഘട്ടം എന്ന നിലയിൽ
ഏകദേശം 15,000 ചതുരശ്ര അടിവിസ്തൃതിയിൽ
22 മുറികളും 
അനുബന്ധ സൗകര്യങ്ങളും ഉൾപ്പെടെ 
മൂന്നു കോടി രൂപയിലേറെ ചിലവിൽ
നാം ഒരുക്കുന്ന സി എച്ച് സെന്ററിന്റെ 
നിർമ്മാണ പ്രവർത്തനങ്ങൾ അവസാനഘട്ടത്തിലാണ്.

രോഗം സമ്മാനിച്ച വേദനകളാൽ പ്രയാസപ്പെടുന്ന 
പാവപ്പെട്ട രോഗികൾക്ക് 
സർവ്വശക്തനായ നാഥന്റെ അനുഗ്രഹത്താൽ 
നമുക്കിത് എത്രയും വേഗം തുറന്നു കൊടുക്കണം.

ഈ വലിയ നന്മയിൽ
മനസ്സുകൊണ്ടും സമ്പത്ത് കൊണ്ടും 
ചേർന്ന് നിന്നവർക്കെല്ലാം 
പടച്ചതമ്പുരാൻ അർഹമായ 
പ്രതിഫലം സമ്മാനിക്കട്ടെ..
പ്രാർത്ഥനകളിൽ ഉൾപ്പെടുത്തിയാലും 

സ്നേഹത്തോടെ,
സി എ മുഹമ്മദ് റഷീദ്
പ്രസിഡന്റ് 
തൃശ്ശൂർ സി എച്ച് സെന്റർ

https://www.facebook.com/share/p/17yJZgvLbR/`,
    image: thrissurEvent2,
    gallery: [
      thrissurEvent1, thrissurEvent2, thrissurEvent3, thrissurEvent4, thrissurEvent5,
      thrissurEvent6, thrissurEvent7, thrissurEvent8, thrissurEvent9, thrissurEvent10,
      thrissurEvent11, thrissurEvent12, thrissurEvent13, thrissurEvent14, thrissurEvent15,
      thrissurEvent16, thrissurEvent17, thrissurEvent18, thrissurEvent19, thrissurEvent20,
      thrissurEvent21, thrissurEvent22, thrissurEvent23, thrissurEvent24, thrissurEvent25,
      thrissurEvent26, thrissurEvent27, thrissurEvent28, thrissurEvent29, thrissurEvent30,
      thrissurEvent31, thrissurEvent32, thrissurEvent33, thrissurEvent34, thrissurEvent35,
      thrissurEvent36, thrissurEvent37
    ],
    date: "January 2, 2026",
    time: "Ongoing",
    location: "Thrissur Government Medical College",
    category: "Community",
    region: "kerala",
  },
];

const Events = () => {
  const [viewMode, setViewMode] = useState<"grid" | "calendar">("grid");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredEvents = selectedCountry === "all"
    ? events
    : events.filter(event => event.region === selectedCountry);

  return (
    <Layout>
      <PageHeader
        title="Events"
        description="Join us at our community events and be part of the change. Together, we create moments of hope, healing, and celebration."
        image={eventFundraisingGala}
      />

      {/* Events Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Upcoming & Ongoing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              From awareness campaigns to community celebrations, our events bring people together for meaningful causes.
            </p>
          </motion.div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-[220px]">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "calendar")} className="w-auto">
              <TabsList>
                <TabsTrigger value="grid" className="gap-2">
                  <Grid3X3 className="w-4 h-4" />
                  Grid View
                </TabsTrigger>
                <TabsTrigger value="calendar" className="gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Calendar View
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "calendar")} className="w-full">

            {/* Grid View */}
            <TabsContent value="grid">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.length === 0 && (
                  <div className="col-span-full text-center py-12 text-muted-foreground">
                    No events found in this country.
                  </div>
                )}
                {filteredEvents.map((event, index) => (
                  <EventCard key={event.title} event={event} index={index} />
                ))}
              </div>
            </TabsContent>

            {/* Calendar View */}
            <TabsContent value="calendar">
              <EventsCalendar events={filteredEvents} />
            </TabsContent>
          </Tabs>
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

const EventCard = ({ event, index }: { event: any; index: number }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.gallery.length) % event.gallery.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
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
          {event.gallery && event.gallery.length > 1 && (
            <div className="absolute bottom-4 right-4">
              <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                <ImageIcon className="w-3 h-3" />
                {event.gallery.length} Photos
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 whitespace-pre-line">
            {event.description}
          </p>

          <div className="space-y-2 mb-6 mt-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 group/btn"
              onClick={() => setIsDetailsOpen(true)}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            {event.gallery && event.gallery.length > 0 && (
              <Button
                onClick={() => setIsGalleryOpen(true)}
                className="gap-2 shrink-0 bg-primary/10 hover:bg-primary/20 text-primary border-none"
              >
                <ImageIcon className="w-4 h-4" />
                Gallery
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {isDetailsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsDetailsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-2xl rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <Button
                onClick={() => setIsDetailsOpen(false)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10"
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">{event.title}</h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                {event.description}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-white hover:bg-white/10 z-[110]"
              onClick={() => setIsGalleryOpen(false)}
            >
              <X className="w-8 h-8" />
            </Button>

            <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={event.gallery[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </AnimatePresence>

              {event.gallery.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 text-white hover:bg-white/10 md:-left-12"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 text-white hover:bg-white/10 md:-right-12"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>

                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {event.gallery.map((_: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-primary w-6" : "bg-white/30"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Events;

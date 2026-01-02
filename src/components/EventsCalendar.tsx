import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Event {
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

interface EventsCalendarProps {
  events: Event[];
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventsCalendar = ({ events }: EventsCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
    setSelectedDate(null);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const parseEventDate = (dateStr: string): Date | null => {
    if (dateStr.toLowerCase().includes("every")) return null;
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? null : parsed;
  };

  const getEventsForDate = (day: number): Event[] => {
    const targetDate = new Date(year, month, day);
    return events.filter(event => {
      const eventDate = parseEventDate(event.date);
      if (!eventDate) return false;
      return (
        eventDate.getDate() === targetDate.getDate() &&
        eventDate.getMonth() === targetDate.getMonth() &&
        eventDate.getFullYear() === targetDate.getFullYear()
      );
    });
  };

  const getRecurringEvents = (): Event[] => {
    return events.filter(event => event.date.toLowerCase().includes("every"));
  };

  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (day: number): boolean => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };

  const selectedDayEvents = selectedDate 
    ? getEventsForDate(selectedDate.getDate())
    : [];

  const recurringEvents = getRecurringEvents();

  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-primary/5 p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth("prev")}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h3 className="text-xl md:text-2xl font-bold text-foreground min-w-[200px] text-center">
              {MONTHS[month]} {year}
            </h3>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth("next")}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <Button variant="outline" onClick={goToToday} className="hidden sm:flex">
            Today
          </Button>
        </div>
      </div>

      <div className="lg:flex">
        {/* Calendar Grid */}
        <div className="flex-1 p-6">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map(day => (
              <div
                key={day}
                className="text-center text-sm font-medium text-muted-foreground py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const dayEvents = getEventsForDate(day);
              const hasEvents = dayEvents.length > 0;

              return (
                <motion.button
                  key={day}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDate(new Date(year, month, day))}
                  className={cn(
                    "aspect-square rounded-lg flex flex-col items-center justify-center relative transition-all",
                    "hover:bg-primary/10",
                    isToday(day) && "bg-primary text-primary-foreground hover:bg-primary/90",
                    isSelected(day) && !isToday(day) && "bg-primary/20 ring-2 ring-primary",
                    !isToday(day) && !isSelected(day) && "text-foreground"
                  )}
                >
                  <span className="text-sm md:text-base font-medium">{day}</span>
                  {hasEvents && (
                    <div className="flex gap-0.5 mt-1">
                      {dayEvents.slice(0, 3).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            isToday(day) ? "bg-primary-foreground" : "bg-primary"
                          )}
                        />
                      ))}
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Events Sidebar */}
        <div className="lg:w-80 border-t lg:border-t-0 lg:border-l border-border p-6 bg-muted/30">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-primary" />
            {selectedDate
              ? `Events on ${MONTHS[selectedDate.getMonth()]} ${selectedDate.getDate()}`
              : "Select a date"}
          </h4>

          {selectedDate && selectedDayEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDayEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-4 shadow-sm border border-border"
                >
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                  <h5 className="font-semibold text-foreground mt-2 mb-1">
                    {event.title}
                  </h5>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : selectedDate ? (
            <p className="text-sm text-muted-foreground">No events on this date.</p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Click on a date to see events.
            </p>
          )}

          {/* Recurring Events */}
          {recurringEvents.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                Recurring Events
              </h4>
              <div className="space-y-3">
                {recurringEvents.map(event => (
                  <div
                    key={event.title}
                    className="bg-primary/5 rounded-lg p-3 text-sm"
                  >
                    <span className="font-medium text-foreground">{event.title}</span>
                    <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;

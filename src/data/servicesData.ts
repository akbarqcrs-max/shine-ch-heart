import {
  Stethoscope,
  Ambulance,
  Cross,
  HandHeart,
  UtensilsCrossed,
  Moon,
  LucideIcon,
} from "lucide-react";
import serviceMedical from "@/assets/service-medical.jpg";
import serviceAmbulance from "@/assets/service-ambulance-new.jpg";
import serviceFuneral from "@/assets/service-funeral.jpg";
import serviceIftar from "@/assets/service-iftar.jpg";
import serviceEid from "@/assets/service-eid.jpg";
import serviceVolunteering from "@/assets/service-volunteering.jpg";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  icon: LucideIcon;
  color: string;
  longDescription: string[];
  highlights: string[];
  process: { step: string; description: string }[];
  stats: { label: string; value: string }[];
  contact: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "medical-assistance",
    title: "Medical Assistance",
    shortDescription:
      "Comprehensive medical support including consultations, medications, and treatment coordination.",
    image: serviceMedical,
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-500",
    longDescription: [
      "CH Center's Medical Assistance program ensures that no one is denied quality healthcare due to financial hardship. We work with a network of trusted hospitals, specialists, and pharmacies to coordinate timely care for patients in need.",
      "From initial consultation to ongoing treatment, our team handles paperwork, advocates for patients, and ensures continuity of care across providers. We also subsidize medication costs for chronic and life-threatening conditions.",
    ],
    highlights: [
      "Subsidized specialist consultations",
      "Medication assistance for chronic illness",
      "Coordination with partner hospitals",
      "Pre- and post-surgery support",
      "Cancer treatment financial aid",
    ],
    process: [
      { step: "Apply", description: "Submit a request via our office or website with basic medical and financial details." },
      { step: "Assess", description: "Our medical committee reviews each case within 48 hours." },
      { step: "Coordinate", description: "We connect you with the right specialist and partner facility." },
      { step: "Support", description: "Ongoing case management until recovery." },
    ],
    stats: [
      { label: "Patients supported yearly", value: "1,200+" },
      { label: "Partner hospitals", value: "25" },
      { label: "Average response time", value: "48 hrs" },
    ],
    contact: "+91 487 000 0000",
  },
  {
    slug: "ambulance-services",
    title: "Ambulance Services",
    shortDescription:
      "24/7 emergency ambulance services ensuring swift medical transportation when every second counts.",
    image: serviceAmbulance,
    icon: Ambulance,
    color: "from-red-500 to-orange-500",
    longDescription: [
      "Every second matters in a medical emergency. CH Center operates a fleet of fully equipped ambulances, available 24 hours a day, with trained paramedics and modern life-support equipment.",
      "Our service is offered free of cost or at deeply subsidized rates for those who cannot afford private ambulance fees, ensuring lifesaving transportation is never out of reach.",
    ],
    highlights: [
      "24/7 emergency dispatch",
      "Trained paramedics on board",
      "Advanced life-support equipment",
      "Free service for qualifying cases",
      "Inter-hospital transfers",
    ],
    process: [
      { step: "Call", description: "Dial our 24/7 helpline for immediate dispatch." },
      { step: "Dispatch", description: "Nearest ambulance is sent within minutes." },
      { step: "Onboard care", description: "Paramedics begin care immediately on arrival." },
      { step: "Transport", description: "Patient is taken safely to the chosen facility." },
    ],
    stats: [
      { label: "Calls answered yearly", value: "3,500+" },
      { label: "Average response time", value: "8 min" },
      { label: "Ambulances in fleet", value: "12" },
    ],
    contact: "+91 487 000 0911",
  },
  {
    slug: "funeral-services",
    title: "Funeral Services",
    shortDescription:
      "Dignified funeral arrangements and support for families during their most difficult times.",
    image: serviceFuneral,
    icon: Cross,
    color: "from-purple-500 to-indigo-500",
    longDescription: [
      "Losing a loved one is among life's hardest moments. CH Center provides respectful, dignified funeral services that allow grieving families to focus on what matters most — being together.",
      "We coordinate every detail, from religious rites to logistical arrangements, ensuring that no family faces this moment alone or burdened by costs they cannot bear.",
    ],
    highlights: [
      "Complete funeral arrangement support",
      "Religious-rite coordination",
      "Transportation and burial logistics",
      "Free service for families in need",
      "Bereavement counselling",
    ],
    process: [
      { step: "Notify", description: "Reach out to our 24/7 helpline." },
      { step: "Plan", description: "Our team meets with the family to coordinate arrangements." },
      { step: "Execute", description: "All logistical and religious requirements are managed." },
      { step: "Aftercare", description: "Bereavement support continues after the service." },
    ],
    stats: [
      { label: "Families served yearly", value: "400+" },
      { label: "Available", value: "24/7" },
      { label: "Years of service", value: "20+" },
    ],
    contact: "+91 487 000 0000",
  },
  {
    slug: "iftar-program",
    title: "Iftar Program",
    shortDescription:
      "Bringing communities together through nightly iftar meals during the holy month of Ramadan.",
    image: serviceIftar,
    icon: UtensilsCrossed,
    color: "from-amber-500 to-orange-500",
    longDescription: [
      "Each Ramadan, CH Center organizes nightly iftar gatherings that serve thousands of meals to fasting individuals — patients, families, workers, and travelers alike.",
      "Beyond the meals themselves, our iftar program creates a shared space of community, gratitude, and reflection that strengthens bonds across our diverse society.",
    ],
    highlights: [
      "Nightly iftar throughout Ramadan",
      "Open to all in need",
      "Volunteer-driven service",
      "Community gathering and reflection",
      "Distribution to hospitals and homes",
    ],
    process: [
      { step: "Plan", description: "Menus and logistics finalized weeks before Ramadan." },
      { step: "Prepare", description: "Volunteers cook and pack thousands of meals daily." },
      { step: "Serve", description: "Meals served on-site and delivered to those who can't attend." },
      { step: "Reflect", description: "Community gathers for prayer and connection." },
    ],
    stats: [
      { label: "Meals served per Ramadan", value: "30,000+" },
      { label: "Volunteers each year", value: "200+" },
      { label: "Locations", value: "5" },
    ],
    contact: "+91 487 000 0000",
  },
  {
    slug: "eid-celebrations",
    title: "Eid Celebrations",
    shortDescription:
      "Joyful Eid gatherings and gift distribution for families and children in our community.",
    image: serviceEid,
    icon: Moon,
    color: "from-emerald-500 to-teal-500",
    longDescription: [
      "Eid is a time of joy — and at CH Center, we make sure every family in our community can celebrate with dignity. Our annual Eid program distributes gifts, new clothes, and festive meals to thousands of families.",
      "We pay special attention to orphans, widows, and patients in long-term treatment, ensuring no one feels forgotten on this most joyful of days.",
    ],
    highlights: [
      "Gift distribution for children",
      "New clothes for families in need",
      "Festive community gatherings",
      "Special focus on orphans and widows",
      "Hospital visits with gifts and meals",
    ],
    process: [
      { step: "Identify", description: "Families and individuals in need are identified through our network." },
      { step: "Sponsor", description: "Donors sponsor gift packages." },
      { step: "Distribute", description: "Volunteers deliver gifts and meals across the community." },
      { step: "Celebrate", description: "Community-wide Eid gatherings unite all." },
    ],
    stats: [
      { label: "Families served yearly", value: "2,000+" },
      { label: "Children gifted", value: "5,000+" },
      { label: "Years running", value: "20+" },
    ],
    contact: "+91 487 000 0000",
  },
  {
    slug: "volunteering",
    title: "Volunteering",
    shortDescription:
      "Join our community of dedicated volunteers making a real difference in people's lives.",
    image: serviceVolunteering,
    icon: HandHeart,
    color: "from-pink-500 to-rose-500",
    longDescription: [
      "Volunteers are the lifeblood of CH Center. Whether you can give an hour a week or a full day, your time directly translates into lives changed.",
      "We offer a range of volunteering paths — from medical and patient-support roles to logistics, fundraising, awareness campaigns, and event coordination — so you can contribute in the way that fits you best.",
    ],
    highlights: [
      "Patient companionship visits",
      "Event and program support",
      "Awareness and outreach campaigns",
      "Fundraising and administration",
      "Skill-based volunteering opportunities",
    ],
    process: [
      { step: "Apply", description: "Fill out a short volunteer application." },
      { step: "Onboard", description: "Attend an orientation and training session." },
      { step: "Match", description: "We pair you with roles aligned to your skills and time." },
      { step: "Serve", description: "Begin making a difference in the community." },
    ],
    stats: [
      { label: "Active volunteers", value: "500+" },
      { label: "Volunteer hours yearly", value: "20,000+" },
      { label: "Programs supported", value: "15" },
    ],
    contact: "volunteer@chcenter.org",
  },
];

export const getServiceBySlug = (slug: string) =>
  serviceDetails.find((s) => s.slug === slug);
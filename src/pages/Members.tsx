import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Briefcase, Building2, MapPin, Crown, Heart, Sparkles, Search, LayoutGrid, List as ListIcon, Award, ArrowRight, Mail, Phone } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import whoWeAreImg from "@/assets/who-we-are.jpg"; // Reusing image for now

import advShaheenNavasImg from "@/assets/members/adv-shaheen-navas.png";
import emAshrafKecheriImg from "@/assets/members/em-ashraf-kecheri.png";
import rasheedPudusseryImg from "@/assets/members/rasheed-pudussery.png";
import member4Img from "@/assets/members/member-4.png";
import member5Img from "@/assets/members/member-5.png";
import member6Img from "@/assets/members/member-6.png";
import member7Img from "@/assets/members/member-7.png";
import member8Img from "@/assets/members/member-8.png";
import member9Img from "@/assets/members/member-9.png";
import member10Img from "@/assets/members/member-10.png";
import member11Img from "@/assets/members/member-11.png";
import member12Img from "@/assets/members/member-12.png";
import member13Img from "@/assets/members/member-13.png";
import member14Img from "@/assets/members/member-14.png";
import member15Img from "@/assets/members/member-15.png";
import member16Img from "@/assets/members/member-16.png";
import member17Img from "@/assets/members/member-17.png";
import member18Img from "@/assets/members/member-18.png";
import member19Img from "@/assets/members/member-19.png";
import member20Img from "@/assets/members/member-20.png";
import member21Img from "@/assets/members/member-21.png";
import member22Img from "@/assets/members/member-22.png";
import member23Img from "@/assets/members/member-23.png";
import member24Img from "@/assets/members/member-24.png";
import member25Img from "@/assets/members/member-25.png";
import member26Img from "@/assets/members/member-26.png";
import member27Img from "@/assets/members/member-27.png";
import member28Img from "@/assets/members/member-28.png";
import member29Img from "@/assets/members/member-29.png";
import member30Img from "@/assets/members/member-30.png";
import member31Img from "@/assets/members/member-31.png";
import member32Img from "@/assets/members/member-32.png";
import member33Img from "@/assets/members/member-33.png";
import member34Img from "@/assets/members/member-34.png";
import member35Img from "@/assets/members/member-35.png";
import member36Img from "@/assets/members/member-36.png";
import member37Img from "@/assets/members/member-37.png";
import member38Img from "@/assets/members/member-38.png";
import member39Img from "@/assets/members/member-39.png";
import member40Img from "@/assets/members/member-40.png";
import member41Img from "@/assets/members/member-41.png";
import member42Img from "@/assets/members/member-42.png";
import member43Img from "@/assets/members/member-43.png";
import lifeMember1Img from "@/assets/members/life-member-1.png";
import lifeMember2Img from "@/assets/members/life-member-2.png";
import lifeMember3Img from "@/assets/members/life-member-3.png";
import lifeMember4Img from "@/assets/members/life-member-4.png";
import lifeMember5Img from "@/assets/members/life-member-5.png";
import lifeMember6Img from "@/assets/members/life-member-6.png";
import lifeMember7Img from "@/assets/members/life-member-7.png";
import lifeMember8Img from "@/assets/members/life-member-8.png";
import lifeMember9Img from "@/assets/members/life-member-9.png";
import lifeMember10Img from "@/assets/members/life-member-10.png";
import lifeMember11Img from "@/assets/members/life-member-11.png";
import lifeMember12Img from "@/assets/members/life-member-12.png";
import lifeMember13Img from "@/assets/members/life-member-13.png";
import lifeMember14Img from "@/assets/members/life-member-14.png";
import lifeMember15Img from "@/assets/members/life-member-15.png";
import lifeMember16Img from "@/assets/members/life-member-16.png";
import lifeMember17Img from "@/assets/members/life-member-17.png";
import lifeMember18Img from "@/assets/members/life-member-18.png";
import lifeMember19Img from "@/assets/members/life-member-19.png";
import lifeMember20Img from "@/assets/members/life-member-20.png";
import lifeMember21Img from "@/assets/members/life-member-21.png";
import lifeMember22Img from "@/assets/members/life-member-22.png";
import lifeMember23Img from "@/assets/members/life-member-23.png";
import lifeMember24Img from "@/assets/members/life-member-24.png";
import lifeMember25Img from "@/assets/members/life-member-25.png";
import lifeMember26Img from "@/assets/members/life-member-26.png";
import lifeMember27Img from "@/assets/members/life-member-27.png";
import lifeMember28Img from "@/assets/members/life-member-28.png";

const patronMembers = [
    {
        name: "Adv. Shaheen Navas",
        membershipNo: "P01/21",
        designation: "Advocate",
        organization: "High Court of Kerala",
        place: "Natika, Thrissur",
        image: advShaheenNavasImg
    },
    {
        name: "E.M. Ashraf Kecheri",
        membershipNo: "P02/21",
        designation: "Businessman",
        organization: "Manaly Group",
        place: "Kecheri, Thrissur",
        image: emAshrafKecheriImg
    },
    {
        name: "Rasheed Pudussery",
        membershipNo: "P03/21",
        designation: "Managing Director",
        organization: "Trianze Trading LLC",
        place: "Dubai / Thrissur",
        image: rasheedPudusseryImg
    },
    {
        name: "Patron Member 4",
        membershipNo: "P04/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member4Img
    },
    {
        name: "Patron Member 5",
        membershipNo: "P05/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member5Img
    },
    {
        name: "Patron Member 6",
        membershipNo: "P06/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member6Img
    },
    {
        name: "Patron Member 7",
        membershipNo: "P07/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member7Img
    },
    {
        name: "Patron Member 8",
        membershipNo: "P08/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member8Img
    },
    {
        name: "Patron Member 9",
        membershipNo: "P09/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member9Img
    },
    {
        name: "Patron Member 10",
        membershipNo: "P10/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member10Img
    },
    {
        name: "Patron Member 11",
        membershipNo: "P11/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member11Img
    },
    {
        name: "Patron Member 12",
        membershipNo: "P12/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member12Img
    },
    {
        name: "Patron Member 13",
        membershipNo: "P13/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member13Img
    },
    {
        name: "Patron Member 14",
        membershipNo: "P14/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member14Img
    },
    {
        name: "Patron Member 15",
        membershipNo: "P15/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member15Img
    },
    {
        name: "Patron Member 16",
        membershipNo: "P16/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member16Img
    },
    {
        name: "Patron Member 17",
        membershipNo: "P17/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member17Img
    },
    {
        name: "Patron Member 18",
        membershipNo: "P18/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member18Img
    },
    {
        name: "Patron Member 19",
        membershipNo: "P19/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member19Img
    },
    {
        name: "Patron Member 20",
        membershipNo: "P20/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member20Img
    },
    {
        name: "Patron Member 21",
        membershipNo: "P21/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member21Img
    },
    {
        name: "Patron Member 22",
        membershipNo: "P22/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member22Img
    },
    {
        name: "Patron Member 23",
        membershipNo: "P23/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member23Img
    },
    {
        name: "Patron Member 24",
        membershipNo: "P24/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member24Img
    },
    {
        name: "Patron Member 25",
        membershipNo: "P25/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member25Img
    },
    {
        name: "Patron Member 26",
        membershipNo: "P26/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member26Img
    },
    {
        name: "Patron Member 27",
        membershipNo: "P27/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member27Img
    },
    {
        name: "Patron Member 28",
        membershipNo: "P28/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member28Img
    },
    {
        name: "Patron Member 29",
        membershipNo: "P29/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member29Img
    },
    {
        name: "Patron Member 30",
        membershipNo: "P30/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member30Img
    },
    {
        name: "Patron Member 31",
        membershipNo: "P31/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member31Img
    },
    {
        name: "Patron Member 32",
        membershipNo: "P32/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member32Img
    },
    {
        name: "Patron Member 33",
        membershipNo: "P33/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member33Img
    },
    {
        name: "Patron Member 34",
        membershipNo: "P34/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member34Img
    },
    {
        name: "Patron Member 35",
        membershipNo: "P35/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member35Img
    },
    {
        name: "Patron Member 36",
        membershipNo: "P36/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member36Img
    },
    {
        name: "Patron Member 37",
        membershipNo: "P37/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member37Img
    },
    {
        name: "Patron Member 38",
        membershipNo: "P38/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member38Img
    },
    {
        name: "Patron Member 39",
        membershipNo: "P39/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member39Img
    },
    {
        name: "Patron Member 40",
        membershipNo: "P40/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member40Img
    },
    {
        name: "Patron Member 41",
        membershipNo: "P41/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member41Img
    },
    {
        name: "Patron Member 42",
        membershipNo: "P42/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member42Img
    },
    {
        name: "Patron Member 43",
        membershipNo: "P43/21",
        designation: "Patron Member",
        organization: "CH Centre",
        place: "Thrissur, Kerala",
        image: member43Img
    }
];

const lifeMemberImages = [
    lifeMember1Img, lifeMember2Img, lifeMember3Img, lifeMember4Img, lifeMember5Img,
    lifeMember6Img, lifeMember7Img, lifeMember8Img, lifeMember9Img, lifeMember10Img,
    lifeMember11Img, lifeMember12Img, lifeMember13Img, lifeMember14Img, lifeMember15Img,
    lifeMember16Img, lifeMember17Img, lifeMember18Img, lifeMember19Img, lifeMember20Img,
    lifeMember21Img, lifeMember22Img, lifeMember23Img, lifeMember24Img, lifeMember25Img,
    lifeMember26Img, lifeMember27Img, lifeMember28Img,
];

const lifeMembers = lifeMemberImages.map((img, i) => ({
    name: `Life Member ${i + 1}`,
    membershipNo: `L${String(i + 1).padStart(2, "0")}/21`,
    designation: "Life Member",
    organization: "CH Centre",
    place: "Thrissur, Kerala",
    image: img,
}));

const associateMembers = Array.from({ length: 12 }).map((_, i) => ({
    name: `Associate Member ${i + 1}`,
    membershipNo: `A${String(i + 1).padStart(2, "0")}/21`,
    designation: "Associate Member",
    organization: "CH Centre",
    place: "Thrissur, Kerala",
    image: lifeMemberImages[i % lifeMemberImages.length],
}));

type Member = {
    name: string;
    membershipNo: string;
    designation: string;
    organization: string;
    place: string;
    image: string;
};

const tabs = [
    {
        value: "patron",
        label: "Patron Members",
        icon: Crown,
        accent: "Our Pillars",
        title: "Patron Members",
        description:
            "Our Patron members are the pillars of CH Centre, providing continuous support and guidance to our mission of serving humanity with compassion and care.",
        data: patronMembers,
    },
    {
        value: "life",
        label: "Life Members",
        icon: Heart,
        accent: "Lifetime Support",
        title: "Life Members",
        description:
            "Our Life Members are dedicated patrons who have committed their lifelong support to CH Centre, ensuring the sustainability of our community initiatives.",
        data: lifeMembers,
    },
    {
        value: "associate",
        label: "Associate Members",
        icon: Sparkles,
        accent: "Growing Family",
        title: "Associate Members",
        description:
            "Our Associate Members stand alongside CH Centre, contributing time, expertise, and goodwill to strengthen our community programs every day.",
        data: associateMembers,
    },
];

const MemberCard = ({ member, index }: { member: Member; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: Math.min(index * 0.03, 0.5), duration: 0.4 }}
        className="group relative"
    >
        {/* Gradient glow ring on hover */}
        <div className="absolute -inset-[1px] rounded-[1.25rem] bg-gradient-to-br from-[#0891b2] via-[#0d9488] to-[#22c55e] opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />

        <div className="relative bg-card rounded-[1.2rem] overflow-hidden border border-border/70 shadow-[0_4px_18px_-6px_hsl(var(--foreground)/0.12)] group-hover:shadow-[0_24px_50px_-18px_hsl(var(--primary)/0.35)] group-hover:-translate-y-1.5 transition-all duration-500">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-muted/60 to-muted overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                {/* Bottom gradient for text */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Membership badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur shadow-sm">
                    <Award className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-bold tracking-wider text-primary">{member.membershipNo}</span>
                </div>

                {/* Name + designation overlaid */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="font-heading text-base md:text-[17px] font-bold leading-tight line-clamp-1 drop-shadow">
                        {member.name}
                    </h3>
                    <p className="text-[11px] text-white/85 line-clamp-1 mt-0.5">{member.designation}</p>
                </div>
            </div>

            {/* Bottom info strip */}
            <div className="p-4 space-y-1.5 text-xs text-muted-foreground bg-card">
                <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="line-clamp-1">{member.organization}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="line-clamp-1">{member.place}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const MemberRow = ({ member, index }: { member: Member; index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: Math.min(index * 0.02, 0.4), duration: 0.35 }}
        className="group flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all"
    >
        <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-heading font-bold text-sm sm:text-base truncate group-hover:text-primary transition-colors">
                    {member.name}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold tracking-wide">
                    {member.membershipNo}
                </span>
            </div>
            <div className="mt-1.5 grid sm:grid-cols-3 gap-1 sm:gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 truncate"><Briefcase className="w-3 h-3 text-primary" />{member.designation}</span>
                <span className="flex items-center gap-1.5 truncate"><Building2 className="w-3 h-3 text-primary" />{member.organization}</span>
                <span className="flex items-center gap-1.5 truncate"><MapPin className="w-3 h-3 text-primary" />{member.place}</span>
            </div>
        </div>
    </motion.div>
);

const Members = () => {
    const [activeTab, setActiveTab] = useState("patron");
    const [query, setQuery] = useState("");
    const [view, setView] = useState<"grid" | "list">("grid");
    const active = tabs.find((t) => t.value === activeTab) ?? tabs[0];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return active.data;
        return active.data.filter((m) =>
            [m.name, m.membershipNo, m.designation, m.organization, m.place]
                .join(" ")
                .toLowerCase()
                .includes(q)
        );
    }, [active, query]);

    const totalMembers = patronMembers.length + lifeMembers.length + associateMembers.length;

    return (
        <Layout>
            <PageHeader
                title="Our Members"
                description="Meet the dedicated individuals who make our mission possible."
                breadcrumbs={[{ name: "Members" }]}
                image={whoWeAreImg}
            />

            {/* Stats strip */}
            <section className="relative -mt-10 z-10">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-7 rounded-3xl bg-card border border-border/60 shadow-2xl"
                    >
                        {[
                            { label: "Total Members", value: totalMembers, icon: Sparkles },
                            { label: "Patron Members", value: patronMembers.length, icon: Crown },
                            { label: "Life Members", value: lifeMembers.length, icon: Heart },
                            { label: "Associate Members", value: associateMembers.length, icon: Award },
                        ].map((s) => {
                            const Icon = s.icon;
                            return (
                                <div key={s.label} className="flex items-center gap-3 md:gap-4">
                                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#0891b2] via-[#0d9488] to-[#22c55e] flex items-center justify-center text-white shadow-md">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-heading text-2xl md:text-3xl font-bold leading-none">
                                            <span className="text-gradient-heading">{s.value}+</span>
                                        </div>
                                        <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); setQuery(""); }} className="w-full">
                        {/* Tab triggers */}
                        <div className="flex justify-center mb-10">
                            <TabsList className="h-auto p-1.5 bg-muted/60 backdrop-blur rounded-2xl flex flex-wrap gap-1">
                                {tabs.map((t) => {
                                    const Icon = t.icon;
                                    return (
                                        <TabsTrigger
                                            key={t.value}
                                            value={t.value}
                                            className="gap-2 px-4 sm:px-5 py-2.5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0891b2] data-[state=active]:via-[#0d9488] data-[state=active]:to-[#22c55e] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span className="font-medium">{t.label}</span>
                                            <span className="ml-1 px-2 py-0.5 rounded-full bg-background/40 text-xs font-semibold">
                                                {t.data.length}
                                            </span>
                                        </TabsTrigger>
                                    );
                                })}
                            </TabsList>
                        </div>

                        {/* Animated heading per tab */}
                        <motion.div
                            key={active.value + "-header"}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-center mb-10"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                                {active.accent}
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                <span className="text-gradient-heading">{active.title}</span>
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                {active.description}
                            </p>
                        </motion.div>

                        {/* Toolbar: search + view toggle */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-8 items-stretch sm:items-center justify-between">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={`Search ${active.label.toLowerCase()}...`}
                                    className="pl-10 h-11 rounded-xl bg-card border-border/60"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-muted-foreground hidden sm:inline">
                                    Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {active.data.length}
                                </span>
                                <div className="inline-flex p-1 bg-muted/60 rounded-xl">
                                    <button
                                        onClick={() => setView("grid")}
                                        className={`p-2 rounded-lg transition-all ${view === "grid" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                        aria-label="Grid view"
                                    >
                                        <LayoutGrid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setView("list")}
                                        className={`p-2 rounded-lg transition-all ${view === "list" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                        aria-label="List view"
                                    >
                                        <ListIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {tabs.map((t) => (
                            <TabsContent key={t.value} value={t.value} className="mt-0">
                                {filtered.length > 0 ? (
                                    view === "grid" ? (
                                        <motion.div
                                            key={t.value + "-grid"}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                                        >
                                            {filtered.map((member, index) => (
                                                <MemberCard key={member.membershipNo} member={member} index={index} />
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={t.value + "-list"}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4"
                                        >
                                            {filtered.map((member, index) => (
                                                <MemberRow key={member.membershipNo} member={member} index={index} />
                                            ))}
                                        </motion.div>
                                    )
                                ) : (
                                    <div className="text-center py-20">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center">
                                            <Search className="w-7 h-7 text-muted-foreground" />
                                        </div>
                                        <p className="text-muted-foreground">No members found matching "{query}"</p>
                                    </div>
                                )}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* CTA: Become a Member */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2] via-[#0d9488] to-[#22c55e]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0, transparent 40%)" }} />
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

                <div className="container relative mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-5xl mx-auto text-center text-white"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium tracking-wide">Join the movement</span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Want to become a member?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                            Connect with our team and be part of a community uniting for the CH Centre. Together we can make care, support and hope reach every life that needs it.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Button asChild size="lg" className="bg-white text-[#0d9488] hover:bg-white/95 hover:scale-[1.03] shadow-xl h-12 px-7 rounded-xl font-semibold">
                                <Link to="/contact">
                                    Connect with our team
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white h-12 px-7 rounded-xl font-semibold">
                                <a href="mailto:info@chcentre.org">
                                    <Mail className="w-4 h-4" />
                                    Email us
                                </a>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                            {[
                                { icon: Crown, title: "Patron Member", desc: "Lead with vision and impact" },
                                { icon: Heart, title: "Life Member", desc: "A lifelong commitment to care" },
                                { icon: Award, title: "Associate Member", desc: "Support the mission together" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                                    className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
                                >
                                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-white/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-white/80">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Members;

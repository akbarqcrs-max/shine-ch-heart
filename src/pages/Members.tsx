import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Briefcase, Building2, MapPin, Crown, Heart, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: Math.min(index * 0.04, 0.5), duration: 0.4 }}
        className="group bg-card rounded-2xl overflow-hidden shadow-md border border-border/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-semibold tracking-wider text-primary">
                {member.membershipNo}
            </div>
        </div>
        <div className="p-5 space-y-3">
            <h3 className="font-heading text-base font-bold leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                {member.name}
            </h3>
            <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="line-clamp-1">{member.designation}</span>
                </div>
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

const Members = () => {
    return (
        <Layout>
            <PageHeader
                title="Our Members"
                description="Meet the dedicated individuals who make our mission possible."
                breadcrumbs={[{ name: "Members" }]}
                image={whoWeAreImg}
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        >
                            <Users className="w-8 h-8 text-primary" />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                        >
                            Our Pillars
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                        >
                            <span className="text-gradient-heading">Patron Members</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            Our Patron members are the pillars of CH Centre, providing continuous support and guidance to our mission of serving humanity through compassion and care.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                        {members.map((member, index) => (
                            <motion.div
                                key={member.membershipNo}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-section-alt">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        >
                            <Users className="w-8 h-8 text-primary" />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
                        >
                            Lifetime Support
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                        >
                            <span className="text-gradient-heading">Life Members</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            Our Life Members are dedicated patrons who have committed their lifelong support to the CH Centre, ensuring the sustainability of our community initiatives and services.
                        </motion.p>
                    </div>

                    {lifeMembers.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                            {lifeMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name || `Life Member ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            Coming Soon
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Members;

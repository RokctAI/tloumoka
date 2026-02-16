"use client";

import { motion } from "framer-motion";
import { HardHat, Shield, UserCheck, Eye } from "lucide-react";
import Image from "next/image";

export default function PpePage() {
    const categories = [
        {
            title: "Woman Tailored Worksuits",
            description: "Designed for comfort, safety, and fit. Empowering women in mining with workwear that actually fits.",
            icon: <UserCheck className="w-8 h-8 text-orange-500" />,
            highlight: true,
        },
        {
            title: "Head Protection",
            description: "Industry-standard hard hats and safety helmets for maximum impact protection.",
            icon: <HardHat className="w-8 h-8 text-orange-500" />,
        },
        {
            title: "Eye & Ear Protection",
            description: "Safety glasses and earplugs designed for high-noise and hazardous environments.",
            icon: <Eye className="w-8 h-8 text-orange-500" />,
        },
        {
            title: "General PPE",
            description: "Gloves, safety boots, and reflective vests for complete personal safety.",
            icon: <Shield className="w-8 h-8 text-orange-500" />,
        },
    ];

    return (
        <div className="bg-zinc-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Safety <span className="text-orange-500">First</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            High-quality Personal Protective Equipment designed for the modern workforce.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured: Women's PPE */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/30 border-y border-zinc-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold border border-orange-500/20">
                            NEW ARRIVAL
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Woman Tailored Worksuits
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            We understand that one size does not fit all. Tloumoka Trading finds a gap in the market by supplying mining worksuits specifically tailored for women.
                            Move with freedom, work with confidence, and stay safe with gear designed for your physique.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-zinc-300">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                Tailored fit for comfort and mobility
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                Durable, industry-grade materials
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                Available in various sizes and specifications
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full relative h-[400px] bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 flex items-center justify-center">
                        {/* Placeholder for Image */}
                        <div className="text-center p-8">
                            <UserCheck className="w-24 h-24 text-zinc-600 mx-auto mb-4" />
                            <p className="text-zinc-500">Image of Woman Worksuit</p>
                            <p className="text-xs text-zinc-600 mt-2">(Use generate_image to create specialized asset)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PPE Categories */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Catalog</h2>
                        <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.filter(c => !c.highlight).map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 group"
                            >
                                <div className="mb-6 p-4 rounded-xl bg-orange-500/10 w-fit group-hover:bg-orange-500/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{category.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-zinc-900 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Equip your team with the best</h2>
                    <p className="text-zinc-400 mb-8">
                        Contact us for bulk orders and specialized sizing requirements.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-8 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
                    >
                        Request Catalog
                    </a>
                </div>
            </section>
        </div>
    );
}

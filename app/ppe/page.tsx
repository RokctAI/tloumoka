"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HardHat, Shield, UserCheck, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PpePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className="bg-zinc-950 min-h-screen selection:bg-orange-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Parallax BG */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/images/ppe-hero.webp')] bg-cover bg-center opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-9xl font-bold text-white mb-6 tracking-tighter uppercase">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Collection</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light tracking-wide">
                            Engineering safety meets tailored precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Feature Section: Woman Tailored Worksuit (Sticky/Scrollytelling) */}
            <section className="relative h-[200vh]">
                <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 h-full relative">
                        <div className="absolute inset-0 bg-zinc-900">
                            {/* Fallback & Image */}
                            <div className="w-full h-full bg-[url('/images/woman-worksuit.webp')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-zinc-950 p-8 md:p-16">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-orange-500 text-sm font-bold tracking-widest uppercase border-b border-orange-500 pb-1">New Arrival</span>
                                <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
                                    The Tailored <br />Fit
                                </h2>
                                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                                    Breaking the mold of "unisex" safety wear. Our worksuits are engineered specifically for the female form in mining and heavy industry.
                                </p>
                            </motion.div>

                            <ul className="space-y-6">
                                {['Ergonomic Design', 'Premium Breathable Fabric', 'High-Visibility Standards'].map((item, i) => (
                                    <motion.li
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        key={i}
                                        className="flex items-center gap-4 text-white text-lg font-light"
                                    >
                                        <span className="w-12 h-[1px] bg-orange-500" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Catalog Grid */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-24 border-b border-zinc-800 pb-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-white">Essential Gear</h2>
                        <p className="hidden md:block text-zinc-500 text-right">Premium protection <br />for every hazard.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {[
                            { title: "Head Protection", icon: <HardHat className="w-8 h-8" />, desc: "Impact resistant, lightweight composite materials." },
                            { title: "Eye & Ear", icon: <Eye className="w-8 h-8" />, desc: "Anti-fog optics and high-decibel noise cancellation." },
                            { title: "Hand Safety", icon: <Shield className="w-8 h-8" />, desc: "Cut-resistant fabrics with maximum dexterity." },
                            { title: "Footwear", icon: <UserCheck className="w-8 h-8" />, desc: "Steel toe caps with orthopaedic support soles." }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-zinc-900 rounded-sm mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-zinc-800 group-hover:bg-zinc-800/80 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-zinc-950 p-6 rounded-full border border-zinc-800 text-orange-500 group-hover:scale-110 transition-transform duration-500">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                                        <p className="text-zinc-500 max-w-sm">{item.desc}</p>
                                    </div>
                                    <ArrowRight className="text-zinc-700 group-hover:text-orange-500 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

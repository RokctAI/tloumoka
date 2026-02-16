"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, Cog, Briefcase, Zap, ArrowDown } from "lucide-react";

export default function EngineeringPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    const services = [
        {
            title: "Hydraulic Systems",
            id: "01",
            description: "Complete overhaul and precision repair of hydraulic cylinders, pumps, and motors. We restore efficiency to factory standards.",
            icon: <Wrench className="w-6 h-6" />,
        },
        {
            title: "Plant Maintenance",
            id: "02",
            description: "Scheduled and breakdown maintenance for mining plants. Our teams ensure maximum uptime and operational continuity.",
            icon: <Cog className="w-6 h-6" />,
        },
        {
            title: "Fabrication",
            id: "03",
            description: "Custom steel fabrication and structural engineering repairs. Certified welding and engaging structural integrity.",
            icon: <Zap className="w-6 h-6" />,
        },
        {
            title: "Project Mgmt",
            id: "04",
            description: "Turnkey project management from scope definition to commissioning. Delivered on time, within safety parameters.",
            icon: <Briefcase className="w-6 h-6" />,
        },
    ];

    return (
        <div ref={containerRef} className="bg-zinc-950 min-h-screen selection:bg-blue-500 selection:text-white">

            {/* Hero Section (Split for Portrait) */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row pt-20">
                {/* Text Side */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 z-10 bg-zinc-900 border-r border-zinc-800">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "circOut" }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-[1px] bg-white" />
                                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Est. 2024</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tighter uppercase mb-8">
                                Heavy<br /><span className="text-zinc-500">Industry</span>
                            </h1>
                            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                                Delivering precision hydraulic repairs and robust plant maintenance solutions for the mining and agricultural sectors.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full overflow-hidden">
                    <motion.div
                        style={{ scale: scale }}
                        className="absolute inset-0 bg-[url('/images/engineering-hero.webp')] bg-cover bg-center opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#0a0a0a_25%,transparent_25%,transparent_75%,#0a0a0a_75%,#0a0a0a),linear-gradient(45deg,#0a0a0a_25%,transparent_25%,transparent_75%,#0a0a0a_75%,#0a0a0a)] bg-[length:4px_4px] opacity-20 pointer-events-none" />
                </div>
            </section>


            {/* Services "Blueprint" Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.05]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Capabilities</h2>
                        <div className="w-full h-px bg-zinc-800" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group border-l border-zinc-800 pl-8 hover:border-blue-500 transition-colors duration-500"
                            >
                                <span className="block text-4xl font-bold text-zinc-800 mb-6 font-mono group-hover:text-blue-500/50 transition-colors">{service.id}</span>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-wide">{service.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                                    {service.icon}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image / Parallax Split Section (Adapted for Portrait) */}
            <section className="min-h-screen flex flex-col md:flex-row bg-zinc-900 overflow-hidden">
                {/* Text Side */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-zinc-950 z-10">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1 border border-blue-500/50 text-blue-500 rounded-full text-xs font-mono uppercase tracking-widest">
                            Case Study: Hydraulic Overhaul
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                            Precision <br /> in Motion
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                            Our state-of-the-art workshops are equipped to handle the most demanding hydraulic repairs. From re-chroming to pressure testing, we ensure zero-defect delivery.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-3 text-white border-b border-blue-500 pb-1 hover:text-blue-500 transition-colors uppercase tracking-widest text-sm font-bold">
                            Request Assessment <ArrowDown className="-rotate-90 w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Image Side (Portrait Friendly) */}
                <div className="relative w-full md:w-1/2 min-h-[60vh] md:min-h-screen">
                    <div className="absolute inset-0 bg-[url('/images/hydraulic-repair.webp')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-950/80 md:to-zinc-950/20" />
                </div>
            </section>

        </div >
    );
}

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

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
                <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
                    {/* Fallback pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#0a0a0a_25%,transparent_25%,transparent_75%,#0a0a0a_75%,#0a0a0a),linear-gradient(45deg,#0a0a0a_25%,transparent_25%,transparent_75%,#0a0a0a_75%,#0a0a0a)] bg-[length:20px_20px] opacity-10" />
                    <div className="absolute inset-0 bg-[url('/images/engineering-hero.webp')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                    >
                        <h1 className="text-6xl md:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-800 leading-none tracking-tighter uppercase">
                            Heavy<br />Industry
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-12 flex flex-col items-center gap-4"
                    >
                        <div className="h-24 w-px bg-blue-500/50" />
                        <p className="text-blue-500 text-sm font-mono tracking-widest uppercase">Scroll to Explore</p>
                    </motion.div>
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

            {/* Image / Parallax Strip */}
            <section className="relative h-[80vh] overflow-hidden bg-zinc-900 flex items-center">
                <div className="absolute inset-0 bg-[url('/images/hydraulic-repair.webp')] bg-cover bg-fixed bg-center opacity-30 grayscale hover:grayscale-0 transition-all duration-1000" />
                <div className="relative z-10 w-full px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Precision in Motion</h2>
                    <a href="/contact" className="inline-block px-12 py-4 border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">
                        Request Assessment
                    </a>
                </div>
            </section>

        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Wrench, Cog, Briefcase, Zap } from "lucide-react";

export default function EngineeringPage() {
    const services = [
        {
            title: "Hydraulic Repairs",
            description: "Expert repair and maintenance of hydraulic systems for mining and industrial machinery. We ensure minimal downtime.",
            icon: <Wrench className="w-8 h-8 text-blue-500" />,
        },
        {
            title: "Plant Maintenance",
            description: "Comprehensive plant maintenance services to keep your operations running smoothly and efficiently.",
            icon: <Cog className="w-8 h-8 text-blue-500" />,
        },
        {
            title: "Industrial Cleaning",
            description: "Specialized cleaning services for high-risk industrial environments, maintaining safety and hygiene standards.",
            icon: <Zap className="w-8 h-8 text-blue-500" />,
        },
        {
            title: "Project Management",
            description: "End-to-end management of engineering projects, delivering on time and within budget.",
            icon: <Briefcase className="w-8 h-8 text-blue-500" />,
        },
    ];

    return (
        <div className="bg-zinc-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Engineering <span className="text-blue-500">Excellence</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            Delivering precision hydraulic repairs and robust plant maintenance solutions for the mining and agricultural sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 group"
                            >
                                <div className="mb-6 p-4 rounded-xl bg-blue-500/10 w-fit group-hover:bg-blue-500/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-zinc-900 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to optimize your operations?</h2>
                    <p className="text-zinc-400 mb-8">
                        Contact us today for a consultation or quote on our engineering services.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>
        </div>
    );
}

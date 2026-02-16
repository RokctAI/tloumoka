"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-zinc-950 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Intro */}
                <section className="text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Empowering Industry through <span className="text-orange-500">Diversity</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Tloumoka Trading is a 100% Black Woman-Owned company redefining standards in industrial engineering and safety supply.
                    </motion.p>
                </section>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            To provide high-quality PPE and industrial solutions while empowering women in male-dominated industries. We specialize in Personal Protective Equipment, hydraulic repairs, and plant maintenance services for mining, agriculture, and government sectors.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            Excellence in service delivery with a focus on safety and sustainable solutions. We anticipate client needs and deliver strategic, cost-effective solutions that enhance operational efficiency.
                        </p>
                    </motion.div>
                </div>

                {/* Story */}
                <section className="bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800">
                    <div className="md:flex gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Established with Purpose</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                Tloumoka Trading was founded by a seasoned professional who left her corporate career to create opportunities in the mining industry.
                                <br /><br />
                                As a 100% black woman-owned company, we're committed to delivering tailored solutions that prioritize safety, comfort, and operational efficiency while empowering women in traditionally male-dominated sectors.
                            </p>
                        </div>
                        {/* Placeholder for Founder Image if available */}
                        <div className="hidden md:block w-1/3 shrink-0 h-64 bg-zinc-800 rounded-2xl border border-zinc-700/50" />
                    </div>
                </section>

            </div>
        </div>
    );
}

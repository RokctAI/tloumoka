"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";

const SplitScreen = () => {
    const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

    return (
        <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-zinc-950">

            {/* Engineering Side (Left) */}
            <motion.div
                className="relative flex-1 md:h-full group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800"
                onMouseEnter={() => setHoveredSide("left")}
                onMouseLeave={() => setHoveredSide(null)}
                animate={{
                    flex: hoveredSide === "left" ? 2 : hoveredSide === "right" ? 1 : 1.5,
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                {/* Background Overlay/Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/20 z-0 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-8 text-center transition-transform duration-500">
                    <motion.div
                        animate={{ scale: hoveredSide === "left" ? 1.1 : 1 }}
                        className="mb-6 p-6 rounded-full bg-zinc-800/50 group-hover:bg-blue-600/20 border border-zinc-700 group-hover:border-blue-500/50 transition-colors duration-300"
                    >
                        <Wrench className="w-12 h-12 text-blue-500 group-hover:text-blue-400" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        ENGINEERING
                    </h2>

                    <p className="max-w-md text-zinc-400 mb-8 group-hover:text-white transition-colors duration-300">
                        Precision hydraulic repairs, plant maintenance, and industrial engineering solutions.
                    </p>

                    <Link
                        href="/engineering"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-transparent border border-zinc-600 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 uppercase tracking-wider text-sm font-semibold group-hover:scale-105"
                    >
                        Explore Services <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </motion.div>

            {/* PPE Side (Right) */}
            <motion.div
                className="relative flex-1 md:h-full group cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredSide("right")}
                onMouseLeave={() => setHoveredSide(null)}
                animate={{
                    flex: hoveredSide === "right" ? 2 : hoveredSide === "left" ? 1 : 1.5,
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                {/* Background Overlay/Gradient */}
                <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900 via-zinc-950 to-orange-950/20 z-0 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-8 text-center transition-transform duration-500">
                    <motion.div
                        animate={{ scale: hoveredSide === "right" ? 1.1 : 1 }}
                        className="mb-6 p-6 rounded-full bg-zinc-800/50 group-hover:bg-orange-600/20 border border-zinc-700 group-hover:border-orange-500/50 transition-colors duration-300"
                    >
                        <HardHat className="w-12 h-12 text-orange-500 group-hover:text-orange-400" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        PPE SOLUTIONS
                    </h2>

                    <p className="max-w-md text-zinc-400 mb-8 group-hover:text-white transition-colors duration-300">
                        High-quality protective equipment and specialized women's tailored worksuits.
                    </p>

                    <Link
                        href="/ppe"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-transparent border border-zinc-600 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 uppercase tracking-wider text-sm font-semibold group-hover:scale-105"
                    >
                        View Catalog <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default SplitScreen;

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Wrench, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSplit = () => {
    const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -200]);

    return (
        <div className="relative w-full h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-zinc-950">

            {/* Engineering Side (Left) */}
            <motion.div
                className="relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800"
                onMouseEnter={() => setHoveredSide("left")}
                onMouseLeave={() => setHoveredSide(null)}
                animate={{
                    flex: hoveredSide === "left" ? 1.5 : hoveredSide === "right" ? 0.8 : 1,
                }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
            >
                {/* Parallax Background */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0 scale-110"
                >
                    {/* Fallback pattern if image fails or before load */}
                    <div className="absolute inset-0 bg-[url('/images/engineering-hero.webp')] bg-cover bg-center opacity-60 mix-blend-overlay transition-opacity duration-700" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-blue-950/20" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-8 text-center transition-all duration-500">
                    <motion.div
                        animate={{ scale: hoveredSide === "left" ? 1.1 : 1, y: hoveredSide === "left" ? -20 : 0 }}
                        className="mb-6"
                    >
                        <div className="p-4 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                            <Wrench className="w-10 h-10 text-blue-500" />
                        </div>
                    </motion.div>

                    <h2 className={cn(
                        "text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter uppercase",
                        "transition-all duration-500",
                        hoveredSide === "right" ? "opacity-30 blur-sm scale-90" : "opacity-100 blur-0 scale-100"
                    )}>
                        Engineering
                    </h2>

                    <p className="max-w-md text-zinc-400 mb-8 font-light tracking-wide">
                        Precision hydraulic systems & heavy industrial maintenance.
                    </p>

                    <Link
                        href="/engineering"
                        className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Explore</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                </div>
            </motion.div>

            {/* PPE Side (Right) */}
            <motion.div
                className="relative flex-1 group cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredSide("right")}
                onMouseLeave={() => setHoveredSide(null)}
                animate={{
                    flex: hoveredSide === "right" ? 1.5 : hoveredSide === "left" ? 0.8 : 1,
                }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
            >
                {/* Parallax Background */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0 scale-110"
                >
                    {/* Fallback pattern */}
                    <div className="absolute inset-0 bg-[url('/images/ppe-hero.webp')] bg-cover bg-center opacity-60 mix-blend-overlay transition-opacity duration-700" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-orange-950/20" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-8 text-center transition-all duration-500">
                    <motion.div
                        animate={{ scale: hoveredSide === "right" ? 1.1 : 1, y: hoveredSide === "right" ? -20 : 0 }}
                        className="mb-6"
                    >
                        <div className="p-4 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
                            <HardHat className="w-10 h-10 text-orange-500" />
                        </div>
                    </motion.div>

                    <h2 className={cn(
                        "text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter uppercase",
                        "transition-all duration-500",
                        hoveredSide === "left" ? "opacity-30 blur-sm scale-90" : "opacity-100 blur-0 scale-100"
                    )}>
                        PPE <span className="text-orange-500">Solutions</span>
                    </h2>

                    <p className="max-w-md text-zinc-400 mb-8 font-light tracking-wide">
                        High-performance safety gear & tailored workwear.
                    </p>

                    <Link
                        href="/ppe"
                        className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">View Catalog</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSplit;

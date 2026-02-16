"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HardHat, Wrench, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <div className="fixed top-0 w-full z-50 bg-zinc-950 text-zinc-400 text-xs py-1 px-4 border-b border-white/5 hidden md:flex justifies-between items-center transition-transform duration-300">
                <div className="flex gap-4 ml-auto max-w-7xl mx-auto w-full justify-end">
                    <a href="tel:+27131013238" className="hover:text-white flex items-center gap-1"><Phone className="w-3 h-3" /> +27 13 101 3238</a>
                    <a href="mailto:info@tloumoka.co.za" className="hover:text-white flex items-center gap-1"><Mail className="w-3 h-3" /> info@tloumoka.co.za</a>
                </div>
            </div>

            <nav
                className={cn(
                    "fixed w-full z-40 transition-all duration-300 backdrop-blur-md mt-6", // mt-6 to account for top bar height
                    scrolled
                        ? "bg-zinc-950/80 border-b border-white/10 py-3 mt-0"
                        : "bg-transparent py-5"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-2 group">
                                <span className="text-3xl font-bold text-white tracking-widest font-heading group-hover:text-orange-500 transition-colors duration-300">
                                    TLOUMOKA
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium tracking-wide border-b-2 border-transparent hover:border-orange-500 transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="h-6 w-px bg-white/20 mx-2" />

                                <Link
                                    href="/engineering"
                                    className="flex items-center gap-2 text-blue-400 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border border-blue-500/30 hover:border-blue-500"
                                >
                                    <Wrench className="w-4 h-4" />
                                    ENGINEERING
                                </Link>
                                <Link
                                    href="/ppe"
                                    className="flex items-center gap-2 text-orange-400 hover:text-white hover:bg-orange-500 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border border-orange-500/30 hover:border-orange-500"
                                >
                                    <HardHat className="w-4 h-4" />
                                    PPE
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="border-t border-white/10 my-2 pt-2 space-y-2">
                                    <Link
                                        href="/engineering"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 text-blue-400 hover:bg-blue-900/20 block px-3 py-2 rounded-md text-base font-bold"
                                    >
                                        <Wrench className="w-5 h-5" />
                                        ENGINEERING
                                    </Link>
                                    <Link
                                        href="/ppe"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 text-orange-400 hover:bg-orange-900/20 block px-3 py-2 rounded-md text-base font-bold"
                                    >
                                        <HardHat className="w-5 h-5" />
                                        PPE
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;

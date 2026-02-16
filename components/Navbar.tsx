"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HardHat, Wrench } from "lucide-react";
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
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
                scrolled
                    ? "bg-black/80 border-b border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white tracking-widest">
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
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="h-6 w-px bg-white/20 mx-2" />

                            <Link
                                href="/engineering"
                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-bold transition-colors"
                            >
                                <Wrench className="w-4 h-4" />
                                ENGINEERING
                            </Link>
                            <Link
                                href="/ppe"
                                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 px-3 py-2 rounded-md text-sm font-bold transition-colors"
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
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
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
                            <div className="border-t border-white/10 my-2 pt-2">
                                <Link
                                    href="/engineering"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    <Wrench className="w-5 h-5" />
                                    ENGINEERING
                                </Link>
                                <Link
                                    href="/ppe"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 block px-3 py-2 rounded-md text-base font-bold"
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
    );
};

export default Navbar;

"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-gray-400 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-widest">
                            TLOUMOKA
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Empowering industry with precision engineering and high-quality safety solutions.
                            100% Black Woman Owned.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span className="text-sm">
                                    No. 8 Chrome Business Park<br />
                                    Bergesering Street<br />
                                    Steelpoort 1133
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                                <span className="text-sm">+27 13 101 3238</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                                <a href="mailto:info@tloumoka.co.za" className="text-sm hover:text-white transition-colors">
                                    info@tloumoka.co.za
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link href="/engineering" className="hover:text-orange-500 transition-colors">Engineering Services</Link></li>
                            <li><Link href="/ppe" className="hover:text-orange-500 transition-colors">PPE Solutions</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Opening Hours</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span className="text-white">7:00 - 16:30</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-white">8:00 - 12:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-zinc-600">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-600">
                        &copy; {new Date().getFullYear()} Tloumoka Trading. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social placeholders */}
                        <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

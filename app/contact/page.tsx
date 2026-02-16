"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-zinc-950 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-zinc-400">
                        Ready to discuss your PPE and industrial service needs?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 space-y-6">
                            <h2 className="text-2xl font-bold text-white">Contact Information</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-white font-medium">Head Office</h3>
                                        <p className="text-zinc-400 text-sm">
                                            No. 8 Chrome Business Park<br />
                                            Bergesering Street<br />
                                            Steelpoort 1133<br />
                                            South Africa
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                                    <div>
                                        <h3 className="text-white font-medium">Phone</h3>
                                        <p className="text-zinc-400 text-sm">+27 13 101 3238 / +27 82 055 3911</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                                    <div>
                                        <h3 className="text-white font-medium">Email</h3>
                                        <p className="text-zinc-400 text-sm">info@tloumoka.co.za</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                            <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-zinc-300">Monday - Friday</span>
                                    <span className="text-white font-mono">07:00 - 16:30</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-zinc-300">Saturday</span>
                                    <span className="text-white font-mono">08:00 - 12:00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-300">Sunday</span>
                                    <span className="text-zinc-500">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Engineering Quote</option>
                                    <option>PPE Quote</option>
                                    <option>Plant Maintenance</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

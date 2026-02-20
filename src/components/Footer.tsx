"use client";
import React from 'react';
import Link from 'next/link';
import { Dumbbell, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
    const brandRed = "#AC0000";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* 1. BRAND INFO */}
                <div className="flex flex-col gap-6">
                    {/* LOGO SECTION */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Yahan hum Image tag use karenge */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden transform group-hover:scale-110 transition-all duration-500">
                            <img
                                src="/images/logo.webp" // Aapka logo file path [cite: 2025-12-28]
                                alt="Body Evolution Logo"
                                className="object-contain w-full h-full"
                            />
                        </div>

                        <div className="flex flex-col leading-none">
                            <span className="text-xl md:text-2xl font-black italic tracking-tighter text-white uppercase">
                                BODY <span style={{ color: brandRed }}>EVOLUTION</span>
                            </span>
                            <span className="text-[10px] text-zinc-500 tracking-[3px] font-bold uppercase">Ultimate Fitness</span>
                        </div>
                    </Link>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Pakistan's premier fitness destination. We are dedicated to pushing your limits and evolving your physical potential through expert coaching and state-of-the-art facilities.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#AC0000] transition-all text-white">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#AC0000] transition-all text-white">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#AC0000] transition-all text-white">
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>

                {/* 2. QUICK LINKS */}
                <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest mb-6 text-sm">Quick Navigation</h4>
                    <ul className="flex flex-col gap-4">
                        {['Home', 'About', 'Trainers', 'Schedule', 'Membership'].map((item) => (
                            <li key={item}>
                                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-zinc-500 hover:text-[#AC0000] text-sm flex items-center gap-2 transition-colors group">
                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. OUR SERVICES */}
                <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest mb-6 text-sm">Our Services</h4>
                    <ul className="flex flex-col gap-4">
                        {['Strength Training', 'Muscle Building', 'HIIT Workouts', 'Nutrition Coaching', 'Personal Training'].map((service) => (
                            <li key={service} className="text-zinc-500 text-sm hover:text-white transition-colors cursor-default">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. CONTACT INFO */}
                <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest mb-6 text-sm">Visit Club</h4>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-start gap-3 text-zinc-400 text-sm">
                            <MapPin size={20} className="text-[#AC0000] shrink-0" />
                            <span>Plot 123, Block A, Fitness Street, <br /> Karachi, Pakistan</span>
                        </li>
                        <li className="flex items-center gap-3 text-zinc-400 text-sm">
                            <Phone size={18} className="text-[#AC0000] shrink-0" />
                            <span>+92 300 1234567</span>
                        </li>
                        <li className="flex items-center gap-3 text-zinc-400 text-sm">
                            <Mail size={18} className="text-[#AC0000] shrink-0" />
                            <span>info@bodyevolution.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-zinc-600 text-[10px] uppercase tracking-[2px] text-center md:text-left">
                    © {currentYear} BODY EVOLUTION GYM. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-6 text-zinc-600 text-[10px] uppercase tracking-[2px]">
                    <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
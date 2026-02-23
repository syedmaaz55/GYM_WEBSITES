"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, Phone, MapPin, MessageCircle, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function ContactPage() {
    const form = useRef<HTMLFormElement>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please verify that you are not a robot.");
            return;
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            form.current!,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(() => {
            setIsSuccess(true);
            setIsSubmitting(false);
            form.current?.reset();
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong. Please try again.");
            setIsSubmitting(false);
        });
    };

    return (
        <main className="bg-black text-white pt-24 min-h-screen selection:bg-[#FF0000]">

            {/* --- HEADER --- */}
            <section className="py-20 px-6 text-center">
                <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
                        GET IN <span className="text-[#FF0000]">TOUCH</span>
                    </h1>
                    <p className="text-zinc-500 uppercase tracking-[5px] font-bold text-xs md:text-sm">
                        The Ultimate Muscle Gym: Start Your Transformation Today.
                    </p>
                </motion.div>
            </section>

            <section className="py-12 px-6 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* --- LEFT SIDE: INFO --- */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-[#FF0000] pl-6">Contact Info</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center rounded-xl group-hover:bg-[#FF0000] transition-all">
                                        <MapPin className="text-[#FF0000] group-hover:text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 uppercase text-[10px] font-black tracking-widest mb-1">Location</p>
                                        <p className="text-white font-bold text-lg">Phase 6, DHA, Karachi, Pakistan</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center rounded-xl group-hover:bg-[#FF0000] transition-all">
                                        <Phone className="text-[#FF0000] group-hover:text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 uppercase text-[10px] font-black tracking-widest mb-1">Call / WhatsApp</p>
                                        <a href="https://wa.me/923001234567" target="_blank" className="text-white font-bold text-lg hover:text-[#FF0000] transition-colors flex items-center gap-2">
                                            +92 300 1234567 <MessageCircle size={18} className="text-red-500" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[300px] rounded-[30px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 bg-zinc-900">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14486.299539423631!2d67.05928645!3d24.8105777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c8b9d0e2eaf%3A0x600b467268894901!2sDHA%20Phase%206%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* --- RIGHT SIDE: FORM --- */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-zinc-900/50 p-8 md:p-12 rounded-[40px] border border-white/5 relative">
                        {isSuccess ? (
                            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                                <CheckCircle2 className="mx-auto text-[#FF0000] mb-6" size={80} />
                                <h3 className="text-3xl font-black uppercase italic mb-4">Message Sent!</h3>
                                <p className="text-zinc-400 mb-8 font-bold uppercase text-[10px] tracking-widest">
                                    Our team will contact you shortly to start your journey.
                                </p>
                                <button onClick={() => setIsSuccess(false)} className="bg-white text-black px-8 py-3 rounded-full font-black uppercase italic text-xs hover:bg-[#FF0000] hover:text-white transition-all">Send Another</button>
                            </div>
                        ) : (
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black uppercase italic mb-2">Membership Inquiry</h3>
                                <p className="text-zinc-500 text-sm mb-10">Register for The Ultimate Muscle Gym sessions.</p>

                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 ml-2">Full Name</label>
                                            <input type="text" name="name" minLength={3} maxLength={40} placeholder="John Doe" className="w-full bg-black border border-white/10 p-4 rounded-2xl focus:border-[#FF0000] outline-none transition-all" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 ml-2">Phone Number</label>
                                            <input type="tel" name="phone" pattern="[0-9]{10,15}" placeholder="03001234567" className="w-full bg-black border border-white/10 p-4 rounded-2xl focus:border-[#FF0000] outline-none transition-all" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 ml-2">Email Address</label>
                                        <input type="email" name="email" placeholder="john@example.com" className="w-full bg-black border border-white/10 p-4 rounded-2xl focus:border-[#FF0000] outline-none transition-all" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 ml-2">Your Message</label>
                                        <textarea name="message" rows={4} minLength={10} placeholder="Tell us your fitness goal..." className="w-full bg-black border border-white/10 p-4 rounded-2xl focus:border-[#FF0000] outline-none transition-all resize-none" required></textarea>
                                    </div>

                                    <div className="flex justify-start overflow-hidden rounded-xl">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                            onChange={(token: string | null) => setCaptchaToken(token)}
                                            theme="dark"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 py-2 px-4 bg-black/50 rounded-xl border border-white/5">
                                        <ShieldCheck size={18} className="text-zinc-500" />
                                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Secure Verification Active</span>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !captchaToken}
                                        className="w-full bg-[#FF0000] text-white py-5 rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Register Now"} <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
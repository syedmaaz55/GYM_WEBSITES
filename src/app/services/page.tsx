"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2, Dumbbell, Target, Award, Zap, Heart, MoveRight, ShieldCheck, RefreshCcw, Apple } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// --- Content matched exactly to your document ---
const services = [
  {
    title: "Personal Training",
    description: "Work 1-on-1 with professional coaches to get a personalized roadmap and elite form correction.",
    benefits: ["Custom Workout Plans", "Personalized Attention", "Form Correction"],
    icon: <Award size={40} />,
    color: "from-[#FF0000]/20 to-black"
  },
  {
    title: "Muscle Building Programs",
    description: "Hypertrophy focused training designed specifically to increase muscle mass and improve body composition.",
    benefits: ["Hypertrophy Focus", "Body Recomposition", "Muscle Density"],
    icon: <Dumbbell size={40} />,
    color: "from-zinc-900/40 to-black"
  },
  {
    title: "Strength Conditioning",
    description: "Build foundational power through compound movements and progressive overload techniques.",
    benefits: ["Raw Power", "Compound Movements", "Functional Strength"],
    icon: <Zap size={40} />,
    color: "from-[#FF0000]/20 to-black"
  },
  {
    title: "Functional & HIIT",
    description: "High-intensity interval training combined with functional movements for maximum fat loss.",
    benefits: ["Metabolic Boost", "Fat Loss", "Explosive Energy"],
    icon: <ShieldCheck size={40} />,
    color: "from-zinc-900/40 to-black"
  },
  {
    title: "Recovery & Mobility",
    description: "Enhance your performance and prevent injuries with dedicated mobility drills and recovery sessions.",
    benefits: ["Injury Prevention", "Flexibility", "Better Performance"],
    icon: <RefreshCcw size={40} />,
    color: "from-[#FF0000]/20 to-black"
  },
  {
    title: "Nutrition Coaching",
    description: "Precision meal plans and macro tracking designed to fuel your specific muscle-building goals.",
    benefits: ["Tailored Meal Plans", "Macro Tracking", "Sustainable Results"],
    icon: <Apple size={40} />,
    color: "from-zinc-900/40 to-black"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      
      {/* --- HEADER --- */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-zinc-900 to-black relative">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4 relative z-10">
            ELITE <span className="text-[#FF0000]">SERVICES</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[5px] font-bold text-xs md:text-sm relative z-10">
             The Ultimate Muscle Gym: Precision Training. Results Guaranteed.
          </p>
        </motion.div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${service.color} border border-white/5 rounded-3xl p-10 flex flex-col h-full group hover:border-[#FF0000]/50 transition-all duration-500 shadow-2xl overflow-hidden`}
            >
              <div className="text-[#FF0000] mb-8 bg-black/40 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-[#FF0000] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>

              <h2 className="text-3xl font-black uppercase italic text-white mb-4 tracking-tighter">
                {service.title}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-10">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#FF0000]" />
                    <span className="text-zinc-300 text-xs font-bold uppercase tracking-wider">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact" 
                className="group/btn flex items-center justify-between bg-white text-black px-6 py-4 rounded-xl font-black uppercase italic text-xs tracking-widest hover:bg-[#FF0000] hover:text-white transition-all duration-300"
              >
                Join Program
                <div className="bg-black text-white group-hover/btn:bg-white group-hover/btn:text-black p-1 rounded-sm transition-colors">
                  <MoveRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#FF0000] rounded-[40px] p-12 text-center relative overflow-hidden group"
        >
           <h3 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-6 relative z-10 leading-none">Not sure where to start?</h3>
           <p className="text-white/90 font-bold uppercase tracking-[3px] mb-10 text-xs relative z-10">Get a free consultation at The Ultimate Muscle Gym today.</p>
           <Link href="/contact" className="inline-block bg-white text-black px-12 py-5 font-black uppercase italic rounded-full hover:scale-105 transition-transform relative z-10 shadow-xl">
             Book Free Consultation
           </Link>
        </motion.div>
      </section>
    </main>
  );
}
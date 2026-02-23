"use client";
import React from "react";
import Image from "next/image";
import { Award, Zap, Star, ShieldCheck, Instagram, Facebook } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const trainers = [
  {
    name: "Ahmed Khan",
    specialty: "Master Strength Coach",
    experience: "10+ Years of Transformation",
    certs: ["IFBB Pro Certified", "Advanced Nutritionist"],
    summary: "Specializing in muscle building and professional bodybuilding prep at The Ultimate Muscle Gym.",
    image: "/images/t1.webp"
  },
  {
    name: "Sara Ahmed",
    specialty: "Fat Loss & HIIT Specialist",
    experience: "7+ Years in Fitness",
    certs: ["ACE Certified Trainer", "Functional Mobility Expert"],
    summary: "Expert in high-intensity metabolic conditioning and sustainable weight loss programs.",
    image: "/images/5.webp"
  },
  {
    name: "Zain Malik",
    specialty: "Combat & MMA Conditioning",
    experience: "8+ Years in Martial Arts",
    certs: ["Black Belt BJJ", "Pro Performance Coach"],
    summary: "Focusing on agility, core power, and functional strength for ultimate physical readiness.",
    image: "/images/5t.webp"
  },
  {
    name: "Mustafa Ali",
    specialty: "Physique & Aesthetics",
    experience: "6+ Years Experience",
    certs: ["ISSA Certified", "Weight Management Specialist"],
    summary: "Helping clients achieve aesthetic symmetry and peak physical conditioning.",
    image: "/images/t4.webp"
  }
];

export default function TrainersPage() {
  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      
      {/* --- HEADER --- */}
      <section className="py-24 px-6 text-center bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF0000]/5 blur-[120px] rounded-full"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
           <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4">
            ELITE <span className="text-[#FF0000]">COACHES</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[6px] font-bold text-xs md:text-sm">
            The Ultimate Muscle Gym: Trained by the Best.
          </p>
        </motion.div>
      </section>

      {/* --- TRAINERS GRID --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col lg:flex-row bg-zinc-900/30 border border-white/5 rounded-[40px] overflow-hidden group hover:border-[#FF0000]/50 transition-all duration-500"
            >
              {/* Photo Area */}
              <div className="w-full lg:w-2/5 relative h-[400px] lg:h-auto overflow-hidden">
                <Image 
                  src={trainer.image} 
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                    <h2 className="text-3xl font-black uppercase italic text-white tracking-tighter">{trainer.name}</h2>
                    <p className="text-[#FF0000] font-bold uppercase text-xs tracking-widest mt-1">{trainer.specialty}</p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Zap size={14} className="text-[#FF0000]" />
                  <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">{trainer.experience}</span>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-8 italic">
                  "{trainer.summary}"
                </p>

                {/* Certifications */}
                <div className="space-y-3 mb-10">
                   <p className="text-white font-black uppercase italic text-[10px] tracking-widest mb-4 opacity-50">Qualifications:</p>
                   {trainer.certs.map((cert, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <ShieldCheck size={16} className="text-[#FF0000]" />
                       <span className="text-zinc-300 text-[11px] font-bold uppercase tracking-wider">{cert}</span>
                     </div>
                   ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-all"><Instagram size={18} /></button>
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-all"><Facebook size={18} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- RECRUITMENT CTA --- */}
      <section className="py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border border-dashed border-white/20 p-12 rounded-[40px]"
        >
          <Award className="mx-auto text-[#FF0000] mb-6" size={48} />
          <h3 className="text-3xl font-black uppercase italic mb-4">Join The Ultimate Muscle Team?</h3>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">We are always looking for certified elite trainers to join our mission.</p>
          <a href="mailto:info@ultimatemusclegym.com" className="inline-block text-[#FF0000] font-black uppercase italic tracking-widest border-b-2 border-[#FF0000] pb-1 hover:text-white hover:border-white transition-all">
            Apply as a Coach
          </a>
        </motion.div>
      </section>
    </main>
  );
}
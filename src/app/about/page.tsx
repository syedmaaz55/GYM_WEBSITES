"use client";
import React from "react";
import Image from "next/image";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Animation definition (Is se red line nahi aayegi) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white pt-24">
      {/* Header Section */}
      <section className="py-20 px-6 border-b border-white/5 bg-gradient-to-b from-zinc-900/50 to-black">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
            OUR <span className="text-[#73BB1B]">LEGACY</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-[3px] font-bold text-sm">
            Body Evolution: Building the strongest version of you since 2020.
          </p>
        </motion.div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10"
          >
            <Image 
              src="/images/56.webp" 
              alt="Body Evolution Facility" 
              fill 
              className="object-cover"
            />
          </motion.div>
          
          <div>
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-black uppercase italic mb-8 border-l-4 border-[#73BB1B] pl-6"
            >
              The Brand Story
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-zinc-400 text-lg leading-relaxed mb-6"
            >
              Body Evolution was born out of a simple necessity: Karachi needed a space where 
              science-based training meets raw, unadulterated intensity. We started with a 
              handful of dedicated athletes and grew into the city's premier fitness hub.
            </motion.p>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-zinc-400 text-lg leading-relaxed mb-10"
            >
              Our philosophy is simple: **No Gimmicks. Just Results.** We provide the 
              environment, the equipment, and the expertise. You provide the sweat.
            </motion.p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-zinc-900/50 p-6 rounded-xl border border-white/5"
              >
                <Target className="text-[#73BB1B] mb-4" size={32} />
                <h3 className="text-xl font-bold uppercase italic mb-2">Our Mission</h3>
                <p className="text-zinc-500 text-sm">To empower individuals through elite coaching and a supportive community.</p>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-zinc-900/50 p-6 rounded-xl border border-white/5"
              >
                <Eye className="text-[#73BB1B] mb-4" size={32} />
                <h3 className="text-xl font-bold uppercase italic mb-2">Our Vision</h3>
                <p className="text-zinc-500 text-sm">To be the gold standard of strength and conditioning in Pakistan.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-24 px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-4xl md:text-5xl font-black uppercase italic mb-16"
          >
            Elite <span className="text-[#73BB1B]">Facilities</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "10,000+ Sq Ft Training Area",
              "Olympic Standard Lifting Platforms",
              "Advanced Cardio Zone",
              "Luxury Locker Rooms & Showers",
              "Dedicated Personal Training Studio",
              "Nutrition & Supplement Bar"
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-black p-6 border border-white/5 hover:border-[#73BB1B]/50 transition-all group"
              >
                <CheckCircle2 className="text-[#73BB1B] group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold uppercase text-sm tracking-wider">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
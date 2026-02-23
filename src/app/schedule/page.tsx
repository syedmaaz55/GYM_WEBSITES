"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Clock, User, Dumbbell, Calendar, PhoneCall, MoveRight } from "lucide-react";

// --- Types ---
interface ScheduleItem {
  day: string;
  time: string;
  class: string;
  trainer: string;
}

// --- Schedule Data (Matched with your trainers & Gym name) ---
const scheduleData: ScheduleItem[] = [
  { day: "Monday", time: "07:00 AM - 09:00 AM", class: "Strength & Conditioning", trainer: "Ahmed Khan" },
  { day: "Monday", time: "05:00 PM - 06:30 PM", class: "Functional & HIIT", trainer: "Sara Ahmed" },
  { day: "Tuesday", time: "08:00 AM - 10:00 AM", class: "Muscle Building Elite", trainer: "Mustafa Ali" },
  { day: "Tuesday", time: "06:00 PM - 07:30 PM", class: "MMA Conditioning", trainer: "Zain Malik" },
  { day: "Wednesday", time: "07:00 AM - 09:00 AM", class: "Powerlifting", trainer: "Ahmed Khan" },
  { day: "Wednesday", time: "05:00 PM - 06:30 PM", class: "Fat Loss Circuit", trainer: "Sara Ahmed" },
  { day: "Thursday", time: "08:00 AM - 10:00 AM", class: "Functional Training", trainer: "Mustafa Ali" },
  { day: "Thursday", time: "06:00 PM - 07:30 PM", class: "Recovery & Mobility", trainer: "Zain Malik" },
  { day: "Friday", time: "07:00 AM - 09:00 AM", class: "Hypertrophy Max", trainer: "Ahmed Khan" },
  { day: "Saturday", time: "10:00 AM - 12:00 PM", class: "Open Gym / Results Check", trainer: "Ultimate Muscle Team" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState("Monday");
  const filteredClasses = scheduleData.filter((item) => item.day === activeDay);

  return (
    <main className="bg-black text-white min-h-screen pt-28 pb-20 selection:bg-[#FF0000]">
      
      {/* --- HEADER --- */}
      <section className="px-6 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4"
        >
          WEEKLY <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #FF0000' }}>SCHEDULE</span>
        </motion.h1>
        <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base font-bold uppercase tracking-widest">
          The Ultimate Muscle Gym: Select a day to view your battle plan.
        </p>
      </section>

      {/* --- DAY SELECTOR --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex overflow-x-auto pb-6 gap-3 no-scrollbar justify-start md:justify-center">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className="relative px-7 py-4 group min-w-[120px]"
            >
              <span className={`relative z-10 font-black uppercase italic text-xs md:text-sm ${
                activeDay === day ? "text-white" : "text-zinc-500 group-hover:text-zinc-200"
              }`}>
                {day}
              </span>
              {activeDay === day && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#FF0000] rounded-2xl" />
              )}
              <div className="absolute inset-0 border border-white/5 rounded-2xl" />
            </button>
          ))}
        </div>
      </section>

      {/* --- SCHEDULE GRID --- */}
      <section className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4"
          >
            {filteredClasses.length > 0 ? (
              filteredClasses.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-[#FF0000]/40 transition-all"
                >
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#FF0000]">
                      <Dumbbell size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase italic text-white">{item.class}</h3>
                      <span className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                        <Clock size={12} className="text-[#FF0000]" /> {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[9px] text-zinc-500 font-bold uppercase">Coach</p>
                      <p className="text-white font-black uppercase italic text-xs">{item.trainer}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"><User size={18} /></div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20">
                <h3 className="text-zinc-500 font-black uppercase italic tracking-widest">Rest Day - Recovery is Key</h3>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="mt-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-zinc-900 to-black p-12 rounded-[3rem] border border-white/5 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-6">
            DON'T SEE YOUR <span className="text-[#FF0000]">SLOT?</span>
          </h2>
          <p className="text-zinc-500 mb-10 uppercase tracking-widest text-xs font-bold">
            Contact The Ultimate Muscle Gym for private coaching and custom timings.
          </p>
          <button className="bg-[#FF0000] text-white px-12 py-6 font-black uppercase italic rounded-2xl hover:bg-white hover:text-black transition-all">
            Inquire For Slots
          </button>
        </div>
      </section>
    </main>
  );
}
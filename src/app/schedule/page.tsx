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

// --- Schedule Data ---
const scheduleData: ScheduleItem[] = [
  { day: "Monday", time: "07:00 AM - 09:00 AM", class: "Strength & Conditioning", trainer: "Ahmed Khan" },
  { day: "Monday", time: "05:00 PM - 06:30 PM", class: "High Intensity (HIIT)", trainer: "Sara Ahmed" },
  { day: "Tuesday", time: "08:00 AM - 10:00 AM", class: "Body Building Elite", trainer: "Mustafa Ali" },
  { day: "Tuesday", time: "06:00 PM - 07:30 PM", class: "MMA Conditioning", trainer: "Zain Malik" },
  { day: "Wednesday", time: "07:00 AM - 09:00 AM", class: "Powerlifting", trainer: "Ahmed Khan" },
  { day: "Wednesday", time: "05:00 PM - 06:30 PM", class: "Fat Loss Circuit", trainer: "Sara Ahmed" },
  { day: "Thursday", time: "08:00 AM - 10:00 AM", class: "Functional Training", trainer: "Mustafa Ali" },
  { day: "Thursday", time: "06:00 PM - 07:30 PM", class: "Mobility & Yoga", trainer: "Zain Malik" },
  { day: "Friday", time: "07:00 AM - 09:00 AM", class: "Hypertrophy Max", trainer: "Ahmed Khan" },
  { day: "Saturday", time: "10:00 AM - 12:00 PM", class: "Open Gym / Recovery", trainer: "Team Evolution" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// --- Animation Variants (Defined outside to avoid re-renders and errors) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" } 
  },
  exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState("Monday");
  const filteredClasses = scheduleData.filter((item) => item.day === activeDay);

  return (
    <main className="bg-black text-white min-h-screen pt-28 pb-20 overflow-hidden selection:bg-[#73BB1B] selection:text-black">
      
      {/* --- HEADER --- */}
      <section className="px-6 text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[1px] bg-zinc-800"></span>
          <span className="text-[#73BB1B] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
            Performance Timeline
          </span>
          <span className="w-12 h-[1px] bg-zinc-800"></span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4"
        >
          WEEKLY <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #73BB1B' }}>SCHEDULE</span>
        </motion.h1>
        <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base font-medium leading-relaxed">
          Elite training sessions designed to push you past your limits. <br className="hidden md:block"/> Select a day to view the battle plan.
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
              <span className={`relative z-10 font-black uppercase italic text-xs md:text-sm transition-colors duration-300 ${
                activeDay === day ? "text-white" : "text-zinc-500 group-hover:text-zinc-200"
              }`}>
                {day}
              </span>
              
              {activeDay === day && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#73BB1B] rounded-2xl shadow-[0_10px_30px_rgba(115,187,27,0.3)]"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
              
              <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/10 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* --- SCHEDULE GRID --- */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="relative min-h-[400px]">
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
                    key={`${activeDay}-${index}`}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-zinc-900/20 border border-white/5 rounded-[2rem] backdrop-blur-md hover:border-[#73BB1B]/40 hover:bg-zinc-900/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6 mb-6 md:mb-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-[#73BB1B] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(115,187,27,0.3)]">
                        <Dumbbell size={24} className="group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black uppercase italic text-white group-hover:text-[#73BB1B] transition-colors">
                          {item.class}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                            <Clock size={12} className="text-[#73BB1B]" /> {item.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto gap-8 border-t border-white/5 md:border-none pt-5 md:pt-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center overflow-hidden">
                           <User size={18} className="text-zinc-500" />
                        </div>
                        <div>
                          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">Coach In-Charge</p>
                          <p className="text-white font-black uppercase italic text-xs md:text-sm">{item.trainer}</p>
                        </div>
                      </div>
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-xl bg-white/5 text-zinc-400 hover:bg-[#73BB1B] hover:text-white transition-all group/btn"
                      >
                        <MoveRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="py-24 text-center bg-zinc-900/10 rounded-[3rem] border-2 border-dashed border-white/5"
                >
                  <Calendar className="mx-auto text-zinc-800 mb-6" size={60} />
                  <h3 className="text-xl font-black uppercase italic text-zinc-500 mb-6 tracking-widest">Rest Day - Recovery is Key</h3>
                  <button className="group flex items-center gap-3 mx-auto bg-white text-black px-8 py-4 font-black uppercase italic hover:bg-[#73BB1B] hover:text-white transition-all rounded-2xl shadow-xl">
                    <PhoneCall size={18} /> Inquire For Slots
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="mt-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-1 text-center"
        >
          <div className="bg-gradient-to-b from-zinc-900 to-black p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#73BB1B]/5 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-6 tracking-tighter">
                DON'T SEE YOUR <span className="text-[#73BB1B]">SLOT?</span>
              </h2>
              <p className="text-zinc-500 mb-10 uppercase tracking-widest text-xs font-bold max-w-md mx-auto leading-loose">
                We offer premium 1-on-1 private coaching tailored to your lifestyle and goals.
              </p>
              <button className="bg-[#73BB1B] text-white px-12 py-6 font-black uppercase italic hover:bg-white hover:text-black transition-all rounded-2xl shadow-[0_20px_40px_rgba(115,187,27,0.2)] active:scale-95">
                Book Private Session
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
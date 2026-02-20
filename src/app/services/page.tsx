import Link from "next/link";
import { CheckCircle2, Dumbbell, Target, Award, Zap, Heart, MoveRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Strength Training",
    description: "Focus on compound movements and progressive overload to build maximum power and muscle density.",
    benefits: ["Increased Muscle Mass", "Improved Bone Density", "Enhanced Athletic Power"],
    icon: <Dumbbell size={40} />,
    color: "from-red-900/20 to-black"
  },
  {
    title: "Weight Loss Programs",
    description: "Our metabolic conditioning and HIIT help you shred fat while retaining lean muscle tissue.",
    benefits: ["Accelerated Metabolism", "High Caloric Burn", "Body Recomposition"],
    icon: <Zap size={40} />,
    color: "from-zinc-900/40 to-black"
  },
  {
    title: "Personal Training",
    description: "Work 1-on-1 with elite coaches for a personalized roadmap and dedicated form correction.",
    benefits: ["Custom Workout Plans", "Form Correction", "Nutritional Coaching"],
    icon: <Award size={40} />,
    color: "from-red-900/20 to-black"
  },
  {
    title: "Group Classes",
    description: "Train in a high-energy environment. Our group sessions combine community support with intensity.",
    benefits: ["Community Motivation", "Expert Guidance", "Fun & Varied Workouts"],
    icon: <Heart size={40} />,
    color: "from-zinc-900/40 to-black"
  },
  {
    title: "Nutrition Support",
    description: "The work doesn't stop in the gym. Get precision meal plans designed to fuel your specific goals.",
    benefits: ["Tailored Meal Plans", "Macro Tracking", "Sustainable Results"],
    icon: <Target size={40} />,
    color: "from-red-900/20 to-black"
  },
  {
    title: "Crossfit & MMA",
    description: "Combine functional strength with combat sports conditioning for ultimate physical readiness.",
    benefits: ["Explosive Agility", "Combat Conditioning", "Core Stability"],
    icon: <ShieldCheck size={40} />,
    color: "from-zinc-900/40 to-black"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      
      {/* --- HEADER --- */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-zinc-900 to-black relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4 relative z-10">
          ELITE <span className="text-[#AC0000]">SERVICES</span>
        </h1>
        <p className="text-zinc-500 uppercase tracking-[5px] font-bold text-xs md:text-sm relative z-10">
          Precision Training. Professional Excellence.
        </p>
      </section>

      {/* --- SERVICES GRID (Now 3x2 Balanced Grid) --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-gradient-to-br ${service.color} border border-white/5 rounded-3xl p-10 flex flex-col h-full group hover:border-[#AC0000]/50 transition-all duration-500 shadow-2xl overflow-hidden`}
            >
              {/* Floating Icon Decoration */}
              <div className="absolute -top-6 -right-6 text-white/5 group-hover:text-[#AC0000]/10 transition-colors transform group-hover:rotate-12 duration-700">
                {service.icon}
              </div>

              <div className="text-[#AC0000] mb-8 bg-black/40 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-[#AC0000] group-hover:text-white transition-all duration-500">
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
                <p className="text-white font-black uppercase italic text-[10px] tracking-widest mb-4 opacity-50">Core Benefits:</p>
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#AC0000]" />
                    <span className="text-zinc-300 text-xs font-bold uppercase tracking-wider">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Link 
                href="/contact" 
                className="group/btn flex items-center justify-between bg-white text-black px-6 py-4 rounded-xl font-black uppercase italic text-xs tracking-widest hover:bg-[#AC0000] hover:text-white transition-all duration-300"
              >
                Join Program
                <div className="bg-black text-white group-hover/btn:bg-white group-hover/btn:text-black p-1 rounded-sm transition-colors">
                  <MoveRight size={16} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#AC0000] rounded-[40px] p-12 text-center relative overflow-hidden group shadow-[0_0_50px_rgba(172,0,0,0.3)]">
           <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
           <h3 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-6 relative z-10 leading-none">Not sure where to start?</h3>
           <p className="text-white/90 font-bold uppercase tracking-[3px] mb-10 text-xs relative z-10">Get a free expert consultation today.</p>
           <Link href="/contact" className="inline-block bg-white text-black px-12 py-5 font-black uppercase italic rounded-full hover:scale-105 transition-transform relative z-10 shadow-xl">
              Book Free Consultation
           </Link>
        </div>
      </section>

    </main>
  );
}
import Image from "next/image";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-black text-white pt-24">
      {/* Header Section */}
      <section className="py-20 px-6 border-b border-white/5 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
            OUR <span className="text-[#AC0000]">LEGACY</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-[3px] font-bold text-sm">
            Body Evolution: Building the strongest version of you since 2020.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image 
              src="/images/56.webp" 
              alt="Body Evolution Facility" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-8 border-l-4 border-[#AC0000] pl-6">
              The Brand Story
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Body Evolution was born out of a simple necessity: Karachi needed a space where 
              science-based training meets raw, unadulterated intensity. We started with a 
              handful of dedicated athletes and grew into the city's premier fitness hub.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Our philosophy is simple: **No Gimmicks. Just Results.** We provide the 
              environment, the equipment, and the expertise. You provide the sweat.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <Target className="text-[#AC0000] mb-4" size={32} />
                <h3 className="text-xl font-bold uppercase italic mb-2">Our Mission</h3>
                <p className="text-zinc-500 text-sm">To empower individuals through elite coaching and a supportive community.</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <Eye className="text-[#AC0000] mb-4" size={32} />
                <h3 className="text-xl font-bold uppercase italic mb-2">Our Vision</h3>
                <p className="text-zinc-500 text-sm">To be the gold standard of strength and conditioning in Pakistan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-24 px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-black uppercase italic mb-16">
            Elite <span className="text-[#AC0000]">Facilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "10,000+ Sq Ft Training Area",
              "Olympic Standard Lifting Platforms",
              "Advanced Cardio Zone",
              "Luxury Locker Rooms & Showers",
              "Dedicated Personal Training Studio",
              "Nutrition & Supplement Bar"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 bg-black p-6 border border-white/5 hover:border-[#AC0000]/50 transition-all group">
                <CheckCircle2 className="text-[#AC0000] group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold uppercase text-sm tracking-wider">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
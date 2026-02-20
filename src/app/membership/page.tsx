import { CheckCircle2, Zap, Crown, Flame, MoveRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "5,000",
    duration: "Per Month",
    description: "Perfect for those just starting their fitness evolution.",
    features: ["Access to Gym Floor", "Locker Room Access", "Basic Workout Plan", "1 Free Trainer Intro"],
    icon: <Zap size={32} />,
    popular: false
  },
  {
    name: "Elite Performance",
    price: "12,000",
    duration: "Per Month",
    description: "Our most popular plan for dedicated athletes.",
    features: ["All Gym Floor Access", "Group Classes Included", "Personalized Nutrition Plan", "Monthly Progress Review", "Supplement Discounts"],
    icon: <Flame size={32} />,
    popular: true
  },
  {
    name: "Pro Athlete",
    price: "25,000",
    duration: "Per Month",
    description: "The ultimate transformation experience with 1-on-1 focus.",
    features: ["4 Personal Training Sessions", "Full Access to All Facilities", "VIP Locker Access", "Dedicated Recovery Zone", "Custom Contest Prep"],
    icon: <Crown size={32} />,
    popular: false
  }
];

export default function MembershipPage() {
  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      
      {/* --- HEADER --- */}
      <section className="py-24 px-6 text-center bg-[#050505]">
        <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4">
          CHOOSE YOUR <span className="text-[#AC0000]">LEVEL</span>
        </h1>
        <p className="text-zinc-500 uppercase tracking-[6px] font-bold text-xs md:text-sm">
          No Contracts. No Bullshit. Just Evolution.
        </p>
      </section>

      {/* --- PRICING CARDS (Requirement: Membership Plans & Pricing Cards) --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-10 rounded-[40px] border-2 transition-all duration-500 ${
                plan.popular 
                ? "bg-zinc-900 border-[#AC0000] scale-105 z-10 shadow-[0_0_50px_rgba(172,0,0,0.2)]" 
                : "bg-black border-white/10 hover:border-white/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#AC0000] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="text-[#AC0000] mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-black uppercase italic mb-2">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{plan.description}</p>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-5xl font-black italic">Rs. {plan.price}</span>
                <span className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest">/{plan.duration}</span>
              </div>

              {/* Requirement: Included Benefits */}
              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#AC0000]" />
                    <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Requirement: Join Button */}
              <button className={`w-full py-5 rounded-2xl font-black uppercase italic tracking-widest transition-all ${
                plan.popular 
                ? "bg-[#AC0000] text-white hover:bg-white hover:text-black" 
                : "bg-white text-black hover:bg-[#AC0000] hover:text-white"
              }`}>
                Select This Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- TRIAL & INQUIRY FORM (Requirement: Trial Option & Join Form) --- */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black uppercase italic leading-none mb-6">
              START YOUR <br /> 
              <span className="text-[#AC0000]">FREE TRIAL</span>
            </h2>
            <p className="text-zinc-400 mb-8 italic text-lg leading-relaxed">
              "Not ready to commit? No problem. Experience the elite atmosphere of Body Evolution for 1 day, completely free of charge."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#AC0000]/10 rounded-full flex items-center justify-center text-[#AC0000]">
                   <CheckCircle2 size={24} />
                </div>
                <span className="font-bold uppercase text-xs tracking-widest">Access to all cardio & weight zones</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#AC0000]/10 rounded-full flex items-center justify-center text-[#AC0000]">
                   <CheckCircle2 size={24} />
                </div>
                <span className="font-bold uppercase text-xs tracking-widest">1-on-1 assessment with coach</span>
              </div>
            </div>
          </div>

          {/* Join/Inquiry Form */}
          <div className="bg-zinc-900 p-10 rounded-[40px] border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest mb-2 text-zinc-500">Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-[#AC0000] outline-none transition-all" placeholder="Zeeshan Ali" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest mb-2 text-zinc-500">Phone</label>
                  <input type="tel" className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-[#AC0000] outline-none transition-all" placeholder="+92 3XX XXXXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-black tracking-widest mb-2 text-zinc-500">Choose Plan</label>
                <select className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-[#AC0000] outline-none transition-all appearance-none">
                  <option>Free Trial - 1 Day</option>
                  <option>Starter - Monthly</option>
                  <option>Elite Performance - Monthly</option>
                  <option>Pro Athlete - Monthly</option>
                </select>
              </div>
              <button className="w-full bg-[#AC0000] text-white py-5 rounded-xl font-black uppercase italic flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all">
                Submit Inquiry <MoveRight />
              </button>
              <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest mt-4">Our team will call you back within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
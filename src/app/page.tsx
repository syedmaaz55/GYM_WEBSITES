import Image from "next/image";
import Link from "next/link";
import {
  Play, Dumbbell, Award, Target,
  CheckCircle2, Zap, Crown, Flame, MoveRight
} from "lucide-react";

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

export default function Home() {
  return (
    <div className="flex flex-col w-full  overflow-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wow.webp"
            alt="Body Evolution Elite Training"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r "></div>
          <div className="absolute inset-0 bg-gradient-to-t "></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
          <div className="flex flex-col items-start text-left">

            {/* Top Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[2px] bg-[#FF0000]"></span>
              <span className="text-[#FF0000] font-black uppercase tracking-[4px] text-xs md:text-sm">
                Best Fitness Hub in Karachi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black uppercase italic leading-[0.9] tracking-tighter text-white mb-6">
              EVOLVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-red-700">YOURSELF</span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-xl text-zinc-400 text-base md:text-lg mb-10 leading-relaxed font-medium">
              Don't just train. Evolve. Join **Body Evolution** for elite strength training,
              expert coaching, and a community dedicated to physical excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#FF0000] text-white font-black uppercase italic overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all hover:bg-white hover:text-black"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join Now <MoveRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group w-full sm:w-auto px-10 py-5 border-2 border-white/20 hover:border-[#FF0000] text-white font-black uppercase italic flex items-center justify-center gap-2 transition-all"
              >
                <Play size={18} className="fill-white group-hover:fill-[#FF0000] group-hover:text-[#FF0000] transition-colors" />
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex gap-5 group">
            <div className="shrink-0 w-16 h-16 bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-[#FF0000] transition-all">
              <Dumbbell className="text-[#FF0000]" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase italic mb-2 text-white">Modern Equipment</h3>
              <p className="text-zinc-500 text-sm">Top-tier weights and cardio machines from world-class brands.</p>
            </div>
          </div>

          <div className="flex gap-5 group">
            <div className="shrink-0 w-16 h-16 bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-[#FF0000] transition-all">
              <Award className="text-[#FF0000]" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase italic mb-2 text-white">Certified Trainers</h3>
              <p className="text-zinc-500 text-sm">Professional coaches dedicated to your specific fitness goals.</p>
            </div>
          </div>

          <div className="flex gap-5 group">
            <div className="shrink-0 w-16 h-16 bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-[#FF0000] transition-all">
              <Target className="text-[#FF0000]" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase italic mb-2 text-white">Personal Results</h3>
              <p className="text-zinc-500 text-sm">Custom nutrition and workout plans tailored to your body.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREMIUM PERSONAL TRAINING --- */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-[#FF0000]/20 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* --- LEFT SIDE: CONTENT AREA --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[3px] bg-[#FF0000]"></span>
              <h4 className="text-[#FF0000] font-black uppercase tracking-[5px] text-sm">Elevate Your Game</h4>
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white leading-none tracking-tighter mb-8">
              PERSONAL <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '1px #FF0000' }}
              >
                TRAINING
              </span>
            </h2>

            <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-lg">
              Unlock your true potential with our certified elite trainers. We provide a
              roadmap tailored to your body, ensuring every workout brings you closer to
              the best version of yourself.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-12">
              <div className="flex items-center gap-4 bg-zinc-900/50 p-4 border border-white/5 rounded-xl">
                <div className="text-[#FF0000]"><Target size={24} /></div>
                <span className="text-white font-bold uppercase text-xs italic tracking-widest">Custom Plans</span>
              </div>
              <div className="flex items-center gap-4 bg-zinc-900/50 p-4 border border-white/5 rounded-xl">
                <div className="text-[#FF0000]"><Dumbbell size={24} /></div>
                <span className="text-white font-bold uppercase text-xs italic tracking-widest">Elite Gear</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex items-center gap-6 bg-[#FF0000] text-white pl-10 pr-4 py-4 font-black uppercase italic hover:bg-white hover:text-black transition-all duration-300"
            >
              Start Free Trial
              <div className="bg-black/20 group-hover:bg-black/10 p-2 rounded-sm transition-colors">
                <MoveRight size={20} />
              </div>
            </Link>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden border-2 border-white/10">
              <Image
                src="/images/1.webp"
                alt="Personal Training Session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Card 1 */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.15)] hidden sm:block group hover:border-[#FF0000]/50 transition-all duration-500">
              <div className="flex items-center gap-4 relative">
                <div className="absolute inset-0 bg-[#FF0000]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                  <Award className="text-white" size={24} />
                </div>
                <div className="relative z-10">
                  <p className="text-white font-black text-2xl italic leading-none tracking-tighter">100%</p>
                  <p className="text-[#FF0000] font-bold uppercase text-[10px] tracking-[2px] mt-1">Result Oriented</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card 2 */}
            <div className="absolute top-10 -right-4 md:-right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.2)] hidden md:block group hover:border-[#FF0000]/50 transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF0000]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <p className="text-white font-black text-5xl leading-none italic mb-1 tracking-tighter">+10</p>
                  <p className="text-[#FF0000] font-bold uppercase text-[10px] tracking-[3px]">Elite Coaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NUMBERS / STATS SECTION --- */}
      <section className="py-20 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "500+", label: "Happy Members" },
            { num: "15+", label: "Expert Coaches" },
            { num: "25+", label: "Fitness Programs" },
            { num: "100%", label: "Result Guaranteed" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">{stat.num}</span>
              <span className="text-[#FF0000] uppercase font-bold text-[10px] tracking-[4px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES OVERVIEW --- */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-[#FF0000] font-black uppercase tracking-[5px] mb-4 text-sm">Our Expertise</h4>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white leading-none tracking-tighter">
                ELITE <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>SERVICES</span>
              </h2>
            </div>
            <Link href="/services" className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-[#FF0000] pb-2 hover:text-[#FF0000] transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Strength Training", icon: <Dumbbell /> },
              { title: "Weight Loss", icon: <Target /> },
              { title: "Personal Training", icon: <Award /> },
              { title: "Group Classes", icon: <Target /> },
              { title: "Nutrition Support", icon: <Award /> },
              { title: "Body Building", icon: <Dumbbell /> }
            ].map((service, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-white/5 p-10 rounded-2xl group hover:bg-[#FF0000] transition-all duration-500">
                <div className="text-[#FF0000] group-hover:text-white mb-6 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic text-white mb-4">{service.title}</h3>
                <p className="text-zinc-500 group-hover:text-white/80 text-sm leading-relaxed">Expert coaching for your goals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRAINERS PREVIEW --- */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tighter">
              MEET THE <span className="text-[#FF0000]">ELITE</span>
            </h2>
            <p className="text-zinc-500 uppercase tracking-[4px] font-bold text-xs mt-4">Professional Coaches & Mentors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Ahmed Khan", role: "Master Strength Coach", img: "/images/t1.webp" },
              { name: "Sara Ahmed", role: "Fat Loss Specialist", img: "/images/5.webp" },
              { name: "Zain Malik", role: "MMA Conditioning", img: "/images/t4.webp" },
              { name: "Mustafa Ali", role: "Physique Expert", img: "/images/5t.webp" }
            ].map((trainer, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl aspect-[3/4] border border-white/5 hover:border-[#FF0000]/50 transition-all duration-500">
                <Image src={trainer.img} alt={trainer.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-xl font-black uppercase italic text-white leading-none">{trainer.name}</h4>
                  <p className="text-[#FF0000] font-bold uppercase text-[10px] tracking-widest mt-2 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-[#FF0000]"></span>{trainer.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SLIDER --- */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF0000]/10 blur-[100px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-[#FF0000] flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Award key={i} size={20} />)}
          </div>
          <h3 className="text-white text-2xl md:text-4xl font-black italic uppercase leading-tight mb-10 tracking-tighter">
            "Body Evolution changed my life. In 6 months, I've seen more results than in 2 years of training alone."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.4)]">
              <img src="/images/me.webp" alt="Ali Ahmed" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="text-white font-black uppercase italic text-sm">Ali Ahmed</p>
              <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Member Since 2022</p>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-black text-white pt-24 min-h-screen">

        {/* --- HEADER --- */}
        <section className="py-24 px-6 text-center bg-[#050505]">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4">
            CHOOSE YOUR <span className="text-[#FF0000]">LEVEL</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[6px] font-bold text-xs md:text-sm">
            No Contracts. No Bullshit. Just Evolution.
          </p>
        </section>

        {/* --- PRICING CARDS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-10 rounded-[40px] border-2 transition-all duration-500 ${plan.popular
                  ? "bg-zinc-900 border-[#FF0000] scale-105 z-10 shadow-[0_0_50px_rgba(255,0,0,0.2)]"
                  : "bg-black border-white/10 hover:border-white/30"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <div className="text-[#FF0000] mb-6">{plan.icon}</div>
                <h3 className="text-2xl font-black uppercase italic mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{plan.description}</p>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black italic">Rs. {plan.price}</span>
                  <span className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest">/{plan.duration}</span>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#FF0000]" />
                      <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Join Button */}
                <button className={`w-full py-5 rounded-2xl font-black uppercase italic tracking-widest transition-all ${plan.popular
                  ? "bg-[#FF0000] text-white hover:bg-white hover:text-black"
                  : "bg-white text-black hover:bg-[#FF0000] hover:text-white"
                  }`}>
                  Select This Plan
                </button>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden bg-[#FF0000] py-20 px-10 text-center">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic text-white leading-none tracking-tighter mb-8">
              READY TO <br /> EVOLVE?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 bg-black text-white px-12 py-6 font-black uppercase italic hover:bg-white hover:text-black transition-all shadow-2xl"
            >
              Start Your Journey <MoveRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Red se badal kar Green kar diya
  const brandGreen = "#73BB1B"; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 py-2' 
      : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO SECTION --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110">
            <Image 
              src="/images/image.webp" 
              alt="Body Evolution Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-black italic tracking-tighter text-white uppercase">
              BODY <span style={{ color: brandGreen }}>EVOLUTION</span>
            </span>
            <span className="text-[10px] text-zinc-500 tracking-[3px] font-bold uppercase">Ultimate Fitness</span>
          </div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-[#73BB1B] ${
                pathname === link.href ? 'text-[#73BB1B]' : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            className="px-8 py-3 font-black text-xs uppercase tracking-widest bg-[#73BB1B] text-white rounded-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(115,187,27,0.3)]"
          >
            Join Now
          </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>

      {/* --- MOBILE FULL-SCREEN MENU --- */}
      <div className={`fixed inset-0 bg-black z-[-1] transition-all duration-500 lg:hidden ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`} style={{ height: '100vh' }}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black uppercase italic tracking-tighter flex items-center gap-4 ${
                pathname === link.href ? 'text-[#73BB1B]' : 'text-white'
              }`}
            >
              {link.name} <ChevronRight size={30} className="text-[#73BB1B]" />
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-[#73BB1B] text-white px-10 py-4 font-black text-xl uppercase italic"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
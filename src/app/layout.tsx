import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO IMPROVED ---
// --- SEO & ICON IMPROVED ---
export const metadata: Metadata = {
  title: "Body Evolution | Best Gym & Fitness Center in Karachi, Pakistan",
  description: "Join Body Evolution for professional strength training, weight loss, and personal coaching. Transform your life with Karachi's premier fitness destination.",
  keywords: ["Gym in Karachi", "Fitness Karachi", "Bodybuilding Pakistan", "Personal Trainer Karachi"],
  
  // Ye rahi Favicon ki line jo missing thi
  icons: {
    icon: "/images/logo.ico", // Ye file aapne 'public' folder mein rakhni hai [cite: 2026-02-20]
  },

  openGraph: {
    title: "Body Evolution - Evolve Yourself",
    description: "Elite Strength & Conditioning in Karachi",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        {/* WhatsApp Floating Button: Added pulse animation */}
        <a 
          href="https://wa.me/923001234567" // Apna asli number yahan dalein
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 bg-green-600 p-4 rounded-full z-[90] hover:scale-110 transition-all shadow-[0_0_20px_rgba(22,163,74,0.5)] animate-bounce"
        >
          <MessageCircle size={32} color="white" />
        </a>

        {/* Mobile Sticky CTA: Large Tap-Friendly Button */}
        <div className="lg:hidden fixed bottom-0 w-full p-4 bg-black/80 backdrop-blur-xl z-[100] border-t border-white/10">
          <a 
            href="/contact" 
            className="block w-full bg-[#AC0000] text-center py-5 font-black uppercase italic tracking-tighter text-white shadow-[0_0_25px_rgba(172,0,0,0.3)] active:scale-95 transition-all"
          >
            Join Now - Free Trial
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}
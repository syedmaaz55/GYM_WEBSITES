import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Font load hone tak text nazar aata rahe (Score up hota hai)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Ultimate Muscle Gym | Best Fitness & Strength Center",
  description: "Transform your physique at The Ultimate Muscle Gym. Expert personal training, bodybuilding, and strength conditioning in Karachi. Start your 1-day free trial today!",
  keywords: ["The Ultimate Muscle Gym", "Gym in DHA Karachi", "Bodybuilding Gym", "Personal Training Pakistan"],
  icons: { icon: "/images/fav.ico" },
  openGraph: {
    title: "The Ultimate Muscle Gym - Build Your Legacy",
    description: "High-impact fitness and professional coaching to reach your peak performance.",
    url: 'https://yourgymwebsite.com', // Apni domain yahan dalein
    siteName: 'The Ultimate Muscle Gym',
    type: "website",
    locale: "en_PK", // Pakistan ke liye optimized
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />

        {/* Content wrapper taake footer hamesha niche rahe */}
        <main className="flex-grow">
          {children}
        </main>

        {/* WhatsApp Floating Button: Responsive placement */}
        <a 
          href="https://wa.me/923001234567"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="fixed bottom-28 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] p-4 rounded-full z-[90] hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] animate-pulse"
        >
          <MessageCircle size={32} color="white" />
        </a>

        {/* Mobile Sticky CTA: Optimized with backdrop blur */}
        <div className="lg:hidden sticky bottom-0 w-full p-4 bg-black/60 backdrop-blur-md z-[100] border-t border-white/10">
          <a 
            href="/contact" 
            className="block w-full bg-[#FF0000] text-center py-4 font-black uppercase italic tracking-tighter text-white shadow-[0_4px_20px_rgba(255,0,0,0.4)] active:scale-95 transition-all rounded-lg"
          >
            Join Now - Free Trial
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}
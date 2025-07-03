"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
}

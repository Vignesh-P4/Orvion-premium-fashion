"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <About />
    </main>
  );
}

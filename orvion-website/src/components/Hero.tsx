"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Unveiling Orvion
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Luxury. Redefined. For Him &amp; Her.
        </p>
        <Link
          href="#collection"
          className="mt-8 inline-block px-6 py-3 border border-white hover:bg-white hover:text-black transition-all rounded-full text-sm uppercase tracking-widest"
        >
          Explore the Collection
        </Link>
      </motion.div>
    </section>
  );
}

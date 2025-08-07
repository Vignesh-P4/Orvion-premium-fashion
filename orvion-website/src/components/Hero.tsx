// File: app/page.tsx (Next.js 13+ App Router)

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans  py-20">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6">
        {/* Background Video or Image Placeholder */}
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Unveiling Orvion</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">Luxury. Redefined. For Him & Her.</p>
          <Link
            href="#collection"
            className="mt-8 inline-block px-6 py-3 border border-white hover:bg-white hover:text-black transition-all rounded-full text-sm uppercase tracking-widest"
          >
            Explore the Collection
          </Link>
        </motion.div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-neutral-950 text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold mb-6"
          >
            The Orvion Legacy Begins
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-lg text-gray-400"
          >
            Born from the passion of timeless fashion, Orvion is more than a brand — it’s an emotion
            stitched into luxury. We blend premium fabrics, exclusive tailoring, and minimalist design
            to create iconic statements for both men and women.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-10 text-xl italic text-gray-300"
          >
            "Luxury isn’t just worn, it’s lived."
          </motion.blockquote>

          <Link
            href="#team"
            className="mt-10 inline-block px-6 py-2 border border-white hover:bg-white hover:text-black transition-all rounded-full text-sm uppercase tracking-widest"
          >
            Meet the Team
          </Link>
        </div>
      </section>
    </main>
  );
}

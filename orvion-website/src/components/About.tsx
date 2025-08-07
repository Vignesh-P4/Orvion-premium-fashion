"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="relative text-white py-24 px-6 md:px-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/about-bg.png" // replace with your actual image path
          alt="About Background"
          className="w-full h-full object-cover"
        />
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg leading-relaxed text-neutral-200"
        >
          Orvion was born from a vision to redefine modern luxury through
          simplicity, elegance, and authenticity. Founded by a group of dreamers,
          creators, and bold thinkers, our brand believes in empowering
          individuality and expression through design.
          <br /><br />
          From the streets of everyday life to the runways of the future,
          Orvion is where high-quality materials meet avant-garde creativity. We
          focus on crafting timeless pieces that speak to both fashion and function.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg mt-8 leading-relaxed text-neutral-200"
        >
          Every design carries a story. Every stitch is intentional. This is not
          just a brand — it's a movement. It's about the courage to stand out,
          the elegance of simplicity, and the confidence of owning your identity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12"
        >
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-300 transition">
            Discover Our Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
